'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import PagePreloader from '@/components/PagePreloader';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioItems } from '@/lib/portfolioData';

export default function LocalePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BenefitsSection />
      <PortfolioGallery items={portfolioItems} />
      <CTASection />
      <Footer />
      <PagePreloader />
    </main>
  );
}
