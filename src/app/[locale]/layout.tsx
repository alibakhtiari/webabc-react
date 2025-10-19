import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

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
  return (
    <html lang={locale} dir={locale === 'ar' || locale === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${inter.variable} ${ltrFont.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
