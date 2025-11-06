import { NextRequest, NextResponse } from "next/server";

const MISSING_FONT_PATH = "/_next/static/media/83afe278b6a6bb3c.p.3a6ba036.woff2";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === MISSING_FONT_PATH) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    redirectUrl.search = "";
    redirectUrl.hash = "";

    return NextResponse.redirect(redirectUrl, 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/_next/static/media/83afe278b6a6bb3c.p.3a6ba036.woff2"],
};
