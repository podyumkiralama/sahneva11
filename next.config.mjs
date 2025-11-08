// next.config.mjs

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const ONE_MONTH_IN_SECONDS = ONE_DAY_IN_SECONDS * 30;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

// 🔥 GELİŞMİŞ ORTAM TESPİTİ
const isVercelPreview = 
  process.env.VERCEL_ENV === "preview" || 
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
  
const isProd = process.env.NODE_ENV === "production" && !isVercelPreview;
const isPreview = isVercelPreview;

// 🔥 MİNİFİKASYON İÇİN KRİTİK AYAR
const shouldMinify = isProd && !isPreview;

const siteUrl = process.env.SITE_URL ?? "https://www.sahneva.com";

/* -------------------- Güvenlik Başlıkları (CSP dahil) -------------------- */

const securityHeaders = (() => {
  const SCRIPT_SRC = [
    "'self'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://*.vercel.live",
  ].join(" ");

  const SCRIPT_SRC_ELEM = [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://*.vercel.live",
  ].join(" ");

  const CONNECT_SRC = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    siteUrl,
    "wss:",
    "wss://ws-us3.pusher.com",
    "wss://*.pusher.com",
    "https://vercel.live",
    "https://*.vercel.live",
  ].join(" ");

  const FONT_SRC = [
    "'self'",
    "data:",
    "https://fonts.gstatic.com",
    "https://vercel.live",
    "https://*.vercel.live",
  ].join(" ");

  const STYLE_SRC = [
    "'self'",
    "'unsafe-inline'",
    "https://fonts.googleapis.com",
    "https://vercel.live",
    "https://*.vercel.live",
  ].join(" ");

  const FRAME_SRC = [
    "'self'",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.youtube-nocookie.com",
    "https://player.vimeo.com",
    "https://vercel.live",
    "https://*.vercel.live",
    "https://www.google.com/maps",
    "https://maps.google.com",
    "https://google.com/maps",
    "https://*.google.com",
  ].join(" ");

  const IMG_SRC = [
    "'self'",
    "data:",
    "blob:",
    "https:",
    "https://vercel.live",
    "https://*.vercel.live",
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
    img-src ${IMG_SRC};
    font-src ${FONT_SRC};
    style-src ${STYLE_SRC};
    script-src ${SCRIPT_SRC};
    script-src-elem ${SCRIPT_SRC_ELEM};
    script-src-attr 'none';
    connect-src ${CONNECT_SRC};
    worker-src 'self' blob:;
    frame-src ${FRAME_SRC};
    form-action 'self' https://formspree.io https://wa.me;
    media-src 'self' https:;
    child-src 'self' blob:;
  `.replace(/\s{2,}/g, " ").trim();

  const base = [
    { key: "Content-Security-Policy", value: csp },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), fullscreen=()",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "Origin-Agent-Cluster", value: "?1" },
  ];

  return isPreview ? base : [...base, { key: "X-Frame-Options", value: "DENY" }];
})();

/* -------------------- Uzun süreli cache başlıkları -------------------- */

const longTermCacheHeaders = [
  { key: "Cache-Control", value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable` },
];

/* -------------------- Next.js Config -------------------- */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  // 🔥 MİNİFİKASYON AYARLARI - BU KISIM ÇOK ÖNEMLİ
  swcMinify: true,
  optimizeFonts: true,
  
  // Production'da source map'leri devre dışı bırak
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: ONE_MONTH_IN_SECONDS,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.live',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.live',
      }
    ],
    dangerouslyAllowSVG: false,
  },

  compiler: {
    // 🔥 GELİŞMİŞ MİNİFİKASYON
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties: isProd ? { properties: ["^data-testid$"] } : false,
  },

  // 🔥 WEBPACK OPTİMİZASYONLARI
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize chunk ids for better minification
      config.optimization.chunkIds = 'deterministic';
      config.optimization.moduleIds = 'deterministic';
      config.optimization.mangleExports = 'deterministic';
      
      // Daha agresif minifikasyon
      config.optimization.minimize = true;
      config.optimization.usedExports = true;
      
      // Tree shaking için yardımcı
      config.optimization.sideEffects = false;
    }
    return config;
  },

  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "@headlessui/react"],
    esmExternals: true,
    // 🔥 EK OPTİMİZASYONLAR
    optimizeCss: true,
    nextScriptWorkers: true,
  },

  // 🔥 GELİŞMİŞ MODÜLER İTHALAT
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/icons/{{member}}",
      preventFullImport: true, // Tam import'u engelle
    },
    "react-icons/?(((\\w*)?/?)*)": {
      transform: "react-icons/{{ matches.[1] }}/{{member}}",
      preventFullImport: true,
    },
    "@headlessui/react": {
      transform: "@headlessui/react/{{member}}",
      preventFullImport: true,
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

      // Next statik runtime dosyaları
      {
        source: "/_next/static/(.*)",
        headers: [
          ...longTermCacheHeaders,
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },

      // Public asset'ler
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif|woff2)",
        headers: longTermCacheHeaders,
      },

      // Diğer _next yolları
      {
        source: "/_next/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

// 🔥 ORTAM BİLGİSİ (Build sırasında görüntüle)
console.log('🔧 Build Environment Debug:');
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- VERCEL_ENV:', process.env.VERCEL_ENV);
console.log('- NEXT_PUBLIC_VERCEL_ENV:', process.env.NEXT_PUBLIC_VERCEL_ENV);
console.log('- isProd:', isProd);
console.log('- isPreview:', isPreview);
console.log('- shouldMinify:', shouldMinify);

export default nextConfig;
