import type { MetadataRoute } from 'next'

const BASE_URL = 'https://webabc.ir';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
