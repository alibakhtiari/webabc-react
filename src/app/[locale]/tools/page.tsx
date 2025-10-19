import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Tools = dynamic(() => import('@/pages/Tools'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

export default function ToolsRoute() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <Tools />
    </Suspense>
  );
}

// Generate metadata for tools page
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'fa' ? 'ابزارهای رایگان سئو' :
                locale === 'ar' ? 'أدوات تحسين محركات البحث المجانية' : 'Free SEO Tools';

  const description = locale === 'fa' ? 'مجموعه کاملی از ابزارهای رایگان سئو برای بهبود عملکرد وبسایت شما' :
                     locale === 'ar' ? 'مجموعة شاملة من أدوات تحسين محركات البحث المجانية لتحسين أداء موقعك' :
                     'Complete set of free SEO tools to improve your website performance';

  return {
    title,
    description,
    alternates: {
      canonical: '/tools',
      languages: {
        'fa-IR': '/fa/tools',
        'en-US': '/en/tools',
        'ar-SA': '/ar/tools',
      },
    },
  };
}
