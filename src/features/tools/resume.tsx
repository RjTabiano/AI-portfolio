export default function Resume() {
    const resumeUrl =
        "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/resume/Tabiano_Resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcmVzdW1lL1RhYmlhbm9fUmVzdW1lLnBkZiIsImlhdCI6MTc1NDQ2MjAyMCwiZXhwIjoxNzg1OTk4MDIwfQ.q0xAUwIw7Eb7OubPKAzTzpv7rKS5DUTWOQtDLcXmFp8";


    return (
        <div className="w-full h-auto">
            <div className="flex items-center justify-between bg-[#333333] rounded-xl p-4 shadow-sm">
                {/* Left Content */}
                <div>
                    <h2 className="text-lg text-white font-semibold">Rj's Resume</h2>
                    <p className="text-sm text-white">
                        Full Stack Developer • AI Specialist
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                        <span>PDF</span>
                        <span>•</span>
                        <span>Updated August 2025</span>
                        <span>•</span>
                        <span>0.5 MB</span>
                    </div>
                </div>

                {/* Download Button */}
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
                    download
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
