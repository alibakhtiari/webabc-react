import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import Breadcrumb from '@/components/Breadcrumb';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { createOrganizationSchema, createServiceSchema } from '@/lib/schema';
import { ArrowRight, Wrench, Zap, Eye } from 'lucide-react';

interface SchemaData {
  [key: string]: unknown;
}

interface ToolTranslation {
  title?: string;
  description?: string;
}

const ToolsPage: React.FC = () => {
  const { t, language, languageMeta } = useLanguage();
  const [schemaMarkup, setSchemaMarkup] = useState<SchemaData[]>([]);

  useEffect(() => {
    // Generate schemas
    const baseUrl = window.location.origin;

    // Organization schema
    const orgSchema = createOrganizationSchema(
      baseUrl,
      `${baseUrl}/images/logo.jpg`,
      [
        { telephone: "+1234567890", contactType: "customer service" }
      ],
      language
    );

    // Tools service schema
    const toolsServiceSchema = createServiceSchema(
      t('tools.title'),
      t('tools.description'),
      `${baseUrl}/${language}/tools`,
      `${baseUrl}/images/tools-seo.jpg`,
      'WebABC',
      'Worldwide',
      language
    );

    setSchemaMarkup([
      orgSchema,
      toolsServiceSchema
    ]);
  }, [language, t]);

  const toolIcons = {
    headlineAnalyzer: <Eye className="w-8 h-8 text-blue-600" />,
    loremGenerator: <Zap className="w-8 h-8 text-purple-600" />,
    metaGenerator: <Wrench className="w-8 h-8 text-green-600" />,
    paaScraper: <Eye className="w-8 h-8 text-orange-600" />,
    readabilityChecker: <Eye className="w-8 h-8 text-red-600" />,
    serpPreview: <Wrench className="w-8 h-8 text-indigo-600" />,
    utmBuilder: <Wrench className="w-8 h-8 text-teal-600" />
  };

  const getToolRoute = (toolName: string) => {
    const routeMap: Record<string, string> = {
      headlineAnalyzer: 'headline-analyzer',
      loremGenerator: 'lorem-generator',
      metaGenerator: 'meta-generator',
      paaScraper: 'paa-scraper',
      readabilityChecker: 'readability-checker',
      serpPreview: 'serp-preview',
      utmBuilder: 'utm-builder'
    };
    return routeMap[toolName] || toolName;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`${t('tools.title')} | WebABC`}
        description={t('tools.description')}
        keywords={`${t('tools.title')}, ${t('tools.serpPreview.title')}, ${t('tools.metaGenerator.title')}, ${t('tools.headlineAnalyzer.title')}`}
      />

      {schemaMarkup.length > 0 && <SchemaMarkup schema={schemaMarkup} />}

      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Breadcrumb />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.5]">{t('tools.title')}</h1>
              <p className="text-xl text-gray-600">{t('tools.description')}</p>
            </div>
          </div>
        </section>

        {/* SEO Marketers Tools Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">{t('tools.seoMarketersTitle')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('tools.seoMarketersDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { key: 'serpPreview', route: 'serp-preview' },
                { key: 'metaGenerator', route: 'meta-generator' },
                { key: 'paaScraper', route: 'paa-scraper' },
                { key: 'utmBuilder', route: 'utm-builder' }
              ].map(({ key, route }) => {
                const toolValue = t(`tools.${key}`);
                return (
                  <div
                    key={key}
                    className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 group-hover:bg-blue-100 transition-colors">
                      {toolIcons[key as keyof typeof toolIcons] || <Wrench className="w-8 h-8 text-blue-600" />}
                    </div>

                    <h3 className="text-2xl font-bold mb-4">
                      {t(`tools.${key}.title`) || (toolValue as ToolTranslation)?.title || 'Tool'}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {t(`tools.${key}.description`) || (toolValue as ToolTranslation)?.description || 'A useful SEO tool'}
                    </p>

                    <Link
                      to={`/${language}/tools/${route}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:underline group"
                    >
                      {t('common.readMore')}
                      <ArrowRight className={`w-4 h-4 ${languageMeta.direction === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content Creators Tools Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-green-600">{t('tools.contentCreatorsTitle')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('tools.contentCreatorsDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { key: 'headlineAnalyzer', route: 'headline-analyzer' },
                { key: 'readabilityChecker', route: 'readability-checker' },
                { key: 'loremGenerator', route: 'lorem-generator' }
              ].map(({ key, route }) => {
                const toolValue = t(`tools.${key}`);
                return (
                  <div
                    key={key}
                    className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-6 group-hover:bg-green-100 transition-colors">
                      {toolIcons[key as keyof typeof toolIcons] || <Wrench className="w-8 h-8 text-green-600" />}
                    </div>

                    <h3 className="text-2xl font-bold mb-4">
                      {t(`tools.${key}.title`) || (toolValue as ToolTranslation)?.title || 'Tool'}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {t(`tools.${key}.description`) || (toolValue as ToolTranslation)?.description || 'A useful SEO tool'}
                    </p>

                    <Link
                      to={`/${language}/tools/${route}`}
                      className="inline-flex items-center text-green-600 font-medium hover:underline group"
                    >
                      {t('common.readMore')}
                      <ArrowRight className={`w-4 h-4 ${languageMeta.direction === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('tools.featuresTitle')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('tools.featuresDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{t('tools.features.items.free.title')}</h3>
                <p className="text-gray-600">{t('tools.features.items.free.description')}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-600">{t('tools.features.items.fast.title')}</h3>
                <p className="text-gray-600">{t('tools.features.items.fast.description')}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{t('tools.features.items.comprehensive.title')}</h3>
                <p className="text-gray-600">{t('tools.features.items.comprehensive.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{t('tools.ctaTitle')}</h2>
              <p className="text-xl mb-8 opacity-90">{t('tools.ctaDescription')}</p>
              <Link
                to={`/${language}/contact`}
                className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-full hover:shadow-lg transition-all"
              >
                {t('common.contactUs')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToolsPage;
