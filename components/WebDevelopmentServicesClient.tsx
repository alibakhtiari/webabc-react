'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WebDevelopmentServicesClient() {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <Breadcrumb />
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('webDev.title', { fallback: 'Web Development Services' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('webDev.description', { fallback: 'Professional web development services using modern technologies and best practices' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('webDev.customSites', { fallback: 'Custom Website Development' })}</h3>
              <p className="text-muted-foreground">{t('webDev.customDesc', { fallback: 'Tailored websites built with modern frameworks and responsive design' })}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('webDev.ecommerce', { fallback: 'E-commerce Solutions' })}</h3>
              <p className="text-muted-foreground">{t('webDev.ecommerceDesc', { fallback: 'Online stores with payment integration and inventory management' })}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('webDev.cms', { fallback: 'Content Management Systems' })}</h3>
              <p className="text-muted-foreground">{t('webDev.cmsDesc', { fallback: 'Easy-to-use CMS platforms for content management' })}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('webDev.api', { fallback: 'API Development' })}</h3>
              <p className="text-muted-foreground">{t('webDev.apiDesc', { fallback: 'RESTful APIs and backend services' })}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('webDev.performance', { fallback: 'Performance Optimization' })}</h3>
              <p className="text-muted-foreground">{t('webDev.performanceDesc', { fallback: 'Fast loading websites with optimal performance' })}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{t('webDev.maintenance', { fallback: 'Website Maintenance' })}</h3>
              <p className="text-muted-foreground">{t('webDev.maintenanceDesc', { fallback: 'Ongoing support and website updates' })}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
