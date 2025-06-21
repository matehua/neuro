import React, { useState, createContext, useContext, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import en from '@/locales/en';
import zh from '@/locales/zh';

type Translations = typeof en;

export type SupportedLanguage = 'en' | 'zh';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations;
  isLanguageLoaded: boolean;
}

const translations: Record<SupportedLanguage, Translations> = {
  en,
  zh
};

const supportedLanguages: SupportedLanguage[] = ['en', 'zh'];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [t, setT] = useState<Translations>(translations.en);
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure translations are always available with minimal validation
  const safeT = useMemo(() => {
    // Always ensure we have a valid translation object
    if (!t || typeof t !== 'object') {
      console.warn('Translation object is invalid, falling back to English');
      return translations.en;
    }

    // Check for essential structure - be more lenient
    if (!t.home || typeof t.home !== 'object') {
      console.warn('Translation home section missing, falling back to English');
      return translations.en;
    }

    // If we have a valid translation object with home section, use it
    return t;
  }, [t]);

  // Detect language from URL or localStorage on initial load
  useEffect(() => {
    const detectLanguage = () => {
      // First check URL path for language
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const langFromUrl = pathSegments[0];

      if (langFromUrl && supportedLanguages.includes(langFromUrl as SupportedLanguage)) {
        return langFromUrl as SupportedLanguage;
      }
      // Then check localStorage
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && supportedLanguages.includes(savedLanguage as SupportedLanguage)) {
        return savedLanguage as SupportedLanguage;
      }
      // Finally check browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang && supportedLanguages.includes(browserLang as SupportedLanguage)) {
        return browserLang as SupportedLanguage;
      }
      // Default to English
      return 'en';
    };

    const detectedLanguage = detectLanguage();
    // Only update if different from current language to avoid unnecessary re-renders
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
      // Ensure we have a valid translation object
      const translationToSet = translations[detectedLanguage] || translations.en;
      setT(translationToSet);
      localStorage.setItem('language', detectedLanguage);
    }
  }, [location.pathname, language]);

  // Change language and update URL if needed
  const changeLanguage = useCallback((lang: SupportedLanguage) => {
    const translationToSet = translations[lang] || translations.en;
    if (translationToSet) {
      setLanguage(lang);
      setT(translationToSet);
      localStorage.setItem('language', lang);

      // Update URL to reflect language change if not already at that language
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const currentUrlLang = pathSegments[0];

      if (supportedLanguages.includes(currentUrlLang as SupportedLanguage)) {
        // URL already has a language prefix, update it
        if (currentUrlLang !== lang) {
          const newPath = '/' + lang + location.pathname.substring(currentUrlLang?.length + 1);
          navigate(newPath + location.search + location.hash);
        }
      } else if (lang !== 'en') {
        // URL has no language prefix and selected language is not default, add prefix
        navigate('/' + lang + location.pathname + location.search + location.hash);
      }
    }
  }, [location.pathname, location.search, location.hash, navigate]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage: changeLanguage,
    t: safeT,
    isLanguageLoaded
  }), [language, changeLanguage, safeT, isLanguageLoaded]);

  return (
    <ErrorBoundary>
      <LanguageContext.Provider value={contextValue}>
        {children}
      </LanguageContext.Provider>
    </ErrorBoundary>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
