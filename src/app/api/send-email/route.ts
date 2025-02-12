import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email, subject, message } = await req.json();

        // Configurar o transporte (use suas credenciais com segurança!)
        const transporter = nodemailer.createTransport({
            service: 'gmail', // ou outro serviço
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL, // Seu email (use variável de ambiente!)
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, // Sua senha (use variável de ambiente!)
            },
        });

        // Configurar a mensagem
        const mailOptions = {
            from: email, // Email do remetente
            to: 'felipenogueira.94@gmail.com', // Seu email
            subject: subject,
            text: message,
            replyTo: email,
        };

        // Enviar o email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error: unknown) { // Correct type: unknown - crucial!
        console.error(error); // Still log the error for debugging

        let errorMessage = 'Failed to send email'; // Default error message

        // Type check before accessing properties:  THIS IS THE KEY
        if (error instanceof Error) {
            errorMessage = error.message; // Now it's safe to access .message
        } else {
            // Handle cases where the caught thing isn't an Error object.
            // Log it, or handle it according to your application's needs.
            console.error("Caught an error that wasn't an Error instance:", error);
            errorMessage = "An unexpected error occurred."; // More informative
        }


        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}