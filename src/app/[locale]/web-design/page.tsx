'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WebDesignPage() {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('webdesign.title', { fallback: 'Web Design' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('webdesign.description', { fallback: 'Professional web design services to create stunning online experiences' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Modern Design Principles</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• User-centered design approach</li>
                <li>• Mobile-first responsive design</li>
                <li>• Accessibility and inclusive design</li>
                <li>• Fast loading performance</li>
                <li>• SEO-friendly structure</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Technologies We Use</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• HTML5, CSS3, JavaScript</li>
                <li>• React, Next.js frameworks</li>
                <li>• Tailwind CSS for styling</li>
                <li>• TypeScript for type safety</li>
                <li>• Modern build tools and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
