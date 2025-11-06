// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function makeNonce() {
  // kısa, URL-safe bir nonce — Edge runtime'da Buffer yok, web API'lerini kullanalım
  const randomValues = new Uint8Array(16);
  crypto.getRandomValues(randomValues);

  if (typeof Buffer !== "undefined") {
    // Node.js ortamı (ör. local dev server) → Buffer kullanmak güvenli
    return Buffer.from(randomValues).toString("base64url");
  }

  if (typeof btoa === "function") {
    // Edge/runtime gibi ortamlarda btoa mevcut
    let binary = "";
    randomValues.forEach((value) => {
      binary += String.fromCharCode(value);
    });

    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  throw new Error("No base64 encoder available for nonce generation");
}

export function middleware(req: NextRequest) {
  const nonce = makeNonce();

  // 1) Nonce’ı AŞAĞI KATA GEÇECEK ŞEKİLDE İSTEK BAŞLIĞINA EKLE
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);

  // 2) Standart CSP — nonce entegre
  const scriptSrc = [
    `'self'`,
    `'nonce-${nonce}'`, // ← inline scriptler ve next/script için
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
  ].join(" ");

  const connectSrc = [
    `'self'`,
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
  ].join(" ");

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    `script-src ${scriptSrc}`,
    `script-src-elem ${scriptSrc}`,
    "script-src-attr 'none'",
    `connect-src ${connectSrc}`,
    "worker-src 'self' blob:",
    "frame-src 'self' https://www.google.com https://vercel.live https://*.vercel.live",
    "form-action 'self' https://formspree.io https://wa.me",
  ].join("; ");

  const res = NextResponse.next({
    request: { headers: requestHeaders }, // ← önemli
  });

  // 3) Güvenlik başlıkları (CSP dahil)
  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  res.headers.set("Cross-Origin-Resource-Policy", "same-site");
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()"
  );
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

  // (İsteğe bağlı) nonce’ı cevaba da koyuyoruz; debug için faydalı
  res.headers.set("x-nonce", nonce);

  return res;
}

// Statik dosyaları/methodları hariç tut
export const config = {
  matcher: [
    // _next/static, _next/image, favicon gibi statik yollar hariç
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
