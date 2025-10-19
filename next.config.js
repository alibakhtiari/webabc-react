/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.jsdelivr.net', 'webabc.ir', 'webabc.ir.webabc.com', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    // Temporarily disable optimizeCss due to PostCSS config issues
    // optimizeCss: true,
  },
  async rewrites() {
    return [
      {
        source: '/:locale/fonts/:path*',
        destination: '/fonts/:path*',
      },
      {
        source: '/:locale/assets/:path*',
        destination: '/assets/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
