// src/data/types.ts

export interface Experience {
  role: string;
  company: string;
  timeline: string;
  description: string;
  additional?: string; 
  logo?: string;
  companyUrl?: string; // Add this line
}

export interface Education {
  degree: string;
  institution: string;
  timeline: string;
  logo?: string;
  minor?: string;
  courses?: string;
  details?: string;
  gpa?: string; 
  projectId?: string; 
}

export interface ProjectSection {
  title: string;
  body: string[]; // Array of strings (each string is a paragraph or bullet point)
  isList?: boolean; // If true, renders the body array as a bulleted list <ul>
}

export interface Project {
  id: string;
  title: string;
  type: string;
  tech: string[];
  description: string;
  sections?: ProjectSection[]; // <-- New field for the detailed page content
}

export interface Skill {
  name: string;
  level: number;
}

export interface Training{
  title: string; 
  organization?: string; 
  date?: string; 
}

export interface ResumeData {
  basics: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
    phone: string;
    summary: string;
    location: string;
  };
  education: Education[];
  relevant_experience: Experience[];
  side_jobs: Experience[];
  training: Training[]; 
  projects: Project[];
  skills: {
    programming: Skill[];
    data_science: Skill[];
    bi_tools: Skill[];
    core_competencies: Skill[];
  };
}