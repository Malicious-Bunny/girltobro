import { useTranslation as useI18nextTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useI18nextTranslation();

  const changeLanguage = async (language: string) => {
    try {
      await i18n.changeLanguage(language);

      // Update HTML lang attribute immediately
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  // Get the available supported languages
  const supportedLanguages = ['en', 'de'];

  // Get current language, ensuring it's one of our supported languages
  const currentLanguage = supportedLanguages.includes(i18n.language)
    ? i18n.language
    : 'en';

  return {
    t,
    changeLanguage,
    currentLanguage,
    supportedLanguages,
    isReady: i18n.isInitialized,
    detectedLanguage: i18n.language,
  };
};
