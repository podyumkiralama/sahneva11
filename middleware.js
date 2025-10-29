// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Güvenlik başlıklarını otomatik olarak ekle
  const response = NextResponse.next();

  // Temel güvenlik başlıkları
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), location=(), interest-cohort=()');

  // API istekleri için ek güvenlik
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', 'https://sahneva.com');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
}

// Middleware'in çalışacağı rotaları belirle
export const config = {
  matcher: [
    /*
     * Tüm rotaları kapsa, ama:
     * - _next/static (static dosyalar)
     * - _next/image (image optimization files) 
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
