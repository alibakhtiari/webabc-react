import WebDevelopmentServicesClient from '@/components/WebDevelopmentServicesClient';

export default function WebDevelopmentServices() {
  return <WebDevelopmentServicesClient />;
}

// Generate metadata for web development services page
export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const title = locale === 'fa' ? 'خدمات توسعه وب - Webbookir' :
                locale === 'ar' ? 'خدمات تطوير المواقع - Webbookir' : 'Web Development Services - WebABC';

  const description = locale === 'fa' ? 'خدمات حرفه‌ای توسعه وب شامل طراحی سایت سفارشی، راه‌اندازی فروشگاه آنلاین، سیستم‌های مدیریت محتوا و بهینه‌سازی عملکرد' :
                     locale === 'ar' ? 'خدمات تطوير مواقع الويب المهنية بما في ذلك تصميم المواقع المخصصة، إنشاء المتاجر الإلكترونية، أنظمة إدارة المحتوى وتحسين الأداء' :
                     'Professional web development services including custom website design, e-commerce setup, CMS systems, and performance optimization';

  return {
    title,
    description,
    alternates: {
      canonical: '/web-development-services',
      languages: {
        'fa-IR': '/fa/web-development-services',
        'en-US': '/en/web-development-services',
        'ar-SA': '/ar/web-development-services',
      },
    },
  };
}
