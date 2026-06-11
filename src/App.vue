<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="container">
    <RouterView />
  </main>
</template>

<style>
/* Global Theme */
body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #080708; /* Rich Black */
  background: linear-gradient(135deg, #e6e8e6 0%, #cee5f2 100%);
  background-attachment: fixed; /* Keeps the gradient stable when scrolling */
  min-height: 100vh; /* Ensures it stretches to the bottom of the window */  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

/* Global Links */
a {
  color: #3772ff; /* Primary Blue */
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

a:hover {
  color: #fdca40; /* Yellow on hover */
}

/* Global Dividers */
hr {
  border: 0;
  border-top: 2px solid #cee5f2; /* Light Blue */
  margin: 2.5rem 0;
}
</style>