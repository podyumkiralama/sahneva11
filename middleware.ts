// middleware.ts
import { NextResponse, NextRequest } from "next/server";

function genNonce() {
  // 16 byte rastgele nonce → base64
  return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString("base64");
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const isProd = process.env.NODE_ENV === "production";
  const allowIframe =
    process.env.NEXT_ALLOW_IFRAMING === "1" || process.env.VERCEL_ENV === "preview";

  const nonce = genNonce();
  // Nonce'ı downstream bileşenlere iletmek için özel header
  res.headers.set("x-nonce", nonce);

  // Alan listeleri
  const frameSrc = ["'self'", "https://www.google.com", "https://vercel.live", "https://*.vercel.live"];
  const connectSrc = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    "https://www.sahneva.com",
  ];
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,          // ✅ inline scriptler için
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
  ];

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
    `img-src 'self' data: blob: https:`,
    `font-src 'self' data: https://fonts.gstatic.com`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`, // (style nonce istersen burayı da nonce'a çevirebiliriz)
    `script-src ${scriptSrc.join(" ")}`,
    `script-src-elem ${scriptSrc.join(" ")}`,
    "script-src-attr 'none'",
    `connect-src ${connectSrc.join(" ")}`,
    `worker-src 'self' blob:`,
    `frame-src ${frameSrc.join(" ")}`,
    `form-action 'self' https://formspree.io https://wa.me`,
    `frame-ancestors ${allowIframe ? "'self' https://vercel.live https://*.vercel.live" : "'none'"}`,
  ].join("; ");

  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Content-Type-Options", "nosniff");
  if (!allowIframe) res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Cross-Origin-Opener-Policy", allowIframe ? "same-origin-allow-popups" : "same-origin");
  res.headers.set("Cross-Origin-Resource-Policy", "same-site");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()"
  );
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // statik dosyaları hariç tut
};
