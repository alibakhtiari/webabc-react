import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SupportedLanguage, languages } from '@/types/language';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

// Navigation items with route mappings
const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'services', href: '/services' },
  { name: 'portfolio', href: '/portfolio' },
  { name: 'blog', href: '/blog' },
  { name: 'tools', href: '/tools' },
  { name: 'contact', href: '/contact' },
];

const ServiceDropdownItems = [
  { name: 'web_design', href: '/web-design' },
  { name: 'seo_services', href: '/seo-services' },
  { name: 'web_development', href: '/web-development-services' },
  { name: 'local_seo', href: '/local-seo' },
];

export const NextNavbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname with null check
  const currentPathParts = pathname?.split('/') || [];
  const currentLocale = (currentPathParts[1] as SupportedLanguage) || 'fa';

  const isActiveLink = (href: string) => {
    const currentPath = pathname?.replace(`/${currentLocale}`, '') || '/';
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  const handleLanguageSwitch = (newLanguage: SupportedLanguage) => {
    if (!pathname || newLanguage === currentLocale) return;

    const newPath = pathname.replace(`/${currentLocale}`, `/${newLanguage}`);
    router.push(newPath);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${language}`} className="flex-shrink-0">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${language}${item.href}`}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors',
                  isActiveLink(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                )}
              >
                {t(`nav.${item.name}`)}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              {Object.values(languages).map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => handleLanguageSwitch(lang.code)}
                  className="px-3 py-1 text-sm font-medium"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {lang.nativeName}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className={cn("block h-6 w-6", isMenuOpen ? "hidden" : "block")} />
              <X className={cn("block h-6 w-6", isMenuOpen ? "block" : "hidden")} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${language}${item.href}`}
                className={cn(
                  'block px-3 py-2 text-base font-medium w-full text-center',
                  isActiveLink(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.name}`)}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex justify-center space-x-2 mt-4 pt-4 border-t border-gray-200">
              {Object.values(languages).map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    handleLanguageSwitch(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2"
                >
                  {lang.nativeName}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NextNavbar;
