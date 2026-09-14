<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { getResumeData } from '@/data'
import { programmingSkills, categorizedSkills, sharedBasics } from '@/data/shared'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

// 1. Initialize i18n
const { t, locale } = useI18n()

// 2. Link data dynamically to current locale with safe fallback
const resumeData = computed(() => getResumeData(locale.value))

// Create a filtered list of just the featured projects
const featuredProjects = computed(() => {
  const featuredIds = ['portfolio-architecture', 'verbelco-waterweb']
  return resumeData.value.projects.filter(p => featuredIds.includes(p.id))
})

// Trigger Print to PDF
const downloadPDF = () => {
  animateSkills.value = true
  setTimeout(() => {
    window.print()
  }, 50)
}

// --- GITHUB API INTEGRATION ---
interface GithubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

const repos = ref<GithubRepo[]>([])
const loadingRepos = ref(true)
const repoError = ref(false)

const githubUsername = 'rkoelewijn'

// --- SKILLS ANIMATION & INTERSECTION OBSERVER LOGIC ---
const animateSkills = ref(false)

onMounted(async () => {
  // 1. Trigger skill bar animation
  setTimeout(() => {
    animateSkills.value = true
  }, 300)

  // 2. Observe fade-in sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.15
  })

  const elements = document.querySelectorAll('.fade-in-section')
  elements.forEach((el) => observer.observe(el))

  // 3. Execute GitHub fetch
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=3`)
    if (!response.ok) throw new Error('Failed to fetch')
    repos.value = await response.json()
  } catch (e) {
    repoError.value = true
  } finally {
    loadingRepos.value = false
  }
})

// Non-destructive transition state on language change
const isLangTransitioning = ref(false)

watch(locale, () => {
  isLangTransitioning.value = true
  setTimeout(() => {
    isLangTransitioning.value = false
  }, 280)
})
</script>

<template>
  <div v-if="resumeData && resumeData.basics" class="resume-wrapper">
    
    <div class="utility-bar no-print" role="toolbar" aria-label="Resume utilities">
      <button @click="downloadPDF" class="theme-btn secondary-btn save-pdf-btn" :title="$t('nav.savePdf')" :aria-label="$t('nav.savePdf')">
        <font-awesome-icon icon="file-pdf" class="pdf-btn-icon" aria-hidden="true" />
        <span>{{ $t('nav.savePdf') }}</span>
      </button>
      
      <div class="right-utilities">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>

    <!-- Non-destructive Language Cross-Fade Body -->
    <div class="resume-main-body" :class="{ 'lang-crossfade': isLangTransitioning }">
      <header class="header-section">
        <div class="header-content">
          <div class="text-side">
            <h1>{{ resumeData.basics.name }}</h1>
            <h2>{{ resumeData.basics.title }}</h2>

            <!-- Interactive Quick Links (Screen Only) -->
            <div class="quick-links no-print" role="navigation" aria-label="Social and contact links">
              <a :href="sharedBasics.linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="Visit LinkedIn profile (opens in new tab)">
                <font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true" />
              </a>
              <a :href="sharedBasics.github" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="Visit GitHub profile (opens in new tab)">
                <font-awesome-icon :icon="['fab', 'github']" aria-hidden="true" />
              </a>
              <a :href="'mailto:' + sharedBasics.email" title="Contact" aria-label="Send email to Ruben Koelewijn">
                <font-awesome-icon icon="envelope" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div class="photo-container">
             <img v-if="resumeData.basics.photo" :src="resumeData.basics.photo" alt="Ruben Koelewijn" class="profile-photo" />
          </div>
        </div>

        <p class="summary-text">{{ resumeData.basics.summary }}</p>

        <!-- Printable Contact Info Row (Print Only - Underneath Summary & Centered) -->
        <div class="print-contact-info print-only">
          <span v-if="sharedBasics.email" class="print-contact-item">
            <font-awesome-icon icon="envelope" class="print-contact-icon" /> {{ sharedBasics.email }}
          </span>
          <span v-if="sharedBasics.phone" class="print-contact-item">
            <span class="print-contact-symbol">☎</span> {{ sharedBasics.phone }}
          </span>
          <span v-if="resumeData.basics.location" class="print-contact-item">
            <span class="print-contact-symbol">📍</span> {{ resumeData.basics.location }}
          </span>
          <span v-if="sharedBasics.linkedin" class="print-contact-item">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="print-contact-icon" /> linkedin.com/in/ruben-koelewijn
          </span>
          <span v-if="sharedBasics.github" class="print-contact-item">
            <font-awesome-icon :icon="['fab', 'github']" class="print-contact-icon" /> github.com/rkoelewijn
          </span>
        </div>
      </header>

    <hr />

<section>
 <h3 class="section-title fade-in-section">{{ $t('headers.experience') }}</h3>
  
  <div class="timeline-container fade-in-section">
    <div v-for="job in resumeData.relevant_experience" :key="job.company" class="timeline-item">
      
      <div 
        :class="[
          'timeline-dot', 
          (job.timeline.includes('present') || job.timeline.includes('heden')) ? 'is-current' : 'is-past'
        ]"
      ></div>

      <div class="timeline-content">
        <div class="card-header">
          <img 
            v-if="job.logo" 
            :src="job.logo" 
            :alt="job.company + ' logo'" 
            class="company-logo" 
          />
          <div>
            <strong>{{ job.role }}</strong> {{ $t('labels.at') }} 
            <a v-if="job.companyUrl" :href="job.companyUrl" target="_blank" rel="noopener noreferrer" class="highlight-text">
              {{ job.company }}
            </a>
            <span v-else class="highlight-text">{{ job.company }}</span>
            <br />
            <small class="timeline">{{ job.timeline }}</small>
          </div>
        </div>
        <p class="description-main-text" v-html="job.description"></p>
        <p v-if="job.additional" class="secondary-text" style="margin-top: -0.8rem">
          <em>{{ $t('labels.additionalResponsibilities') }}</em>: {{ job.additional }}
        </p>
      </div>
    </div>
  </div>
</section>

<section>
      <h3 class="section-title fade-in-section">{{ $t('headers.education') }}</h3>
      
      <div class="timeline-container fade-in-section">
        <div v-for="edu in resumeData.education" :key="edu.degree" class="timeline-item">
          
          <div 
            :class="[
              'timeline-dot', 
              (edu.timeline.includes('Present') || edu.timeline.includes('Heden')) ? 'is-current' : 'is-past'
            ]"
          ></div>

          <div class="timeline-content">
            <div class="card-header">
              <img 
                v-if="edu.logo" 
                :src="edu.logo" 
                :alt="edu.institution + ' logo'" 
                class="company-logo" 
              />
              <div>
              <div>
                <strong>{{ edu.degree }}</strong>
                <span v-if="edu.gpa" class="gpa-badge"> 
                  ({{ $t('labels.gpa') }}: {{ edu.gpa }})
                </span>
                <br />
                {{ edu.institution }} <br />
                <small class="timeline">{{ edu.timeline }}</small>
              </div>
            </div>
            </div>
            <div class="education-details" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">
              <p v-if="edu.summary" class="description-main-text">{{ edu.summary }}</p>
              <p v-if="edu.minor" class="minor-text"><em>{{ $t('labels.minor') }}</em> {{ edu.minor }}</p>
              <p v-if="edu.courses" class="secondary-text"><em>{{ $t('labels.keyCourses') }}</em> {{ edu.courses }}</p>
              <p v-if="edu.details" class="secondary-text">{{ edu.details }}</p>
              
              <div v-if="edu.projectId" class="no-print" style="margin-top: 0.5rem;">
                <RouterLink :to="'/' + edu.projectId" class="highlight-text" style="font-size: 0.85rem;">
                  {{ $t('labels.viewThesis') }} &rarr;
                </RouterLink>
              </div>
            </div> 
          </div> </div> </div></section>
    <hr />

<section class="fade-in-section no-print" style="margin-bottom: 3rem;">
  <h3 class="section-title">{{ $t('headers.featuredProjects') }}</h3>
      
  <ul class="project-list">
    <li 
      v-for="project in featuredProjects" 
      :key="project.id" 
      class="card"
      :class="'border-' + project.category"
    > 
      <div class="project-header">
        <strong>{{ project.title }}</strong> 
      </div>
      
      <div class="tech-tags" style="margin: 0.8rem 0;">
        <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>

      <p class="additional-text">{{ project.description }}</p>

      <RouterLink :to="'/' + project.id" class="highlight-text">
        {{ $t('labels.viewProject') }} &rarr;
      </RouterLink>
    </li>
  </ul>
</section>

    <section class="fade-in-section no-print">
      <h3 class="section-title">{{ $t('headers.github') }}</h3>
      
      <div v-if="loadingRepos" class="secondary-text">{{ $t('labels.loading') }}</div>
      <div v-else-if="repoError" class="secondary-text">Unable to load GitHub data at this time.</div>
      
      <div v-else class="github-grid">
        <a 
          v-for="repo in repos" 
          :key="repo.id" 
          :href="repo.html_url" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="card-interactive"
        >
          <strong>{{ repo.name }}</strong>
          <p class="secondary-text" style="margin: 0.5rem 0;">
            {{ repo.description || $t('labels.noDescription') }}
          </p>
          
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span v-if="repo.language" class="tech-tag">
              {{ repo.language }}
            </span>
            <span class="secondary-text" style="font-size: 0.8rem;">⭐ {{ repo.stargazers_count }}</span>
          </div>
        </a>
      </div>
    </section>

    <template v-if="resumeData.side_jobs && resumeData.side_jobs.length > 0">
      <hr class="no-print" />
      <section class="fade-in-section">
        <h3 class="section-title">{{ $t('headers.sideJobs') }}</h3>
        <ul class="compact-list fade-in-section">
          <li v-for="job in resumeData.side_jobs" :key="job.company" class="compact-item">
             <div class="card-header">
               <img v-if="job.logo" :src="job.logo" :alt="job.company + ' logo'" class="company-logo-small" />
               <div>
                 <strong>{{ job.role }}</strong> {{ $t('labels.at') }} 
                 <a v-if="job.companyUrl" :href="job.companyUrl" target="_blank" rel="noopener noreferrer" class="highlight-text">{{ job.company }}</a>
                 <span v-else>{{ job.company }}</span> 
                 <span class="timeline">({{ job.timeline }})</span>
               </div>
             </div>
          </li>
        </ul>
      </section>
    </template>

    <hr />

    <section class="fade-in-section">
      <h3 class="section-title">{{ $t('headers.training') }}</h3>
      <ul class="compact-list">
        <li v-for="course in resumeData.training" :key="course.title">
          <strong>{{ course.title }}</strong> - {{ course.organization }} ({{ course.date }})
        </li>
      </ul>
    </section>

    <section class="fade-in-section">
      <h3 class="section-title">{{ $t('headers.skills') }}</h3>
      <div class="isolated-skills-wrapper no-print">
        <div class="isolated-bars-container">
          <div v-for="skill in (resumeData.programming_skills || programmingSkills)" :key="skill.name" class="isolated-skill-row">
            <div class="isolated-skill-name">{{ skill.name }}</div>
            <div class="isolated-bar-bg">
              <div 
                class="isolated-bar-fill"
                :class="'color-' + skill.category" 
                :style="{ width: animateSkills ? skill.percentage + '%' : '0%', '--skill-pct': skill.percentage + '%' }"
              >
                <span class="isolated-bar-label" :class="{ 'isolated-show-label': animateSkills }">
                  {{ skill.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="additional-skills-grid fade-in-section">
        <div 
          v-for="category in (resumeData.categorized_skills || categorizedSkills)" 
          :key="category.title" 
          class="skill-category-block"
        >
          <h4 class="category-title">{{ category.title }}</h4>
          <ul class="category-list">
            <li v-for="item in category.items" :key="item.area" class="category-list-item">
              <span class="skill-area">{{ item.area }}:</span> 
              <span class="skill-tech">{{ item.technologies }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  </div>

  <section class="contact-section fade-in-section no-print" style="margin: 2rem 0 2rem;" aria-labelledby="connect-heading">
    <h3 id="connect-heading" class="section-title" style="margin-top: -1rem;">{{ $t('headers.connect') }}</h3>
    <div class="contact-links">
      <a :href="'mailto:'+ sharedBasics.email" class="btn" aria-label="Send email to Ruben Koelewijn">{{ $t('labels.sendEmail') }}</a>
      <a :href="sharedBasics.linkedin" target="_blank" rel="noopener noreferrer" class="secondary-btn" aria-label="View LinkedIn profile (opens in new tab)">{{ $t('labels.viewLinkedIn') }}</a>
    </div>
  </section>
</template>

<style scoped>
/* Contact Section */
.contact-section {
  text-align: center;
  padding: 3rem;
  background-color: var(--card-bg, #f9f9f9);
  border-radius: 12px;
  border: 1px solid var(--divider, #eee);
}

.contact-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* --- ADDITIONAL SKILLS GRID --- */
.additional-skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--divider, #eee);
}

@media (min-width: 768px) {
  .additional-skills-grid {
    grid-template-columns: 1fr 1fr; 
  }
}

.skill-category-block {
  display: flex;
  flex-direction: column;
}

.category-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-main, #333);
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.category-list-item {
  font-size: 0.9rem;
  line-height: 1.4;
}

.skill-area {
  font-weight: 600;
  color: var(--text-main, #333);
}

.skill-tech {
  color: var(--text-muted, #666);
  margin-left: 4px;
}

/* --- ISOLATED SKILLS BAR CHART --- */
.isolated-skills-wrapper {
  margin: 2rem 0;
  width: 100%;
  max-width: 600px;
}

.isolated-bars-container {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.isolated-skill-row {
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: flex-start;
  margin-bottom: 0.6rem;
}

.isolated-skill-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-main, #333);
}

.isolated-bar-bg {
  width: 100%;
  height: 20px;
  background-color: var(--bar-bg, rgba(0, 0, 0, 0.08)); 
  border-radius: 4px;
  overflow: hidden;
}

.isolated-bar-fill {
  height: 100%;
  background-color: var(--accent-blue, #0056b3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  padding-right: 12px;
  transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1); 
}

.isolated-bar-label {
  font-family: var(--font-mono);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.5s ease 0.8s; 
  margin-right: 1rem;
}

.isolated-show-label {
  opacity: 1;
}

/* Resume Main Container & Header Photo */
.resume-wrapper {
  background-color: var(--card-bg);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px var(--shadow-color, rgba(8, 7, 8, 0.05));
  transition: background-color 0.3s ease;
}

.photo-container {
  flex-shrink: 0;
  width: 220px;
  height: 220px;
  position: relative;
  z-index: 1;
  mask-image: linear-gradient(to right, transparent 0%, black 50%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 50%);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(8, 7, 8, 0.15);
}

@media screen and (max-width: 768px) {
  .header-content {
    flex-direction: column-reverse;
    text-align: center;
  }
  .photo-container {
    width: 180px;
    height: 180px;
    margin-bottom: 1rem;
    mask-image: linear-gradient(to bottom, transparent 0%, black 50%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 50%);
  }
}

/* Experience, Side Jobs & Card Headers */
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.company-logo {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: contain;
  background-color: var(--card-bg);
  padding: 4px;
  border: 1px solid var(--divider);
}

.company-logo-small {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  object-fit: contain;
}

:deep(.highlight-text) {
  color: var(--accent-blue);
  transition: color 0.2s ease;
}

a.highlight-text:hover {
  color: var(--accent-yellow);
}

.timeline {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
}

.gpa-badge {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-blue);
}

.compact-list {
  font-size: 0.95rem;
  color: var(--text-main);
  padding-left: 0;
  list-style: none;
}

.compact-item {
  margin-bottom: 0.8rem;
}

.project-list {
  list-style: none;
  padding: 0 !important;
  margin-left: 0 !important; 
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
}

/* Border Accent Colors */
.border-data { border-left-color: var(--secondary-blue, #0056b3) !important; }
.border-web { border-left-color: var(--secondary-green) !important; }
.border-systems { border-left-color: var(--dark-blue) !important; }

/* Timeline Component */
.timeline-container {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 6px; 
}

.additional-text {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--divider);
}

.timeline-item {
  position: relative;
  padding-left: 30px;
  padding-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: 1px;
  transform: translateX(-50%);
  top: 1.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  z-index: 1;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.timeline-dot.is-past {
  background-color: var(--divider);
  box-shadow: 0 0 8px 2px var(--divider);
}

.timeline-dot.is-current {
  background-color: var(--accent-blue);
  box-shadow: 0 0 8px 2px var(--accent-blue);
}

.timeline-content {
  width: 100%;
}

.github-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>