// src/data/en.ts
import type { ResumeData } from './types'
import { assets, sharedBasics } from './shared'

export const enData: ResumeData = {
  basics: {
    ...sharedBasics,
    location: "Nijmegen, Gelderland, Netherlands",
    summary: "Fourth-year Computing Science student at Radboud University and Data Consultant specializing in Data & Software Science. Focused on bridging the gap between complex data architecture and actionable business strategy. Experienced in translating raw data into scalable solutions by utilizing expertise in Python, business intelligence, and full-stack frameworks to build robust analytics tools and dynamic dashboards.",
  },
  education: [
    {
      degree: "MSc Data Science & AI",
      institution: "Radboud University",
      timeline: "2026 - Present",
      summary: "As a specialization within Computing Science, this program focuses on transforming real-world datasets into insights and software tools. It balances machine learning, probabilistic modeling, and information retrieval with practical development, emphasizing the design and programming of custom algorithms. Alongside the technical implementation, the coursework addresses data privacy, legal regulations, and societal impact, preparing graduates to build responsible data solutions for organizations.",
      logo: assets.radboud.logoLight,
    },
      {
      degree: "MSc Information Sciences",
      institution: "Radboud University",
      timeline: "2026 - Present",
      summary: "Taught in collaboration with the Nijmegen School of Management, this program focuses on the alignment between technology and business strategy. It covers how to translate data infrastructure into practical corporate solutions by combining software and systems knowledge with management principles. The curriculum focuses on enterprise architecture, information security, and governance, preparing graduates to manage digital transformation and IT implementation within organizations.",
      logo: assets.radboud.logoLight,
    },
    {
      logo: assets.radboud.logoLight,
      degree: "BSc Computing Science (Specialization: Data & Software Science)",
      institution: "Radboud University",
      timeline: "Sep 2022 - July 2026",
      summary: "The Bachelor's program at Radboud University bridges strict mathematical logic with practical software engineering, focusing on how information is structurally represented, processed, and secured. Rather than just teaching code syntax, the curriculum covers the architectural foundations of large-scale software systems, data modeling, network infrastructure, and cyber security protocols.",
      gpa: assets.radboud.gpa,
      projectId: assets.radboud.projectId,
      minor: "Business Administration",
      courses: "Data Analysis, Introduction to Artificial Intelligence, Algorithms and Data Structures, Data Mining, Big Data, Information Modelling and Databases, Software Engineering",
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
          "NLI Baseline Evaluation: A cross-lingual XLM-RoBERTa NLI model evaluates the semantic consistency between source content and the generated summaries. It specifically evaluates intrinsic hallucinations, tracking errors defined strictly as direct contradictions of the provided source metadata and explicitly excluding external factual additions.  ", 
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
          "Knowledge Graph Interventions:The integration of the MusicBrainz database successfully resolved extrinsic hallucinations, providing deterministic overrides for 5 atomic claims related to artists' geographic origins.",
          "THe sensitivity Trade-off: The zero-tolerance min-pooling approach resulted in a 47.37% false positive rate, as the highly conservative model occasionally flagged verifiable claims as intrinsic contradictions due to minor lexical differences."
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
      description: "Developed a full-stack data validation application designed to clean, verify, and visualize water level measurement data for Verbelco. The tool processes raw measurement inputs through a pipeline of configurable validation methods, including static rules that dynamically adjust based on the technical specifications of the measurement tubes",
      sections: [
        {
          title: "Project Overview",
          body: ["Developed a full-stack data validation application designed to clean, verify, and visualize water level measurement data for Verbelco. The tool processes raw measurement inputs through a pipeline of configurable validation methods, including static rules that dynamically adjust based on the technical specifications of the measurement tubes."]
        },
        {
          title: "Key Features & Contributions:",
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

    },
  ],
}