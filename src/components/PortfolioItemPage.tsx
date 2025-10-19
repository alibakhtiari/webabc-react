
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import UniversalLink from '@/components/Link';
import { useLanguage } from '@/contexts/LanguageContext';

interface PortfolioItemProps {
  portfolioItems: {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    fullDescription?: string;
    client?: string;
    projectUrl?: string;
    technologies?: string[];
    results?: { label: string; value: string }[];
  }[];
}

const PortfolioItemPage: React.FC<PortfolioItemProps & { id: string }> = ({ portfolioItems, id }) => {
  const { t, language, languageMeta } = useLanguage();

  const item = portfolioItems.find(item => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('common.notFound', { fallback: 'Not Found' })}</h1>
          <p className="mb-6">{t('portfolio.itemNotFound', { fallback: 'Portfolio item not found' })}</p>
          <Button asChild variant="outline">
            <UniversalLink href="/portfolio">{t('common.backToPortfolio')}</UniversalLink>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${languageMeta.fontFamily} flex flex-col`}>
      <Breadcrumb />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Project Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>
            <div className="flex items-center">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {item.category}
              </span>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <LazyImage 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">{language === 'en' ? 'Project Description' : language === 'ar' ? 'وصف المشروع' : 'توضیحات پروژه'}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {item.fullDescription || item.description}
                </p>
              </div>
              
              {item.client && (
                <div>
                  <h2 className="text-xl font-bold mb-3">{language === 'en' ? 'Client' : language === 'ar' ? 'العميل' : 'کارفرما'}</h2>
                  <p className="text-gray-700">{item.client}</p>
                </div>
              )}
              
              {item.technologies && (
                <div>
                  <h2 className="text-xl font-bold mb-3">{language === 'en' ? 'Technologies Used' : language === 'ar' ? 'التقنيات المستخدمة' : 'تکنولوژی‌های استفاده شده'}</h2>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {item.results && (
                <div>
                  <h2 className="text-xl font-bold mb-3">{language === 'en' ? 'Results' : language === 'ar' ? 'النتائج' : 'نتایج'}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {item.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <span className="block text-gray-500 text-sm">{result.label}</span>
                        <span className="block text-xl font-bold text-primary">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild variant="outline">
                  <UniversalLink href="/portfolio">
                    {languageMeta.direction === 'rtl' ? (
                      <>
                        {t('common.backToPortfolio')}
                        <ArrowLeft className="mr-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t('common.backToPortfolio')}
                      </>
                    )}
                  </UniversalLink>
                </Button>

                {item.projectUrl && (
                  <Button asChild>
                    <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                      {t('common.viewWebsite')}
                      <ExternalLink className={languageMeta.direction === 'rtl' ? 'mr-2 h-4 w-4' : 'ml-2 h-4 w-4'} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioItemPage;
