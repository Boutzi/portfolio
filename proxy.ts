import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferred = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();
    const supported = ["fr", "it", "kr", "jp"];
    const locale = supported.includes(preferred) ? preferred : "en";
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(fr|en|it|kr|jp)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
