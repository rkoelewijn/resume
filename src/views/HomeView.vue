<script setup lang="ts">
import { ref, computed } from 'vue'
import { allResumeData } from '@/data'

const currentLang = ref<'en' | 'nl'>('en')
const resumeData = computed(() => allResumeData[currentLang.value])

// Dark Mode State
const isDarkMode = ref(false)

// Toggle Language
const toggleLang = () => {
  currentLang.value = currentLang.value === 'en' ? 'nl' : 'en'
}

// Toggle Dark Theme
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
  }
}

// Trigger Print to PDF
const downloadPDF = () => {
  window.print()
}
</script>

<template>
  <div v-if="resumeData && resumeData.basics" class="resume-wrapper">
    
    <div class="utility-bar no-print">
      <button @click="downloadPDF" class="theme-btn secondary-btn">
        📄 {{ currentLang === 'en' ? 'Save PDF' : 'Opslaan als PDF' }}
      </button>
      
      <div class="right-utilities">
        <button @click="toggleTheme" class="theme-btn icon-btn" title="Toggle Dark Mode">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button>
        <button @click="toggleLang" class="theme-btn flag-btn" style="display: inline-flex; align-items: center; gap: 0.5rem;">
          <span :class="currentLang === 'en' ? 'fi fi-nl' : 'fi fi-gb'"></span>
          {{ currentLang === 'en' ? 'NL' : 'EN' }}
        </button>
      </div>
    </div>

    <header class="header-section">
      <div class="header-content">
        <div class="text-side">
          <h1>{{ resumeData.basics.name }}</h1>
          <h2>{{ resumeData.basics.title }}</h2>
          <div class="quick-links no-print">
            <a :href="'mailto:' + resumeData.basics.email">✉️ Contact</a>
            <a :href="resumeData.basics.github" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            <a :href="resumeData.basics.linkedin" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          </div>
        </div>
        <img v-if="resumeData.basics.photo" :src="resumeData.basics.photo" alt="Ruben Koelewijn" class="profile-photo" />
      </div>
      <p class="summary-text">{{ resumeData.basics.summary }}</p>
    </header>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Relevant Experience' : 'Relevante Ervaring' }}</h3>
      <div v-for="job in resumeData.relevant_experience" :key="job.company" class="experience-card">
        <div class="card-header">
         <img 
            v-if="job.logoLight" 
            :src="isDarkMode ? (job.logoDark || job.logoLight) : job.logoLight" 
            :alt="job.company + ' logo'" 
            class="company-logo" 
          />
          <div>
            <strong>{{ job.role }}</strong> {{ currentLang === 'en' ? 'at' : 'bij' }} 
            <a v-if="job.companyUrl" :href="job.companyUrl" target="_blank" rel="noopener noreferrer" class="highlight-text">
              {{ job.company }}
            </a>
            <span v-else class="highlight-text">{{ job.company }}</span>
            <br />
            <small class="timeline">{{ job.timeline }}</small>
          </div>
        </div>
        <p style="margin-top: 0.5rem;">{{ job.description }}</p>
      </div>
    </section>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Side Jobs' : 'Bijbanen' }}</h3>
      <ul class="compact-list">
        <li v-for="job in resumeData.side_jobs" :key="job.company" class="compact-item">
           <div class="card-header">
             <img v-if="job.logo" :src="job.logo" :alt="job.company + ' logo'" class="company-logo-small" />
             <div>
               <strong>{{ job.role }}</strong> {{ currentLang === 'en' ? 'at' : 'bij' }} 
               <a v-if="job.companyUrl" :href="job.companyUrl" target="_blank" rel="noopener noreferrer" class="highlight-text">{{ job.company }}</a>
               <span v-else>{{ job.company }}</span> 
               <span class="timeline">({{ job.timeline }})</span>
             </div>
           </div>
        </li>
      </ul>
    </section>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Education' : 'Opleiding' }}</h3>
      <div v-for="edu in resumeData.education" :key="edu.degree" class="experience-card">
        <div class="card-header">
          <img v-if="edu.logo" :src="edu.logo" :alt="edu.institution + ' logo'" class="company-logo" />
          <div>
            <strong>{{ edu.degree }}</strong> - {{ edu.institution }} <br />
            <small class="timeline">{{ edu.timeline }}</small>
          </div>
        </div>
        <p v-if="edu.minor" class="minor-text"><em>Minor:</em> {{ edu.minor }}</p>
        <p v-if="edu.courses" class="minor-text"><em>{{ currentLang === 'en' ? 'Key Courses:' : 'Relevante Vakken:' }}</em> {{ edu.courses }}</p>
        <p v-if="edu.details" class="minor-text">{{ edu.details }}</p>
      </div>
    </section>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Training & Certifications' : 'Trainingen & Certificaten' }}</h3>
      <ul class="compact-list">
        <li v-for="course in resumeData.training" :key="course.title">
          <strong>{{ course.title }}</strong> - {{ course.organization }} ({{ course.date }})
        </li>
      </ul>
    </section>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Featured Projects' : 'Uitgelichte Projecten' }}</h3>
      <ul class="project-list">
        <li v-for="project in resumeData.projects" :key="project.id" class="project-card">
          <strong>{{ project.title }}</strong> - <em>{{ project.type }}</em>
          <div class="tech-tags">
            <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
          </div>
          <RouterLink :to="'/' + project.id" class="project-link">
            {{ currentLang === 'en' ? 'View Project Details' : 'Bekijk Projectdetails' }} &rarr;
          </RouterLink>
        </li>
      </ul>
    </section>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Skills' : 'Vaardigheden' }}</h3>
      <div class="skills-grid">
        
        <div class="skill-category">
          <h4>{{ currentLang === 'en' ? 'Programming' : 'Programmeren' }}</h4>
          <ul>
            <li v-for="skill in resumeData.skills.programming" :key="skill.name">
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-track">
                <div class="skill-fill bg-blue" :style="{ width: skill.level + '%' }"></div>
              </div>
            </li>
          </ul>
        </div>

        <div class="skill-category">
          <h4>Data Science</h4>
          <ul>
            <li v-for="skill in resumeData.skills.data_science" :key="skill.name">
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-track">
                <div class="skill-fill bg-yellow" :style="{ width: skill.level + '%' }"></div>
              </div>
            </li>
          </ul>
        </div>

        <div class="skill-category">
          <h4>BI Tools</h4>
          <ul>
            <li v-for="skill in resumeData.skills.bi_tools" :key="skill.name">
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-track">
                <div class="skill-fill bg-blue" :style="{ width: skill.level + '%' }"></div>
              </div>
            </li>
          </ul>
        </div>

        <div class="skill-category">
          <h4>{{ currentLang === 'en' ? 'Core Competencies' : 'Kerncompetenties' }}</h4>
          <ul>
            <li v-for="skill in resumeData.skills.core_competencies" :key="skill.name">
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-track">
                <div class="skill-fill bg-dark" :style="{ width: skill.level + '%' }"></div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* Main Container */
