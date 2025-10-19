import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const WebDesign = dynamic(() => import('@/pages/WebDesign'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

export default function WebDesignRoute() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <WebDesign />
    </Suspense>
  );
}

// Generate metadata for web design page
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'fa' ? 'طراحی وبسایت | WebABC' :
                locale === 'ar' ? 'تصميم المواقع | WebABC' : 'Web Design | WebABC';

  const description = locale === 'fa' ? 'طراحی وبسایت حرفه‌ای و مدرن با بهترین تجربه کاربری برای مشتریان شما' :
                     locale === 'ar' ? 'تصميم مواقع إلكترونية احترافي وحديث مع أفضل تجربة مستخدم لعملائك' :
                     'Professional and modern web design with the best user experience for your customers';

  return {
    title,
    description,
    alternates: {
      canonical: '/web-design',
      languages: {
        'fa-IR': '/fa/web-design',
        'en-US': '/en/web-design',
        'ar-SA': '/ar/web-design',
      },
    },
  };
}
