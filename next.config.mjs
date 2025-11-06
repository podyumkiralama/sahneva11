/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  swcMinify: true,
  transpilePackages: [],

  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sahneva.com',
        pathname: '/**',
      }
    ],
    dangerouslyAllowSVG: false,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties:
      process.env.NODE_ENV === "production" ? { properties: ["^data-testid$"] } : false,
  },

  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "@headlessui/react", "framer-motion", "react-icons"],
    esmExternals: true,
  },

  env: {
    SITE_URL: process.env.SITE_URL || "https://www.sahneva.com",
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV || "development",
  },

  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  staticPageGenerationTimeout: 300,

  async redirects() {
    return [
      // ✅ ÖZEL FONT DOSYASI YÖNLENDİRMESİ - Tam path
      {
        source: '/_next/static/media/83afe278b6a6bb3c.p.3a6ba036.woff2',
        destination: '/',
        permanent: true,
      },
      
      // ✅ GENEL STATIC MEDIA YÖNLENDİRMELERİ
      {
        source: '/_next/static/media/:file*',
        destination: '/',
        permanent: false,
      },

      // 1. BASİT YÖNLENDİRMELER - Önce en spesifik olanlar
      {
        source: '/sahne-kurulumu',
        destination: '/sahne-kiralama',
        permanent: true,
      },
      
      // 2. SEARCH YÖNLENDİRMELERİ - Basit versiyon
      {
        source: '/search',
        destination: '/',
        permanent: true,
      },
      
      // 3. ÖZEL KARAKTER YÖNLENDİRMELERİ - Düz regex
      {
        source: '/\\$',
        destination: '/',
        permanent: true,
      },
      {
        source: '/&',
        destination: '/',
        permanent: true,
      },
      
      // 4. URL ENCODED KARAKTERLER
      {
        source: '/%24',
        destination: '/',
        permanent: true,
      },
      {
        source: '/%26',
        destination: '/',
        permanent: true,
      },

      // 5. PATH SONUNDA ÖZEL KARAKTERLER
      {
        source: '/:path*\\$',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:path*&',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },

  // ✅ REWRITES - Redirects çalışmazsa bu devreye girer
  async rewrites() {
    return [
      // Font dosyaları için rewrite
      {
        source: '/_next/static/media/83afe278b6a6bb3c.p.3a6ba036.woff2',
        destination: '/',
      },
      {
        source: '/_next/static/media/:path*',
        destination: '/',
      },
      
      // Search query'leri ana sayfaya yönlendir
      {
        source: '/search',
        destination: '/',
      },
      {
        source: '/search/:query*',
        destination: '/?q=:query*',
      },
    ];
  },

  async headers() {
    const frameSrc = ["'self'", "https://www.google.com", "https://vercel.live", "https://*.vercel.live"].join(" ");
    const connectSrc = [
      "'self'",
      "https://vitals.vercel-insights.com",
      "https://www.google-analytics.com",
      "https://region1.google-analytics.com",
      "https://stats.g.doubleclick.net",
      "https://www.sahneva.com",
    ].join(" ");
    const scriptSrcCommon = [
      "'self'",
      "'unsafe-inline'",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://va.vercel-scripts.com",
      "https://vercel.live",
    ].join(" ");
    const csp = `
      default-src 'self';
      base-uri 'self';
      object-src 'none';
      frame-ancestors 'none';
      upgrade-insecure-requests;
      img-src 'self' data: blob: https:;
      font-src 'self' data: https://fonts.gstatic.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      script-src ${scriptSrcCommon};
      script-src-elem ${scriptSrcCommon};
      script-src-attr 'none';
      connect-src ${connectSrc};
      worker-src 'self' blob:;
      frame-src ${frameSrc};
      form-action 'self' https://formspree.io https://wa.me;
    `.replace(/\s{2,}/g, " ").trim();

    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      { key: "Cross-Origin-Resource-Policy", value: "same-site" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ];

    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
