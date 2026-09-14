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
  radboud: {
    logoLight: "/logos/radboud_logo.png",
    projectId: "bsc-thesis", // Match this to your project object ID
    gpa: "7.1/10"
  }
}

export const programmingSkills = [
  { name: 'Python', category: 'data', level: 'Expert', percentage: 100 },
  { name: 'DAX / Power Query (M)', category: 'data', level: 'Advanced', percentage: 85 },
  { name: 'SQL', category: 'data', level: 'Advanced', percentage: 80 },
  { name: 'C / C++', category: 'systems', level: 'Advanced', percentage: 75 },
  { name: 'LaTeX', category: 'systems', level: 'Advanced', percentage: 75 },
  { name: 'JavaScript / TypeScript', category: 'web', level: 'Proficient', percentage: 70 },
  { name: 'HTML / CSS', category: 'web', level: 'Proficient', percentage: 60 }
];

export const categorizedSkills = [
  {
    title: 'Data Science & Machine Learning',
    items: [
      { area: 'Data Processing & Modeling', technologies: 'Polars, NumPy, Pandas' },
      { area: 'Machine Learning & AI', technologies: 'scikit-learn, LLM Evaluation, Natural Language Inference (NLI), Outlier Detection' }
    ]
  },
  {
    title: 'Business Intelligence & Analytics',
    items: [
      { area: 'BI & Dashboarding', technologies: 'Power BI, DAX, Power Query (M), KPI Frameworks, Data Modeling' },
      { area: 'Spreadsheet Analytics', technologies: 'Advanced Excel' }
    ]
  },
  {
    title: 'Software & Systems Engineering',
    items: [
      { area: 'Core Languages', technologies: 'Python, C / C++, TypeScript, JavaScript, SQL' },
      { area: 'Tools & Infrastructure', technologies: 'Git, Linux / UNIX (Bash), REST APIs, uv, LaTeX' }
    ]
  },
  {
    title: 'Consulting & Strategy',
    items: [
      { area: 'Project Execution', technologies: 'Stakeholder Management, Requirements Gathering, Agile Delivery' },
      { area: 'Executive Communication', technologies: 'Executive Reporting, PowerPoint, Client Presentations' }
    ]
  },
  {
    title: 'Languages',
    items: [
      { area: 'Dutch', technologies: 'Native' },
      { area: 'English', technologies: 'C2 Cambridge Proficiency' }
    ]
  }
];