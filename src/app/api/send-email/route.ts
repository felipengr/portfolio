import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, 
            },
        });

        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL, 
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