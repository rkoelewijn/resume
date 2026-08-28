// src/data/index.ts
import type { ResumeData } from './types'
import { DEFAULT_LOCALE } from '@/i18n/config'
import { enData } from './en'
import { nlData } from './nl'

export const allResumeData: Record<string, ResumeData> = {
  en: enData,
  nl: nlData
}

/**
 * Dynamically retrieves resume data for the given locale.
 * Automatically falls back to DEFAULT_LOCALE (English) if the requested locale is not available.
 */
export const getResumeData = (locale: string): ResumeData => {
  return allResumeData[locale] || allResumeData[DEFAULT_LOCALE] || enData
}

export * from './types'
export * from './shared'