// next.config.mjs

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const ONE_MONTH_IN_SECONDS = ONE_DAY_IN_SECONDS * 30;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

const isProd = process.env.NODE_ENV === "production";
// Vercel Live overlay kullanımı için CSP istisnaları tüm ortamlarda açık olsun.
// Daha önce ortam tespiti yüzünden başlıklar uygulanmadığı için embed bloklanıyordu.
const vercelLiveFrameAncestors =
  "frame-ancestors 'self' https://vercel.live https://*.vercel.live;";

const siteUrl = process.env.SITE_URL ?? "https://www.sahneva.com";

/* -------------------- Security Headers (CSP dahil) -------------------- */

const {
  defaultSecurityHeaders,
  applySecurityOverrides,
} = (() => {
  // script-src (inline YOK)
  const vercelLiveSources = ["https://vercel.live", "https://*.vercel.live"];

  const vercelLiveSocketSources = ["wss://vercel.live", "wss://*.vercel.live"];

  const SCRIPT_SRC = [
    "'self'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    ...vercelLiveSources,
  ].join(" ");

  // script-src-elem (JSON-LD vb. için elem seviyesinde inline serbest)
  const SCRIPT_SRC_ELEM = [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    ...vercelLiveSources,
  ].join(" ");

  const CONNECT_SRC = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    siteUrl,
    ...vercelLiveSources,
    ...vercelLiveSocketSources,
  ].join(" ");

  // vercel.live embed’i Vercel ortamlarında (preview + prod) ve local dev’de açık
  const FRAME_SRC = [
    "'self'",
    "https://www.google.com",
    "https://*.google.com",
    "https://www.youtube.com",
    "https://www.youtube-nocookie.com",
    "https://player.vimeo.com",
    ...vercelLiveSources,
  ].join(" ");

  const FRAME_ANCESTORS = vercelLiveFrameAncestors;

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

  const applySecurityOverrides = (overrides = {}) => {
    const headers = base.map((header) =>
      overrides[header.key] ? { ...header, value: overrides[header.key] } : header,
    );

    // Vercel Live iframe’i tüm ortamlarda izinli olduğundan X-Frame-Options göndermiyoruz.
    return headers;
  };

  return {
    defaultSecurityHeaders: applySecurityOverrides(),
    applySecurityOverrides,
  };
})();

const iletisimSecurityHeaders = applySecurityOverrides({
  "Cross-Origin-Embedder-Policy": "unsafe-none",
  "Cross-Origin-Resource-Policy": "cross-origin",
});

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
      // 🌐 Global güvenlik başlıkları (/iletisim hariç)
      { source: "/((?!iletisim$).*)", headers: defaultSecurityHeaders },

      // 🗺️ Sadece /iletisim: Google Maps iframe için COEP kapat, CORP cross-origin
      { source: "/iletisim", headers: iletisimSecurityHeaders },

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
