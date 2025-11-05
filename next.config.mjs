/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
poweredByHeader: false,
compress: true,
generateEtags: true,
productionBrowserSourceMaps: false,
trailingSlash: false,

// ✅ MODERN JAVASCRIPT OPTIMIZATIONS - ESKI POLYFILL'LERI ENGELLER
swcMinify: true,
transpilePackages: [], // Gereksiz polyfill'leri engelle

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
// ✅ MODERN JS ICIN EKLENDI
esmExternals: true,
},

env: {
SITE_URL: process.env.SITE_URL || "https://www.sahneva.com",
NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV || "development",
},

output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
staticPageGenerationTimeout: 300,

async headers() {
// ✨ Vercel Live için İZİN — her ortamda açık
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

const scriptSrcCommon = [  
  "'self'",  
  "'unsafe-inline'", // middleware/nonce yokken Next'in inline scriptleri için gerekli  
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
`.replace(/\s{2,}/g, " ").trim();  

const securityHeaders = [  
  { key: "Content-Security-Policy", value: csp },  
  { key: "X-Content-Type-Options", value: "nosniff" },  
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },  
  { key: "X-Frame-Options", value: "DENY" }, // başkalarının seni frame etmesini engeller  
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