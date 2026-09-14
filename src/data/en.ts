// src/data/en.ts
import type { ResumeData } from './types'
import { assets, sharedBasics } from './shared'

export const enData: ResumeData = {
  basics: {
    ...sharedBasics,
    location: "Nijmegen, Gelderland, Netherlands",
    summary: "Master student Data Science & AI and Information Sciences at Radboud University and Data Consultant. Focused on translating complex data architectures into strategic executive insights and scalable data solutions. Experienced in end-to-end data architecture, enterprise Power BI dashboarding (DAX, Power Query), and machine learning in Python.",
  },
  education: [
    {
      degree: "MSc Data Science & AI",
      institution: "Radboud University",
      timeline: "2026 - Present",
      summary: "Focus: Machine Learning, Probabilistic Modeling, Advanced Algorithm Design, Responsible AI & Data Governance.",
      logo: assets.radboud.logoLight,
    },
    {
      degree: "MSc Information Sciences",
      institution: "Radboud University",
      timeline: "2026 - Present",
      summary: "Focus: Enterprise Architecture, IT Governance, Strategic Business-IT Alignment & Digital Transformation.",
      logo: assets.radboud.logoLight,
    },
    {
      logo: assets.radboud.logoLight,
      degree: "BSc Computing Science (Specialization: Data & Software Science)",
      institution: "Radboud University",
      timeline: "Sep 2022 - July 2026",
      summary: "Foundations in software architecture, data modeling, large-scale systems, and algorithmic engineering.",
      gpa: assets.radboud.gpa,
      projectId: assets.radboud.projectId,
      minor: "Business Administration",
      courses: "Data Analysis, Artificial Intelligence, Algorithms and Data Structures, Data Mining, Big Data, Information Modelling and Databases, Software Engineering",
      details: "Bachelor's Thesis: Developed and evaluated machine learning models in Python for hallucination detection in LLMs using a hybrid NLI and Knowledge Graph pipeline (MusicBrainz), achieving a 100% error detection rate (recall) and 0.86 F1-score."
    }
  ],
  relevant_experience: [
    {
      ...assets.studentConsultant,
      role: "Data Consultant",
      company: "Student Consultant",
      timeline: "Aug 2024 - present",
      description: "Architected and deployed scalable <strong>Power BI dashboards</strong> for public and private sector clients (e.g., <span class=\"highlight-text\">Municipality of Schiedam</span>, <span class=\"highlight-text\">Irado</span>, and <span class=\"highlight-text\">GROND'G</span>), transforming complex multi-source datasets via <em>Power Query</em> and advanced <em>DAX calculations</em> into strategic executive reporting tools.",
      additional: "Automated data workflows and reporting pipelines to accelerate decision-making; supported the Talent Experience team with talent acquisition."
    },
    {
      ...assets.thalia,
      role: "Secretary (Board Member)",
      company: "Study Association Thalia",
      timeline: "Sep 2024 - Sep 2025",
      description: "Directed internal and external communication strategy for <strong>800+ members</strong> and coordinated 4 strategic committees (including Partners and Events). Led cross-functional student teams in organizing large-scale events, boosting stakeholder engagement and ensuring seamless operational execution.",
      additional: "Managed corporate partner relations, documentation governance, and information channel optimizations across the association."
    }
  ],
  side_jobs: [],
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
      id: "bsc-thesis",
      title: "Detecting Hallucinations in LLM Summaries",
      category: 'data',
      type: "Academic Thesis",
      tech: ["Python", "scikit-learn", "Machine Learning", "NumPy", "LaTeX"],
      description: "Developed an automated methodology pipeline to detect hallucinations in large language models.",
      sections: [
        {
          title: "Project Overview",
          body: ["This project is a research-oriented evaluation framework developed as part of a bachelor's thesis. It is designed to validate automated concert newsletter outputs generated by Large Language Models (LLMs). By combining Natural Language Inference (NLI) with a deterministic music knowledge graph, the two-phase evaluation architecture detects both semantic inaccuracies and factual inconsistencies in generated event summaries."]
        },
        {
          title: "Key Features & Architecture",
          isList: true,
          body: [
            "Data Collection & Processing: The pipeline uses a Corpus Builder to scrape event data from the Doornroosje music venue website to build a structured evaluation corpus. A Claims Decomposer then utilizes spaCy dependency parsing to extract atomic claims from the generated summaries without invoking expensive NLI inference.",
            "NLI Baseline Evaluation: A cross-lingual XLM-RoBERTa NLI model evaluates the semantic consistency between source content and the generated summaries. It specifically evaluates intrinsic hallucinations, tracking errors defined strictly as direct contradictions of the provided source metadata and explicitly excluding external factual additions.",
            "Hybrid Knowledge Graph Verification: To detect extrinsic hallucinations, the NLI reasoning is combined with non-parametric fact verification using the MusicBrainz API.",
            "Pipeline Control: An interactive Master Control CLI supports sequential end-to-end execution of the pipeline, while a test mode toggle enables fast dry-runs for debugging and development."
          ]
        },
        {
          title: "Performance & Key Results",
          isList: true,
          body: [
            "Perfect Recall: Utilizing a strict min-pooling aggregation strategy, the pipeline achieved a 100% Error Detection Rate with zero false negatives.",
            "Overall Metrics: The system recorded an F1-Score of 0.8615 and an Overall Accuracy of 80.85% at the sentence level.",
            "Knowledge Graph Interventions: The integration of the MusicBrainz database successfully resolved extrinsic hallucinations, providing deterministic overrides for 5 atomic claims related to artists' geographic origins.",
            "Sensitivity Trade-off: The zero-tolerance min-pooling approach resulted in a 47.37% false positive rate, as the highly conservative model occasionally flagged verifiable claims as intrinsic contradictions due to minor lexical differences."
          ]
        },
        {
          title: "Known Limitations & Future Scope",
          isList: true,
          body: [
            "Scope Constraints: The MusicBrainz API integration is currently limited to validating the Area, Country, and Genre attributes. The system also struggles to verify subjective genre descriptions that stylistically differ from strict community tags.",
            "Future Development: Future work involves exploring dynamic aggregation logic to maintain high error detection while reducing the false positive rate. Further iterations would test cross-domain adaptability and integrate broader generalized databases like Wikidata to verify temporal and entity claims outside the current scope."
          ]
        }
      ]
    },
    {
      id: "portfolio-architecture",
      title: "Interactive Vue.js Portfolio",
      category: 'web',
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
    {
      id: "verbelco-waterweb",
      title: "Verbelco Waterweb Validation Project",
      category: 'data',
      type: "Software Engineering Project",
      tech: ["Python", "Polars", "NumPy", "Git", "Outlier Detection"],
      description: "Developed a full-stack data validation application designed to clean, verify, and visualize water level measurement data for Verbelco. The tool processes raw measurement inputs through a pipeline of configurable validation methods, including static rules that dynamically adjust based on the technical specifications of the measurement tubes.",
      sections: [
        {
          title: "Project Overview",
          body: ["Developed a full-stack data validation application designed to clean, verify, and visualize water level measurement data for Verbelco. The tool processes raw measurement inputs through a pipeline of configurable validation methods, including static rules that dynamically adjust based on the technical specifications of the measurement tubes."]
        },
        {
          title: "Key Features & Contributions",
          isList: true,
          body: [
            "Dual Interface Design: Built both a Command Line Interface (CLI) for automated batch processing and a local web-based UI for interactive data analysis.",
            "Validation Engine: Engineered a robust validation pipeline where users can toggle specific validation methods on or off. The system cross-references measurement data against external technical specification files to flag anomalies.",
            "Interactive Data Visualization: Integrated a dynamic graphing module in the web UI that visualizes the validated results, allowing users to zoom, filter, and change the axes to better understand data trends and pinpoint errors.",
            "Configuration Management: Implemented a flexible .toml configuration system, allowing users to easily adjust the parameters of the validation methods without altering the core codebase.",
            "Modern Tooling: Utilized uv for fast, reproducible Python environment management and dependency resolution, ensuring a smooth handoff and easy installation for future developers or clients."
          ]
        },
        {
          title: "Business Impact",
          body: ["The application significantly reduces the manual overhead required to verify water level data. By providing both a programmatic CLI for data pipelines and an intuitive visual dashboard for end-users, the tool bridges the gap between complex data engineering and accessible business intelligence."]
        }
      ]
    }
  ],
  programming_skills: [
    { name: 'Python', category: 'data', level: 'Expert', percentage: 100 },
    { name: 'DAX / Power Query (M)', category: 'data', level: 'Advanced', percentage: 85 },
    { name: 'SQL', category: 'data', level: 'Advanced', percentage: 80 },
    { name: 'C / C++', category: 'systems', level: 'Advanced', percentage: 75 },
    { name: 'LaTeX', category: 'systems', level: 'Advanced', percentage: 75 },
    { name: 'JavaScript / TypeScript', category: 'web', level: 'Proficient', percentage: 70 },
    { name: 'HTML / CSS', category: 'web', level: 'Proficient', percentage: 60 }
  ],
  categorized_skills: [
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
  ]
}