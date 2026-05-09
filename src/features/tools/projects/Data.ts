import { IMAGES } from "../../../utility/constants";

interface Description {
  intro: string;
  features: string[];
  outro: string;
}

export interface Project {
  id: string;
  title: string;
  description: Description;
  technologies: string[];
  imageUrl?: string;
  album?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "TQC: Electronic Health Record with OCR Scanner",
    description: {
      intro: "A capstone project developed to modernize the operations of The Queen’s Birthing Home Clinic by replacing paper-based documentation and manual appointment booking with a fully digital, streamlined workflow.",
      features: [
        "Web-based Electronic Health Record (EHR): Securely stores and manages patient records for easy access and retrieval.",
        "Mobile Scheduling System: Enables patients to conveniently book appointments via mobile devices.",
        "OCR Scanner Integration: Automatically reads and digitizes data from physical forms, reducing manual encoding time."
      ],
      outro: "This solution significantly improves efficiency, reduces paperwork, and enhances patient care by ensuring accurate, real-time record management."
    },
    technologies: ["Laravel", "AWS Textract", "Bootstrap", "MySQL"],
    imageUrl: IMAGES.project1,
    album: IMAGES.project1Album,
    githubUrl: "https://github.com/RjTabiano/PatientRecord",
    liveUrl: "https://github.com/RjTabiano/PatientRecord",
    featured: true
  },
  {
    id: "2",
    title: "Rakk Clone: E-commerce platform",
    description: {
      intro: "An e-commerce platform inspired by the Rakk brand, built to simulate a complete online shopping experience.",
      features: [
        "MVP Payment Flow: Simulated checkout process without integrated payment gateway.",
        "Shopping Functions: Add to cart, checkout, product reviews, and filtering.",
        "Admin Dashboard: Manage accounts, products, stock, and orders.",
        "AI Chatbot: Provides product recommendations, lead generation, and customer support."
      ],
      outro: "A functional prototype showcasing core e-commerce features and AI-powered customer engagement."
    },
    technologies: ["Laravel", "Bootstrap", "MySQL", "Python", "Gemini AI"],
    imageUrl: IMAGES.project2,
    album: IMAGES.project2Album,
    githubUrl: "https://github.com/RjTabiano/RakkGears-Ecommerce",
    liveUrl: "https://github.com/RjTabiano/RakkGears-Ecommerce",
    featured: true
  },
  {
    id: "3",
    title: "Car Wraps V3",
    description: {
      intro: "A modern marketing website for a car wraps business, built for Metrix Digital.",
      features: [
        "Showcase gallery of car wrap designs and finishes.",
        "Service pages with detailed offerings and pricing information.",
        "Contact and inquiry flow for customer lead generation."
      ],
      outro: "A clean, conversion-focused frontend delivering a professional brand presence."
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fcarwrapsv3.metrixdigital.com&screenshot=true&meta=false&embed=screenshot.url",
    liveUrl: "https://carwrapsv3.metrixdigital.com",
    featured: false
  },
  {
    id: "4",
    title: "Arete Dire Design",
    description: {
      intro: "A portfolio and showcase site for Arete Dire Design, a creative design studio.",
      features: [
        "Portfolio gallery highlighting design work and creative projects.",
        "Studio information and service offerings.",
        "Contact section for client inquiries."
      ],
      outro: "A polished frontend built to reflect the studio's creative identity."
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Faretediredesign-production.up.railway.app&screenshot=true&meta=false&embed=screenshot.url",
    liveUrl: "https://aretediredesign-production.up.railway.app",
    featured: false
  },
  {
    id: "5",
    title: "Media CRTL",
    description: {
      intro: "A media management platform designed to streamline content control and organization.",
      features: [
        "Media library for organizing and accessing digital assets.",
        "Content control and management workflows.",
        "Clean, responsive interface for efficient media operations."
      ],
      outro: "A focused tool for managing media assets with a smooth user experience."
    },
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fwww.mediacrtl.com&screenshot=true&meta=false&embed=screenshot.url",
    liveUrl: "https://www.mediacrtl.com",
    featured: false
  }
];
