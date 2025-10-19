'use client';

import React from 'react';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  let language = 'fa';
  let languageMeta: any = {
    direction: 'rtl',
    nativeName: 'فارسی',
    fontFamily: '',
  };

  try {
    const context = useLanguage();
    language = context.language;
    languageMeta = context.languageMeta;
  } catch (error) {
    // Handle the case where LanguageProvider is not available during static generation
    console.warn('LanguageProvider not available, using defaults:', error);
  }

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Contact;
