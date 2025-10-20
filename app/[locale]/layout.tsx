import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import "@/app/globals.css";
import Navbar from '@/components/Navbar';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const ltrFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ltr',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const direction = locale === 'ar' || locale === 'fa' ? 'rtl' : 'ltr';

  return (
    <div className={`${inter.variable} ${ltrFont.variable} font-sans`} dir={direction} lang={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}
