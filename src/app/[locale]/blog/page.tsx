import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const BlogPage = dynamic(() => import('@/pages/BlogPage'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
    </div>
  ),
});

export default function BlogRoute() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-lg">Loading...</div>
      </div>
    }>
      <BlogPage />
    </Suspense>
  );
}

// Generate metadata for blog listing page
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'fa' ? 'وبلاگ وب‌ای‌بی‌سی' :
                locale === 'ar' ? 'مدونة WebABC' : 'WebABC Blog';

  const description = locale === 'fa' ? 'مقاله های تخصصی و راهنمایی های عملی در زمینه بازاریابی دیجیتال، طراحی وبسایت و sئو' :
                     locale === 'ar' ? 'مقالات متخصصة ونصائح عملية في مجال التسويق الرقمي وتصميم المواقع' :
                     'Expert articles and practical guides in digital marketing, web design, and SEO';

  return {
    title,
    description,
    alternates: {
      canonical: '/blog',
      languages: {
        'fa-IR': '/fa/blog',
        'en-US': '/en/blog',
        'ar-SA': '/ar/blog',
      },
    },
  };
}
