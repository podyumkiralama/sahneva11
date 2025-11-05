/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

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
    // 🔧 750/828 çıkarıldı; 336 ve 560 eklendi → kart/sekme/hero hedeflerine uyumlu
    deviceSizes: [320, 336, 560, 640, 768, 896, 1024, 1280, 1536, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },

  compiler: {
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties: isProd ? { properties: ["^data-testid$"] } : false,
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

  output: isProd ? "standalone" : undefined,
  staticPageGenerationTimeout: 300,

  async headers() {
    // iframe ile DIŞ KAYNAK gömmek için (ör. vercel.live) gereken kaynak listesi
    const frameSrc = [
      "'self'",
      "https://www.google.com",
      "https://vercel.live",
      "https://*.vercel.live",
    ].join(" ");

    const connectSrc = [
      "'self'",
      "https://vitals.vercel-insights.com",
      "https://www.google-analytics.com",
      "https://region1.google-analytics.com",
      "https://stats.g.doubleclick.net",
      "https://www.sahneva.com",
    ].join(" ");

    // Not: middleware/nonce kullanılmadığından inline scriptlere mecburen izin veriyoruz.
    // İleride nonce’a geçince 'unsafe-inline' kaldırılabilir.
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

      /* Sizin sayfanızı KİM frame'leyebilir? Güvenlik için kapalı kalsın. */
      frame-ancestors 'none';

      form-action 'self' https://formspree.io https://wa.me;
    `.replace(/\s{2,}/g, " ").trim();

    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Başkalarının SİZİ frame'lemesini engeller (frame-ancestors ile aynı yönde)
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
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;