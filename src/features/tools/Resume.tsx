import { Download, ExternalLink } from 'lucide-react';

const techStack = ["Go", "TypeScript", "React", "Python", "Rust", "Laravel", "PostgreSQL", "Docker"];

const certifications = [
  { name: "Cisco DevNet Associate", year: "2025", url: "https://www.credly.com/badges/c479a9b5-22f3-44bf-978e-b8cd0ef88dc1" },
  { name: "IT Specialist – JavaScript", year: "", url: "https://www.credly.com/badges/bc0830ec-6ed5-457c-af28-18f7778e9ad5/public_url" },
  { name: "IT Specialist – Databases", year: "", url: "https://www.credly.com/badges/090899d9-e88f-4c6f-b541-118d0629fa90/public_url" },
];

export default function Resume() {
  const resumeUrl =
    "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/resume/Tabiano_Resume.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcmVzdW1lL1RhYmlhbm9fUmVzdW1lLnBkZiIsImlhdCI6MTc1NDQ2MjAyMCwiZXhwIjoxNzg1OTk4MDIwfQ.q0xAUwIw7Eb7OubPKAzTzpv7rKS5DUTWOQtDLcXmFp8";

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#111111]">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-900/40 to-zinc-900 p-5 border-b border-zinc-800">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white">Rj Laurence Tabiano</h2>
            <p className="text-sm text-indigo-300 mt-0.5">Software Support Engineer</p>
            <p className="text-xs text-zinc-400 mt-1 flex flex-wrap items-center gap-1">
              <span>ToFu AI</span>
              <span className="text-zinc-600">•</span>
              <span>Remote</span>
              <span className="text-zinc-600">•</span>
              <span>Jan 2026 – Present</span>
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/8 hover:bg-white/12 text-white text-xs border border-white/10 transition-colors"
            >
              <ExternalLink size={13} />
              View
            </a>
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs transition-colors"
            >
              <Download size={13} />
              Download
            </a>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="p-5 border-b border-zinc-800">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="p-5">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Certifications</p>
        <div className="space-y-2.5">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  {cert.name}
                </span>
              </div>
              {cert.year && <span className="text-xs text-zinc-500">{cert.year}</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
