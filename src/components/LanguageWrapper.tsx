import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageWrapperProps {
  children: ReactNode;
}

export default function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'zh')) {
      setLanguage(lang);
    }
  }, [lang, setLanguage]);

  return <>{children}</>;
}
