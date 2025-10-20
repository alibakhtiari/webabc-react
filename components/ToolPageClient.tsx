'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

interface ToolPageClientProps {
  tool: string;
}

export default function ToolPageClient({ tool }: ToolPageClientProps) {
  const { language, languageMeta, t } = useLanguage();

  // Map tool slugs to tool data
  const toolMap: {[key: string]: { title: string; description: string }} = {
    'headline-analyzer': { title: 'Headline Analyzer', description: 'Analyze your headlines for better SEO performance' },
    'lorem-generator': { title: 'Lorem Generator', description: 'Generate lorem ipsum text for your designs' },
    'meta-generator': { title: 'Meta Generator', description: 'Generate optimal meta tags for your pages' },
    'paascraper': { title: 'PAA Scraper', description: 'Scrape People Also Ask questions' },
    'readability-checker': { title: 'Readability Checker', description: 'Check how readable your content is' },
    'serp-preview': { title: 'SERP Preview', description: 'Preview how your page appears in search results' },
    'utm-builder': { title: 'UTM Builder', description: 'Build UTM parameters for your links' },
  };

  const toolData = toolMap[tool] || { title: `${tool.replace(/-/g, ' ')}`, description: `Tool for ${tool.replace(/-/g, ' ')}` };

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{toolData.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{toolData.description}</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center text-muted-foreground">
              <p>Tool implementation coming soon...</p>
              <p className="mt-4">This tool will help you {toolData.description.toLowerCase()}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
