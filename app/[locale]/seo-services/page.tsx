'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SeoServicePage() {
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
              {t('seo.description', { fallback: 'Professional SEO services to boost your online visibility' })}
            </p>
          </div>
          {/* SEO services content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Keyword Research</h3>
              <p className="text-muted-foreground">Find the best keywords for your business</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">On-Page Optimization</h3>
              <p className="text-muted-foreground">Optimize your website content and structure</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Link Building</h3>
              <p className="text-muted-foreground">Build quality backlinks to your site</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
