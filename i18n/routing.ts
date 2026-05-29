import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "fr", "it", "kr", "jp"],
  defaultLocale: "en",
  localePrefix: "never",
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
