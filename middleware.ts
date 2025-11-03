import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Rastgele nonce üret
  const nonce = Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString("base64");

  const isDev = process.env.NODE_ENV !== "production";

  // DEV'de vercel.live’a izin ver, PROD’da kapalı
  const frameSrc = ["'self'", "https://www.google.com"];
  if (isDev) frameSrc.push("https://vercel.live");

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",

    // ✳️ Inline script yok; GA/Vercel scriptleri sadece harici
    "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
    "script-src-elem 'self' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",

    // ✳️ Inline style yok; style attribute KAPALI
    "style-src 'self' https://fonts.googleapis.com",
    "style-src-elem 'self' https://fonts.googleapis.com",
    "style-src-attr 'none'",

    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https:",
    "connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
    `frame-src ${frameSrc.join(" ")}`,
    "form-action 'self' https://formspree.io https://wa.me",
  ].join("; ");

  const res = NextResponse.next();
  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  res.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

  // Nonce'u layout’ta okuyacağız
  res.headers.set("x-nonce", nonce);

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg)).*)"],
};
