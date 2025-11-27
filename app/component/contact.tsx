"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ContactPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!name || !email || !message) {
            setError("⚠️ Please fill in all fields before sending your message!");
            return;
        }

        // Clear error and redirect
        setError("");
        router.push("/messagesent");
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 text-white px-6 py-12 flex flex-col items-center">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-10"
            >
                📩 Contact <span className="text-cyan-400">Me</span>
            </motion.h1>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg w-full max-w-lg"
            >
                <div className="mb-5">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Your Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message..."
                        className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    ></textarea>
                </div>

                {error && (
                    <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
                )}

                <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                    Send Message ✉️
                </button>
            </motion.div>

            {/* Back to Home */}
            <div className="text-center mt-10">
                <a
                    href="/"
                    className="text-cyan-400 hover:text-white font-medium transition"
                >
                    🏠  Back to Home
                </a>
            </div>
        </main>
    );
}
