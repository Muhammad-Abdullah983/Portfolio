"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Library Management System",
            description: "A web app to manage books, members, and borrowing records using Next.js & MongoDB.",
            tech: ["Next.js", "MongoDB", "Tailwind"],
        },
        {
            title: "Research Collaboration Platform",
            description: "A platform that connects students and professors for collaborative research projects.",
            tech: ["React", "Firebase", "Node.js"],
        },
        {
            title: "Portfolio Website",
            description: "My personal portfolio showcasing my skills, experience, and latest projects.",
            tech: ["Next.js", "Framer Motion", "Tailwind"],
        },
        {
            title: "To-Do List App",
            description: "A simple and elegant to-do list app for managing daily tasks with a clean UI.",
            tech: ["React", "LocalStorage", "CSS"],
        },
        {
            title: "Weather App",
            description: "A real-time weather app displaying temperature, humidity, and forecasts using a weather API.",
            tech: ["Next.js", "OpenWeather API", "Tailwind"],
        },
        {
            title: "Modern Website Frontend",
            description: "A responsive, animated frontend design built with Tailwind CSS and Framer Motion.",
            tech: ["Next.js", "Tailwind", "Framer Motion"],
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 text-white px-6 py-12">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-10"
            >
                🚀 My <span className="text-cyan-400">Projects</span>
            </motion.h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h2>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-cyan-500/20 border border-cyan-500/40 rounded-full px-3 py-1 text-cyan-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Back to Home link */}
            <div className="text-center mt-12">
                <a
                    href="/"
                    className="text-cyan-400 hover:text-white font-medium transition"
                >
                    🏠 Back to Home
                </a>
            </div>
        </main>
    );
}
