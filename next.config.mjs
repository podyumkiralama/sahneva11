/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Üretim/performans
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  // 🖼️ Görsel optimizasyonu
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    remotePatterns: [], // harici yoksa boş
    dangerouslyAllowSVG: false,
  },

  // ⚙️ Bundle/derleme
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties:
      process.env.NODE_ENV === "production" ? { properties: ["^data-testid$"] } : false,
  },

  // 🧪
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "@headlessui/react", "framer-motion", "react-icons"],
  },

  // 🌐 Ortam
  env: {
    SITE_URL: process.env.SITE_URL || "https://www.sahneva.com",
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV || "development",
  },

  // 🏗️ (self-host için anlamlı; Vercel'de zararsız)
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,

  // ⏱️
  staticPageGenerationTimeout: 300,

  // 🔐 Tüm güvenlik başlıkları + CSP burada (middleware yok)
  async headers() {
    const isProd =
      process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";

    // Vercel Live sadece dev/preview’da frame edilmesine izin ver
    const frameSrc = [
      "'self'",
      "https://www.google.com",
      ...(isProd ? [] : ["https://vercel.live", "https://*.vercel.live"]),
    ].join(" ");

    // GA/Vercel Analytics, vb. bağlantılar
    const connectSrc = [
      "'self'",
      "https://vitals.vercel-insights.com",
      "https://www.google-analytics.com",
      "https://region1.google-analytics.com",
      "https://stats.g.doubleclick.net",
      // kendi alanın
      "https://www.sahneva.com",
    ].join(" ");

    const scriptSrcCommon = [
      "'self'",
      // nonce kullanmadığımız için inline'ı açık bırakıyoruz (Next iç scriptleri kırılmasın)
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
    `
      .replace(/\s{2,}/g, " ")
      .trim();

    // Ortak güvenlik başlıkları (CSP dahil)
    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Sitenin başkaları tarafından iframe edilmesini engelle (bizim dışarıyı frame etmemize engel değil)
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      // Google Fonts vb. hariciler kullanıldığı için CORP'u çok sert yapmıyoruz:
      { key: "Cross-Origin-Resource-Policy", value: "same-site" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
      },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ];

    return [
      // 🔒 Uygulama HTML yanıtları + tüm yollar
      { source: "/(.*)", headers: securityHeaders },

      // 📦 Next statik bundle'lar
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },

      // 🖼️ Public görseller/ikonlar
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
