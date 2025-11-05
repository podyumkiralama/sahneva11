import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,
  
  // ✅ MODERN JAVASCRIPT OPTIMIZATIONS - ESKI POLYFILL'LERI ENGELLER
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

  webpack: (config, { webpack }) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "next/dist/build/polyfills/polyfill-module": require.resolve("./lib/empty-polyfill.js"),
      "next/dist/build/polyfills/polyfill-nomodule": require.resolve("./lib/empty-polyfill.js"),
    };

    config.plugins = config.plugins || [];
    const emptyPolyfillPath = require.resolve("./lib/empty-polyfill.js");
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /next[\\/](dist|esm)[\\/]build[\\/]polyfills[\\/]polyfill-(?:module|nomodule)/,
        emptyPolyfillPath
      )
    );

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if ("polyfills" in entries) {
        delete entries.polyfills;
      }

      for (const key of Object.keys(entries)) {
        const value = entries[key];
        if (Array.isArray(value)) {
          entries[key] = value.filter(
            (entry) => !entry.includes("polyfills/polyfill-module") && !entry.includes("polyfills/polyfill-nomodule")
          );
        }
      }

      return entries;
    };

    config.plugins.push({
      name: "RemoveLegacyPolyfillsPlugin",
      apply(compiler) {
        const pluginName = "RemoveLegacyPolyfillsPlugin";

        const stripModernHelperUsage = (code) => {
          let mutated = false;

          const stripFlatMapPattern = /([A-Za-z_$][\w$]*)\.slice\(t\)\.flatMap\(e=>\{let t=\(0,u\.getSegmentParam\)\(e\);return t\?a\[t\.param]:e\}\)\.filter\(e=>void 0!==e\)/g;
          code = code.replace(stripFlatMapPattern, (_match, arrayVar) => {
            mutated = true;
            return `(()=>{const __baseline=[];for(const e of ${arrayVar}.slice(t)){const __param=(0,u.getSegmentParam)(e);const __value=__param?a[__param.param]:e;if(void 0!==__value){__baseline.push(__value);}}return __baseline;})()`;
          });

          const fromEntriesURLPattern = /Object\.fromEntries\(new URLSearchParams\(([^)]+)\)\)/g;
          code = code.replace(fromEntriesURLPattern, (_match, inner) => {
            mutated = true;
            return `(()=>{const __baselineResult={};for(const [__baselineKey,__baselineValue] of new URLSearchParams(${inner})){__baselineResult[__baselineKey]=__baselineValue;}return __baselineResult;})()`;
          });

          const negativeAtIdentifierPattern = /\b([A-Za-z_$][\w$]*)\.at\(-([0-9]+)\)/g;
          code = code.replace(negativeAtIdentifierPattern, (_match, identifier, depth) => {
            mutated = true;
            return `${identifier}[${identifier}.length-${depth}]`;
          });

          const splitNegativeAtPattern = /((?:[A-Za-z_$][\w$]*)(?:\.[A-Za-z_$][\w$]*|\[[^\]]+\])*)\.split\(([^)]*)\)\.at\(-([0-9]+)\)/g;
          code = code.replace(splitNegativeAtPattern, (_match, expr, args, depth) => {
            mutated = true;
            return `(()=>{const __baselineArray=${expr}.split(${args});return __baselineArray[__baselineArray.length-${depth}];})()`;
          });

          return { code, mutated };
        };

        compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
          const { Compilation, sources } = compiler.webpack;

          compilation.hooks.processAssets.tap(
            {
              name: pluginName,
              stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
            },
            (assets) => {
              for (const assetKey of Object.keys(assets)) {
                if (assetKey.startsWith("static/chunks/polyfills")) {
                  compilation.deleteAsset(assetKey);
                }
              }

              const manifestAsset = compilation.getAsset("build-manifest.json");
              if (manifestAsset) {
                try {
                  const manifest = JSON.parse(manifestAsset.source.source().toString());
                  if (Array.isArray(manifest.polyfillFiles) && manifest.polyfillFiles.length > 0) {
                    manifest.polyfillFiles = [];
                    compilation.updateAsset(
                      "build-manifest.json",
                      new sources.RawSource(JSON.stringify(manifest, null, 2))
                    );
                  }
                } catch (error) {
                  const message =
                    error instanceof Error
                      ? error.message
                      : `${pluginName}: Unable to update build-manifest`;
                  compilation.warnings.push(
                    new compiler.webpack.WebpackError(`${pluginName}: ${message}`)
                  );
                }
              }

              const middlewareManifestAsset = compilation.getAsset(
                "server/middleware-build-manifest.js"
              );
              if (middlewareManifestAsset) {
                const source = middlewareManifestAsset.source.source().toString();
                const normalized = source.replace(
                  /polyfillFiles:\[[^\]]*]/,
                  "polyfillFiles:[]"
                );
                if (normalized !== source) {
                  compilation.updateAsset(
                    "server/middleware-build-manifest.js",
                    new sources.RawSource(normalized)
                  );
                }
              }

              for (const assetKey of Object.keys(assets)) {
                if (!assetKey.endsWith(".js")) {
                  continue;
                }

                const asset = compilation.getAsset(assetKey);
                if (!asset) {
                  continue;
                }

                const originalSource = asset.source.source().toString();
                const { code, mutated } = stripModernHelperUsage(originalSource);
                if (mutated) {
                  compilation.updateAsset(assetKey, new sources.RawSource(code));
                }
              }
            }
          );
        });
      },
    });

    return config;
  },

  turbopack: {},

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
