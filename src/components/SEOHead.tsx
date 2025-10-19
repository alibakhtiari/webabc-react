
'use client';

/**
 * Legacy SEOHead component - Now deprecated in favor of Next.js metadata API
 * This component now returns null and should be replaced with Next.js generateMetadata
 * in page components and NextSEO in client components.
 */

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
  author?: string;
  noIndex?: boolean;
  languageAlternates?: {
    lang: string;
    url: string;
  }[];
}

const SEOHead = (props: SEOHeadProps) => {
  // This component is now deprecated. Use Next.js generateMetadata instead.
  // Returning null to prevent rendering legacy react-helmet-async Head
  return null;
};

export default SEOHead;
