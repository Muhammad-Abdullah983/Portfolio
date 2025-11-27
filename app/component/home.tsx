"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-gray-900 to-black text-white px-6 text-center">
            {/* Animated intro */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-extrabold mb-4"
            >
                👋 Hi, I’m <span className="text-cyan-400">Muhammad Abdullah</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-gray-300 mb-8"
            >
                A Passionate MERN Stack Developer crafting modern web experiences 🚀
            </motion.h2>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex gap-4"
            >
                <Link
                    href="/projects"
                    className="border border-gray-400 px-6 py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"

                >
                    View My Projects
                </Link>
                <Link
                    href="/about"
                    className="border border-gray-400 px-6 py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"

                >
                    About Me
                </Link>
                <Link
                    href="/contact"
                    className="border border-gray-400 px-6 py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"

                >
                    Contact Me
                </Link>
                <Link
                    href="/resume"
                    className="border border-gray-400 px-6 py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"

                >
                    📄  Resume
                </Link>

            </motion.div>

            {/* Social links */}
            <div className="mt-10 flex gap-6 text-gray-400">
                <a href="https://github.com/Muhammad-Abdullah983" target="_blank" className="hover:text-cyan-400">
                    🐙 GitHub
                </a>
                <a href="http://linkedin.com/in/muhammad-abdullah-983abd" target="_blank" className="hover:text-cyan-400">
                    💼 LinkedIn

                </a>

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadabdullah9835@gmail.com"
                    target="_blank"
                    className="hover:text-cyan-400"
                    rel="noopener noreferrer"
                >
                    📧 Email
                </a>

            </div>
        </main>
    );
}
