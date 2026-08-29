<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { isDarkMode, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="theme-toggle-btn"
    :title="$t('nav.toggleTheme')"
    :aria-label="$t('nav.toggleTheme')"
    :aria-pressed="isDarkMode"
    @click="toggleTheme"
  >
    <span class="icon-container" :class="{ 'is-dark': isDarkMode }">
      <!-- Sun icon (shown in light mode or morphs) -->
      <svg
        v-if="!isDarkMode"
        class="theme-svg sun-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>

      <!-- Moon icon (shown in dark mode) -->
      <svg
        v-else
        class="theme-svg moon-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </span>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--divider, #cee5f2);
  background-color: var(--card-alt, #fbfbfc);
  color: var(--text-main, #080708);
  cursor: pointer;
  padding: 0;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.theme-toggle-btn:hover {
  border-color: var(--accent-blue, #3772ff);
  color: var(--accent-blue, #3772ff);
  background-color: var(--card-bg, #ffffff);
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.theme-toggle-btn:active {
  transform: scale(0.94);
}

.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.theme-toggle-btn:hover .icon-container {
  transform: rotate(15deg);
}

.theme-svg {
  width: 18px;
  height: 18px;
}

.sun-icon {
  color: #f59e0b;
}

.moon-icon {
  color: #60a5fa;
}
</style>
