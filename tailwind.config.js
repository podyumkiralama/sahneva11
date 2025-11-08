19:33:06.265 Running build in Washington, D.C., USA (East) – iad1
19:33:06.266 Build machine configuration: 4 cores, 8 GB
19:33:06.390 Cloning github.com/podyumkiralama/sahneva11 (Branch: main, Commit: 09172b4)
19:33:07.192 Cloning completed: 801.000ms
19:33:07.285 Restored build cache from previous deployment (EGNybfuGSXN7MDf7bJzQqKhsg6E3)
19:33:07.711 Running "vercel build"
19:33:08.159 Vercel CLI 48.9.0
19:33:08.510 Installing dependencies...
19:33:13.225 
19:33:13.225 added 288 packages in 4s
19:33:13.225 
19:33:13.225 170 packages are looking for funding
19:33:13.225   run `npm fund` for details
19:33:13.281 Detected Next.js version: 16.0.1
19:33:13.285 Running "npm run build"
19:33:13.430 
19:33:13.430 > sahneva11@1.0.0 prebuild
19:33:13.430 > npm dedupe
19:33:13.431 
19:33:16.054 
19:33:16.055 removed 2 packages, and audited 162 packages in 3s
19:33:16.055 
19:33:16.055 50 packages are looking for funding
19:33:16.055   run `npm fund` for details
19:33:16.056 
19:33:16.056 found 0 vulnerabilities
19:33:16.067 
19:33:16.068 > sahneva11@1.0.0 build
19:33:16.068 > next build
19:33:16.068 
19:33:16.926    ▲ Next.js 16.0.1 (Turbopack)
19:33:16.927    - Experiments (use with caution):
19:33:16.927      · optimizePackageImports
19:33:16.927      ✓ scrollRestoration
19:33:16.927 
19:33:16.993    Creating an optimized production build ...
19:33:23.305 
19:33:23.305 > Build error occurred
19:33:23.309 Error: Turbopack build failed with 3 errors:
19:33:23.309 ./styles/globals.css
19:33:23.309 Error evaluating Node.js code
19:33:23.310 Error: Cannot find module '@tailwindcss/forms'
19:33:23.310 Require stack:
19:33:23.310 - /vercel/path0/tailwind.config.js
19:33:23.310     [at Function._resolveFilename (node:internal/modules/cjs/loader:1383:15)]
19:33:23.310     [at Function.resolve (node:internal/modules/helpers:157:19)]
19:33:23.310     [at _resolve (/vercel/path0/node_modules/jiti/dist/jiti.js:1:246378)]
19:33:23.310     [at jiti (/vercel/path0/node_modules/jiti/dist/jiti.js:1:249092)]
19:33:23.310     [at /vercel/path0/tailwind.config.js:1:245]
19:33:23.310     [at evalModule (/vercel/path0/node_modules/jiti/dist/jiti.js:1:251913)]
19:33:23.310     [at jiti (/vercel/path0/node_modules/jiti/dist/jiti.js:1:249841)]
19:33:23.310     [at /vercel/path0/node_modules/tailwindcss/lib/lib/load-config.js:56:30]
19:33:23.310     [at loadConfig (/vercel/path0/node_modules/tailwindcss/lib/lib/load-config.js:58:6)]
19:33:23.310     [at getTailwindConfig (/vercel/path0/node_modules/tailwindcss/lib/lib/setupTrackingContext.js:71:116)]
19:33:23.311 
19:33:23.311 Import trace:
19:33:23.311   Client Component Browser:
19:33:23.311     ./styles/globals.css [Client Component Browser]
19:33:23.311     ./app/layout.js [Server Component]
19:33:23.311 
19:33:23.311 
19:33:23.311 ./tailwind.config.js:1:1
19:33:23.311 Module not found: Can't resolve '@tailwindcss/forms'
19:33:23.311 [0m[31m[1m>[22m[39m[90m 1 |[39m [36mimport[39m forms [36mfrom[39m [32m"@tailwindcss/forms"[39m[33m;[39m
19:33:23.312  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
19:33:23.312  [90m 2 |[39m [36mimport[39m typography [36mfrom[39m [32m"@tailwindcss/typography"[39m[33m;[39m
19:33:23.312  [90m 3 |[39m
19:33:23.312  [90m 4 |[39m [90m/** @type {import('tailwindcss').Config} */[39m[0m
19:33:23.312 
19:33:23.312 
19:33:23.312 
19:33:23.312 https://nextjs.org/docs/messages/module-not-found
19:33:23.312 
19:33:23.312 
19:33:23.312 ./tailwind.config.js:2:1
19:33:23.312 Module not found: Can't resolve '@tailwindcss/typography'
19:33:23.312 [0m [90m 1 |[39m [36mimport[39m forms [36mfrom[39m [32m"@tailwindcss/forms"[39m[33m;[39m
19:33:23.312 [31m[1m>[22m[39m[90m 2 |[39m [36mimport[39m typography [36mfrom[39m [32m"@tailwindcss/typography"[39m[33m;[39m
19:33:23.313  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
19:33:23.313  [90m 3 |[39m
19:33:23.313  [90m 4 |[39m [90m/** @type {import('tailwindcss').Config} */[39m
19:33:23.313  [90m 5 |[39m [36mexport[39m [36mdefault[39m {[0m
19:33:23.318 
19:33:23.318 
19:33:23.318 
19:33:23.318 https://nextjs.org/docs/messages/module-not-found
19:33:23.318 
19:33:23.318 
19:33:23.318     at <unknown> (./tailwind.config.js:1:1)
19:33:23.319     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
19:33:23.319     at <unknown> (./tailwind.config.js:2:1)
19:33:23.319     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
19:33:23.379 Error: Command "npm run build" exited with 1
