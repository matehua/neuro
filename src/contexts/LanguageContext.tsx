import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { en as englishTranslations } from '@/locales/en';
import { zh as chineseTranslations } from '@/locales/zh';

type Translations = typeof englishTranslations;

export type SupportedLanguage = 'en' | 'zh';

// Ensure translations object always has the necessary string keys, TS-safe
function addTranslationFallbacks<T extends object>(translations: T): T & { hospitals: any, dandenongLocation: any } {
  const fixed: Record<string, any> = { ...translations };
  if (typeof fixed.hospitals === "undefined") fixed.hospitals = {};
  if (typeof fixed.dandenongLocation === "undefined") fixed.dandenongLocation = {};
  return fixed as T & { hospitals: any, dandenongLocation: any };
}

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: Translations & { hospitals: any, dandenongLocation: any };
  isLanguageLoaded: boolean;
}

const translations: Record<SupportedLanguage, Translations & { hospitals: any, dandenongLocation: any }> = {
  en: addTranslationFallbacks(englishTranslations),
  zh: addTranslationFallbacks(chineseTranslations)
};

const supportedLanguages: SupportedLanguage[] = ['en', 'zh'];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');
  const [t, setT] = useState<Translations & { hospitals: any, dandenongLocation: any }>(translations.en);
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    setLanguage(detectedLanguage);
    setT(translations[detectedLanguage]);
    localStorage.setItem('language', detectedLanguage);
    setIsLanguageLoaded(true);
  }, [location.pathname]);

  // Change language and update URL if needed
  const changeLanguage = (lang: SupportedLanguage) => {
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      localStorage.setItem('language', lang);

      // Update URL to reflect language change if not already at that language
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const currentUrlLang = pathSegments[0];

      if (supportedLanguages.includes(currentUrlLang as SupportedLanguage)) {
        // URL already has a language prefix, update it
        if (currentUrlLang !== lang) {
          const newPath = '/' + lang + location.pathname.substring(currentUrlLang.length + 1);
          navigate(newPath + location.search + location.hash);
        }
      } else if (lang !== 'en') {
        // URL has no language prefix and selected language is not default, add prefix
        navigate('/' + lang + location.pathname + location.search + location.hash);
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isLanguageLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
