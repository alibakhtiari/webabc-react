'use client';

import React from 'react';
import PortfolioGallery from '@/components/PortfolioGallery';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioItems } from '@/lib/portfolioData';

type CaseStudiesUIProps = {
  locale: string;
};

export default function CaseStudiesUI({ locale }: CaseStudiesUIProps) {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('caseStudies.title', { fallback: 'Case Studies' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('caseStudies.description', { fallback: 'Explore our successful client projects and implementation results' })}
            </p>
          </div>

          <div className="mb-8">
            <PortfolioGallery items={portfolioItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
