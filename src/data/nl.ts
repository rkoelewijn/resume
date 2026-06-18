// src/data/nl.ts
import type { ResumeData } from './types'
import { assets, sharedBasics } from './shared'

export const nlData: ResumeData = {
  basics: {
    ...sharedBasics,
    location: "Nijmegen, Gelderland, Nederland",
    summary: "Vierdejaars student Computing Science aan de Radboud Universiteit met als specialisatie Data & Software Science. Ervaring in data-analyse, dashboarding en softwareontwikkeling.",
  },
  education: [
    {
      ...assets.radboud,
      degree: "BSc Computing Science (Specialisatie: Data & Software Science)",
      institution: "Radboud Universiteit",
      timeline: "Sep 2022 - heden",
      minor: "Bedrijfskunde",
      courses: "Data Analysis, Intro to Artificial Intelligence, Algorithms and Data Structures, Data Mining, Information Systems, Information Modelling and Databases",
      details: "Scriptieonderzoek uitgevoerd naar het detecteren van hallucinaties in LLMs."
    },
    {
      ...assets.streek,
      degree: "Gymnasium NT/NG",
      institution: "CSG Het Streek Lyceum",
      timeline: "Sep 2016 – Jul 2022"
    }
  ],
  relevant_experience: [
    {
      ...assets.studentConsultant,
      role: "Consultant",
      company: "Student Consultant",
      timeline: "Aug 2024 - heden",
      description: "Werkzaam binnen de organisatorische functies Talent Experience en Business Development om het professionele netwerk uit te breiden en te onderhouden. Project uitgevoerd voor GROND'G over het bouwen van een PowerBI dashboard voor KPIs en het opzetten van het PMK Adoptie Rapportage Dashboard."
    },
    {
      ...assets.thalia,
      role: "Secretaris (Bestuurslid)",
      company: "Studievereniging Thalia",
      timeline: "Sep 2024 - Sep 2025",
      description: "Bestuurslid van de studievereniging van Computing Science. Verantwoordelijk voor het schrijven van nieuwsbrieven, notulen en het beheren van alle informatiekanalen."
    }
  ],
  side_jobs: [
    {
      ...assets.tapasia,
      role: "Gastheer",
      company: "TapAsia",
      timeline: "Apr 2021 – Jun 2025",
      description: "Welkom heten van gasten, bediening aansturen en het oplossen van problemen die omhoog komen."
    },
    {
      ...assets.albertHeijn,
      role: "Winkelmedewerker",
      company: "Albert Heijn",
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
      category: 'data',
      tech: ["Python", "scikit-learn", "Polars", "NumPy", "LaTeX"],
      description: "Een geautomatiseerde methodologie pijplijn ontwikkeld om hallucinaties in grote taalmodellen te detecteren."
    },
    {
      id: "portfolio-architecture",
      title: "Interactief Vue.js Portfolio",
      type: "Frontend Architectuur & API Integratie",
      category: 'web',
      tech: ["Vue 3", "TypeScript", "GitHub API", "CSS Variables"],
      description: "Een reactieve, tweetalige portfolio-applicatie, vanaf de basis opgebouwd om frontend-architectuur en live data-integratie te demonstreren."
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
      { name: "Analytisch vermogen", level: 95 }, { name: "Softwareontwikkeling", level: 85 },
      { name: "Projectmanagement", level: 75 }, { name: "Stakeholdermanagement", level: 80 }
    ]
  }
}