
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import UniversalLink from '@/components/Link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import NextImage from './NextImage';

const HeroSection = () => {
  const { t, language, languageMeta } = useLanguage();

  const isRTL = languageMeta.direction === 'rtl';
  const ArrowIcon = isRTL ? () => <ArrowRight className="h-4 w-4 rotate-180" /> : () => <ArrowRight className="h-4 w-4" />;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 lg:col-span-6 text-center lg:text-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-normal">
              {t('home.hero.title', { fallback: 'Elevate Your Digital Presence with Expert Web Solutions' })}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('home.hero.description', { fallback: 'We help businesses grow online with professional web development and SEO strategies that deliver real results.' })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-8">
                <UniversalLink href="/services">
                  {t('home.hero.primaryCta', { fallback: 'Explore Services' })}
                </UniversalLink>
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <UniversalLink href="/portfolio" className="flex items-center gap-2">
                  {t('home.hero.secondaryCta', { fallback: 'View Portfolio' })}
                  <ArrowIcon />
                </UniversalLink>
              </Button>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full transform scale-110"></div>
              <NextImage
                src="/images/hero-image.png"
                alt={t('home.hero.imageAlt', { fallback: 'Digital marketing and web development illustration' })}
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
