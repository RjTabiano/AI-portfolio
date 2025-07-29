// Message type for chat
export interface Message {
  text: string;
  sender: 'user' | 'ai';
}

// Portfolio data types
export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
  bio?: string;
  interests?: string[];
}

export interface Skills {
  [category: string]: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
  achievements?: string[];
  courses?: string[];
}

export interface Project {
  name: string;
  description: string;
  role?: string;
  period?: string;
  technologies: string[];
  features?: string[];
  achievements?: string[];
  github?: string;
  live?: string;
}

export interface ApiResponse<T> {
  message: string;
  data?: T;
}