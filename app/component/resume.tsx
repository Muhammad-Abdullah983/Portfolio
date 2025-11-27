"use client";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 text-white px-6 py-12 flex flex-col items-center">

            <h1 className="text-4xl font-bold mb-10 text-cyan-400">📄 My Resume</h1>

            <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg space-y-6">

                <p className="text-gray-300 text-center">
                    Click below to view or download my professional resume.
                </p>

                <div className="flex justify-center gap-4">
                    {/* View Resume */}
                    <a
                        href="/Abdullah-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded-lg font-medium hover:bg-cyan-500/30 transition"
                    >
                        👀 View Resume
                    </a>

                    {/* Download Resume */}
                    <a
                        href="/Abdullah-resume.pdf"
                        download
                        className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        📥 Download Resume
                    </a>
                </div>

                {/* Back Home */}
                <div className="text-center mt-6">
                    <a href="/" className="text-cyan-400 hover:text-white transition">
                        🏠 Back to Home
                    </a>
                </div>

            </div>
        </main>
    );
}
