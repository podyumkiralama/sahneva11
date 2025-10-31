/** @type {import('next').NextConfig} */
const nextConfig = {
  // === TEMEL AYARLAR ===
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  
  // === GÖRÜNTÜ OPTİMİZASYONU - HATALAR DÜZELTİLDİ ===
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: false,
    // 'quality' ve 'contentSecurityPolicy' kaldırıldı - Next.js'de desteklenmiyor
  },

  // === DERLEYİCİ OPTİMİZASYONLARI ===
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? {
      properties: ['^data-testid$'],
    } : false,
  },

  // === DENEYSEK ÖZELLİKLER - HATALAR DÜZELTİLDİ ===
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
      '@headlessui/react',
      'framer-motion',
      'react-icons'
    ],
    // 'optimizeCss' kaldırıldı - Next.js 16'da desteklenmiyor
    // 'serverActions' boolean yapıldı
    serverActions: true,
  },

  // === GÜVENLİK BAŞLIKLARI ===
  async headers() {
    const securityHeaders = [
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin'
      },
      {
        key: 'Cross-Origin-Resource-Policy',
        value: 'same-origin'
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
    ];

    const contentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: blob: https:;
      connect-src 'self' https://vitals.vercel-insights.com https://www.sahneva.com https://www.google-analytics.com;
      frame-src 'self' https://www.google.com;
      base-uri 'self';
      form-action 'self' https://wa.me https://formspree.io;
      object-src 'none';
    `.replace(/\s{2,}/g, ' ').trim();

    securityHeaders.push({
      key: 'Content-Security-Policy',
      value: contentSecurityPolicy
    });

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/(.*).(ico|png|jpg|jpeg|webp|avif|svg|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ];
  },

  // === ÇEVRE DEĞİŞKENLERİ ===
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.sahneva.com',
  },

  // === BUILD OPTİMİZASYONLARI ===
  trailingSlash: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
