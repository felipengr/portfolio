"use client";

import React, { useEffect, useState } from 'react';

interface ContactFormProps {
  onSubmit: (data: { email: string; subject: string; message: string; recaptchaToken: string }) => Promise<void>;
  isSubmitting: boolean;
  errorMessage: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSubmitting, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const pubKeyGoogle = '6Lc_WNkqAAAAAEW6gTE6pvEdDGDly0iY9Ls0yaCD';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${pubKeyGoogle}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [pubKeyGoogle]);

  useEffect(() => {
    if (!isSubmitting && !errorMessage) {
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [isSubmitting, errorMessage])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof grecaptcha !== "undefined") {
      grecaptcha.ready(async () => {
        const token = await grecaptcha.execute(pubKeyGoogle, { action: 'submit' });
        setRecaptchaToken(token); 

        if (token) {
          await onSubmit({ email, subject, message, recaptchaToken: token });   
        } else {
          console.error(recaptchaToken)
          alert("Erro ao obter o token reCAPTCHA.");
        }
      });
    } else {
      alert("reCAPTCHA ainda não carregado. Tente novamente.");
    }
  };

  const PRIMARY_COLOR = "#B7A261";
  const DARK_PRIMARY_COLOR = "#4B3D10";
  const DARK_SECONDARY_COLOR = "#60594B";

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <div className="mb-4 w-full">
          <label
            htmlFor="email"
            className="block text-black dark:text-white text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="subject"
            className="block text-black dark:text-white text-sm font-bold mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="mb-6 w-full">
          <label
            htmlFor="message"
            className="block text-black dark:text-white text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            className={`bg-[${PRIMARY_COLOR}] dark:bg-[${DARK_PRIMARY_COLOR}] hover:bg-[${PRIMARY_COLOR}] dark:hover:bg-[${DARK_SECONDARY_COLOR}] text-black dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;