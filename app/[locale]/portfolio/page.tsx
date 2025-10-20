'use client';

import React from 'react';
import PortfolioGallery from '@/components/PortfolioGallery';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioItems } from '@/lib/portfolioData';

export default function PortfolioPage() {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('portfolio.title', { fallback: 'Our Portfolio' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('portfolio.description', { fallback: 'Showcasing our best work and successful projects' })}
            </p>
          </div>
          <PortfolioGallery items={portfolioItems} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
