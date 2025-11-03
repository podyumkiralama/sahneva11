/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ React/üretim
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  // ⚡ Bundle küçültme
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties:
      process.env.NODE_ENV === "production" ? { properties: ["^data-testid$"] } : false,
  },

  // 🖼️ Görsel optimizasyonu (LCP byte’ını düşürür)
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    remotePatterns: [], // harici kullanmıyorsan boş bırak
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

  // ⏱️ SSG timeout
  staticPageGenerationTimeout: 300,

  // ⚠️ Self-host’ta anlamlı; Vercel’da zararı yok
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,

  // 🔒 Güvenlik + 📦 agresif cache (middleware’siz → daha hızlı)
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      // Not: sadece senin sitenden sunulan varlıkları etkiler; harici kaynak tüketimini engellemez.
      { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];

    // CSP — GA & Vercel izinli; JSON-LD/Next inline için 'unsafe-inline' açık.
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
      // Tüm sayfalara güvenlik başlıkları
      { source: "/(.*)", headers: securityHeaders },

      // Next statik bundle (JS/CSS/chunks): immutable 1 yıl
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // Public görseller/ikonlar
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // Public fontlar
      {
        source: "/(.*)\\.(woff2|woff|ttf|otf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // Public CSS
      {
        source: "/(.*)\\.(css)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // Büyük medya (isteğe bağlı)
      {
        source: "/(.*)\\.(mp4|webm|ogg|mp3|wav)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
