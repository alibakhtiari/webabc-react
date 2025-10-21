import React from 'react';
import { getTranslatedString } from '@/lib/translationUtils';
import ToolsUI from '@/components/ToolsUI';
import type { Metadata } from 'next';

type ToolsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ToolsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const localeTyped = locale as 'en' | 'fa' | 'ar'; // Type assertion based on dynamic route

  const title = getTranslatedString('tools.title', localeTyped, {
    fallback: 'SEO Tools'
  });

  const description = getTranslatedString('tools.description', localeTyped, {
    fallback: 'Free online tools to help optimize your website and improve performance'
  });

  return {
    title: `${title} | WebABC`,
    description,
    alternates: {
      canonical: '/tools',
      languages: {
        'fa-IR': '/fa/tools',
        'en-US': '/en/tools',
        'ar-SA': '/ar/tools',
      },
    },
  };
}

export default async function ToolsRoute({ params }: ToolsPageProps) {
  const { locale } = await params;

  return <ToolsUI locale={locale} />;
}
