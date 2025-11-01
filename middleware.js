import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  res.headers.set('x-csp-nonce', nonce);

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
    // Scripts - nonce
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://vercel.live`,
    `script-src-elem 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://vercel.live`,
    // Styles (inline temizlenince 'unsafe-inline' kaldırılabilir)
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https:",
    "connect-src 'self' https://vitals.vercel-insights.com https://www.sahneva.com https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
    "frame-src 'self' https://www.google.com",
    "form-action 'self' https://formspree.io https://wa.me"
  ].join('; ');

  res.headers.set('Content-Security-Policy', csp);
  res.headers.set('X-DNS-Prefetch-Control', 'on');
  return res;
}

export const config = { matcher: '/:path*' };
