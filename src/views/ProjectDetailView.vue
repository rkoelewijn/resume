<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { allResumeData } from '../data'

const route = useRoute()
const { t, locale } = useI18n()

// 1. Grab the dynamic ID from the URL (e.g., 'portfolio-architecture')
const projectId = route.params.id as string

// 2. Find the matching project in your data
const project = computed(() => {
  const currentData = allResumeData[locale.value as 'en' | 'nl']
  return currentData.projects.find(p => p.id === projectId)
})
</script>

<template>
  <main class="project-wrap">
    
    <nav style="margin-bottom: 2rem;">
      <RouterLink to="/" class="highlight-text" style="font-weight: bold;">
        &larr; {{ $t('nav.backToResume') }}
      </RouterLink>
    </nav>
    
    <div v-if="project">
      <header style="margin-bottom: 2.5rem; border-bottom: 1px solid var(--divider); padding-bottom: 1.5rem;">
        <h1 class="section-title" style="margin-bottom: 0.5rem;">{{ project.title }}</h1>
        <p class="secondary-text" style="font-size: 1.1rem; font-style: italic;">{{ project.type }}</p>
        
        <div class="tech-tags" style="margin-top: 1rem;">
          <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
      </header>

      <section class="project-body">
        <div v-for="(section, index) in project.sections" :key="index" style="margin-bottom: 2rem;">
          <h3 style="color: var(--accent-blue); margin-bottom: 0.8rem;">{{ section.title }}</h3>
          
          <ul v-if="section.isList" style="padding-left: 1.5rem; color: var(--text-main);">
            <li v-for="(item, i) in section.body" :key="i" style="margin-bottom: 0.5rem; line-height: 1.6;">
              {{ item }}
            </li>
          </ul>
          
          <template v-else>
            <p v-for="(paragraph, i) in section.body" :key="i" style="margin-bottom: 0.8rem; line-height: 1.6; color: var(--text-main);">
              {{ paragraph }}
            </p>
          </template>
        </div>
      </section>
    </div>

    <div v-else style="text-align: center; padding: 4rem 0;">
      <h2>Project Not Found</h2>
      <p class="secondary-text" style="margin-top: 1rem;">The project you are looking for does not exist or has been removed.</p>
    </div>

  </main>
</template>

<style scoped>

.project-page {
  --bg-gradient: linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%);
  
  /* If the wrapper doesn't stretch full height, you can force the background here */
  background: var(--bg-gradient);
  min-height: 100vh;
}

.project-wrap {
  background-color: var(--card-bg);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(8, 7, 8, 0.05);
  transition: background-color 0.3s ease;
}

/* Print optimization */
@media print {
  nav {
    display: none !important;
  }
}
</style>