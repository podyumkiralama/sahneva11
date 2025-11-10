// next.config.mjs / .js (yalnızca geçerli seçenekler kalsın)
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: false,
  },
  experimental: {
    // scrollRestoration: true, // kullanıyorsan kalsın
    // optimizePackageImports: [...], // kullanıyorsan kalsın
    // ❌ legacyBrowsers: ...  -> KALDIR
    // ❌ browsersListForSwc: ... -> KALDIR
  },
};
export default nextConfig;
