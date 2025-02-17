import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: Request) {
    try {
        const { email, subject, message, recaptchaToken } = await req.json();

        if (!RECAPTCHA_SECRET) {
            return NextResponse.json({ error: "reCAPTCHA secret key is missing" }, { status: 500 });
        }

        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
            { method: "POST" }
        );

        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
            return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD, 
            },
        });

        const mailOptions = {
            from: process.env.EMAIL, 
            to: 'felipenogueira.94@gmail.com',
            subject: subject,
            replyTo: email,
            text: `
                Remetente: ${email}
                Assunto: ${subject}
                Mensagem: ${message}
            `
        };


        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error: unknown) {
        console.error(error); 

        let errorMessage = 'Failed to send email';

        if (error instanceof Error) {
            errorMessage = error.message;
        } else {
            console.error("Caught an error that wasn't an Error instance:", error);
            errorMessage = "An unexpected error occurred.";
        }


        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}