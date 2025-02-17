import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const nunito = Nunito({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Nogueira Dev",
  description: "Meu portfólio profissional",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        {recaptchaSiteKey && (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            async
            defer
          />
        )}
      </head>
      <body
        className={`${nunito.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}