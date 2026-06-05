import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import translations from '../i18n/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem('appLanguage').then((stored) => {
      if (stored && translations[stored]) setLanguageState(stored);
    });
  }, []);

  const setLanguage = async (lang) => {
    if (!translations[lang]) return;
    setLanguageState(lang);
    await AsyncStorage.setItem('appLanguage', lang);
  };

  const t = (key) => translations[language]?.[key] || translations.en[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
