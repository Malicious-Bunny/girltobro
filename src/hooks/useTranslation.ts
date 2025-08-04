import { useTranslation as useI18nextTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useI18nextTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return {
    t,
    changeLanguage,
    currentLanguage: i18n.language,
    languages: i18n.languages,
  };
};
