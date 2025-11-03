/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ React ve üretim optimizasyonları
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  // ⚡ Bundle küçültme (Next 16’da etkili)
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties:
      process.env.NODE_ENV === "production" ? { properties: ["^data-testid$"] } : false,
  },

  // 🖼️ Görsel optimizasyonu (LCP/CLS iyileşir)
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    remotePatterns: [],                 // harici yoksa boş bırak
    dangerouslyAllowSVG: false,
  },

  // 🧪 Modern import optimizasyonu (Turbopack + SWC)
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: [
      "lucide-react",
      "@headlessui/react",
      "framer-motion",
      "react-icons",
    ],
  },

  // 🌐 Ortam değişkenleri
  env: {
    SITE_URL: process.env.SITE_URL || "https://www.sahneva.com",
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV || "development",
  },

  // ⚠️ Sadece Node.js self-host’ta anlamlıdır; Vercel’da etkisi yok ama zararı da yok
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,

  // ⏱️ Statik SSG timeout
  staticPageGenerationTimeout: 300,

  // 🛡️ Güvenlik + Cache başlıkları (render’ı bloklamadan hız)
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },

      // ⬇️ NOT: CORP "same-origin", harici font/iframe/görsel isteklerini engelleyebilir.
      // Next/font + yerel görsellerle sorun yok. Harici (fonts.gstatic.com vb.) gerekiyorsa "same-site" yap.
      { key: "Cross-Origin-Resource-Policy", value: "same-origin" },

      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];

    // ⚠️ CSP: inline JSON-LD / Next iç scriptler için 'unsafe-inline' açık.
    // Harici GA/Vercel scriptleri izinli. Worker ve blob desteği eklendi (video/galeri için iyi).
    const csp = `
      default-src 'self';
      base-uri 'self';
      object-src 'none';
      frame-ancestors 'none';
      upgrade-insecure-requests;

      img-src 'self' data: blob: https:;
      font-src 'self' data: https://fonts.gstatic.com;
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
      script-src-attr 'none';

      connect-src 'self'
        https://vitals.vercel-insights.com
        https://www.sahneva.com
        https://www.google-analytics.com
        https://region1.google-analytics.com
        https://stats.g.doubleclick.net;

      worker-src 'self' blob:;
      frame-src 'self' https://www.google.com;
      form-action 'self' https://formspree.io https://wa.me;
    `.replace(/\s{2,}/g, " ").trim();

    securityHeaders.push({ key: "Content-Security-Policy", value: csp });

    return [
      // 🔒 Tüm istekler: güvenlik başlıkları
      { source: "/(.*)", headers: securityHeaders },

      // 📦 Next statik dosyalar: uzun, immutable cache
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // 🖼️ Public varlıklar (görsel/icon): uzun, immutable cache
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
