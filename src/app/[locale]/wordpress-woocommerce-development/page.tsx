import WordPressWooCommerceClient from '@/components/WordPressWooCommerceClient';

export default function WordPressWooCommerceDevelopment() {
  return <WordPressWooCommerceClient />;
}

// Generate metadata for WordPress/WooCommerce development page
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === 'fa' ? 'توسعه وردپرس و ووکامرس - وب‌ای‌بی‌سی' :
                locale === 'ar' ? 'تطوير ووردبريس و ووكوميرس - WebABC' : 'WordPress & WooCommerce Development - WebABC';

  const description = locale === 'fa' ? 'خدمات حرفه‌ای توسعه وردپرس و فروشگاه‌های ووکامرس شامل طراحی قالب سفارشی، افزونه‌ها، بهینه‌سازی عملکرد و امنیت' :
                     locale === 'ar' ? 'خدمات تطوير ووردريس ومتاجر ووكوميريس المهنية بما في ذلك تصميم القوالب المخصصة والإضافات وتحسين الأداء والأمان' :
                     'Professional WordPress and WooCommerce development services including custom themes, plugins, performance optimization, and security';

  return {
    title,
    description,
    alternates: {
      canonical: '/wordpress-woocommerce-development',
      languages: {
        'fa-IR': '/fa/wordpress-woocommerce-development',
        'en-US': '/en/wordpress-woocommerce-development',
        'ar-SA': '/ar/wordpress-woocommerce-development',
      },
    },
  };
}
