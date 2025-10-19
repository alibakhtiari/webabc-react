
'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getPathWithoutLanguage, normalizePath, isLanguageRootPath, getPageNameFromPath } from '@/lib/languageUtils';
import { getTranslatedString, getSeoTitle, getSeoDescription } from '@/lib/translationUtils';
import { useLanguageDetection } from '@/hooks/useLanguageDetection';
import { SupportedLanguage, LanguageMeta, languages, LanguageContextType } from '@/types/language';

// Import translation system
import { translations } from '@/i18n';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const initialLanguage = useLanguageDetection();
  const [language, setLanguageState] = useState<SupportedLanguage>(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);

  // Handle language change
  const setLanguage = (lang: SupportedLanguage) => {
    if (lang === language) return;

    localStorage.setItem('language', lang);
    setLanguageState(lang);

    // Update URL to reflect language change
    const pathWithoutLang = getPathWithoutLanguage(pathname || '');
    const newPath = normalizePath(`/${lang}${pathWithoutLang}`);
    router.push(newPath);
  };

  // Translation function wrapper
  const t = (key: string, options?: { fallback?: string }): string => {
    return getTranslatedString(key, language, options);
  };

  // Get SEO title wrapper
  const getContextSeoTitle = (title?: string): string => {
    return getSeoTitle(language, pathname || '', title);
  };

  // Get SEO description wrapper
  const getContextSeoDescription = (description?: string): string => {
    return getSeoDescription(language, pathname || '', description);
  };

  // Apply document direction based on language
  useEffect(() => {
    document.documentElement.dir = languages[language].direction;
    document.documentElement.lang = language;
  }, [language]);

  // Initialize route based on selected language (Next.js handles i18n routing differently)
  useEffect(() => {
    if (isInitialized) return;

    // Check if we need to update state based on URL language
    const pathSegments = (pathname || '').split('/').filter(Boolean);

    if (pathSegments.length > 0 && Object.keys(languages).includes(pathSegments[0] as SupportedLanguage)) {
      // URL has language prefix, check if it matches current state
      const urlLang = pathSegments[0] as SupportedLanguage;
      if (urlLang !== language) {
        setLanguageState(urlLang);
        localStorage.setItem('language', urlLang);
      }
    }

    setIsInitialized(true);
  }, [pathname, isInitialized, language]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        languageMeta: languages[language],
        getSeoTitle: getContextSeoTitle,
        getSeoDescription: getContextSeoDescription,
        translations
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Re-export types for convenience
export type { SupportedLanguage, LanguageMeta };
export { languages };
