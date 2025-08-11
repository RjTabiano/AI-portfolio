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
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
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
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://yourportfolio.com",
    featured: true
  }
];
