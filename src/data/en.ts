// src/data/en.ts
import type { ResumeData } from './types'
import { assets, sharedBasics } from './shared'

export const enData: ResumeData = {
  basics: {
    ...sharedBasics,
    location: "Nijmegen, Gelderland, Netherlands",
    summary: "Fourth-year Computing Science student at Radboud University specializing in Data & Software Science. Experienced in data analysis, dashboarding, and software development.",
  },
  education: [
    {
      degree: "MSc Data Science & AI",
      institution: "Radboud University",
      timeline: "2026 - Present",
      logoLight: assets.radboud.logoLight,
    },
      {
      degree: "MSc Information Sciences",
      institution: "Radboud University",
      timeline: "2026 - Present",
      logoLight: assets.radboud.logoLight,
    },
    {
      logoLight: assets.radboud.logoLight,
      degree: "BSc Computing Science (Specialization: Data & Software Science)",
      institution: "Radboud University",
      timeline: "Sep 2022 - July 2026",
      gpa: assets.radboud.gpa,
      projectId: assets.radboud.projectId,
      minor: "Bedrijfskunde (Business Administration)",
      courses: "Data Analysis, Intro to Artificial Intelligence, Algorithms and Data Structures, Data Mining, Information Systems, Information Modelling and Databases",
      details: "Conducted thesis research on detecting hallucinations in LLMs."
    },
    {
      ...assets.streek,
      degree: "Gymnasium NT/NG",
      institution: "CSG Het Streek Lyceum",
      timeline: "Sep 2016 - Jul 2022"
    }
  ],
  relevant_experience: [
    {
      ...assets.studentConsultant,
      role: "Consultant",
      company: "Student Consultant",
      timeline: "Aug 2024 - present",
      description: "Worked as a <strong>Data Consultant</strong> specializing in <strong>Data Analysis, Management and Dashboarding</strong>. Delivered high-impact reporting solutions, including a <em>Power BI</em> dashboard set up to track all KPIs for <span class=\"highlight-text\">GROND'G</span> and a multi-level <em>Power BI </em> dashboard for <span class=\"highlight-text\">Irado</span> and the <span class=\"highlight-text\">Municipality of Schiedam</span> to visualize trends more clearly and facilitate easier decision-making.",
      additional: "Contributed to the Talent Experience team by assisting with talent acquisition and candidate"

    
    },
    {
      ...assets.thalia,
      role: "Secretary (Board Member)",
      company: "Study Association Thalia",
      timeline: "Sep 2024 - Sep 2025",
      description: "Served as a <strong>Board Member</strong> for the <span class=\"highlight-text\">Computing Science study association</span> in Nijmegen. Responsibilities included authoring newsletters, taking official board minutes, and <strong>managing</strong> all internal <strong>information channels</strong>.",
      additional: "Contributed directly to the Partner, Events, Design, and Board Application committees."
    }
  ],
  side_jobs: [
    {
      ...assets.tapasia,
      role: "Gastheer",
      company: "TapAsia",
      timeline: "Apr 2021 - Jun 2025",
      description: "Welcoming guests, managing the waiting staff, and fixing problems that occur during shifts."
    },
    {
      ...assets.albertHeijn,
      role: "Retail Stock Clerk",
      company: "Albert Heijn",
      timeline: "Mar 2019 - Apr 2021",
      description: "Restocking shelves, ensuring the shopping environment is clean and organized, and assisting customers with finding their products."
    }
  ],
  // ... (training, projects, and skills remain exactly the same)
  training: [
    {
      title: "Structured Slides & Analysis",
      organization: "Student Consultant", 
      date: "May 2026"
    },
    {
      title: "Change Management for Digital Processes in the Age of AI",
      organization: "&Samhoud", 
      date: "May 2026"
    },
    {
      title: "Operating Model & Capability Thinking",
      organization: "Capgemini Invent", 
      date: "Mar 2026"
    },
    // {
    //   title: "BHV",
    //   // organization: "Student Consultant", 
    //   date: "Mar 2026"
    // },
    {
      title: "Effective PowerPoints",
      organization: "Student Consultant", 
      date: "Feb 2026"
    },
    {
      title: "Project- en Stakeholdermanagement Training",
      organization: "Student Consultant", 
      date: "Oct 2025"
    },
    {
      title: "Core Training - Basic Consultancy Skills",
      organization: "Student Consultant", 
      date: "Aug 2024"
    },
    { 
      title: "C2 Cambridge English", 
      organization: "Cambridge Assessment", 
      date: "Dec 2021" 
    }

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
      id: "portfolio-architecture",
      title: "Interactive Vue.js Portfolio",
      type: "Frontend Architecture & API Integration",
      tech: ["Vue 3", "TypeScript", "GitHub API", "CSS Variables"],
      description: "A reactive, dual-language portfolio application built from scratch to demonstrate frontend architecture and live data integration.",
      sections: [
        {
          title: "Context & Problem",
          body: ["Traditional resumes are static and fail to demonstrate actual coding proficiency. The goal of this project was to build a modern, interactive portfolio that acts as a live case study of my frontend architecture and data integration skills, while remaining fully compliant with standard recruiting practices (PDF export)."]
        },
        {
          title: "Technical Architecture",
          isList: true,
          body: [
            "Live Data Fetching: Integrated the GitHub REST API using Vue's Composition API to dynamically render the most recently updated repositories.",
            "State Management: Implemented reactive bilingual support (English/Dutch) and a dynamic Dark/Light theme toggle using reactive Vue refs and CSS custom properties.",
            "Print Optimization: Engineered a dedicated @media print stylesheet that automatically strips interactive UI elements and forces high-contrast light mode for ATS-friendly PDF generation."
          ]
        },
        {
          title: "Business Impact",
          body: ["This architecture eliminates the need to maintain separate codebases for a personal website and a printable CV. By centralizing the data structure in TypeScript interfaces, the CV can be updated in a single data file and instantly deployed, streamlining personal branding and project showcasing."]
        }
      ]
    },
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