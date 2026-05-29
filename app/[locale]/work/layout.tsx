import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.work"),
    description: t("layout.workDescription"),
  };
}
export default async function AboutLayout(props: AboutLayoutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return props.children;
}
