/** @type {import('next').NextConfig} */
const nextConfig = {
  // === TEMEL AYARLAR (Next 16) ===
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // ETag'leri kapatmak yerine Next'in varsayılanını kullanmak genelde daha iyi cache sonuç verir
  generateEtags: true,

  // === TURBOPACK ===
  // Dev modda zaten aktif; prod için boş obje gereksiz.
  // turbopack: {},

  // === GÖRÜNTÜ OPTİMİZASYONU ===
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    // Spesifik alan adlarını yaz: (örnekler)
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sahneva.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
    dangerouslyAllowSVG: false,
  },

  // === DERLEYİCİ OPTİMİZASYONLARI ===
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
    reactRemoveProperties:
      process.env.NODE_ENV === 'production'
        ? { properties: ['^data-testid$'] }
        : false,
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

  // === GÜVENLİK BAŞLIKLARI ===
  async headers() {
    const securityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      // CORP: sadece kendi sunucundan dönen varlıklar için geçerli.
      // Cross-origin asset’ler (ör. gstatic font) senin sunucundan gelmediği için burada engellenmez.
      { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
      {
        key: 'Permissions-Policy',
        // interest-cohort yerine browsing-topics kullan
        value:
          'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
    ];

    // CSP — mümkünse 'unsafe-eval' ve 'unsafe-inline' kullanma; Next Script noncesi uygularsan daha da sıkı tutabilirsin.
    const contentSecurityPolicy = `
      default-src 'self';
      base-uri 'self';
      object-src 'none';
      frame-ancestors 'none';
      upgrade-insecure-requests;

      img-src 'self' data: blob: https:;
      font-src 'self' https://fonts.gstatic.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;

      script-src 'self' 'unsafe-inline'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://va.vercel-scripts.com
        https://vercel.live;
      script-src-elem 'self' 'unsafe-inline'
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://va.vercel-scripts.com
        https://vercel.live;

      connect-src 'self'
        https://vitals.vercel-insights.com
        https://www.sahneva.com
        https://www.google-analytics.com
        https://region1.google-analytics.com
        https://stats.g.doubleclick.net;

      frame-src 'self' https://www.google.com;
      form-action 'self' https://formspree.io https://wa.me;
    `
      .replace(/\s{2,}/g, ' ')
      .trim();

    securityHeaders.push({
      key: 'Content-Security-Policy',
      value: contentSecurityPolicy,
    });

    return [
      { source: '/(.*)', headers: securityHeaders },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // Genellikle tüm JS/CSS çıktıları _next/static altındadır; yine de bırakmak istersen:
      // {
      //   source: '/(.*)\\.(css|js)',
      //   headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      // },
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
