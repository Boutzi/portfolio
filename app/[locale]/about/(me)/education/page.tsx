import { EducationContainer } from "@/components/EducationContainer";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Education(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;

  unstable_setRequestLocale(locale);

  return <EducationContainer />;
}
