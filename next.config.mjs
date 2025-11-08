/** @type {import('next').NextConfig} */

const ONE_DAY = 60 * 60 * 24;
const ONE_MONTH = ONE_DAY * 30;
const ONE_YEAR = ONE_DAY * 365;

const isProd = process.env.VERCEL_ENV === "production";
const isPreview = process.env.VERCEL_ENV === "preview";
const siteUrl = process.env.SITE_URL ?? "https://www.sahneva.com";

// ---- allowlists ----
const scriptSrcHosts = [
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://va.vercel-scripts.com",
  "https://vercel.live",
];

const connectSrcHosts = [
  "https://vitals.vercel-insights.com",
  "https://www.google-analytics.com",
  "https://region1.google-analytics.com",
  "https://stats.g.doubleclick.net",
  siteUrl,
];

// vercel.live’ı SADECE preview’da ekliyoruz:
const baseFrame = [
  "https://www.google.com",
  "https://www.youtube.com",
  "https://www.youtube-nocookie.com",
  "https://player.vimeo.com",
];
const frameSrcHosts = isPreview
  ? [...baseFrame, "https://vercel.live", "https://*.vercel.live"]
  : baseFrame;

const securityHeaders = (() => {
  const scriptSrc = ["'self'", "'unsafe-inline'", ...scriptSrcHosts].join(" ");
  const connectSrc = ["'self'", ...connectSrcHosts].join(" ");
  const frameSrc = ["'self'", ...frameSrcHosts].join(" ");

  const csp = `
    default-src 'self';
    base-uri 'self';
    object-src 'none';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https://fonts.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${scriptSrc};
    script-src-elem ${scriptSrc};
    script-src-attr 'none';
    connect-src ${connectSrc};
    worker-src 'self' blob:;
    frame-src ${frameSrc};
    form-action 'self' https://formspree.io https://wa.me;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  return [
    // CSP
    { key: "Content-Security-Policy", value: csp },
    // COOP + COEP (credentialless = 3rd-party iframelere uyumlu)
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    { key: "Cross-Origin-Embedder-Policy", value: "credentialless" },
    // CORP (Lighthouse önerisi)
    { key: "Cross-Origin-Resource-Policy", value: "same-site" },
    // Diğer sert güvenlik başlıkları
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "X-Frame-Options", value: "DENY" }, // kendi sitemizin başka sitede iframe edilmesini engeller
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
  ];
})();

const longTermCacheHeaders = [
  { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

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
    minimumCacheTTL: ONE_MONTH,
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

  modularizeImports: {
    "lucide-react": { transform: "lucide-react/lib/esm/icons/{{member}}" },
    "react-icons/?(((\\w*)?/?)*)": { transform: "react-icons/{{ matches.[1] }}/{{member}}" },
  },

  env: {
    SITE_URL: siteUrl,
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV ?? "development",
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
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/_next/static/(.*)",
        headers: [
          ...longTermCacheHeaders,
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif|woff2)",
        headers: longTermCacheHeaders,
      },
      {
        source: "/_next/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;