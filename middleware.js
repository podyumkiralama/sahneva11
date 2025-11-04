import { NextResponse } from "next/server";
import crypto from "node:crypto";

const allowedScriptHosts = [
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://va.vercel-scripts.com",
  "https://vercel.live",
];

const allowedConnectHosts = [
  "'self'",
  "https://vitals.vercel-insights.com",
  "https://www.google-analytics.com",
  "https://region1.google-analytics.com",
  "https://stats.g.doubleclick.net",
  "https://www.sahneva.com",
];

const allowedFrameHosts = [
  "'self'",
  "https://www.google.com",
  "https://vercel.live",
  "https://*.vercel.live",
];

function buildCsp(nonce) {
  const scriptSrc = ["'self'", `'nonce-${nonce}'`, "'strict-dynamic'", ...allowedScriptHosts];
  const styleSrc = ["'self'", `'nonce-${nonce}'`, "https://fonts.googleapis.com"];
  const fontSrc = ["'self'", "https://fonts.gstatic.com", "data:"];
  const imgSrc = ["'self'", "https:", "data:", "blob:"];
  const connectSrc = allowedConnectHosts;
  const frameSrc = allowedFrameHosts;

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
    `script-src ${scriptSrc.join(' ')}`,
    `script-src-elem ${scriptSrc.join(' ')}`,
    "script-src-attr 'none'",
    `style-src ${styleSrc.join(' ')}`,
    `style-src-elem 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
    "style-src-attr 'none'",
    `font-src ${fontSrc.join(' ')}`,
    `img-src ${imgSrc.join(' ')}`,
    `connect-src ${connectSrc.join(' ')}`,
    "worker-src 'self' blob:",
    `frame-src ${frameSrc.join(' ')}`,
    "form-action 'self' https://formspree.io https://wa.me",
  ].join('; ');
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

export function middleware(request) {
  const nonce = crypto.randomBytes(16).toString("base64");
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
