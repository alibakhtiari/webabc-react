'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type ToolsUIProps = {
  locale: string;
};

export default function ToolsUI({ locale }: ToolsUIProps) {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('tools.title', { fallback: 'SEO Tools' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('tools.description', { fallback: 'Free online tools to help optimize your website and improve performance' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: 'SEO Checker', description: 'Analyze your website SEO performance', href: '/tools/seo-checker' },
              { title: 'Page Speed Test', description: 'Check your page loading speed', href: '/tools/page-speed' },
              { title: 'Keyword Research', description: 'Find the best keywords for your content', href: '/tools/keyword-research' },
              { title: 'Headline Analyzer', description: 'Analyze your headlines for better click rates', href: '/tools/headline-analyzer' },
              { title: 'Meta Generator', description: 'Generate optimal meta tags', href: '/tools/meta-generator' },
              { title: 'Readability Checker', description: 'Check how readable your content is', href: '/tools/readability-checker' }
            ].map((tool, index) => (
              <a key={index} href={tool.href} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <span className="text-primary hover:underline">Use Tool →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
