import { Section } from "@/components/Section";
import { WorkContainer } from "@/components/WorkContainer";
import { setRequestLocale } from "next-intl/server";

export default async function Work(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return (
    <Section>
      <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.52))] gap-4 md:gap-8 pt-8">
        <WorkContainer />
      </main>
    </Section>
  );
}
