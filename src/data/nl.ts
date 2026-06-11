// src/data/nl.ts
import type { ResumeData } from './types'

export const nlData: ResumeData = {
  basics: {
    name: "Ruben Koelewijn",
    title: "Data Scientist & Student Consultant",
    email: "rubenkoelewijn21@gmail.com",
    linkedin: "https://www.linkedin.com/in/ruben-koelewijn",
    phone: "+31 6 51 69 65 16",
    summary: "Vierdejaars student Computing Science aan de Radboud Universiteit met als specialisatie Data & Software Science. Ervaring in data-analyse, dashboarding en softwareontwikkeling.",
    location: "Nijmegen, Gelderland, Nederland"
  },
  education: [
    {
      degree: "BSc Computing Science (Specialisatie: Data & Software Science)",
      institution: "Radboud Universiteit",
      logo: "/logos/radboud.png",
      timeline: "Sep 2022 – heden",
      minor: "Bedrijfskunde",
      courses: "Data Analysis, Intro to Artificial Intelligence, Algorithms and Data Structures, Data Mining, Information Systems, Information Modelling and Databases",
      details: "Scriptieonderzoek uitgevoerd naar het detecteren van hallucinaties in LLMs."
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
      timeline: "Aug 2024 – heden",
      description: "Werkzaam binnen de organisatorische functies Talent Experience en Business Development om het professionele netwerk uit te breiden en te onderhouden. Project uitgevoerd voor GROND'G over het bouwen van een PowerBI dashboard voor KPIs en het opzetten van het PMK Adoptie Rapportage Dashboard."
    },
    {
      role: "Secretaris (Bestuurslid)",
      company: "Studievereniging Thalia",
      logo: "/logos/thalia.png",
      timeline: "Sep 2024 – Sep 2025",
      description: "Bestuurslid van de studievereniging van Computing Science. Verantwoordelijk voor het schrijven van nieuwsbrieven, notulen en het beheren van alle informatiekanalen."
    }
  ],
  side_jobs: [
    {
      role: "Gastheer",
      company: "TapAsia",
      logo: "/logos/tapasia.png",
      timeline: "Apr 2021 – Jun 2025",
      description: "Welkom heten van gasten, bediening aansturen en het oplossen van problemen die omhoog komen."
    },
    {
      role: "Winkelmedewerker",
      company: "Albert Heijn",
      logo: "/logos/ah.png",
      timeline: "Mrt 2019 – Apr 2021",
      description: "Het aanvullen van schappen, het verzorgen van een nette en georganiseerde winkelomgeving, en het assisteren van klanten bij het vinden van producten."
    }
  ],
  training: [
    { title: "Operating Model Practitioner", organization: "Capgemini", date: "Maart 2026" },
    { title: "Core training – Basis consultancy vaardigheden", organization: "Student Consultant", date: "Huidig" },
    { title: "Project- en Stakeholdermanagement Training", organization: "Student Consultant", date: "Huidig" },
    { title: "Cambridge English C2", organization: "Cambridge Assessment", date: "Behaald" }
  ],
  projects: [
    {
      id: "llm-thesis",
      title: "LLM Hallucinatie Detectie Pijplijn (Cloudspeakers)",
      type: "Academische Scriptie",
      tech: ["Python", "scikit-learn", "Polars", "NumPy", "LaTeX"],
      summary: "Een geautomatiseerde methodologie pijplijn ontwikkeld om hallucinaties in grote taalmodellen te detecteren."
    },
    {
      id: "grondg-kpi",
      title: "GROND'G KPI Dashboard",
      type: "Consultancy",
      tech: ["PowerBI", "DAX", "Power Query", "Excel"],
      summary: "Een business intelligence dashboard en data-validatiescripts ontwikkeld om organisatorische KPIs bij te houden, inclusief het opzetten van het PMK Adoptie Rapportage Dashboard."
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
      { name: "Analytisch vermogen", level: 95 }, { name: "Softwareontwikkeling", level: 85 },
      { name: "Projectmanagement", level: 75 }, { name: "Stakeholdermanagement", level: 80 }
    ]
  }
}