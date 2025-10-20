import { Metadata } from 'next';
import { useLanguage } from '@/contexts/LanguageContext';
import { generateLanguageAlternates, getPathWithoutLanguage, getPageNameFromPath } from '@/lib/languageUtils';
import { usePathname } from 'next/navigation';

export interface NextSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    image?: string;
  };
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: any;
}

const NextSEO = ({
  title,
  description,
  keywords,
  openGraph,
  twitter,
  canonicalUrl,
  noIndex = false,
  structuredData
}: NextSEOProps) => {
  const { language, getSeoTitle, getSeoDescription, languageMeta } = useLanguage();
  const pathname = usePathname();

  const pageName = getPageNameFromPath(pathname || '');
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webabc.ir';

  // Generate SEO content based on language
  const seoTitle = getSeoTitle(title);
  const seoDescription = getSeoDescription(description);
  const seoKeywords = keywords || `${pageName.replace('-', ' ')}, digital marketing, web development, seo services`;

  // Generate URLs
  const currentUrl = canonicalUrl || `${baseUrl}${pathname}`;
  const pathWithoutLang = getPathWithoutLanguage(pathname || '');
  const languageAlternates = generateLanguageAlternates(pathWithoutLang, language);

  // Prepare metadata object
  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: [{ name: 'WebABC' }],
    creator: 'WebABC',
    publisher: 'WebABC',
    alternates: {
      canonical: currentUrl,
      languages: languageAlternates ? Object.fromEntries(
        languageAlternates.map(alt => [alt.lang, alt.url])
      ) : undefined,
    },
    openGraph: {
      title: openGraph?.title || seoTitle,
      description: openGraph?.description || seoDescription,
      url: currentUrl,
      siteName: 'WebABC',
      images: openGraph?.image ? [
        {
          url: openGraph.image.startsWith('http') ? openGraph.image : `${baseUrl}${openGraph.image}`,
          width: 1200,
          height: 630,
          alt: seoTitle,
        }
      ] : [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: seoTitle,
        }
      ],
      locale: language === 'en' ? 'en_US' : language === 'ar' ? 'ar_SA' : 'fa_IR',
      type: openGraph?.type || 'website',
    },
    twitter: {
      card: twitter?.card || 'summary_large_image',
      title: twitter?.title || seoTitle,
      description: twitter?.description || seoDescription,
      images: twitter?.image ? [
        twitter.image.startsWith('http') ? twitter.image : `${baseUrl}${twitter.image}`
      ] : [
        `${baseUrl}/og-image.png`
      ],
      creator: '@webabc',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: noIndex,
        'max-video-preview': !noIndex ? 'large' : 'none',
        'max-image-preview': !noIndex ? 'large' : 'none',
        'max-snippet': !noIndex ? -1 : 0,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };

  // Add structured data if provided
  if (structuredData) {
    metadata.other = {
      'application/ld+json': JSON.stringify(structuredData),
    };
  }

  return metadata;
};

// Export is already defined above

// Hook for getting page metadata (to use in page components)
export const usePageMetadata = (seoProps: NextSEOProps): Metadata => {
  return NextSEO(seoProps);
};

export default NextSEO;
