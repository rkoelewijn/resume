// src/i18n/config.ts

export interface LocaleConfig {
  code: string;         // 'en', 'nl', 'de', etc.
  label: string;        // Short label 'EN', 'NL', etc.
  nativeName: string;   // 'English', 'Nederlands', etc.
  flagClass: string;    // 'fi fi-gb', 'fi fi-nl', etc.
}

export const SUPPORTED_LOCALES: LocaleConfig[] = [
  { code: 'en', label: 'EN', nativeName: 'English', flagClass: 'fi fi-gb' },
  { code: 'nl', label: 'NL', nativeName: 'Nederlands', flagClass: 'fi fi-nl' }
];

export const DEFAULT_LOCALE = 'en';

export const LOCALE_STORAGE_KEY = 'user-locale';

export type SupportedLocaleCode = (typeof SUPPORTED_LOCALES)[number]['code'];
