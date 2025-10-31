/** @type {import('next').NextConfig} */
const nextConfig = {
  // === TURBOPACK KONFİGÜRASYONU ===
  turbopack: {},
  
  // === TEMEL AYARLAR ===
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  
  // === GÖRÜNTÜ OPTİMİZASYONU ===
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
    unoptimized: false,
    // ✅ YENİ: Gelişmiş görsel optimizasyonu
    quality: 80,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // === DERLEYİCİ OPTİMİZASYONLARI ===
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // ✅ YENİ: CSS optimizasyonu
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? {
      properties: ['^data-testid$'],
    } : false,
  },

  // === DENEYSEK ÖZELLİKLER ===
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
      '@headlessui/react',
      'framer-motion',
      'react-icons'
    ],
    // ✅ YENİ: CSS optimizasyonu
    optimizeCss: true,
    // ✅ YENİ: Sunucu eylemleri (Server Actions)
    serverActions: true,
  },

  // === GÜVENLİK BAŞLIKLARI - GÜNCELLENDİ ===
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
        key: 'Cross-Origin-Embedder-Policy',
        value: 'require-corp'
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

    // ✅ YENİ: Gelişmiş CSP Politikası
    const contentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com https://www.googletagmanager.com;
      script-src-elem 'self' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com https://formspree.io https://www.google.com https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: blob: https:;
      connect-src 'self' https://vitals.vercel-insights.com https://www.sahneva.com https://www.google-analytics.com https://api.vercel.app;
      frame-src 'self' https://www.google.com;
      base-uri 'self';
      form-action 'self' https://wa.me https://formspree.io;
      object-src 'none';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    securityHeaders.push({
      key: 'Content-Security-Policy',
      value: contentSecurityPolicy
    });

    // ✅ YENİ: Cache-Control header'ları optimize edildi
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
            value: 'public, max-age=31536000, immutable, stale-while-revalidate=86400'
          },
        ],
      },
      {
        source: '/(.*).(ico|png|jpg|jpeg|webp|avif|svg|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable, stale-while-revalidate=86400'
          },
        ],
      },
      {
        source: '/(.*).(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400'
          },
        ],
      },
    ];
  },

  // === ÇEVRE DEĞİŞKENLERİ ===
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.sahneva.com',
    // ✅ YENİ: Performans izleme
    ENABLE_ANALYTICS: process.env.NODE_ENV === 'production' ? 'true' : 'false',
  },

  // ✅ YENİ: Build optimizasyonları
  trailingSlash: false,
  productionBrowserSourceMaps: false, // Güvenlik ve performans için false
  staticPageGenerationTimeout: 300,
  output: 'standalone',
  
  // ✅ YENİ: SEO ve performans iyileştirmeleri
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

export default nextConfig;