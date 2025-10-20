import { NextRequest, NextResponse } from 'next/server';

const locales = ['fa', 'en', 'ar'];
const defaultLocale = 'fa';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname is missing a locale prefix
  const pathnameHasMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameHasMissingLocale) {
    // Use the default locale for redirects
    const locale = defaultLocale;
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api routes, static files)
    '/((?!_next|api|_next/static|_next/image|favicon.ico).*)',
  ],
};
