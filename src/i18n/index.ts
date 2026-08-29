// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from './config'
import en from './locales/en'
import nl from './locales/nl'

const messages: Record<string, typeof en> = {
  en,
  nl
}

// Function to detect initial locale
const getInitialLocale = (): string => {
  let detectedLocale = DEFAULT_LOCALE
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (saved && SUPPORTED_LOCALES.some(l => l.code === saved)) {
      detectedLocale = saved
    }
  } catch (e) {
    // LocalStorage may be unavailable (e.g. private browsing)
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = detectedLocale
  }

  return detectedLocale
}

export const i18n = createI18n({
  legacy: false, // Enables Composition API
  locale: getInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages
})

// Helper to switch language and persist preference with smooth transition
export const setLanguage = (localeCode: string) => {
  if (SUPPORTED_LOCALES.some(l => l.code === localeCode)) {
    const updateLocale = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (i18n.global.locale as any).value = localeCode
      if (typeof document !== 'undefined') {
        document.documentElement.lang = localeCode
      }
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, localeCode)
      } catch (e) {
        // Ignore localStorage errors
      }
    }

    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => {
        updateLocale()
      })
    } else {
      updateLocale()
    }
  }
}

export * from './config'