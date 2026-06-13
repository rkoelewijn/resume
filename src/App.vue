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

/* Add to main.css or base.css */

.color-data {
  background-color: var(--secondary-blue, #0056b3) !important;
  color: white; /* Added to ensure text inside the badge is always readable */
}

.color-web {
  background-color: var(--secondary-green) !important; 
  color: white;
}

.color-systems {
  background-color: var(--dark-blue) !important; 
  color: white;
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


</style>