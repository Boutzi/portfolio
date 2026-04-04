import SkillsContainer from "@/components/SkillsContainer";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Skills(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;

  unstable_setRequestLocale(locale);
  return <SkillsContainer />;
}
