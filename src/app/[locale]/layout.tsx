import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
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

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
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
