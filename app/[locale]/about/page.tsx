import { Bio } from "@/components/Bio";
import { setRequestLocale } from "next-intl/server";

export default async function About(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;

  setRequestLocale(locale);
  return <Bio />;
}
