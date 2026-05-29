import { EducationContainer } from "@/components/EducationContainer";
import { setRequestLocale } from "next-intl/server";

export default async function Education(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;

  setRequestLocale(locale);

  return <EducationContainer />;
}
