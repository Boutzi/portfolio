import localFont from "next/font/local";
import { Anek_Telugu } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { GlobalStatus } from "@/components/GlobalStatus";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

import { StatusProvider } from "@/context/StatusContext";
import { UserProvider } from "@/context/UserContext";
import { ColorProvider } from "@/context/ColorContext";
import { LoaderProvider } from "@/context/LoaderContext";

// Les polices restent inchangées
const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 1. Mise à jour de generateMetadata
export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params; // On attend params
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: `Joe | ${t("layout.root")}`,
      template: "%s | Joe",
    },
    description: t("layout.rootDescription"),
  };
}

// 2. Mise à jour du RootLayout
export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <StatusProvider>
      <html lang={locale} className="h-full" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugu.variable} font-sans h-full antialiased bg-gradient-to-r from-backgradient from-20% via-backgradientvia to-80% to-backgradient`}
        >
          <GoogleTagManager />
          <NextIntlClientProvider messages={messages}>
            <UserProvider>
              <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                <ColorProvider>
                  <GlobalStatus />
                  <Header />
                  <LoaderProvider>
                    {props.children}
                    <Footer />
                  </LoaderProvider>
                </ColorProvider>
              </ThemeProvider>
            </UserProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </StatusProvider>
  );
}
