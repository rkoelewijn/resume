// src/data/nl.ts
import type { ResumeData } from './types'
import { assets, sharedBasics } from './shared'

export const nlData: ResumeData = {
  basics: {
    ...sharedBasics,
    title: "Data Consultant & Masterstudent Data Science & AI | Information Sciences",
    location: "Nijmegen, Gelderland, Nederland",
    summary: "Masterstudent Data Science & AI en Information Sciences aan de Radboud Universiteit en Data Consultant. Gespecialiseerd in het vertalen van complexe data-infrastructuren naar strategische stuurinformatie en schaalbare dataoplossingen. Ervaren in end-to-end data-architectuur, enterprise dashboarding in Power BI (DAX, Power Query) en machine learning in Python.",
  },
  education: [
    {
      degree: "MSc Data Science & AI",
      institution: "Radboud Universiteit",
      timeline: "2026 - Heden",
      summary: "Focus: Machine Learning, Probabilistische Modellen, Geavanceerd Algoritme-ontwerp, Responsible AI & Datagovernance.",
      logo: assets.radboud.logoLight,
    },
    {
      degree: "MSc Information Sciences",
      institution: "Radboud Universiteit",
      timeline: "2026 - Heden",
      summary: "Focus: Enterprise-architectuur, IT-governance, Strategische Business-IT Afstemming & Digitale Transformatie.",
      logo: assets.radboud.logoLight,
    },
    {
      logo: assets.radboud.logoLight,
      degree: "BSc Computing Science (Specialisatie: Data & Software Science)",
      institution: "Radboud Universiteit",
      timeline: "Sep 2022 - Juli 2026",
      summary: "Fundament in software-architectuur, datamodellering, grootschalige softwaresystemen en algoritmiek.",
      gpa: assets.radboud.gpa,
      projectId: assets.radboud.projectId,
      minor: "Bedrijfskunde",
      courses: "Data Analysis, Artificial Intelligence, Algorithms and Data Structures, Data Mining, Big Data, Information Modelling and Databases, Software Engineering",
      details: "Bachelorscriptie: Ontwikkelde en evalueerde machine learning-modellen in Python ter detectie van hallucinaties in LLMs met behulp van een hybride NLI- en kennisgraaf-architectuur (MusicBrainz), resulterend in 100% foutdetectie (recall) en een F1-score van 0,86."
    }
  ],
  relevant_experience: [
    {
      ...assets.studentConsultant,
      role: "Data Consultant",
      company: "Student Consultant",
      timeline: "Aug 2024 - heden",
      description: "Ontwikkelde en implementeerde schaalbare <strong>Power BI-dashboards</strong> voor diverse publieke en private opdrachtgevers (o.a. <span class=\"highlight-text\">Gemeente Schiedam</span>, <span class=\"highlight-text\">Irado</span> en <span class=\"highlight-text\">GROND'G</span>), waarbij complexe datasets via <em>Power Query</em> en geavanceerde <em>DAX-berekeningen</em> werden getransformeerd tot strategische, gelaagde stuurinformatie.",
      additional: "Automatiseerde datapijplijnen en rapportagestromen ter versnelling van besluitvorming; ondersteunde tevens het Talent Experience-team bij talentacquisitie."
    },
    {
      ...assets.thalia,
      role: "Secretaris (Bestuurslid)",
      company: "Studievereniging Thalia",
      timeline: "Sep 2024 - Sep 2025",
      description: "Beheerde de volledige interne en externe communicatiestrategie voor <strong>800+ leden</strong> en coördineerde 4 strategische commissies (waaronder Partner en Evenementen). Stuurde cross-functionele teams aan bij de organisatie van grootschalige evenementen, wat resulteerde in verhoogde stakeholderbetrokkenheid en soepele operationele executie.",
      additional: "Verantwoordelijk voor corporate partnercommunicatie, contractbeheer en de optimalisatie van interne informatiestromen."
    }
  ],
  side_jobs: [],
  training: [
    {
      title: "Structured Slides & Analysis",
      organization: "Student Consultant",
      date: "Mei 2026"
    },
    {
      title: "Change Management for Digital Processes in the Age of AI",
      organization: "&Samhoud",
      date: "Mei 2026"
    },
    {
      title: "Operating Model & Capability Thinking",
      organization: "Capgemini Invent",
      date: "Mrt 2026"
    },
    {
      title: "Effective PowerPoints",
      organization: "Student Consultant",
      date: "Feb 2026"
    },
    {
      title: "Project- en Stakeholdermanagement Training",
      organization: "Student Consultant",
      date: "Okt 2025"
    },
    {
      title: "Core Training - Basis Consultancy Vaardigheden",
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
      title: "Detecteren van Hallucinaties in LLM-samenvattingen",
      category: 'data',
      type: "Academische Scriptie",
      tech: ["Python", "scikit-learn", "Machine Learning", "NumPy", "LaTeX"],
      description: "Een geautomatiseerde evaluatiepijplijn ontwikkeld om hallucinaties in grote taalmodellen (LLMs) te detecteren.",
      sections: [
        {
          title: "Projectoverzicht",
          body: ["Dit project is een onderzoeksgericht evaluatiekader ontwikkeld als onderdeel van een bachelorscriptie. Het is ontworpen om geautomatiseerde concertnieuwsbrief-outputs van Large Language Models (LLMs) te valideren. Door Natural Language Inference (NLI) te combineren met een deterministische muziekkennisgraaf, detecteert de tweefasige evaluatiearchitectuur zowel semantische onnauwkeurigheden als feitelijke inconsistenties in gegenereerde evenementensamenvattingen."]
        },
        {
          title: "Kernfunctionaliteiten & Architectuur",
          isList: true,
          body: [
            "Dataverzameling & Verwerking: De pijplijn gebruikt een Corpus Builder om evenementgegevens van de website van poppodium Doornroosje te scrapen en een gestructureerd evaluatiecorpus op te bouwen. Een Claims Decomposer gebruikt spaCy dependency parsing om atomaire claims uit de gegenereerde samenvattingen te extraheren zonder dure NLI-inferentie aan te roepen.",
            "NLI Baseline Evaluatie: Een meertalig XLM-RoBERTa NLI-model evalueert de semantische consistentie tussen de broninhoud en de gegenereerde samenvattingen. Het evalueert specifiek intrinsieke hallucinaties en volgt fouten die strikt zijn gedefinieerd als directe tegenspraken van de verstrekte bronmetadata, met expliciete uitsluiting van externe feitelijke toevoegingen.",
            "Hybride Kennisgraaf Verificatie: Om extrinsieke hallucinaties te detecteren, wordt de NLI-redenering gecombineerd met niet-parametrische feitenverificatie via de MusicBrainz API.",
            "Pijplijnbeheer: Een interactieve Master Control CLI ondersteunt sequentiële end-to-end uitvoering van de pijplijn, terwijl een testmodus snelle dry-runs mogelijk maakt voor foutopsporing en ontwikkeling."
          ]
        },
        {
          title: "Prestaties & Belangrijkste Resultaten",
          isList: true,
          body: [
            "Perfecte Recall: Met behulp van een strikte min-pooling aggregatiestrategie behaalde de pijplijn een foutdetectiepercentage van 100% met nul fout-negatieven.",
            "Algemene Statistieken: Het systeem registreerde een F1-score van 0,8615 en een algehele nauwkeurigheid van 80,85% op zinsniveau.",
            "Kennisgraaf Interventies: De integratie van de MusicBrainz-database loste extrinsieke hallucinaties succesvol op en zorgde voor deterministische correcties voor 5 atomaire claims met betrekking tot de geografische herkomst van artiesten.",
            "Gevoeligheidsafweging: De nultolerantie min-pooling benadering resulteerde in een fout-positief percentage van 47,37%, doordat het conservatieve model verifieerbare claims af en toe als intrinsieke tegenstrijdigheden markeerde vanwege kleine lexicale verschillen."
          ]
        },
        {
          title: "Beperkingen & Toekomstperspectief",
          isList: true,
          body: [
            "Scopebeperkingen: De MusicBrainz API-integratie is momenteel beperkt tot het valideren van de attributen Gebied, Land en Genre. Het systeem heeft daarnaast moeite met het verifiëren van subjectieve genrebeschrijvingen die stilistisch afwijken van strikte community-tags.",
            "Verdere Ontwikkeling: Toekomstig werk omvat het verkennen van dynamische aggregatielogica om een hoge foutdetectie te behouden en tegelijkertijd het aantal fout-positieven te verminderen. Verdere iteraties testen domeinoverschrijdende toepasbaarheid en integreren bredere databases zoals Wikidata om temporele en entiteitsclaims buiten de huidige scope te verifiëren."
          ]
        }
      ]
    },
    {
      id: "portfolio-architecture",
      title: "Interactief Vue.js Portfolio",
      category: 'web',
      type: "Frontend Architectuur & API Integratie",
      tech: ["Vue 3", "TypeScript", "GitHub API", "CSS Variables"],
      description: "Een reactieve, tweetalige portfolio-applicatie vanaf de basis opgebouwd om frontend-architectuur en live data-integratie te demonstreren.",
      sections: [
        {
          title: "Context & Probleemstelling",
          body: ["Traditionele cv's zijn statisch en tonen geen daadwerkelijke programmeervaardigheden. Het doel van dit project was om een modern, interactief portfolio te bouwen dat fungeert als een live case study van mijn frontend-architectuur en data-integratievaardigheden, terwijl het tevens volledig voldoet aan gangbare wervingsstandaarden (PDF-export)."]
        },
        {
          title: "Technische Architectuur",
          isList: true,
          body: [
            "Live Gegevensextractie: De GitHub REST API geïntegreerd via Vue's Composition API om dynamisch de meest recent bijgewerkte repositories weer te geven.",
            "Statusbeheer: Reactieve meertalige ondersteuning (Engels/Nederlands) en een dynamische Dark/Light-thema schakelaar geïmplementeerd met Vue refs en CSS custom properties.",
            "Printoptimalisatie: Een specifieke @media print stylesheet ontwikkeld die interactieve UI-elementen verwijdert en een contrastrijke lichte modus afdwingt voor ATS-vriendelijke PDF-generatie."
          ]
        },
        {
          title: "Zakelijke Impact",
          body: ["Deze architectuur elimineert de noodzaak om afzonderlijke codebases te onderhouden voor een persoonlijke website en een printbaar cv. Door de datastructuur te centraliseren in TypeScript-interfaces kan het cv in één enkel databestand worden bijgewerkt en direct worden uitgerold, wat persoonlijke branding en projectpresentatie aanzienlijk stroomlijnt."]
        }
      ]
    },
    {
      id: "verbelco-waterweb",
      title: "Verbelco Waterweb Validatieproject",
      category: 'data',
      type: "Software Engineering Project",
      tech: ["Python", "Polars", "NumPy", "Git", "Outlier Detection"],
      description: "Een full-stack datavalidatie-applicatie ontwikkeld voor het opschonen, verifiëren en visualiseren van waterstandsmetingen voor Verbelco. De tool verwerkt ruwe meetgegevens via een pijplijn van configureerbare validatiemethoden, inclusief statische regels die dynamisch aanpassen op basis van de technische specificaties van de meetbuizen.",
      sections: [
        {
          title: "Projectoverzicht",
          body: ["Een full-stack datavalidatie-applicatie ontwikkeld voor het opschonen, verifiëren en visualiseren van waterstandsmetingen voor Verbelco. De tool verwerkt ruwe meetgegevens via een pijplijn van configureerbare validatiemethoden, inclusief statische regels die dynamisch aanpassen op basis van de technische specificaties van de meetbuizen."]
        },
        {
          title: "Belangrijkste Kenmerken & Bijdragen",
          isList: true,
          body: [
            "Duaal Interface Ontwerp: Zowel een Command Line Interface (CLI) voor geautomatiseerde batchverwerking als een lokale web-UI voor interactieve data-analyse gebouwd.",
            "Validatie-engine: Een robuuste validatiepijplijn ontwikkeld waarin gebruikers specifieke validatiemethoden kunnen in- of uitschakelen. Het systeem vergelijkt meetgegevens met externe technische specificatiebestanden om afwijkingen te signaleren.",
            "Interactieve Datavisualisatie: Een dynamische grafiekmodule geïntegreerd in de web-UI die de gevalideerde resultaten visualiseert, waardoor gebruikers kunnen inzoomen, filteren en assen aanpassen om trends beter te begrijpen en fouten te lokaliseren.",
            "Configuratiebeheer: Een flexibel .toml-configuratiesysteem geïmplementeerd waarmee gebruikers eenvoudig de parameters van de validatiemethoden kunnen aanpassen zonder de broncode te wijzigen.",
            "Moderne Tooling: Gebruikgemaakt van uv voor snel, reproduceerbaar Python-omgevingsbeheer en dependency resolution, wat zorgt voor een soepele overdracht en eenvoudige installatie voor toekomstige ontwikkelaars of opdrachtgevers."
          ]
        },
        {
          title: "Zakelijke Impact",
          body: ["De applicatie vermindert de handmatige inspanning die nodig is om waterstandsgegevens te verifiëren aanzienlijk. Door zowel een programmatische CLI voor datapijplijnen als een intuïtief visueel dashboard voor eindgebruikers te bieden, overbrugt de tool de kloof tussen complexe data engineering en toegankelijke business intelligence."]
        }
      ]
    }
  ],
  programming_skills: [
    { name: 'Python', category: 'data', level: 'Expert', percentage: 100 },
    { name: 'DAX / Power Query (M)', category: 'data', level: 'Gevorderd', percentage: 85 },
    { name: 'SQL', category: 'data', level: 'Gevorderd', percentage: 80 },
    { name: 'C / C++', category: 'systems', level: 'Gevorderd', percentage: 75 },
    { name: 'LaTeX', category: 'systems', level: 'Gevorderd', percentage: 75 },
    { name: 'JavaScript / TypeScript', category: 'web', level: 'Vaardig', percentage: 70 },
    { name: 'HTML / CSS', category: 'web', level: 'Vaardig', percentage: 60 },
  ],
  categorized_skills: [
    {
      title: 'Data Science & Machine Learning',
      items: [
        { area: 'Datamodellering & Verwerking', technologies: 'Polars, NumPy, Pandas' },
        { area: 'Machine Learning & AI', technologies: 'scikit-learn, LLM Evaluatie, Natural Language Inference (NLI), Outlier Detection' }
      ]
    },
    {
      title: 'Business Intelligence & Analytics',
      items: [
        { area: 'BI & Dashboarding', technologies: 'Power BI, DAX, Power Query (M), KPI Frameworks, Datamodellering' },
        { area: 'Spreadsheet Analytics', technologies: 'Geavanceerd Excel' }
      ]
    },
    {
      title: 'Software- & Systeemengineering',
      items: [
        { area: 'Programmeertalen', technologies: 'Python, C / C++, TypeScript, JavaScript, SQL' },
        { area: 'Tools & Infrastructuur', technologies: 'Git, Linux / UNIX (Bash), REST APIs, uv, LaTeX' }
      ]
    },
    {
      title: 'Consulting & Strategie',
      items: [
        { area: 'Projectuitvoering', technologies: 'Stakeholdermanagement, Requirements Gathering, Agile Delivery' },
        { area: 'Zakelijke Communicatie', technologies: 'Executive Reporting, PowerPoint, Presentaties' }
      ]
    },
    {
      title: 'Talen',
      items: [
        { area: 'Nederlands', technologies: 'Moedertaal' },
        { area: 'Engels', technologies: 'C2 Cambridge Niveau' }
      ]
    }
  ]
}