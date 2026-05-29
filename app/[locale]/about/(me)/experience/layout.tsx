import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.experience"),
    description: t("layout.experienceDescription"),
  };
}

export default async function AboutLayout(props: AboutLayoutProps) {
  const params = await props.params;
  const locale = params.locale;

  setRequestLocale(locale);
  return props.children;
}
