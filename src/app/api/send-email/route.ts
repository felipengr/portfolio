import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY

interface RecaptchaResponse {
  success: boolean
  score?: number
  action?: string
  challenge_ts?: string
  hostname?: string
  'error-codes': string[]
}

export async function POST(req: Request) {
  try {
    const { email, subject, message, recaptchaToken } = await req.json()

    if (!RECAPTCHA_SECRET) {
      return NextResponse.json(
        { error: 'reCAPTCHA secret key is missing' },
        { status: 500 }
      )
    }

    let recaptchaData: RecaptchaResponse
    try {
      const recaptchaResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
        }
      )

      recaptchaData = (await recaptchaResponse.json()) as RecaptchaResponse
    } catch (networkError) {
      console.error('Erro de rede ao verificar o reCAPTCHA:', networkError)
      return NextResponse.json(
        { error: 'Erro ao verificar o reCAPTCHA (problema de rede)' },
        { status: 500 }
      )
    }

    const RECAPTCHA_SCORE_THRESHOLD = 0.5

    if (
      !recaptchaData.success ||
      (recaptchaData.score !== undefined &&
        recaptchaData.score < RECAPTCHA_SCORE_THRESHOLD) ||
      recaptchaData.action !== 'submit'
    ) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'felipenogueira.94@gmail.com',
      subject: subject,
      replyTo: email,
      text: `Remetente: ${email}\n\nMensagem:\n${message}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('❌ Erro no backend:', error)

    let errorMessage = 'Failed to send email'

    if (error instanceof Error) {
      errorMessage = error.message
    } else {
      console.error('❌ Erro inesperado:', error)
      errorMessage = 'An unexpected error occurred.'
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
