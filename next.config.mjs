/** @type {import('next').NextConfig} */
const nextConfig = {
  // === TEMEL AYARLAR ===
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false, // ETag'leri kapatarak sunucu yükünü azalt
  compress: true, // Gzip sıkıştırmayı etkinleştir
  
  // === GÖRÜNTÜ OPTİMİZASYONU ===
  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: false, // Güvenlik için SVG'yi kapat
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false, // Her zaman optimize edilmiş resimler
  },

  // === DERLEYİCİ OPTİMİZASYONLARI ===
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'], // Sadece error ve warn log'larını tut
    },
    reactRemoveProperties: process.env.NODE_ENV === 'production',
    removeReactProperties: process.env.NODE_ENV === 'production',
  },

  // === DENEYSEK ÖZELLİKLER ===
  experimental: {
    optimizeCss: true, // CSS optimizasyonu
    scrollRestoration: true, // Scroll restorasyonu
    legacyBrowsers: false, // Modern tarayıcıları hedefle
    browsersListForSwc: true, // SWC için browserslist kullan
    esmExternals: true, // ESM externals
    optimizePackageImports: [
      'lucide-react',
      '@headlessui/react',
      'framer-motion',
      'react-icons'
    ],
    // Yeni performans özellikleri
    workerThreads: true, // Worker thread'leri etkinleştir
    cpus: 4, // CPU sayısını belirle
    // Bellek optimizasyonu
    memoryBasedWorkers: true,
    // Build optimizasyonları
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },

  // === WEBPACK OPTİMİZASYONLARI ===
  webpack: (config, { dev, isServer, buildId, webpack }) => {
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
          // Framework chunk'u
          framework: {
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Lib chunk'u
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: (module) => {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `lib.${packageName.replace('@', '')}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          // Commons chunk'u
          commons: {
            name: 'commons',
            minChunks: 3, // En az 3 chunk'ta kullanılan modüller
            priority: 20,
          },
          // Shared chunk'u
          shared: {
            name: 'shared',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Tree shaking için sideEffects false
    config.optimization.sideEffects = false;

    // Modül çözümleme optimizasyonu
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    };

    // Bundle analyzer (sadece analiz için)
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }

    return config;
  },

  // === GÜVENLİK BAŞLIKLARI ===
  async headers() {
    const securityHeaders = [
      // XSS koruması
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      // MIME tipi sniffling koruması
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      // Referrer politikası
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
      },
      // Frame embedding koruması
      {
        key: 'X-Frame-Options',
        value: 'DENY'
      },
      // Cross-Origin Opener Policy
      {
        key: 'Cross-Origin-Opener-Policy',
        value: 'same-origin'
      },
      // Cross-Origin Resource Policy
      {
        key: 'Cross-Origin-Resource-Policy',
        value: 'same-origin'
      },
      // Cross-Origin Embedder Policy
      {
        key: 'Cross-Origin-Embedder-Policy',
        value: 'require-corp'
      },
      // Permissions Policy
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), location=(), interest-cohort=()'
      },
      // Strict Transport Security
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      // Expect-CT
      {
        key: 'Expect-CT',
        value: 'max-age=86400, enforce'
      }
    ];

    // Gelişmiş CSP Policy
    const contentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com https://*.google-analytics.com https://*.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: blob: https:;
      connect-src 'self' https://vitals.vercel-insights.com https://www.sahneva.com https://*.google-analytics.com https://*.analytics.google.com;
      frame-src 'none';
      base-uri 'self';
      form-action 'self' https://wa.me;
      object-src 'none';
      media-src 'self';
      worker-src 'self' blob:;
      manifest-src 'self';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    securityHeaders.push({
      key: 'Content-Security-Policy',
      value: contentSecurityPolicy
    });

    return [
      {
        // Tüm rotalara uygula
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // Statik asset'ler için cache headers
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Cache-Handler',
            value: 'static-assets'
          }
        ],
      },
      {
        // Resimler için cache headers
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        // SVG, font, ve diğer asset'ler
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        // Sayfa kaynakları için cache (ISR ve static sayfalar)
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=300'
          },
        ],
      },
      {
        // API rotaları için CORS headers
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.sahneva.com'
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
      {
        // SW ve manifest için özel headers
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/'
          }
        ],
      },
      {
        // Manifest için headers
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ],
      },
    ];
  },

  // === ÇEVRE DEĞİŞKENLERİ ===
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.sahneva.com',
    CUSTOM_ENV: process.env.CUSTOM_ENV || 'production',
    BUILD_ID: process.env.BUILD_ID || Date.now().toString(),
  },

  // === TRAILING SLASH ===
  trailingSlash: false,

  // === BASE PATH ===
  // basePath: '',

  // === ASSET PREFIX ===
  // assetPrefix: 'https://cdn.sahneva.com',

  // === SWC MINIFICATION ===
  swcMinify: true,

  // === SOURCE MAPS ===
  productionBrowserSourceMaps: false, // Production'da source map'leri kapat

  // === STATIC OPTIMIZATIONS ===
  staticPageGenerationTimeout: 300, // 5 dakika
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],

  // === RUNTIME CONFIG ===
  publicRuntimeConfig: {
    staticFolder: '/static',
  },

  // === ON DEMAND ISR ===
  experimental: {
    isrMemoryCacheSize: 50 * 1024 * 1024, // 50MB ISR cache
  },
};

// Bundle analyzer için condition
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}
