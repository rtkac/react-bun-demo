import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en as translationEN } from '@assets/translations';

export const registerTranslations = (): void => {
  i18n.use(initReactI18next).init({
    supportedLngs: ['en'],
    fallbackLng: 'en',
    resources: {
      en: translationEN.en,
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });
};
