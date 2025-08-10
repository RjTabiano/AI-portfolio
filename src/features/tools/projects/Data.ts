import { IMAGES } from "../../../utility/constants";


export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "TQC: Electronic Health Record with OCR Scanner",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a chat interface and dynamic content rendering. ",
    technologies: ["Laravel", "AWS Textract", "Bootstrap", "MySQL"],
    imageUrl: IMAGES.project1,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    featured: true
  },
  {
    id: "2",
    title: "Rakk Clone: E-commerce platform",
    description: "A full-stack e-commerce platform with full user authentication, product management, admin dashbord and AI Chatbot for lead gen and product recommendation.",
    technologies: ["Laravel", "Bootstrap", "MySQL", "Python", "Gemini AI"],
    imageUrl: IMAGES.project2,
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true
  }
];
