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
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a chat interface and dynamic content rendering.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: IMAGES.project1,
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    featured: true
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: IMAGES.project2,
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true
  }
];
