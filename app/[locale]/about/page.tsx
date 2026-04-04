import { Bio } from "@/components/Bio";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function About(props: { params: { locale: string } }) {
  const { locale } = props.params;

  unstable_setRequestLocale(locale);
  return <Bio />;
}
