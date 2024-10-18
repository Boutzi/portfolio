import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("layout.contact"),
    description: t("layout.contactDescription"),
  };
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}
