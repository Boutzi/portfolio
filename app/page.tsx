import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  const supported = ["fr", "it", "kr", "jp"];
  const preferred = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

  const locale = supported.includes(preferred) ? preferred : "en";

  redirect(`/${locale}`);
}