.resume-wrapper {
  background-color: var(--card-bg);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(8, 7, 8, 0.05);
  transition: background-color 0.3s ease;
}

/* Utility Bar */
.utility-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.right-utilities {
  display: flex;
  gap: 0.8rem;
}

/* Buttons */
.theme-btn {
  background-color: var(--accent-blue);
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.theme-btn:hover {
  background-color: var(--accent-yellow);
  color: #080708;
  transform: translateY(-1px);
}

.secondary-btn {
  background-color: var(--card-alt);
  color: var(--text-main);
  border: 1px solid var(--divider);
}

.secondary-btn:hover {
  background-color: var(--divider);
  color: var(--text-main);
}

.icon-btn {
  padding: 0.6rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Header & Typography */
.header-section h1 {
  color: var(--accent-blue);
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
}

.header-section h2 {
  color: var(--text-main);
  font-weight: 500;
  margin-bottom: 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Makes it a circle */
  object-fit: cover;
  border: 4px solid var(--accent-blue);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Ensure responsiveness for mobile */
@media (max-width: 600px) {
  .header-content {
    flex-direction: column-reverse;
    text-align: center;
  }
}
.summary-text {
  color: var(--text-main);
}

.quick-links {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.section-title {
  color: var(--text-main);
  border-bottom: 3px solid var(--divider);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
}

/* Experience & Lists */
.experience-card {
  margin-bottom: 1.5rem;
}

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

.highlight-text {
  color: var(--accent-blue);
  font-weight: 600;
  transition: color 0.2s ease;
}

a.highlight-text:hover {
  color: var(--accent-yellow);
}

.timeline {
  color: var(--text-muted);
  font-weight: 500;
}

.minor-text {
  margin: 0.2rem 0;
  color: var(--text-muted);
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

/* Projects */
.project-list {
  list-style: none;
  padding: 0;
}

.project-card {
  background-color: var(--card-alt);
  border-left: 4px solid var(--accent-yellow);
  padding: 1.2rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.tech-tags {
  margin: 0.8rem 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background-color: var(--divider);
  color: var(--text-main);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: var(--accent-blue);
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.skill-category h4 {
  margin-bottom: 1rem;
  color: var(--text-main);
}

.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category li {
  margin-bottom: 1rem;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--text-main);
}

.skill-track {
  width: 100%;
  background-color: var(--divider);
  border-radius: 6px;
  height: 8px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 6px;
}

.bg-blue { background-color: var(--accent-blue); }
.bg-yellow { background-color: var(--accent-yellow); }
/* Let the dark bar dynamically flip to a light bar in dark mode for contrast */
.bg-dark { background-color: var(--text-main); } 
</style>