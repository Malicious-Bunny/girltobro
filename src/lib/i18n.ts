import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en.json';
import de from '@/locales/de.json';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

// Only initialize i18n on the client side to prevent hydration issues
if (typeof window !== 'undefined') {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      debug: false,

      // Support for language variants (e.g., 'de-DE' -> 'de', 'en-US' -> 'en')
      load: 'languageOnly',

      // Prevent hydration issues
      react: {
        useSuspense: false,
      },

      interpolation: {
        escapeValue: false,
      },

      detection: {
        // Improved detection order: check navigator first for better UX
        order: ['navigator', 'localStorage', 'htmlTag'],

        // Cache the detected language
        caches: ['localStorage'],

        // Convert language codes to our supported languages
        convertDetectedLanguage: (lng: string) => {
          // Handle regional variants
          const langCode = lng.split('-')[0].toLowerCase();

          // Map supported languages
          const supportedLanguages = ['en', 'de'];

          if (supportedLanguages.includes(langCode)) {
            return langCode;
          }

          // Fallback to English for unsupported languages
          return 'en';
        },

        // Exclude certain detection methods that might interfere
        excludeCacheFor: ['cimode'],
      },
    });
} else {
  // Server-side initialization with minimal config
  i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'en',
      lng: 'en', // Default to English on server
      debug: false,

      react: {
        useSuspense: false,
      },

      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
