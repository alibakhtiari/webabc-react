'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPage: React.FC = () => {
  let language = 'fa';
  let languageMeta: any = {
    direction: 'rtl',
    nativeName: 'فارسی',
    fontFamily: '',
  };
  let t = (key: string, options?: any) => key; // Default fallback

  try {
    const context = useLanguage();
    language = context.language;
    languageMeta = context.languageMeta;
    t = context.t;
  } catch (error) {
    // Handle the case where LanguageProvider is not available during static generation
    console.warn('LanguageProvider not available, using defaults:', error);
  }

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            {t('blog.title', { fallback: 'Blog' })}
          </h1>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              {t('common.comingSoon', { fallback: 'Coming Soon...' })}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogPage;
