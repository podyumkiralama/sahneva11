/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  // ✅ MODERN JAVASCRIPT OPTIMIZATIONS
  swcMinify: true,
  transpilePackages: [],

  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [],
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

  // ─────────────────────────────────────────────────────────────────────────────
  // REDIRECTS – Sorunlu URL’leri güvenli şekilde köke yönlendir
  // ─────────────────────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // GSC / reklam kaynaklı placeholder query ⇒ köke temiz 301
      {
        source: "/search",
        has: [{ type: "query", key: "q", value: "%7Bsearch_term_string%7D" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/search",
        has: [{ type: "query", key: "q", value: "{search_term_string}" }],
        destination: "/",
        permanent: true,
      },
      // Aynı placeholder kökte görünürse (/?q=...) ⇒ köke temiz 301 (loop olmaz; query kalkar)
      {
        source: "/",
        has: [{ type: "query", key: "q", value: "%7Bsearch_term_string%7D" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "q", value: "{search_term_string}" }],
        destination: "/",
        permanent: true,
      },

      // GSC’de görülen tek-karakter hatalı yollar → kök
      { source: "/$", destination: "/", permanent: true },
      { source: "/&", destination: "/", permanent: true },

      // Belirli eski font hash’i için 301 (kalıcı)
      {
        source: "/_next/static/media/83afe278b6a6bb3c.p.3a6ba036.woff2",
        destination: "/fonts/fallback.woff2",
        permanent: true,
      },
    ];
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // REWRITES – Tüm eksik .woff2 hash isteklerini fallback’e geçir (404 ve GSC gürültüsünü keser)
  // ─────────────────────────────────────────────────────────────────────────────
  async rewrites() {
    return [
      {
        source: "/_next/static/media/:any*.woff2",
        destination: "/fonts/fallback.woff2",
      },
    ];
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // HEADERS – CSP + cache + dizinden çıkarma (X-Robots-Tag)
  // ─────────────────────────────────────────────────────────────────────────────
  async headers() {
    // Vercel Live iFrame izni
    const frameSrc = ["'self'", "https://www.google.com", "https://vercel.live", "https://*.vercel.live"].join(" ");

    const connectSrc = [
      "'self'",
      "https://vitals.vercel-insights.com",
      "https://www.google-analytics.com",
      "https://region1.google-analytics.com",
      "https://stats.g.doubleclick.net",
      "https://www.sahneva.com",
    ].join(" ");

    // Not: middleware/nonce kullanmadığımız için Next’in küçük inline script’leri için 'unsafe-inline' bırakıldı.
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
    `
      .replace(/\s{2,}/g, " ")
      .trim();

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
      // Global security headers
      { source: "/(.*)", headers: securityHeaders },

      // Statik dosyalar (Next build çıktısı)
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },

      // Görseller
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },

      // Fontlar (fallback dâhil)
      {
        source: "/(.*)\\.(woff2|woff|ttf|otf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },

      // Placeholder arama sayfalarını dizinden çıkar
      {
        source: "/search",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      // Çöplük yolları da dizinden çıksın
      {
        source: "/$",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        source: "/&",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
