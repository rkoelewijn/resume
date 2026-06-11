<script setup lang="ts">
import { ref, computed } from 'vue'
import { allResumeData } from '@/data'
const currentLang = ref<'en' | 'nl'>('en')
const resumeData = computed(() => allResumeData[currentLang.value])

const toggleLang = () => {
  currentLang.value = currentLang.value === 'en' ? 'nl' : 'en'
}
</script>

<template>
  <div v-if="resumeData && resumeData.basics" class="resume-wrapper">
    
    <div class="toggle-container">
      <button @click="toggleLang" class="theme-btn">
        {{ currentLang === 'en' ? 'Lees in het Nederlands' : 'Read in English' }}
      </button>
    </div>

    <header class="header-section">
      <h1>{{ resumeData.basics.name }}</h1>
      <h2>{{ resumeData.basics.title }}</h2>
      <p>{{ resumeData.basics.summary }}</p>
    </header>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Relevant Experience' : 'Relevante Ervaring' }}</h3>
      <div v-for="job in resumeData.relevant_experience" :key="job.company" class="experience-card">
        <strong>{{ job.role }}</strong> {{ currentLang === 'en' ? 'at' : 'bij' }} <span class="highlight-text">{{ job.company }}</span> <br />
        <small class="timeline">{{ job.timeline }}</small>
        <p>{{ job.description }}</p>
      </div>
    </section>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Side Jobs' : 'Bijbanen' }}</h3>
      <ul class="compact-list">
        <li v-for="job in resumeData.side_jobs" :key="job.company">
          <strong>{{ job.role }}</strong> {{ currentLang === 'en' ? 'at' : 'bij' }} {{ job.company }} ({{ job.timeline }})
        </li>
      </ul>
    </section>

    <hr />

    <section>
      <h3 class="section-title">{{ currentLang === 'en' ? 'Education' : 'Opleiding' }}</h3>
      <div v-for="edu in resumeData.education" :key="edu.degree" class="experience-card">
        <strong>{{ edu.degree }}</strong> - {{ edu.institution }} <br />
        <small class="timeline">{{ edu.timeline }}</small>
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
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(8, 7, 8, 0.05);
}

/* Button */
.toggle-container {
  text-align: right;
  margin-bottom: 2rem;
}

.theme-btn {
  background-color: #3772ff;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.theme-btn:hover {
  background-color: #fdca40;
  color: #080708;
  transform: translateY(-1px);
}

/* Typography & Headers */
.header-section h1 {
  color: #3772ff;
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
}

.header-section h2 {
  color: #080708;
  font-weight: 500;
  margin-bottom: 1rem;
}

.section-title {
  color: #080708;
  border-bottom: 3px solid #cee5f2;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  display: inline-block;
}

/* Content Elements */
.experience-card {
  margin-bottom: 1.5rem;
}

.highlight-text {
  color: #3772ff;
  font-weight: 600;
}

.timeline {
  color: #666;
  font-weight: 500;
}

.minor-text {
  margin: 0.2rem 0;
}

.compact-list {
  font-size: 0.95rem;
  color: #080708;
  padding-left: 1.2rem;
}

.compact-list li {
  margin-bottom: 0.5rem;
}

/* Project Cards */
.project-list {
  list-style: none;
  padding: 0;
}

.project-card {
  background-color: #fbfbfc; /* Very light grey off-white */
  border-left: 4px solid #fdca40;
  padding: 1.2rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.tech-tags {
  margin: 0.8rem 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background-color: #cee5f2;
  color: #080708;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.95rem;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.skill-category h4 {
  margin-bottom: 1rem;
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
}

.skill-track {
  width: 100%;
  background-color: #cee5f2;
  border-radius: 6px;
  height: 8px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 6px;
}

.bg-blue { background-color: #3772ff; }
.bg-yellow { background-color: #fdca40; }
.bg-dark { background-color: #080708; }
</style>