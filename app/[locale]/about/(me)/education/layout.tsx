import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.education"),
    description: t("layout.educationDescription"),
  };
}

export default async function AboutLayout(props: AboutLayoutProps) {
  const params = await props.params;
  const locale = params.locale;

  setRequestLocale(locale);
  return props.children;
}
