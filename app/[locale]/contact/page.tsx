import { Form } from "@/components/Form";
import { setRequestLocale } from "next-intl/server";

export default async function Contact(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <main className="min-h-[calc(100vh_-_theme(spacing.44))] items-center flex">
      <Form />
    </main>
  );
}
