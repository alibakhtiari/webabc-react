'use client';

import React from 'react';
import ConsultationForm from '@/components/ConsultationForm';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { language, languageMeta, t } = useLanguage();

  return (
    <main className={`min-h-screen ${languageMeta.fontFamily}`}>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title', { fallback: 'Contact Us' })}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.description', { fallback: 'Get in touch with us for your web development needs' })}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {/* <ConsultationForm /> */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p>Contact form will be implemented here.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
