/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const LanguageContextAPI = createContext(null);

function LanguageContext({ children }) {
  const [appLang, setAppLang] = useState('ar');

  function toggleLanguage() {
    if (appLang === 'ar') {
      setAppLang('en');
    }
    if (appLang === 'en') {
      setAppLang('ar');
    }
  }

  return (
    <LanguageContextAPI.Provider value={{ toggleLanguage, appLang }}>
      {children}
    </LanguageContextAPI.Provider>
  );
}

export  {LanguageContext, LanguageContextAPI};
