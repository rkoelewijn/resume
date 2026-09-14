// src/data/nl.ts
import type { ResumeData } from './types'
import { assets, sharedBasics } from './shared'

export const nlData: ResumeData = {
  basics: {
    ...sharedBasics,
    location: "Nijmegen, Gelderland, Nederland",
    summary: "Masterstudent Data Science & Artificial Intelligence en Information Sciences aan de Radboud Universiteit en Data Consultant. Gericht op het overbruggen van de kloof tussen complexe data-architectuur en bruikbare bedrijfsstrategie. Ervaren in het vertalen van ruwe data naar schaalbare oplossingen door expertise in Python, big data, machine learning, business intelligence en full-stack frameworks in te zetten voor het bouwen van robuuste analysetools en dynamische dashboards.",
  },
  education: [
    {
      degree: "MSc Data Science & AI",
      institution: "Radboud Universiteit",
      timeline: "2026 - Heden",
      summary: "Als specialisatie binnen Computing Science richt dit programma zich op het omzetten van real-world datasets in inzichten en softwaretools. Het combineert machine learning, probabilistisch modelleren en information retrieval met praktische ontwikkeling, met de nadruk op het ontwerpen en programmeren van op maat gemaakte algoritmen. Naast de technische implementatie behandelt het curriculum databescherming, wet- en regelgeving en maatschappelijke impact, waarmee afgestudeerden worden voorbereid op het bouwen van verantwoorde dataoplossingen voor organisaties.",
      logo: assets.radboud.logoLight,
    },
    {
      degree: "MSc Information Sciences",
      institution: "Radboud Universiteit",
      timeline: "2026 - Heden",
      summary: "Onderwezen in samenwerking met de Faculteit der Managementwetenschappen, richt dit programma zich op de afstemming tussen technologie en bedrijfsstrategie. Het behandelt hoe data-infrastructuur kan worden vertaald naar praktische bedrijfsinzichten door software- en systeemkennis te combineren met managementprincipes. Het curriculum legt de focus op enterprise-architectuur, informatiebeveiliging en governance, wat afgestudeerden voorbereidt op het leiden van digitale transformaties en IT-implementaties binnen organisaties.",
      logo: assets.radboud.logoLight,
    },
    {
      logo: assets.radboud.logoLight,
      degree: "BSc Computing Science (Specialisatie: Data & Software Science)",
      institution: "Radboud Universiteit",
      timeline: "Sep 2022 - Juli 2026",
      summary: "De bacheloropleiding aan de Radboud Universiteit slaat een brug tussen strikte wiskundige logica en praktische software engineering, gericht op hoe informatie structureel wordt gerepresenteerd, verwerkt en beveiligd. In plaats van alleen te focussen op code-syntaxis, behandelt het curriculum de architectonische fundamenten van grootschalige softwaresystemen, datamodellering, netwerkinfrastructuur en cybersecurityprotocollen.",
      gpa: assets.radboud.gpa,
      projectId: assets.radboud.projectId,
      minor: "Bedrijfskunde",
      courses: "Data Analysis, Introduction to Artificial Intelligence, Algorithms and Data Structures, Data Mining, Big Data, Information Modelling and Databases, Software Engineering",
      details: "Scriptieonderzoek uitgevoerd naar het detecteren van hallucinaties in LLMs."
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
      timeline: "Aug 2024 - heden",
      description: "Werkzaam als <strong>Data Consultant</strong> gespecialiseerd in <strong>Data-analyse, Management en Dashboarding</strong>. Verantwoordelijk voor hoogwaardige rapportageoplossingen, waaronder een <em>Power BI</em> dashboard om alle KPI's van <span class=\"highlight-text\">GROND'G</span> te monitoren en een gelaagd <em>Power BI</em> dashboard voor <span class=\"highlight-text\">Irado</span> en de <span class=\"highlight-text\">Gemeente Schiedam</span> om trends inzichtelijk te maken en besluitvorming te faciliteren.",
      additional: "Bijgedragen aan het Talent Experience team door te ondersteunen bij talentacquisitie en kandidaatselectie."
    },
    {
      ...assets.thalia,
      role: "Secretaris (Bestuurslid)",
      company: "Studievereniging Thalia",
      timeline: "Sep 2024 - Sep 2025",
      description: "Gediend als <strong>Bestuurslid</strong> voor de <span class=\"highlight-text\">studievereniging Computing Science</span> in Nijmegen. Verantwoordelijkheden omvatten het opstellen van nieuwsbrieven, het notuleren van officiële bestuursvergaderingen en het <strong>beheren</strong> van alle interne <strong>informatiekanalen</strong>.",
      additional: "Direct bijgedragen aan de commissies Partner, Evenementen, Design en Bestuurssollicitatie."
    }
  ],
  side_jobs: [
    {
      ...assets.tapasia,
      role: "Gastheer",
      company: "TapAsia",
      timeline: "Apr 2021 - Jun 2025",
      description: "Verwelkomen van gasten, aansturen van het bedienend personeel en oplossen van operationele uitdagingen tijdens shifts."
    },
    {
      ...assets.albertHeijn,
      role: "Winkelmedewerker",
      company: "Albert Heijn",
      timeline: "Mrt 2019 - Apr 2021",
      description: "Vakken vullen, zorgen voor een schone en georganiseerde winkelomgeving en klanten assisteren bij het vinden van producten."
    }
  ],
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
    { name: 'DAX / M', category: 'data', level: 'Gevorderd', percentage: 75 },
    { name: 'LaTeX', category: 'systems', level: 'Expert', percentage: 100 },
    { name: 'C / C++', category: 'systems', level: 'Gevorderd', percentage: 75 },
    { name: 'JavaScript / TypeScript', category: 'web', level: 'Gevorderd', percentage: 75 },
    { name: 'HTML / CSS', category: 'web', level: 'Vaardig', percentage: 50 },
  ],
  categorized_skills: [
    {
      title: 'Data Science & Analytics',
      items: [
        { area: 'Datamodellering & Verwerking', technologies: 'Polars, NumPy' },
        { area: 'Machine Learning', technologies: 'scikit-learn, Anomaly Detection, LLM Evaluatie' },
        { area: 'Business Intelligence', technologies: 'Power BI' },
        { area: 'Ontwikkeling & Infrastructuur', technologies: 'Git, Linux / UNIX (Bash)' },
        { area: 'Spreadsheet Analytics', technologies: 'Excel' }
      ]
    },
    {
      title: 'Consulting & Bedrijfsvoering',
      items: [
        { area: 'Projectuitvoering', technologies: 'Stakeholdermanagement, Requirements Gathering, Projectmanagement' },
        { area: 'Zakelijke Communicatie', technologies: 'PowerPoint, Executive Reporting' },
        { area: 'Operationeel', technologies: 'Talentacquisitie Workflows' }
      ]
    },
    {
      title: 'Creatieve Vaardigheden',
      items: [
        { area: 'Videoproductie', technologies: 'Adobe Premiere Pro' },
        { area: 'Grafisch Ontwerp', technologies: 'Adobe Illustrator, Adobe Photoshop' }
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