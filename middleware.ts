import { NextResponse, NextRequest } from "next/server";

// Basit, güvenli base64url nonce üretimi (Edge runtime uyumlu)
function genNonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  // base64url
  return btoa(String.fromCharCode(...bytes)).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

export const config = {
  matcher: [
    // API ve statikler hariç tüm rotalar (ihtiyaca göre daraltabilirsiniz)
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api/csp-report).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const nonce = genNonce();

  // *** KULLANDIĞINIZ 3P SERVİSLERE GÖRE ALAN ADLARINI GENİŞLETİN ***
  // (Aşağıda GA4 ve YouTube örnekleri var; kullanmıyorsanız silebilirsiniz.)
  const csp = [
    "default-src 'self';",
    "base-uri 'self';",
    "object-src 'none';",
    "frame-ancestors 'self';",                   // Clickjacking koruması (XFO yerine tercih)
    "form-action 'self';",
    "upgrade-insecure-requests;",                // Tüm http istekleri https'e yükseltilir

    // GA4 / Vercel Analytics / API istekleri vb. için bağlantı izinleri
    "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-scripts.com https://www.google-analytics.com https://region1.google-analytics.com;",

    // Script politikası: nonce + strict-dynamic (hash gerekmez, inline sadece nonce ile)
    // https: eklendi; 'unsafe-inline' YOK. 3P loader'lar strict-dynamic ile zincirlenir.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:;`,

    // Next.js genellikle stil etiketleri üretir; style için inline serbest bırakıyoruz.
    // (İsterseniz stil nonce'ına da geçebilirsiniz.)
    "style-src 'self' 'unsafe-inline';",

    // font, img, media, worker alanları — blob/data gereksinimleri eklendi
    "font-src 'self' data:;",
    "img-src 'self' data: blob: https://i.ytimg.com https://www.google-analytics.com;",
    "media-src 'self' blob:;",
    "worker-src 'self' blob:;",

    // YouTube ve Google Maps’i iframe’leyecekseniz:
    "frame-src 'self' https://www.youtube.com https://www.google.com;",
  ].join(" ");

  const res = NextResponse.next();

  // Nonce’u komponentlerde kullanabilmeniz için header'a koyuyoruz
  res.headers.set("x-nonce", nonce);

  // *** Güvenlik Başlıkları ***
  res.headers.set("Content-Security-Policy", csp);
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Content-Type-Options", "nosniff");
  // XFO yerine frame-ancestors kullandık; yine de ekstra isterseniz:
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin");     // SAB gerekmiyorsa ideal
  res.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  res.headers.set("Permissions-Policy", [
    "accelerometer=()",
    "ambient-light-sensor=()",
    "autoplay=()",
    "battery=()",
    "camera=()",
    "display-capture=()",
    "document-domain=()",
    "encrypted-media=()",
    "fullscreen=(self)",             // İsterseniz () yapabilirsiniz
    "geolocation=()",
    "gyroscope=()",
    "hid=()",
    "interest-cohort=()",
    "magnetometer=()",
    "microphone=()",
    "midi=()",
    "payment=()",
    "publickey-credentials-get=(self)",
    "screen-wake-lock=()",
    "usb=()",
    "xr-spatial-tracking=()",
  ].join(", "));
  // HSTS: kendi alan adınız HTTPS’a tamamen geçmiş olmalı (subdomain’ler dahil).
  res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  // CORP (isteğe bağlı ama sıkılaştırır)
  res.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  // OAC, bazı yan kanal izolasyonları için
  res.headers.set("Origin-Agent-Cluster", "?1");

  return res;
}
