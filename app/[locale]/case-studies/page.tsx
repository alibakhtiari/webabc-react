import React from 'react';
import { getTranslatedString } from '@/lib/translationUtils';
import CaseStudiesUI from '@/components/CaseStudiesUI';
import type { Metadata } from 'next';

type CaseStudiesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: CaseStudiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const localeTyped = locale as 'en' | 'fa' | 'ar'; // Type assertion based on dynamic route

  const title = getTranslatedString('caseStudies.title', localeTyped, {
    fallback: 'Case Studies'
  });

  const description = getTranslatedString('caseStudies.description', localeTyped, {
    fallback: 'Explore our successful client projects and implementation results'
  });

  return {
    title: `${title} | WebABC`,
    description,
    alternates: {
      canonical: '/case-studies',
      languages: {
        'fa-IR': '/fa/case-studies',
        'en-US': '/en/case-studies',
        'ar-SA': '/ar/case-studies',
      },
    },
  };
}

export default async function CaseStudies({ params }: CaseStudiesPageProps) {
  const { locale } = await params;

  return <CaseStudiesUI locale={locale} />;
}
