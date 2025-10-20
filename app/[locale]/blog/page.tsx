import BlogClient from '@/components/BlogClient';

export default function BlogRoute() {
  return <BlogClient />;
}

// Generate metadata for blog listing page
export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
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
