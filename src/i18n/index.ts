// src/i18n/index.ts
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { 
      backToResume: 'Back to Resume',
      savePdf: 'Save PDF' 
    },
    headers: {
      experience: 'Relevant Experience',
      education: 'Education',
      featuredProjects: 'Featured Projects',
      github: 'Live GitHub Activity',
      sideJobs: 'Side Jobs', // <-- Added
      training: 'Training & Certificates'
    },
    labels: {
      at: 'at',
      gpa: 'GPA',
      keyCourses: 'Key Courses:',
      viewProject: 'View Project Details',
      viewThesis: 'View Thesis Project', // <-- Added
      loading: 'Loading repositories...',
      noDescription: 'No description provided.'
    }
  },
  nl: {
    nav: { 
      backToResume: 'Terug naar CV',
      savePdf: 'Opslaan als PDF' 
    },
    headers: {
      experience: 'Relevante Ervaring',
      education: 'Opleiding',
      featuredProjects: 'Uitgelichte Projecten',
      github: 'Recente GitHub Activiteit',
      sideJobs: 'Bijbanen' // <-- Added
    },
    labels: {
      at: 'bij',
      gpa: 'Gemiddelde',
      keyCourses: 'Relevante Vakken:',
      viewProject: 'Bekijk Projectdetails',
      viewThesis: 'Bekijk Thesis Project', // <-- Added
      loading: 'Repositories laden...',
      noDescription: 'Geen beschrijving beschikbaar.'
    }
  }
}

export const i18n = createI18n({
  legacy: false, // Essential: This enables the Composition API
  locale: 'en',  // Default language
  fallbackLocale: 'en',
  messages
})