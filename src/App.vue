<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="container">
    <RouterView />
  </main>
</template>


<style>
/* Base Light Theme Variables */
:root {
  --bg-gradient: linear-gradient(135deg, #e6e8e6 0%, #cee5f2 100%);
  --card-bg: #ffffff;
  --text-main: #080708;
  --text-muted: #666666;
  --accent-blue: #3772ff;
  --secondary-blue: #006daa;
  --dark-blue: #03045e;
  --secondary-green: #307351; 
  --accent-yellow: #fdca40;
  --divider: #cee5f2;
  --card-alt: #fbfbfc;
}

/* Dark Theme Variables */
.dark-theme {
  --bg-gradient: linear-gradient(135deg, #080708 0%, #1a1b26 100%);
  --card-bg: #1f2335;
  --text-main: #e6e8e6;
  --text-muted: #a9b1d6;
  --divider: #292e42;
  --card-alt: #24283b;
}

/* Global Styles using the Variables */
body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: var(--text-main);
  background: var(--bg-gradient);
  background-attachment: fixed;
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  transition: background 0.3s ease, color 0.3s ease;
}

a {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--accent-yellow);
}

hr {
  border: 0;
  border-top: 2px solid var(--divider);
  margin: 2.5rem 0;
}

/* =========================================
   PRINT STYLESHEET (PDF EXPORT OPTIMIZATION)
   ========================================= */
@media print {
  /* 1. Hide interactive UI elements */
  .theme-toggle, 
  .lang-toggle,
  nav,
  header button {
    display: none !important;
  }

  /* 2. Force Light Mode Colors for Print */
  :global(body), :global(body.dark-theme) {
    --bg-color: #ffffff !important;
    --text-main: #222222 !important;
    --card-bg: #ffffff !important;
    --divider: #cccccc !important;
    --accent-blue: #3772ff !important;
    --accent-yellow: #f5b700 !important;
    background-color: white !important;
    color: black !important;
  }

  /* 3. Remove web-specific effects (glows, shadows, hover states) */
  .github-card {
    box-shadow: none !important;
    border: 1px solid #ccc !important;
  }

  .timeline-dot.is-past,
  .timeline-dot.is-current {
    box-shadow: none !important; /* Removes the radiant glow for crisp printing */
    border: 2px solid white !important;
  }

  /* 4. Prevent awkward page breaks */
  section, 
  .timeline-item, 
  .github-card,
  .experience-card {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* 5. Optimize layout spacing for standard A4/Letter paper */
  @page {
    margin: 1.5cm 1.5cm; /* Clean margins */
  }

  main {
    padding: 0 !important;
    margin: 0 !important;
  }

  /* 6. Expand links to show URLs (Optional but recommended for printed paper) */
  a.highlight-text {
    text-decoration: none;
    color: black !important;
    font-weight: bold;
  }
}
</style>