import React from 'react';
import { getTranslatedString } from '@/lib/translationUtils';
import WordPressUI from '@/components/WordPressUI';
import type { Metadata } from 'next';

type WordPressPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WordPressPageProps): Promise<Metadata> {
  const { locale } = await params;
  const localeTyped = locale as 'en' | 'fa' | 'ar'; // Type assertion based on dynamic route

  const title = getTranslatedString('wordpress.title', localeTyped, {
    fallback: 'WordPress & WooCommerce Development'
  });

  const description = getTranslatedString('wordpress.description', localeTyped, {
    fallback: 'Professional WordPress and WooCommerce development services including custom themes, plugins, performance optimization, and security'
  });

  return {
    title: `${title} | WebABC`,
    description,
    alternates: {
      canonical: '/wordpress-woocommerce-development',
      languages: {
        'fa-IR': '/fa/wordpress-woocommerce-development',
        'en-US': '/en/wordpress-woocommerce-development',
        'ar-SA': '/ar/wordpress-woocommerce-development',
      },
    },
  };
}

export default async function WordPressWooCommerceDevelopment({ params }: WordPressPageProps) {
  const { locale } = await params;

  return <WordPressUI locale={locale} />;
}
