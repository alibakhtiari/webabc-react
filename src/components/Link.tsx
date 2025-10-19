// Universal Link component for Next.js migration
'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

interface UniversalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  locale?: string;
}

export const UniversalLink: React.FC<UniversalLinkProps> = ({
  href,
  children,
  className,
  prefetch = true,
  replace = false,
  scroll = true,
  locale,
  ...props
}) => {
  const { language } = useLanguage();
  const router = useRouter();

  // Determine the correct href based on locale
  const localizedHref = href.startsWith('/') && !href.startsWith('/api') && !href.startsWith('/_next')
    ? `/${locale || language}${href}`
    : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (replace) {
      router.replace(localizedHref, { scroll });
    } else {
      router.push(localizedHref, { scroll });
    }
  };

  return (
    <a
      href={localizedHref}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

// Export as default to match common import patterns
export default UniversalLink;
