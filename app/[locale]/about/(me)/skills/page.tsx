import SkillsContainer from "@/components/SkillsContainer";
import { setRequestLocale } from "next-intl/server";

export default async function Skills(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;

  setRequestLocale(locale);
  return <SkillsContainer />;
}
