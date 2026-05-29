import { ExperienceContainer } from "@/components/ExperienceContainer";
import { setRequestLocale } from "next-intl/server";

export default async function Experience(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return <ExperienceContainer />;
}
