import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
  //  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
// export const config = {
//   matcher: ["/", "/(fr|en|it|kr|jp)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
// };
