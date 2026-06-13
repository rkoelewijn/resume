<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n' // <-- Import the hook
import { allResumeData } from '../data'

// 1. Initialize i18n
const { t, locale } = useI18n()

// 2. Link your existing data files directly to the i18n locale state!
// Now, when the locale changes, your heavy data automatically swaps too.
const resumeData = computed(() => allResumeData[locale.value as 'en' | 'nl'])

// Dark Mode State
const isDarkMode = ref(false)

// 3. Update the toggle function
const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'nl' : 'en'
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
// --- NEW GITHUB API INTEGRATION ---
interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

const repos = ref<GithubRepo[]>([]);
const loadingRepos = ref(true);
const repoError = ref(false);

const githubUsername = 'rkoelewijn'; 

onMounted(async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=3`);
    if (!response.ok) throw new Error('Failed to fetch');
    repos.value = await response.json();
  } catch (e) {
    repoError.value = true;
  } finally {
    loadingRepos.value = false;
  }
});
</script>

<template>
  <div v-if="resumeData && resumeData.basics" class="resume-wrapper">
    
    <div class="utility-bar no-print">
      <button @click="downloadPDF" class="theme-btn secondary-btn">
        📄 {{ $t('nav.savePdf') }}
      </button>
      
      <div class="right-utilities">
        <!-- <button @click="toggleTheme" class="theme-btn icon-btn" title="Toggle Dark Mode">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button> -->
      <button @click="toggleLang" class="lang-toggle-pill">
        <div :class="['lang-option', { 'is-active': locale === 'nl' }]">
          <span class="fi fi-nl"></span>
        </div>
        
        <div :class="['lang-option', { 'is-active': locale === 'en' }]">
          <span class="fi fi-gb"></span>
        </div>
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
        
        <div class="photo-container">
           <img v-if="resumeData.basics.photo" :src="resumeData.basics.photo" alt="Ruben Koelewijn" class="profile-photo" />
        </div>
      </div>
      <p class="summary-text">{{ resumeData.basics.summary }}</p>
    </header>

    <hr />

<section>
 <h3 class="section-title">{{ $t('headers.experience') }}</h3>
  
  <div class="timeline-container">
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
            v-if="job.logoLight" 
            :src="isDarkMode && job.logoDark ? job.logoDark : job.logoLight" 
            :alt="job.company + ' logo'" 
            :class="['company-logo', { 'is-inverted': isDarkMode && !job.logoDark }]" 
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
        <p class= "description-main-text" v-html="job.description"></p>
        <p class="additional-text" style="margin-top: -0.8rem">
          <em>Additonal Responsibilities</em>: {{ job.additional }}
        </p>
      </div>
    </div>
  </div>
</section>

<section>
      <h3 class="section-title">{{ $t('headers.education') }}</h3>
      
      <div class="timeline-container">
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
                v-if="edu.logoLight" 
                :src="isDarkMode && edu.logoDark ? edu.logoDark : edu.logoLight" 
                :alt="edu.institution + ' logo'" 
                :class="['company-logo', { 'is-inverted': isDarkMode && !edu.logoDark }]" 
              />
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
            
            <div class="education-details" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">
              <p v-if="edu.minor" class="minor-text"><em>Minor:</em> {{ edu.minor }}</p>
              <p v-if="edu.courses" class="minor-text"><em>{{ currentLang === 'en' ? 'Key Courses:' : 'Relevante Vakken:' }}</em> {{ edu.courses }}</p>
              <p v-if="edu.details" class="minor-text">{{ edu.details }}</p>
              
              <div v-if="edu.projectId" style="margin-top: 0.5rem;">
                <RouterLink :to="'/' + edu.projectId" class="highlight-text" style="font-size: 0.85rem;">
                  {{ currentLang === 'en' ? 'View Thesis Project' : 'Bekijk Thesis Project' }} &rarr;
                </RouterLink>
              </div>
            </div> 
          </div> </div> </div> </section>
    <hr />

<section style="margin-bottom: 3rem;">
<h3 class="section-title">{{ $t('headers.featuredProjects') }}</h3>
      
      <ul class="project-list">
        <li v-for="project in resumeData.projects" :key="project.id" class="project-card">
          <div class="project-header">
            <strong>{{ project.title }}</strong> 
            <span class="project-type"> - {{ project.type }}</span>
          </div>
          
          <div class="tech-tags" style="margin: 0.8rem 0;">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
          
          <RouterLink :to="'/' + project.id" class="highlight-text">
  {{ $t('labels.viewProject') }} &rarr;
</RouterLink>
        </li>
      </ul>
    </section>

    <section>
      <h3 class="section-title">{{ $t('headers.github') }}</h3>
      
      <div v-if="loadingRepos" class="minor-text">Loading repositories...</div>
      <div v-else-if="repoError" class="minor-text">Unable to load GitHub data at this time.</div>
      
      <div v-else class="github-grid">
        <a 
          v-for="repo in repos" 
          :key="repo.id" 
          :href="repo.html_url" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="github-card"
        >
          <strong>{{ repo.name }}</strong>
          <p class="minor-text" style="margin: 0.5rem 0;">
            {{ repo.description || (currentLang === 'en' ? 'No description provided.' : 'Geen beschrijving beschikbaar.') }}
          </p>
          
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span v-if="repo.language" class="tech-tag">
              {{ repo.language }}
            </span>
            <span class="minor-text" style="font-size: 0.8rem;">⭐ {{ repo.stargazers_count }}</span>
          </div>
        </a>
      </div>
    </section>

    <hr />
    <section>
     <h3 class="section-title">{{ $t('headers.sideJobs') }}</h3>
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
      <h3 class="section-title">{{$t('headers.training' )}}</h3>
      <ul class="compact-list" style="margin-top: -1rem; margin-bottom: 2rem;">
        <li v-for="course in resumeData.training" :key="course.title">
          <strong>{{ course.title }}</strong> - {{ course.organization }} ({{ course.date }})
        </li>
      </ul>
    </section>
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
/* Only invert if the specific 'is-inverted' class is present */
.company-logo.is-inverted {
  filter: invert(1) brightness(1.5);
}


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
.header-section {
  margin-bottom: 2rem;
  /* Retaining the clean border accent */
  border-left: 5px solid var(--accent-blue);
  padding-left: 1.5rem;
}

.header-section h1 {
  /* Gradient text removed, returning to solid primary color */
  color: var(--accent-blue);
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
}

.header-section h2 {
  color: var(--text-main);
  font-weight: 500;
  margin-bottom: 1rem;
}

/* Updated Quick Links as pill-shaped tags */
.quick-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.quick-links a {
  background-color: var(--divider);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  color: var(--text-main);
}

.quick-links a:hover {
  background-color: var(--accent-blue);
  color: white;
}

/* Header Content with Negative Gap */
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: -2rem; 
  margin-bottom: 1.5rem;
  position: relative;
}

.text-side {
  flex: 1;
  position: relative;
  z-index: 2;
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

/* Responsive adjustment for screens smaller than 768px */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column-reverse;
    text-align: center;
  }
  .photo-container {
    width: 180px;
    height: 180px;
    margin-bottom: 1rem;
    /* Change fade to vertical for mobile */
    mask-image: linear-gradient(to bottom, transparent 0%, black 50%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 50%);
  }
}
.summary-text {
  color: var(--text-main);
}

.description-main-text{
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

:deep(.highlight-text) {
  color: var(--accent-blue);
  /* font-weight: 600; */
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

/* Featured Projects List Styling */
.project-list {
  list-style: none; /* Removes the default bullet points */
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card {
  padding: 1.2rem;
  border: 1px solid var(--divider);
  border-radius: 8px;
  background-color: var(--card-bg);
  /* Adds a blue accent border to the left to make it pop */
  border-left: 4px solid var(--accent-blue); 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateX(4px); /* Slides slightly to the right on hover */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.project-type {
  color: var(--text-main);
  opacity: 0.8;
  font-style: italic;
}

/* Reusable Tech Tags (Used in both Projects and GitHub sections) */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  background-color: var(--divider);
  color: var(--text-main);
  padding: 0.2rem 0.6rem;
  border-radius: 12px; /* Pill shape */
  font-size: 0.75rem;
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

.timeline-container {
  display: flex;
  flex-direction: column;
  position: relative;
  /* This creates the vertical line */
  margin-left: 6px; 
}

.additional-text{
  color: var(--text-muted);
  font-size: 0.9rem
}

/* The vertical line */
.timeline-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--divider); /* Uses your existing theme variable */
}

.timeline-item {
  position: relative;
  padding-left: 30px; /* Space for the line and dot */
  padding-bottom: 2rem; /* Spacing between entries */
}

.timeline-dot {
  position: absolute;
  left: -5px;
  top: 1.5rem; /* Updated as requested */
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--bg-color);
  z-index: 1;
  transition: all 0.3s ease;
}

/* Past roles (Blue) */
.timeline-dot.is-past {
  background-color: var(--divider);
  box-shadow: 0 0 8px 2px var(--divider);
}

/* Current roles (Yellow) */
.timeline-dot.is-current {
  background-color: var(--accent-blue);
  box-shadow: 0 0 8px 2px var(--accent-blue);
}

.timeline-content {
  /* Keeps your existing card styling intact */
  width: 100%;
}

.github-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.github-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--divider);
  border-radius: 8px;
  background-color: var(--card-bg);
  text-decoration: none;
  color: var(--text-main);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.github-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-blue);
}

:global(.dark-theme) .github-card:hover {
  box-shadow: 0 4px 12px rgba(55, 114, 255, 0.2);
}
/* Language Toggle Track */
.lang-toggle-pill {
  display: flex;
  align-items: center;
  background-color: var(--card-alt); 
  border: 1px solid var(--divider);
  border-radius: 30px; 
  padding: 0; /* CHANGED: Removed the 4px padding to make it flush */
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;
  overflow: hidden; /* Ensures the active highlight respects the parent's rounded corners */
}

.lang-toggle-pill:hover {
  background-color: var(--divider);
  transform: translateY(-1px);
}

/* Individual Language Options */
.lang-option {
  flex: 1; /* NEW: Forces both options to be exactly the same width (50%) */
  display: flex;
  justify-content: center; /* Centers the content since it's now wider */
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 0.9rem; /* Slightly increased padding since the parent padding is gone */
  border-radius: 30px; /* Matches the parent border-radius */
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.5; 
}

/* The Active Highlight State */
.lang-option.is-active {
  background-color: var(--accent-blue); 
  opacity: 1;
  /* Switched to a standard centered box-shadow since it now touches the edges */
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15); 
}

/* Dark mode adjustments */
:global(.dark-theme) .lang-option.is-active {
  box-shadow: 0 0 6px rgba(55, 114, 255, 0.25);
}

/* Ensure the flags stay crisp */
.lang-option .fi {
  font-size: 1rem;
  border-radius: 2px;
}
</style>