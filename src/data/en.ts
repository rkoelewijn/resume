// src/data/en.ts
import type { ResumeData } from './types'

export const enData: ResumeData = {
  basics: {
    name: "Ruben Koelewijn",
    title: "Data Scientist & Student Consultant",
    email: "rubenkoelewijn21@gmail.com",
    linkedin: "https://www.linkedin.com/in/ruben-koelewijn",
    phone: "+31 6 51 69 65 16",
    summary: "Fourth-year Computing Science student at Radboud University specializing in Data & Software Science. Experienced in data analysis, dashboarding, and software development.",
    location: "Nijmegen, Gelderland, Netherlands"
  },
  education: [
    {
      degree: "BSc Computing Science (Specialization: Data & Software Science)",
      institution: "Radboud University",
      logo: "/logos/radboud.png",
      timeline: "Sep 2022 – present",
      minor: "Bedrijfskunde (Business Administration)",
      courses: "Data Analysis, Intro to Artificial Intelligence, Algorithms and Data Structures, Data Mining, Information Systems, Information Modelling and Databases",
      details: "Conducted thesis research on detecting hallucinations in LLMs."
    },
    {
      degree: "Gymnasium NT/NG",
      institution: "CSG Het Streek Lyceum",
      logo: "/logos/streek.png",
      timeline: "Sep 2016 – Jul 2022"
    }
  ],
  relevant_experience: [
    {
      role: "Consultant",
      company: "Student Consultant",
      logo: "/logos/student-consultant.png",
      timeline: "Aug 2024 – present",
      description: "Work within the Talent Experience and Business Development organizational functions to expand and maintain the professional network. Executed a project for GROND'G involving building a PowerBI dashboard for KPIs and setting up the PMK Adoptie Rapportage Dashboard."
    },
    {
      role: "Secretary (Board Member)",
      company: "Study Association Thalia",
      logo: "/logos/thalia.png",
      timeline: "Sep 2024 – Sep 2025",
      description: "Board member of the Computing Science study association. Responsible for writing newsletters, taking minutes, and managing all information channels."
    }
  ],
  side_jobs: [
    {
      role: "Gastheer",
      company: "TapAsia",
      logo: "/logos/tapasia.png",
      timeline: "Apr 2021 – Jun 2025",
      description: "Welcoming guests, managing the waiting staff, and fixing problems that occur during shifts."
    },
    {
      role: "Retail Stock Clerk",
      company: "Albert Heijn",
      logo: "/logos/ah.png",
      timeline: "Mar 2019 – Apr 2021",
      description: "Restocking shelves, ensuring the shopping environment is clean and organized, and assisting customers with finding their products."
    }
  ],
  training: [
    { title: "Operating Model Practitioner", organization: "Capgemini", date: "March 2026" },
    { title: "Core training – Basic consultancy skills", organization: "Student Consultant", date: "Ongoing" },
    { title: "Project- and Stakeholder management Training", organization: "Student Consultant", date: "Ongoing" },
    { title: "C2 Cambridge English", organization: "Cambridge Assessment", date: "Achieved" }
  ],
  projects: [
    {
      id: "llm-thesis",
      title: "LLM Hallucination Detection Pipeline (Cloudspeakers)",
      type: "Academic Thesis",
      tech: ["Python", "scikit-learn", "Polars", "NumPy", "LaTeX"],
      summary: "Developed an automated methodology pipeline to detect hallucinations in large language models."
    },
    {
      id: "grondg-kpi",
      title: "GROND'G KPI Dashboard",
      type: "Consulting",
      tech: ["PowerBI", "DAX", "Power Query", "Excel"],
      summary: "Engineered a business intelligence dashboard and data validation scripts to track organizational KPIs, including setting up the PMK Adoptie Rapportage Dashboard."
    }
  ],
  skills: {
    programming: [
      { name: "Python", level: 90 }, { name: "C++/C", level: 75 }, { name: "Java", level: 70 },
      { name: "Functional Programming", level: 80 }, { name: "Vue.js", level: 60 }, { name: "LaTeX", level: 85 }
    ],
    data_science: [
      { name: "Polars", level: 85 }, { name: "NumPy", level: 80 },
      { name: "scikit-learn", level: 75 }, { name: "Data Analysis", level: 90 }
    ],
    bi_tools: [
      { name: "PowerBI", level: 95 }, { name: "DAX", level: 85 },
      { name: "Power Query", level: 90 }, { name: "Excel", level: 95 }
    ],
    core_competencies: [
      { name: "Analytical skills", level: 95 }, { name: "Software development", level: 85 },
      { name: "Project management", level: 75 }, { name: "Stakeholder management", level: 80 }
    ]
  }
}