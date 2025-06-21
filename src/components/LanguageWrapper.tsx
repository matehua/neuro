import React, { useEffect, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { useLanguage, SupportedLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: ReactNode;
}

const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, isLanguageLoaded } = useLanguage();

  useEffect(() => {
    if (isLanguageLoaded && lang && (lang === 'en' || lang === 'zh')) {
      setLanguage(lang as SupportedLanguage);
    }
  }, [lang, setLanguage, isLanguageLoaded]);

  return <>{children}</>;
};

LanguageWrapper.displayName = 'LanguageWrapper';

export default LanguageWrapper;
