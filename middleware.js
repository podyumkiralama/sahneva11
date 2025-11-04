import { NextResponse } from "next/server";

const allowedScriptHosts = [
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://www.gstatic.com",
  "https://va.vercel-scripts.com",
  "https://vercel.live",
];

const allowedConnectHosts = [
  "'self'",
  "https://vitals.vercel-insights.com",
  "https://www.google-analytics.com",
  "https://region1.google-analytics.com",
  "https://www.google.com",
  "https://www.gstatic.com",
  "https://stats.g.doubleclick.net",
  "https://www.googletagmanager.com",
  "https://www.sahneva.com",
];

const allowedFrameHosts = [
  "'self'",
  "https://www.google.com",
  "https://www.googletagmanager.com",
  "https://vercel.live",
  "https://*.vercel.live",
];

const allowedImgHosts = [
  "'self'",
  "https:",
  "data:",
  "blob:",
];

function buildCsp(nonce) {
  const cspDirectives = new Map([
    [
      "default-src",
      ["'self'"]
    ],
    [
      "base-uri",
      ["'self'"]
    ],
    [
      "object-src",
      ["'none'"]
    ],
    [
      "frame-ancestors",
      ["'none'"]
    ],
    [
      "upgrade-insecure-requests",
      []
    ],
    [
      "script-src",
      ["'self'", `'nonce-${nonce}'`, "'strict-dynamic'", ...allowedScriptHosts]
    ],
    [
      "script-src-elem",
      ["'self'", `'nonce-${nonce}'`, "'strict-dynamic'", ...allowedScriptHosts]
    ],
    [
      "script-src-attr",
      ["'none'"]
    ],
    [
      "style-src",
      ["'self'", `'nonce-${nonce}'`, "https://fonts.googleapis.com"]
    ],
    [
      "style-src-elem",
      ["'self'", `'nonce-${nonce}'`, "https://fonts.googleapis.com"]
    ],
    [
      "style-src-attr",
      ["'none'"]
    ],
    [
      "font-src",
      ["'self'", "https://fonts.gstatic.com", "data:"]
    ],
    [
      "img-src",
      allowedImgHosts
    ],
    [
      "connect-src",
      allowedConnectHosts
    ],
    [
      "worker-src",
      ["'self'", "blob:"]
    ],
    [
      "frame-src",
      allowedFrameHosts
    ],
    [
      "form-action",
      ["'self'", "https://formspree.io", "https://wa.me"]
    ],
    [
      "manifest-src",
      ["'self'"]
    ],
    [
      "prefetch-src",
      ["'self'"]
    ],
  ]);

  return Array.from(cspDirectives.entries())
    .map(([directive, value]) => (value.length ? `${directive} ${value.join(' ')}` : directive))
    .join('; ');
}

const securityHeaders = [
  ["X-Content-Type-Options", "nosniff"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["X-Frame-Options", "DENY"],
  ["Cross-Origin-Opener-Policy", "same-origin"],
  ["Cross-Origin-Resource-Policy", "same-site"],
  ["Permissions-Policy", "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()"],
  ["Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload"],
];

function toBase64(uint8Array) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(uint8Array).toString("base64");
  }

  let binary = "";

  uint8Array.forEach((value) => {
    binary += String.fromCharCode(value);
  });

  return btoa(binary);
}

function generateNonce() {
  const array = new Uint8Array(16);
  const cryptoObj = globalThis.crypto || globalThis.msCrypto;

  if (cryptoObj?.getRandomValues) {
    cryptoObj.getRandomValues(array);
  } else {
    for (let i = 0; i < array.length; i += 1) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }

  return toBase64(array);
}

export function middleware(request) {
  const nonce = generateNonce();
  const csp = buildCsp(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);
  securityHeaders.forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: "/:path*",
};
