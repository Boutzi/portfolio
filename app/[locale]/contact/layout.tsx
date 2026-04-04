import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(props: AboutLayoutProps) {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.contact"),
    description: t("layout.contactDescription"),
  };
}

export default async function AboutLayout(props: AboutLayoutProps) {
  const params = await props.params;
  const locale = params.locale;

  unstable_setRequestLocale(locale);
  return props.children;
}
