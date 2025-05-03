import React, { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage, SupportedLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: ReactNode;
}

export default function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, isLanguageLoaded } = useLanguage();

  useEffect(() => {
    if (isLanguageLoaded && lang && (lang === 'en' || lang === 'zh')) {
      setLanguage(lang as SupportedLanguage);
    }
  }, [lang, setLanguage, isLanguageLoaded]);

  return <>{children}</>;
}
