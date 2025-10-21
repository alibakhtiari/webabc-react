'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type WordPressUIProps = {
  locale: string;
};

export default function WordPressUI({ locale }: WordPressUIProps) {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('wordpress.title', { fallback: 'WordPress & WooCommerce Development' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('wordpress.subtitle', { fallback: 'Professional WordPress websites and WooCommerce stores that drive results' })}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('wordpress.wordpressServices', { fallback: 'WordPress Services' })}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.customThemes', { fallback: 'Custom WordPress themes design and development' })}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.pluginDevelopment', { fallback: 'Custom plugin development and integration' })}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.performanceOptimization', { fallback: 'Performance optimization and speed improvements' })}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.security', { fallback: 'Security hardening and maintenance' })}</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">{t('wordpress.woocommerceServices', { fallback: 'WooCommerce Services' })}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.ecommerceSetup', { fallback: 'Complete e-commerce store setup and configuration' })}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.paymentIntegration', { fallback: 'Payment gateway integration (Stripe, PayPal, etc.)' })}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.inventoryManagement', { fallback: 'Inventory and product management integration' })}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                  <span>{t('wordpress.taxShipping', { fallback: 'Tax and shipping configuration' })}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {t('wordpress.cta.title', { fallback: 'Ready to Launch Your WordPress Site?' })}
            </h3>
            <p className="text-lg mb-6">
              {t('wordpress.cta.description', { fallback: 'Get a free consultation and quote for your WordPress project' })}
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              {t('wordpress.cta.button', { fallback: 'Get Free Consultation' })}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
