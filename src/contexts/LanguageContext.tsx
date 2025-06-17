import { createContext, useState, useEffect, useContext, ReactNode, useMemo, useCallback } from 'react';
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
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(true); // Start as true since we have default translations
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure translations are always available
  const safeT = useMemo(() => {
    // Always ensure we have a valid translation object with required structure
    if (!t || typeof t !== 'object' || !t.home || !t.home.welcome) {
      return translations.en;
    }
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
    setLanguage(detectedLanguage);
    setT(translations[detectedLanguage]);
    localStorage.setItem('language', detectedLanguage);
    setIsLanguageLoaded(true);
  }, [location.pathname]);

  // Change language and update URL if needed
  const changeLanguage = useCallback((lang: SupportedLanguage) => {
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
