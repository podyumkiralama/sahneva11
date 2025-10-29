/** @type {import('next').NextConfig} */
const nextConfig = {
  // === TEMEL AYARLAR ===
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  
  // === GÖRÜNTÜ OPTİMİZASYONU ===
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },

  // === DERLEYİCİ OPTİMİZASYONLARI ===
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // === DENEYSEK ÖZELLİKLER ===
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
      '@headlessui/react',
      'framer-motion',
      'react-icons'
    ],
  },

  // === WEBPACK OPTİMİZASYONLARI ===
  webpack: (config, { dev, isServer }) => {
    // Production optimizasyonları
    if (!dev && !isServer) {
      // Modül ID'lerini optimize et
      config.optimization.moduleIds = 'deterministic';
      config.optimization.chunkIds = 'deterministic';
      
      // Runtime chunk'u optimize et
      config.optimization.runtimeChunk = 'single';
      
      // SplitChunks optimizasyonu
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 100000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: (module) => {
              const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              return match ? `lib.${match[1].replace('@', '')}` : 'lib';
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 3,
            priority: 20,
          },
        },
      };
    }

    // Tree shaking için sideEffects false
    config.optimization.sideEffects = false;

    return config;
  },

  // === GÜVENLİK BAŞLIKLARI ===
  async headers() {
    const securityHeaders = [
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin'
      },
      {
        key: 'Cross-Origin-Resource-Policy',
        value: 'same-origin'
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), location=(), interest-cohort=()'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      }
    ];

    // CSP Header
    const contentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: blob: https:;
      connect-src 'self' https://vitals.vercel-insights.com;
      frame-src 'none';
      base-uri 'self';
      form-action 'self' https://wa.me;
      object-src 'none';
    `.replace(/\s{2,}/g, ' ').trim();

    securityHeaders.push({
      key: 'Content-Security-Policy',
      value: contentSecurityPolicy
    });

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=300'
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://sahneva.com'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, X-Requested-With'
          },
          {
            key: 'Access-Control-Max-Age',
            value: '86400'
          },
        ],
      },
    ];
  },

  // === ÇEVRE DEĞİŞKENLERİ ===
  env: {
    SITE_URL: process.env.SITE_URL || 'https://sahneva.com',
  },

  // === TRAILING SLASH ===
  trailingSlash: false,

  // === SOURCE MAPS ===
  productionBrowserSourceMaps: false,

  // === STATIC OPTIMIZATIONS ===
  staticPageGenerationTimeout: 300,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],

  // === OUTPUT ===
  output: 'standalone',
};

export default nextConfig;
