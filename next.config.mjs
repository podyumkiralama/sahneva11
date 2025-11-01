/** @type {import('next').NextConfig} */
const nextConfig = {
  // === TEMEL AYARLAR (Next 16) ===
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,

  // === GÖRÜNTÜ OPTİMİZASYONU ===
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sahneva.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      // Gerekirse sosyal görsel hostları ekle:
      // { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
      // { protocol: 'https', hostname: 'scontent.xx.fbcdn.net' },
    ],
    dangerouslyAllowSVG: false,
  },

  // === DERLEYİCİ OPTİMİZASYONLARI ===
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] } : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production'
      ? { properties: ['^data-testid$'] } : false,
  },

  // === DENEYSEL (Next 16 ile uyumlu) ===
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
      '@headlessui/react',
      'framer-motion',
      'react-icons',
    ],
  },

  // === HEADERS (CSP middleware ile gelecek; burada sadece cache/prefetch) ===
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Link', value: '<https://www.googletagmanager.com>; rel=preconnect' },
          { key: 'Link', value: '<https://www.google-analytics.com>; rel=preconnect' },
          { key: 'Link', value: '<https://fonts.gstatic.com>; rel=preconnect; crossorigin' },
          { key: 'Link', value: '<https://fonts.googleapis.com>; rel=dns-prefetch' },
        ],
      },
    ];
  },

  // === ENV ===
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.sahneva.com',
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV || 'development',
  },

  // === BUILD & PERFORMANS ===
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 300,
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
};

export default nextConfig;
