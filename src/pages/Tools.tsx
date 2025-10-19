'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

const Tools: React.FC = () => {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('tools.title', { fallback: 'SEO Tools' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('tools.description', { fallback: 'Free online tools to help optimize your website and improve performance' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'SEO Checker', description: 'Analyze your website SEO performance' },
              { title: 'Page Speed Test', description: 'Check your page loading speed' },
              { title: 'Keyword Research', description: 'Find the best keywords for your content' }
            ].map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors">
                  {t('tools.useTool', { fallback: 'Use Tool' })}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Tools;
