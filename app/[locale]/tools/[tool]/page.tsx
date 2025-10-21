import React from 'react';
import ToolPageUI from '@/components/ToolPageUI';
import type { Metadata } from 'next';

interface ToolPageProps {
  params: Promise<{
    locale: string;
    tool: string;
  }>;
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { locale, tool } = await params;

  const toolMap = {
    'headline-analyzer': 'Headline Analyzer Tool - Improve Your Click-Through Rates',
    'lorem-generator': 'Lorem Ipsum Generator - Dummy Text for Your Projects',
    'meta-generator': 'Meta Tag Generator - Optimize Your Page Metadata',
    'paascraper': 'People Also Ask Scraper - SERP Research Tool',
    'readability-checker': 'Readability Checker - Test Content Readability',
    'serp-preview': 'SERP Preview Tool - See How Pages Appear in Search',
    'utm-builder': 'UTM Parameter Builder - Track Your Marketing Campaigns',
  };

  const title = toolMap[tool as keyof typeof toolMap] || `${tool} Tool`;

  return {
    title,
    description: `Free ${tool} tool to help optimize your website and marketing efforts.`,
    alternates: {
      canonical: `/tools/${tool}`,
      languages: {
        'fa-IR': `/fa/tools/${tool}`,
        'en-US': `/en/tools/${tool}`,
        'ar-SA': `/ar/tools/${tool}`,
      },
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { locale, tool } = await params;

  return <ToolPageUI locale={locale} tool={tool} />;
}

// Generate static params for all tools
export async function generateStaticParams() {
  const locales = ['fa', 'en', 'ar'];
  const tools = [
    'headline-analyzer',
    'lorem-generator',
    'meta-generator',
    'paascraper',
    'readability-checker',
    'serp-preview',
    'utm-builder'
  ];

  const params = [];

  for (const locale of locales) {
    for (const tool of tools) {
      params.push({
        locale,
        tool,
      });
    }
  }

  return params;
}
