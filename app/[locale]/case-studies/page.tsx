import CaseStudiesClient from '@/components/CaseStudiesClient';

export default function CaseStudies() {
  return <CaseStudiesClient />;
}

// Generate metadata for case studies page
export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const title = locale === 'fa' ? 'مطالعات موردی - پروژه‌های موفق وب‌ای‌بی‌سی' :
                locale === 'ar' ? 'دراسات الحالة - مشاريع WebABC الناجحة' : 'Case Studies - WebABC Success Projects';

  const description = locale === 'fa' ? 'بررسی پروژه‌های موفق مشتریان وب‌ای‌بی‌سی در زمینه طراحی سایت، بازاریابی دیجیتال و بهینه‌سازی موتورهای جستجو' :
                     locale === 'ar' ? 'مراجعة مشاريع العملاء الناجحة في WebABC في مجال تصميم المواقع و التسويق الرقمي و تحسين محركات البحث' :
                     'Review successful client projects at WebABC in web design, digital marketing, and SEO';

  return {
    title,
    description,
    alternates: {
      canonical: '/case-studies',
      languages: {
        'fa-IR': '/fa/case-studies',
        'en-US': '/en/case-studies',
        'ar-SA': '/ar/case-studies',
      },
    },
  };
}
