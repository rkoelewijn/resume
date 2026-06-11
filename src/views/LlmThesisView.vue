<script setup lang="ts">
import { RouterLink } from 'vue-router'
import allResumeData from '@/resumeData.json'

// We will pull the specific project data from your JSON so the title and tech stack stay synced
const projectData = allResumeData.en.projects.find(p => p.id === 'llm-thesis')
</script>

<template>
  <div v-if="projectData">
    <nav style="margin-bottom: 2rem;">
      <RouterLink to="/" style="text-decoration: none; color: #3b82f6; font-weight: 500;">
        ← Back to Resume
      </RouterLink>
    </nav>

    <header style="margin-bottom: 2rem;">
      <h1 style="margin-bottom: 0.5rem;">{{ projectData.title }}</h1>
      <div style="color: #666; font-style: italic; margin-bottom: 1rem;">{{ projectData.type }}</div>
      
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <span v-for="tech in projectData.tech" :key="tech" 
              style="background: #f3f4f6; padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.85em; color: #374151;">
          {{ tech }}
        </span>
      </div>
    </header>

    <hr style="margin: 2rem 0; border: 0; border-top: 1px solid #eaeaea;" />

    <article style="line-height: 1.8; color: #333;">
      <h3>Project Overview</h3>
      <p>
        {{ projectData.summary }}
      </p>

      <h3>The Problem</h3>
      <p>
        Large Language Models (LLMs) frequently generate plausible but factually incorrect information, a phenomenon known as hallucination. This project focused on developing a robust, automated methodology to detect and quantify these hallucinations across different model architectures.
      </p>

      <h3>Methodology & Implementation</h3>
      <p>
        The core of the "Cloudspeakers" pipeline was built using <strong>Python</strong>. Data manipulation and validation were handled using <strong>Polars</strong> for high-performance processing, while statistical analysis and machine learning models were implemented via <strong>scikit-learn</strong> and <strong>NumPy</strong>.
      </p>
      <ul>
        <li>Designed automated data validation scripts to process testing sets.</li>
        <li>Implemented detection algorithms to cross-reference LLM outputs against verified ground-truth datasets.</li>
        <li>Documented all mathematical models and pipeline architectures utilizing <strong>LaTeX</strong>.</li>
      </ul>

      <h3>Results</h3>
      <p>
        [You can insert a summary of your actual thesis findings or the success rate of the pipeline here once the research is concluded.]
      </p>
    </article>

  </div>
</template>