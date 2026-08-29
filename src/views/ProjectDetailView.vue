<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getResumeData } from '@/data'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const route = useRoute()
const { t, locale } = useI18n()

// 1. Grab the dynamic ID from the URL (e.g., 'portfolio-architecture')
const projectId = route.params.id as string

// 2. Find the matching project in your data dynamically with safe fallback
const project = computed(() => {
  const currentData = getResumeData(locale.value)
  return currentData.projects.find(p => p.id === projectId)
})

const isLangTransitioning = ref(false)
watch(locale, () => {
  isLangTransitioning.value = true
  setTimeout(() => {
    isLangTransitioning.value = false
  }, 280)
})
</script>

<template>
  <main class="project-wrap">
    
    <div class="detail-nav-bar no-print">
      <RouterLink to="/" class="highlight-text back-link">
        &larr; {{ $t('nav.backToResume') }}
      </RouterLink>

      <div class="right-utilities">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
    
    <div :class="{ 'lang-crossfade': isLangTransitioning }">
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
    </div>
  </main>
</template>

<style scoped>
.project-wrap {
  background-color: var(--card-bg);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px var(--shadow-color, rgba(8, 7, 8, 0.05));
  transition: background-color 0.3s ease;
}

.detail-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.back-link {
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
}

.right-utilities {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

/* Print optimization */
@media print {
  .detail-nav-bar,
  .no-print {
    display: none !important;
  }
}
</style>