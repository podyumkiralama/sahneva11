// next.config.mjs

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const ONE_MONTH_IN_SECONDS = ONE_DAY_IN_SECONDS * 30;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

const isProd = process.env.NODE_ENV === "production";
const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ||
  (process.env.VERCEL === "1" && process.env.VERCEL_ENV !== "production");

const siteUrl = process.env.SITE_URL ?? "https://www.sahneva.com";

/* -------------------- Security Headers (CSP dahil) -------------------- */

const securityHeaders = (() => {
  // script-src (inline YOK)
  const SCRIPT_SRC = [
    "'self'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
  ].join(" ");

  // script-src-elem (JSON-LD vb. için elem seviyesinde inline serbest)
  const SCRIPT_SRC_ELEM = [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
  ].join(" ");

  const CONNECT_SRC = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    siteUrl,
  ].join(" ");

  // Preview’da vercel.live izinli; prod’da kapalı
  const FRAME_SRC = [
    "'self'",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.youtube-nocookie.com",
    "https://player.vimeo.com",
    ...(isPreview ? ["https://vercel.live", "https://*.vercel.live"] : []),
  ].join(" ");

  const FRAME_ANCESTORS = isPreview
    ? "frame-ancestors 'self' https://vercel.live https://*.vercel.live;"
    : "frame-ancestors 'none';";

  const csp = `
    default-src 'self';
    ${FRAME_ANCESTORS}
    base-uri 'self';
    object-src 'none';
    upgrade-insecure-requests;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https://fonts.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${SCRIPT_SRC};
    script-src-elem ${SCRIPT_SRC_ELEM};
    script-src-attr 'none';
    connect-src ${CONNECT_SRC};
    worker-src 'self' blob:;
    frame-src ${FRAME_SRC};
    form-action 'self' https://formspree.io https://wa.me;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const base = [
    { key: "Content-Security-Policy", value: csp },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    // COEP: globalde credentialless (daha güvenli); /iletisim'te override edeceğiz
    { key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
    // CORP: globalde same-site; /iletisim'te override edeceğiz
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    // (tek satır yeterli; editörde tekrar etmeyecekse yukarıdaki tekrarları silebilirsin)
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    {
      key: "Permissions-Policy",
      value:
        "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), fullscreen=()",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "Origin-Agent-Cluster", value: "?1" },
  ];

  // X-Frame-Options: preview’da gönderme (embed lazım), prod’da DENY
  return isPreview ? base : [...base, { key: "X-Frame-Options", value: "DENY" }];
})();

/* -------------------- Uzun süreli cache başlıkları -------------------- */

const longTermCacheHeaders = [
  { key: "Cache-Control", value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable` },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

/* -------------------- Next.js Config -------------------- */

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
    optimizePackageImports: ["lucide-react", "@headlessui/react"],
    esmExternals: true,
  },

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
      // 🌐 Global güvenlik başlıkları
      { source: "/(.*)", headers: securityHeaders },

      // 🗺️ Sadece /iletisim: Google Maps iframe için COEP kapat, CORP cross-origin
      {
        source: "/iletisim",
        headers: [
          // COEP'i kapat (globalde credentialless; bu route'ta devre dışı)
          { key: "Cross-Origin-Embedder-Policy", value: "unsafe-none" },
          // Bu sayfadan çağrılan cross-origin resource’lara izin
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
          // Preview'da Live View için frame'lenmeye izin (prod'da zaten DENY)
          ...(isPreview ? [] : []),
        ],
      },

      // Next statik runtime dosyaları: uzun cache + index dışı
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
