import { ExperienceContainer } from "@/components/ExperienceContainer";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Experience(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  unstable_setRequestLocale(locale);
  return <ExperienceContainer />;
}
