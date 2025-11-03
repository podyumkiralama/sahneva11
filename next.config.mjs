/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    reactRemoveProperties:
      process.env.NODE_ENV === "production" ? { properties: ["^data-testid$"] } : false,
  },

  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },

  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["lucide-react", "@headlessui/react", "framer-motion", "react-icons"],
  },

  env: {
    SITE_URL: process.env.SITE_URL || "https://www.sahneva.com",
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV || "development",
  },

  staticPageGenerationTimeout: 300,
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,

  async headers() {
    const isPreview =
      process.env.VERCEL === "1" &&
      (process.env.VERCEL_ENV === "preview" ||
       process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ||
       process.env.NODE_ENV !== "production");

    const frameSrc = ["'self'", "https://www.google.com"];
    if (isPreview) frameSrc.push("https://vercel.live");

    const scriptSrcBase = [
      "'self'",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://va.vercel-scripts.com",
      "https://vercel.live",
    ];
    const styleSrcBase = ["'self'", "https://fonts.googleapis.com"];

    const scriptSrc = isPreview ? [...scriptSrcBase, "'unsafe-inline'"] : scriptSrcBase;
    const styleSrc  = isPreview ? [...styleSrcBase, "'unsafe-inline'"] : styleSrcBase;

    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
    ];

    const csp = `
      default-src 'self';
      base-uri 'self';
      object-src 'none';
      frame-ancestors 'none';
      upgrade-insecure-requests;

      img-src 'self' data: blob: https:;
      font-src 'self' data: https://fonts.gstatic.com;
      style-src ${styleSrc.join(" ")};
      style-src-elem ${styleSrc.join(" ")};
      ${isPreview ? "" : "style-src-attr 'none';"}

      script-src ${scriptSrc.join(" ")};
      script-src-elem ${scriptSrc.join(" ")};
      ${isPreview ? "" : "script-src-attr 'none';"}

      connect-src 'self'
        https://vitals.vercel-insights.com
        https://www.sahneva.com
        https://www.google-analytics.com
        https://region1.google-analytics.com
        https://stats.g.doubleclick.net;

      worker-src 'self' blob:;
      frame-src ${frameSrc.join(" ")};
      form-action 'self' https://formspree.io https://wa.me;
    `.replace(/\s{2,}/g, " ").trim();

    return [
      { source: "/(.*)", headers: [
        { key: "Content-Security-Policy", value: csp },
        ...securityHeaders,
      ]},
      { source: "/_next/static/(.*)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/(.*)\\.(woff2|woff|ttf|otf|css|mp4|webm|ogg|mp3|wav)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;
