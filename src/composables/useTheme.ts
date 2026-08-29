import { ref } from 'vue'

const THEME_STORAGE_KEY = 'ruben_resume_theme'

const isDarkMode = ref(false)

const applyTheme = (isDark: boolean) => {
  if (typeof document === 'undefined') return
  
  if (isDark) {
    document.documentElement.classList.add('dark-theme')
    document.documentElement.setAttribute('data-theme', 'dark')
    document.body.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
    document.documentElement.setAttribute('data-theme', 'light')
    document.body.classList.remove('dark-theme')
  }
}

const initTheme = () => {
  if (typeof window === 'undefined') return

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY)
    if (saved === 'dark') {
      isDarkMode.value = true
    } else if (saved === 'light') {
      isDarkMode.value = false
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDarkMode.value = prefersDark
    }
  } catch (e) {
    isDarkMode.value = false
  }

  applyTheme(isDarkMode.value)

  // Listen for OS theme changes if user hasn't explicitly saved a preference
  try {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      const saved = localStorage.getItem(THEME_STORAGE_KEY)
      if (!saved) {
        isDarkMode.value = e.matches
        applyTheme(isDarkMode.value)
      }
    })
  } catch (e) {
    // Ignore mediaQuery listener errors in older environments
  }
}

const toggleTheme = () => {
  const targetTheme = !isDarkMode.value

  const executeUpdate = () => {
    isDarkMode.value = targetTheme
    applyTheme(targetTheme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, targetTheme ? 'dark' : 'light')
    } catch (e) {
      // Ignore localStorage errors
    }
  }

  // Use View Transitions API if supported for ultra-smooth transition
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).startViewTransition(() => {
      executeUpdate()
    })
  } else {
    executeUpdate()
  }
}

export function useTheme() {
  return {
    isDarkMode,
    toggleTheme,
    initTheme
  }
}
