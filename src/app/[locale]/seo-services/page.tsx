import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SeoService = dynamic(() => import('@/pages/SeoService'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

export default function SeoServicesRoute() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <SeoService />
    </Suspense>
  );
}

// Generate metadata for SEO services page
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'fa' ? 'خدمات سئو | WebABC' :
                locale === 'ar' ? 'خدمات تحسين محركات البحث | WebABC' : 'SEO Services | WebABC';

  const description = locale === 'fa' ? 'خدمات بهینه سازی موتور جستجو حرفه‌ای برای بهبود رنکینگ وبسایت شما' :
                     locale === 'ar' ? 'خدمات تحسين محركات البحث المهنية لتحسين ترتيب موقعك الإلكتروني' :
                     'Professional search engine optimization services to improve your website ranking';

  return {
    title,
    description,
    alternates: {
      canonical: '/seo-services',
      languages: {
        'fa-IR': '/fa/seo-services',
        'en-US': '/en/seo-services',
        'ar-SA': '/ar/seo-services',
      },
    },
  };
}
