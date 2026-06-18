// src/data/shared.ts

export const sharedBasics = {
  name: "Ruben Koelewijn",
  photo: "/img/Ruben_Koelewijn2.jpg",
  title: "Data Consultant & Computing Science Student",
  email: "rubenkoelewijn21@gmail.com",
  linkedin: "https://www.linkedin.com/in/ruben-koelewijn",
  github: "https://github.com/rkoelewijn",
  phone: "+31 6 51 69 65 16"
};

export const assets = {
  studentConsultant: {
    logo: "/logos/sc_logo.jpg",
    companyUrl: "https://student-consultant.nl/"
  },
  thalia: {
    logo: "/logos/thalia_black.png",
    companyUrl: "https://thalia.nu/"
  },
  tapasia: {
  },
  albertHeijn: {
  },
  radboud: {
    logoLight: "/logos/radboud_logo.png",
    projectId: "llm-thesis", // Match this to your project object ID
    gpa: "7.1/10"
  },
  streek: {
    logo: "/logos/streek.png"
  }
}

export const programmingSkills = [
  { name: 'Python', category: 'data', level: 'Expert', percentage: 100 },
  { name: 'DAX / M',  category: 'data', level: 'Advanced', percentage: 75 },
  { name: 'LaTeX',  category: 'systems', level: 'Expert', percentage: 100 },
  { name: 'C / C++',  category: 'systems', level: 'Advanced', percentage: 75 },
  { name: 'JavaScript / TypeScript',  category: 'web', level: 'Advanced', percentage: 75 },
  { name: 'HTML / CSS',  category: 'web', level: 'Proficient', percentage: 50 },
  // { name: 'Java', level: 'Familiar', percentage: 25 },
  // { name: 'Haskell', level: 'Familiar', percentage: 25 }
];

export const categorizedSkills = [
  {
    title: 'Data Science & Analytics',
    items: [
      { area: 'Data Modeling & Processing', technologies: 'Polars, NumPy' },
      { area: 'Machine Learning', technologies: 'scikit-learn, Anomaly Detection, LLM Evaluation' },
      { area: 'Business Intelligence', technologies: 'Power BI' },
      { area: 'Development & Infrastructure', technologies: 'Git, Linux / UNIX (Bash)' },
      { area: 'Spreadsheet Analytics', technologies:  'Excel' }
    ]
  },
  {
    title: 'Consulting & Business',
    items: [
      // { area: 'Strategic Advisory', technologies: 'Operating Model Design, Change Management' },
      { area: 'Project Execution', technologies: 'Stakeholder Management, Requirements Gathering, Project Management' },
      { area: 'Corporate Communication', technologies: 'PowerPoint, Executive Reporting' },
      { area: 'Operations', technologies: 'Talent Acquisition Workflows' }
    ]
  },
  {
    title: 'Creative Skills',
    items: [
      { area: 'Video Production', technologies: 'Adobe Premiere Pro' },
      { area: 'Graphic Design', technologies: 'Adobe Illustrator, Adobe Photoshop' },
      // { area: 'Live Audio / Performance', technologies: 'Live DJ Mixing' }
    ]
  },
  {
    title: 'Languages',
    items: [
      { area: 'Dutch', technologies: 'Native' },
      { area: 'English', technologies: 'C2 Cambridge Level' }
    ]
  }
];