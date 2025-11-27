"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 text-white px-6 py-12">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-10"
            >
                👨‍💻 About <span className="text-cyan-400">Me</span>
            </motion.h1>

            <div className="max-w-4xl mx-auto space-y-10">
                {/* Intro Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Who I Am</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Hi! I’m <span className="text-white font-semibold">Muhammad Abdullah</span>, a passionate MERN Stack developer who loves
                        creating modern, responsive, and visually appealing web applications.
                        I enjoy exploring new technologies, building creative solutions, and turning ideas into reality.
                        My focus is on clean code, smooth UI/UX, and performance optimization.
                    </p>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "C++",
                            "pyhton",
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "TypeScript",
                            "React",
                            "Next.js",
                            "Tailwind CSS",
                            "Git & GitHub",
                            "VsCode",
                            "Figma",
                            "Responsive Design",
                            "API Integration",
                            "Problem Solving",

                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg"
                >
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Education</h2>
                    <p className="text-gray-300">
                        🎓 <span className="text-white font-medium">BS in Computer Science</span>
                        — Committed to learning modern technologies, algorithms, and software development practices.
                    </p>
                </motion.section>

                {/* Back to Home */}
                <div className="text-center mt-10">
                    <a
                        href="/"
                        className="text-cyan-400 hover:text-white font-medium transition"
                    >
                        🏠 Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
