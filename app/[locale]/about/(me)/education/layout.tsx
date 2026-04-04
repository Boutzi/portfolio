import { getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>; // Changement ici : Promise
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>; // Changement ici : Promise
}) {
  const params = await props.params; // On attend la résolution
  const locale = params.locale;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.education"),
    description: t("layout.educationDescription"),
  };
}

export default async function AboutLayout(props: AboutLayoutProps) {
  const params = await props.params; // On attend la résolution
  const locale = params.locale;

  unstable_setRequestLocale(locale);
  return props.children;
}
