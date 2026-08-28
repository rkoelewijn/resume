<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setLanguage } from '@/i18n'

const { locale } = useI18n()
</script>

<template>
  <div class="lang-switcher" role="group" aria-label="Language selector">
    <button
      v-for="item in SUPPORTED_LOCALES"
      :key="item.code"
      type="button"
      :class="['lang-option', { 'is-active': locale === item.code }]"
      :aria-pressed="locale === item.code"
      :title="item.nativeName"
      @click="setLanguage(item.code)"
    >
      <span :class="item.flagClass"></span>
      <span class="lang-label">{{ item.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.lang-switcher {
  display: inline-flex;
  align-items: center;
  background-color: var(--card-alt, #fbfbfc);
  border: 1px solid var(--divider, #cee5f2);
  border-radius: 30px;
  padding: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  gap: 2px;
}

.lang-option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.45rem 0.8rem;
  border: none;
  background: transparent;
  border-radius: 26px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted, #666666);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  font-family: inherit;
}

.lang-option:hover:not(.is-active) {
  color: var(--text-main, #080708);
  background-color: rgba(55, 114, 255, 0.08);
}

.lang-option.is-active {
  background-color: var(--accent-blue, #3772ff);
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(55, 114, 255, 0.3);
}

.lang-option .fi {
  font-size: 0.95rem;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.lang-label {
  letter-spacing: 0.3px;
}
</style>
