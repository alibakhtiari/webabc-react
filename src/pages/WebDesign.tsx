'use client';

import React from 'react';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesign: React.FC = () => {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('services.webDesignTitle', { fallback: 'Web Design Services' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.webDesignDesc', { fallback: 'Modern, responsive web design that converts visitors into customers' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('webDesign.responsive', { fallback: 'Responsive Design' })}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium mb-1">{t('webDesign.mobileFirst', { fallback: 'Mobile-First Approach' })}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('webDesign.mobileFirstDesc', { fallback: 'Design optimized for mobile devices first, then desktop.' })}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t('webDesign.userExperience', { fallback: 'User Experience' })}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium mb-1">{t('webDesign.intuitive', { fallback: 'Intuitive Navigation' })}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('webDesign.intuitiveDesc', { fallback: 'User-friendly navigation that guides visitors seamlessly.' })}
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

export default WebDesign;
