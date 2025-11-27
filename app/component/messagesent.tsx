"use client";

import { motion } from "framer-motion";

export default function MessageSent() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-zinc-900 text-white text-center px-6">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold mb-4 text-cyan-400"
            >
                ✅ Message Sent Successfully!
            </motion.h1>
            <p className="text-gray-300 text-lg mb-8">
                Thank you for reaching out! I’ll get back to you soon.
            </p>

            <a
                href="/"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
                🏠 Back to Home
            </a>
        </main>
    );
}
