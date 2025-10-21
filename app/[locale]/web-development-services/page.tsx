import React from 'react';
import { getTranslatedString } from '@/lib/translationUtils';
import WebDevServicesUI from '@/components/WebDevServicesUI';
import type { Metadata } from 'next';

type WebDevServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WebDevServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const localeTyped = locale as 'en' | 'fa' | 'ar'; // Type assertion based on dynamic route

  const title = getTranslatedString('webDevServices.title', localeTyped, {
    fallback: 'Web Development Services'
  });

  const description = getTranslatedString('webDevServices.description', localeTyped, {
    fallback: 'Professional web development services including custom website design, e-commerce setup, CMS systems, and performance optimization'
  });

  return {
    title: `${title} | WebABC`,
    description,
    alternates: {
      canonical: '/web-development-services',
      languages: {
        'fa-IR': '/fa/web-development-services',
        'en-US': '/en/web-development-services',
        'ar-SA': '/ar/web-development-services',
      },
    },
  };
}

export default async function WebDevelopmentServices({ params }: WebDevServicesPageProps) {
  const { locale } = await params;

  return <WebDevServicesUI locale={locale} />;
}
