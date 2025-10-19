'use client';

import React from 'react';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

const SeoService: React.FC = () => {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('seo.title', { fallback: 'SEO Services' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('seo.description', { fallback: 'Professional search engine optimization services to improve your website\'s visibility and ranking' })}
            </p>
          </div>

          {/* SEO Service Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('seo.technical', { fallback: 'Technical SEO' })}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium mb-1">{t('seo.speedOptimization', { fallback: 'Site Speed Optimization' })}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('seo.speedOptimizationDesc', { fallback: 'Optimize page loading times for better user experience and search rankings.' })}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t('seo.local', { fallback: 'Local SEO' })}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium mb-1">{t('seo.googleBusiness', { fallback: 'Google Business Profile' })}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('seo.googleBusinessDesc', { fallback: 'Manage your local business listings and reviews effectively.' })}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default SeoService;
