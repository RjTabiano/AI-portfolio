import { Smile, Briefcase, PencilRuler, UserRoundSearch } from 'lucide-react';

export const facts = [
    { icon: Smile, text: 'About me', prompt: "Who are you? Tell me about yourself." },
    { icon: Briefcase, text: 'Projects', prompt: "Show me your personal projects." },
    { icon: PencilRuler, text: "Skills", prompt: "What are your skills?" },
    { icon: UserRoundSearch, text: "Contact", prompt: "How can I contact you?" },
]; 

export const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
      "React",
      "Vercel AI SDK",
    ],
    backend: [
      "Go",
      "gRPC",
      "C++",
      "Python",
      "Git",
      "GitHub",
      "Docker",
      "Laravel",
      "PostgreSQL",
    ],
    design: ["Figma", "Illustrator", "Canva"],
    softSkills: [
      "Communication",
      "Critical Thinking",
      "Adaptability",
      "Learning Agility",
      "Teamwork",
      "Creativity",
      "Grit",
    ],
    ai: [
      "LLM Providers (OpenAI, Anthropic's Claude, etc)",
      "AI Agents",
      "Prompt engineering",
      "Vector databases (Weaviate, Pinecone)",
      "RAG (Retrieval-Augmented Generation)",
      "Tool routing & calling",
      "Vercel AI SDK",
      "Supabase",
      "Prisma",
      "LancChain",
    ],
  };

export const IMAGES = {
    project1: "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/tqc-sample.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL3RxYy1zYW1wbGUucG5nIiwiaWF0IjoxNzUzOTQ4NDk1LCJleHAiOjE3ODU0ODQ0OTV9.Je_6jrO7qg9QkwO0nO887KgGY5DLA1fyVS4m7E32CNo",
    project1Album: [
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/TQC%20ALBUM/album1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1RRQyBBTEJVTS9hbGJ1bTEucG5nIiwiaWF0IjoxNzU0OTAyMzY4LCJleHAiOjE3ODY0MzgzNjh9.rTIeTqwyi6SVsu2cm0AccZpk5gpR9PktXZ1wYtciWAA",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/TQC%20ALBUM/album2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1RRQyBBTEJVTS9hbGJ1bTIucG5nIiwiaWF0IjoxNzU0OTAyMzk5LCJleHAiOjE3ODY0MzgzOTl9.F3-VuK32kp1Myk_k5Xok-smw0XRLanCi81n5bRqdflo",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/TQC%20ALBUM/album3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1RRQyBBTEJVTS9hbGJ1bTMucG5nIiwiaWF0IjoxNzU0OTAyNDA2LCJleHAiOjE3ODY0Mzg0MDZ9.IwGsYDmsLf2jnRp_o5ZvJ_kcyhkcqRXrIJhij2-FdIw",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/TQC%20ALBUM/album4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1RRQyBBTEJVTS9hbGJ1bTQucG5nIiwiaWF0IjoxNzU0OTAyNDE2LCJleHAiOjE3ODY0Mzg0MTZ9.5Und10Kto6tMVoDFfP-i8IK6FHGK0hTmQkpQrM8RR14",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/TQC%20ALBUM/album5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1RRQyBBTEJVTS9hbGJ1bTUucG5nIiwiaWF0IjoxNzU0OTAyNDM3LCJleHAiOjE3ODY0Mzg0Mzd9.FdEC5WvOGcdcIhXVxfMLvLMVECpx7IjbNBNH_5Ut_DY"
    ],

    project2: "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/rakk-front.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL3Jha2stZnJvbnQuanBnIiwiaWF0IjoxNzUzOTUwNjE5LCJleHAiOjE3ODU0ODY2MTl9.GL4dSogVmVRVyg5kgMtO7bddDHlKdanJg-xpVHDWBPk",
    project2Album: [
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/RAKK%20ALBUM/album1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1JBS0sgQUxCVU0vYWxidW0xLnBuZyIsImlhdCI6MTc1NDkxMTgyOSwiZXhwIjoxNzg2NDQ3ODI5fQ.CKpjP9gmbH1KB-nv2akgcRDbkbXOvZO4eo0ypa3oN18",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/RAKK%20ALBUM/album2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1JBS0sgQUxCVU0vYWxidW0yLnBuZyIsImlhdCI6MTc1NDkxMTg1MCwiZXhwIjoxNzg2NDQ3ODUwfQ.YmHTw7RirTrBFfewaOcYtg36fEMAbmeRcxz2x50v94c",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/RAKK%20ALBUM/album3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1JBS0sgQUxCVU0vYWxidW0zLnBuZyIsImlhdCI6MTc1NDkxMTg1OSwiZXhwIjoxNzg2NDQ3ODU5fQ.1dbwf2R1ZAGj-GVewdeMqKLaZzKBCrEs_23aMvg-eNE",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/RAKK%20ALBUM/album4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1JBS0sgQUxCVU0vYWxidW00LnBuZyIsImlhdCI6MTc1NDkxMTg4MiwiZXhwIjoxNzg2NDQ3ODgyfQ.352UhAD8TO7qnY8PQFGuROZq104mWXg_ooJuUFOT8Wg",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/RAKK%20ALBUM/album5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1JBS0sgQUxCVU0vYWxidW01LnBuZyIsImlhdCI6MTc1NDkxMTg4NywiZXhwIjoxNzg2NDQ3ODg3fQ.NhiMwFl8SoksMMesBd50bAIxsNxC93mnjIuVCgRg0Mw",
      "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/assets/RAKK%20ALBUM/album6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vYXNzZXRzL1JBS0sgQUxCVU0vYWxidW02LnBuZyIsImlhdCI6MTc1NDkxMTg5MywiZXhwIjoxNzg2NDQ3ODkzfQ.quKWYhfpfRyHYUNQ0M0fA01pNijG0bwv8flTlYWmJAg"
    ],

    "profile" : "https://qhbpzwjwjaaoebdgkexj.supabase.co/storage/v1/object/sign/portfolio/resume/profile_cropped.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZGFhMTk2Zi04NmExLTRlNzMtOWFkOS02YjkxOWVjN2YxYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcmVzdW1lL3Byb2ZpbGVfY3JvcHBlZC5qcGciLCJpYXQiOjE3NTQ0NzcwODgsImV4cCI6MTc4NjAxMzA4OH0.i2MnoeaY6Oawbh8Pdz6YhGrEWRuv8mSBD0nmb3kXKfk",
}