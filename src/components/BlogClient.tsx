'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogClient() {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('blog.title', { fallback: 'Blog' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('blog.description', { fallback: 'Latest articles and insights' })}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog posts will be loaded dynamically */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">SEO Best Practices 2025</h2>
              <p className="text-muted-foreground mb-4">Modern SEO strategies and best practices</p>
              <a href="#" className="text-primary hover:underline">Read more</a>
            </div>
            {/* Add more blog post placeholders */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
