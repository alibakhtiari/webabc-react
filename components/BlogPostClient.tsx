'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const { language, languageMeta, t } = useLanguage();

  // In a real app, fetch blog post by slug
  const post = {
    title: slug.replace(/-/g, ' ').toUpperCase(),
    content: 'Blog post content will be loaded based on the slug.',
    date: '2025-01-01'
  };

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <time className="text-muted-foreground">{post.date}</time>
            </header>
            <div className="prose max-w-none">
              <p>{post.content}</p>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
