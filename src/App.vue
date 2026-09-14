<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <a href="#main-content" class="skip-link no-print">{{ $t('nav.skipToContent') }}</a>
  <main id="main-content" class="container">
    <RouterView />
  </main>
</template>