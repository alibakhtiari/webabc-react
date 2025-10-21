import type { MetadataRoute } from 'next'
import { portfolioItems } from '@/lib/portfolioData';

const BASE_URL = 'https://webabc.ir';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [];

  // Add locale-specific routes for main pages
  const locales = ['en', 'fa', 'ar'];
  const mainPages = [
    { url: '', priority: 1.0, changefreq: 'weekly' },
    { url: 'about', priority: 0.6, changefreq: 'monthly' },
    { url: 'services', priority: 0.8, changefreq: 'monthly' },
    { url: 'portfolio', priority: 0.8, changefreq: 'monthly' },
    { url: 'seo-services', priority: 0.8, changefreq: 'monthly' },
    { url: 'web-development-services', priority: 0.8, changefreq: 'monthly' },
    { url: 'wordpress-woocommerce-development', priority: 0.7, changefreq: 'monthly' },
    { url: 'web-design', priority: 0.7, changefreq: 'monthly' },
    { url: 'case-studies', priority: 0.7, changefreq: 'monthly' },
    { url: 'blog', priority: 0.9, changefreq: 'daily' },
    { url: 'tools', priority: 0.6, changefreq: 'monthly' },
    { url: 'contact', priority: 0.6, changefreq: 'monthly' },
  ];

  for (const page of mainPages) {
    for (const locale of locales) {
      sitemap.push({
        url: `${BASE_URL}/${locale}/${page.url}`,
        lastModified: new Date('2025-10-21'),
        changeFrequency: page.changefreq as 'weekly' | 'monthly' | 'daily',
        priority: page.priority,
        alternates: {
          languages: {
            'fa-IR': `${BASE_URL}/fa/${page.url}`,
            'en-US': `${BASE_URL}/en/${page.url}`,
            'ar-SA': `${BASE_URL}/ar/${page.url}`,
          },
        },
      });
    }
  }

  // Add home page (special case with no locale prefix for default)
  const homePages = locales.map(locale => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date('2025-10-21'),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
    alternates: {
      languages: {
        'fa-IR': `${BASE_URL}/fa`,
        'en-US': `${BASE_URL}/en`,
        'ar-SA': `${BASE_URL}/ar`,
      },
    },
  }));

  sitemap.push(...homePages);

  // Add portfolio items
  for (const item of portfolioItems) {
    for (const locale of locales) {
      sitemap.push({
        url: `${BASE_URL}/${locale}/portfolio/${item.id}`,
        lastModified: new Date('2025-10-21'),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            'fa-IR': `${BASE_URL}/fa/portfolio/${item.id}`,
            'en-US': `${BASE_URL}/en/portfolio/${item.id}`,
            'ar-SA': `${BASE_URL}/ar/portfolio/${item.id}`,
          },
        },
      });
    }
  }

  // Add example blog posts (in a real app, fetch from CMS)
  const exampleBlogSlugs = [
    'seo-best-practices-2025',
    'web-design-trends-2025',
    'digital-marketing-strategies',
    'wordpress-vs-custom-development',
    'mobile-first-design-2025'
  ];

  for (const slug of exampleBlogSlugs) {
    for (const locale of locales) {
      sitemap.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date('2025-10-21'),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: {
            'fa-IR': `${BASE_URL}/fa/blog/${slug}`,
            'en-US': `${BASE_URL}/en/blog/${slug}`,
            'ar-SA': `${BASE_URL}/ar/blog/${slug}`,
          },
        },
      });
    }
  }

  // Add tool pages
  const toolSlugs = [
    'headline-analyzer',
    'lorem-generator',
    'meta-generator',
    'paascraper',
    'readability-checker',
    'serp-preview',
    'utm-builder'
  ];

  for (const slug of toolSlugs) {
    for (const locale of locales) {
      sitemap.push({
        url: `${BASE_URL}/${locale}/tools/${slug}`,
        lastModified: new Date('2025-10-21'),
        changeFrequency: 'monthly',
        priority: 0.5,
        alternates: {
          languages: {
            'fa-IR': `${BASE_URL}/fa/tools/${slug}`,
            'en-US': `${BASE_URL}/en/tools/${slug}`,
            'ar-SA': `${BASE_URL}/ar/tools/${slug}`,
          },
        },
      });
    }
  }

  return sitemap;
}
