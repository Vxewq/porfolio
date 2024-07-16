
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHome from './translation/en/home'
import ruHome from './translation/ru/home'
import uzHome from './translation/uz/home'

import enNav from './translation/en/navbar'
import ruNav from './translation/ru/navbar'
import uzNav from './translation/uz/navbar'

const resources = {
  en: {
      navbar: enNav,
      home: enHome
      
  },
  ru: {
      navbar: ruNav,
      home: ruHome
  },
  uz: {
      navbar: uzNav,
      home: uzHome
  },
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
