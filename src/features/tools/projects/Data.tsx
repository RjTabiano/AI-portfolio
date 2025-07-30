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
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    featured: true
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager.app",
    featured: false
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts using external APIs.",
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard.netlify.app",
    featured: false
  },
  {
    id: "5",
    title: "Social Media Clone",
    description: "A social media platform clone with posts, comments, likes, and user profiles.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/yourusername/social-clone",
    featured: false
  },
  {
    id: "6",
    title: "AI Chat Assistant",
    description: "An AI-powered chat assistant that can answer questions and provide helpful information.",
    technologies: ["Python", "OpenAI API", "Flask", "React"],
    githubUrl: "https://github.com/yourusername/ai-chat",
    liveUrl: "https://ai-chat-assistant.vercel.app",
    featured: true
  }
];
