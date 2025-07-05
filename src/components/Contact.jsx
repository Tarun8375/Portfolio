"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    toast.error("Failed to send message. Try again.");
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 md:px-16 bg-gradient-to-br from-[#fffbea] via-[#f0f0f0] to-[#cccccc] dark:from-[#0d1b2a] dark:via-[#1b263b] dark:to-[#000000] text-black dark:text-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
                    Let’s get in touch — I’d love to hear from you.
                </p>
            </motion.div>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-2xl mx-auto grid gap-6"
            >
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500"
                />

                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-gray-600 rounded-md text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500 resize-none"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-orange-500 dark:bg-blue-500 text-white rounded-md font-medium hover:opacity-90 transition duration-300"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                <div className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
                    🚀 Let’s connect and build something amazing together!
                </div>
            </form>
        </section>
    );
    console.log(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

}
