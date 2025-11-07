// next.config.mjs

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const ONE_MONTH_IN_SECONDS = ONE_DAY_IN_SECONDS * 30;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

const isProd = process.env.NODE_ENV === "production";
const siteUrl = process.env.SITE_URL ?? "https://www.sahneva.com";

// ---- 3P kaynaklar ----
const scriptSrcHosts = [
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://va.vercel-scripts.com",
  "https://vercel.live", // sadece preview’da gerekli
];

const connectSrcHosts = [
  "https://vitals.vercel-analytics.com", // ✅ vercel analytics için doğru host
  "https://www.google-analytics.com",
  "https://region1.google-analytics.com",
  "https://stats.g.doubleclick.net",
  siteUrl,
];

const frameSrcHosts = [
  "https://www.google.com",
  // Gerekiyorsa aç:
  "https://www.youtube.com",
  "https://www.youtube-nocookie.com",
  "https://player.vimeo.com",
  // vercel.live izni yalnızca preview’da frame-ancestors ile verilecek
];

// ---- Güvenlik Başlıkları (CSP dahil) ----
const securityHeaders = (() => {
  const isProd = process.env.NODE_ENV === "production";

  const scriptSrc = [
    "'self'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live", // sadece preview için anlamlı
  ].join(" ");

  // ⬇️  Buraya sadece 'unsafe-inline' ekledik (elem’e), script-src sıkı kaldı
  const scriptSrcElem = [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
  ].join(" ");

  const connectSrc = [
    "'self'",
    "https://vitals.vercel-analytics.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    process.env.SITE_URL ?? "https://www.sahneva.com",
  ].join(" ");

  // Preview’da vercel.live’a izin ver, prod’da kapat
  const frameSrc = [
    "'self'",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.youtube-nocookie.com",
    "https://player.vimeo.com",
    ...(isProd ? [] : ["https://vercel.live", "https://*.vercel.live"]),
  ].join(" ");

  const frameAncestors = isProd
    ? "frame-ancestors 'none';"
    : "frame-ancestors 'self' https://vercel.live https://*.vercel.live;";

  const csp = `
    default-src 'self';
    base-uri 'self';
    object-src 'none';
    ${frameAncestors}
    upgrade-insecure-requests;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https://fonts.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${scriptSrc};
    script-src-elem ${scriptSrcElem};
    script-src-attr 'none';
    connect-src ${connectSrc};
    worker-src 'self' blob:;
    frame-src ${frameSrc};
    form-action 'self' https://formspree.io https://wa.me;
  `.replace(/\s{2,}/g, " ").trim();

  return [
    { key: "Content-Security-Policy", value: csp },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-Frame-Options", value: isProd ? "DENY" : "SAMEORIGIN" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    { key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), fullscreen=()" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    { key: "Origin-Agent-Cluster", value: "?1" },
  ];
})();


const longTermCacheHeaders = [
  { key: "Cache-Control", value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable` },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: ONE_MONTH_IN_SECONDS,
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },

  compiler: {
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties: isProd ? { properties: ["^data-testid$"] } : false,
  },

  experimental: {
    scrollRestoration: true,
    // Güvenli import optimizasyonları (framer-motion çıkarıldı)
    optimizePackageImports: ["lucide-react", "@headlessui/react"],
    esmExternals: true,
  },

  // lucide için modern yol; react-icons granular
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/icons/{{member}}",
    },
    "react-icons/?(((\\w*)?/?)*)": {
      transform: "react-icons/{{ matches.[1] }}/{{member}}",
    },
  },

  env: {
    SITE_URL: siteUrl,
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV ?? "development",
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  output: isProd ? "standalone" : undefined,
  staticPageGenerationTimeout: 300,

  async redirects() {
    return [
      {
        source: "/search",
        has: [{ type: "query", key: "q", value: "(?<term>.*)" }],
        destination: "/?q=:term",
        permanent: true,
      },
      { source: "/search", destination: "/", permanent: true },
      { source: "/sahne-kurulumu", destination: "/sahne-kiralama", permanent: true },
      { source: "/$", destination: "/", permanent: true },
      { source: "/&", destination: "/", permanent: true },
      { source: "/%24", destination: "/", permanent: true },
      { source: "/%26", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      // Global güvenlik başlıkları
      { source: "/(.*)", headers: securityHeaders },

      // Next statik runtime dosyaları: uzun süreli cache + index dışı
      {
        source: "/_next/static/(.*)",
        headers: [
          ...longTermCacheHeaders,
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },

      // Public asset’ler: uzun süreli cache
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif|woff2)",
        headers: longTermCacheHeaders,
      },

      // Diğer _next yollarını indeks dışı tut
      {
        source: "/_next/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
