"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-gray-900 to-black text-white px-4 sm:px-6 md:px-8 text-center">

            {/* Personal Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                transition={{ delay: 0.2, duration: 0.8, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                className="mb-6 rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto"
            >
                <div className="w-full h-full">
                    <img
                        src="/my-pic.jpg"
                        alt="Muhammad Abdullah"
                        className="rounded-full object-cover w-full h-full"
                    />
                </div>

            </motion.div>

            {/* Animated intro */}
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            >
                Hi, I’m <span className="text-cyan-400">Muhammad Abdullah</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8"
            >
                A Passionate MERN Stack Developer crafting modern web experiences 🚀
            </motion.h2>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
            >
                <Link
                    href="/projects"
                    className="border border-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"
                >
                    View My Projects
                </Link>
                <Link
                    href="/about"
                    className="border border-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"
                >
                    About Me
                </Link>
                <Link
                    href="/contact"
                    className="border border-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"
                >
                    Contact Me
                </Link>
                <Link
                    href="/resume"
                    className="border border-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all transform hover:bg-cyan-600 hover:text-white hover:-translate-y-1"
                >
                    📄 Resume
                </Link>
            </motion.div>

            {/* Social links */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
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
