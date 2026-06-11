// src/data/types.ts

export interface Experience {
  role: string;
  company: string;
  timeline: string;
  description: string;
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

export interface Project {
  id: string;
  title: string;
  type: string;
  tech: string[];
  summary: string;
}

export interface Skill {
  name: string;
  level: number;
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
  training: { title: string; organization: string; date: string }[];
  projects: Project[];
  skills: {
    programming: Skill[];
    data_science: Skill[];
    bi_tools: Skill[];
    core_competencies: Skill[];
  };
}