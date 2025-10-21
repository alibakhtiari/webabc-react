import React from 'react';
import { getTranslatedString } from '@/lib/translationUtils';
import BlogUI from '@/components/BlogUI';
import type { Metadata } from 'next';

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const localeTyped = locale as 'en' | 'fa' | 'ar'; // Type assertion based on dynamic route

  const title = getTranslatedString('blog.title', localeTyped, {
    fallback: 'Blog'
  });

  const description = getTranslatedString('blog.description', localeTyped, {
    fallback: 'Latest articles and insights'
  });

  return {
    title: `${title} | WebABC`,
    description,
    alternates: {
      canonical: '/blog',
      languages: {
        'fa-IR': '/fa/blog',
        'en-US': '/en/blog',
        'ar-SA': '/ar/blog',
      },
    },
  };
}

export default async function BlogRoute({ params }: BlogPageProps) {
  const { locale } = await params;

  return <BlogUI locale={locale} />;
}
