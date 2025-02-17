import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(req: Request) {
    try {
        const { email, subject, message, recaptchaToken } = await req.json();

        console.log("🔹 Dados recebidos no backend:", { email, subject, message, recaptchaToken });

        if (!RECAPTCHA_SECRET) {
            console.error("❌ RECAPTCHA_SECRET_KEY não está definida.");
            return NextResponse.json({ error: "reCAPTCHA secret key is missing" }, { status: 500 });
        }

        // Validação do reCAPTCHA
        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`
            }
        );

        const recaptchaData = await recaptchaResponse.json();
        console.log("🔹 Resposta do reCAPTCHA:", recaptchaData);

        if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
            console.error("❌ Falha na verificação do reCAPTCHA.");
            return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
        }

        // Configuração do transporte de e-mail
        if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
            console.error("❌ Variáveis de ambiente para o email estão ausentes.");
            return NextResponse.json({ error: "Email configuration is missing" }, { status: 500 });
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
            text: `Remetente: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`
        };

        console.log("🔹 Enviando e-mail...");
        await transporter.sendMail(mailOptions);
        console.log("✅ E-mail enviado com sucesso!");

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error: unknown) {
        console.error("❌ Erro no backend:", error);

        let errorMessage = 'Failed to send email';

        if (error instanceof Error) {
            errorMessage = error.message;
        } else {
            console.error("❌ Erro inesperado:", error);
            errorMessage = "An unexpected error occurred.";
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
