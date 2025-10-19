import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: {
    default: 'WebABC - دیجیتال مارکتینگ',
    template: '%s | WebABC',
  },
  description: 'خدمات دیجیتال مارکتینگ حرفه‌ای شامل Seo، طراحی وبسایت، توسعه نرم‌افزار و بهبود عملکرد',
  keywords: ['سیو', 'طراحی وبسایت', 'دیجیتال مارکتینگ', 'SEO', 'web development'],
  authors: [{ name: 'WebABC' }],
  creator: 'WebABC',
  metadataBase: new URL('https://webabc.ir'),
  alternates: {
    languages: {
      'fa-IR': '/',
      'en-US': '/en',
      'ar-SA': '/ar',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'WebABC',
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@webabc',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
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
