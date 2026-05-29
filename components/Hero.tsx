"use client";
import { Section } from "./Section";
import { Spacing } from "./Spacing";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { CTA } from "./CTA";
import { useUser } from "@/context/UserContext";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface HeroProps {
  titleIntro: string;
  titleMain: string;
  titleOutro: string;
  subFirst: string;
  subSecond: string;
}

function Hero() {
  const locale = useLocale();
  const { user } = useUser();
  const [hero, setHero] = useState<HeroProps | null>(null);
  const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "config", "hero");
        setHero(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  return (
    <>
      {hero && (
        <div className="relative group pt-28 pb-28 border-b max-md:pt-4 max-md:pb-16 overflow-hidden max-md:bg-black">
          <Image
            src={"/hero-bg-black.webp"}
            fill
            priority
            alt="Hero 3D model"
            className="max-sm:object-right object-cover max-md:opacity-40"
          />
          <div className="w-full h-full relative group">
            <Section className="z-10 flex max-lg:flex-col items-center justify-between gap-6 min-h-[calc(100vh-400px)] max-lg:pt-8 max-lg:pb-8 max-md:pt-4 max-md:mx-auto">
              <div className="flex-[3] flex flex-col gap-2">
                <h1 className="drop-shadow-lg font-caption text-7xl font-bold text-primary max-md:text-4xl max-sm:text-3xl max-xl:text-6xl max-lg:text-5xl">
                  {hero?.titleIntro}
                  <br />
                  <span className="">{hero?.titleMain}</span>
                  <br />
                  <span className="text-white text-6xl max-md:text-4xl">{hero?.titleOutro}</span>
                </h1>
                <h2 className="font-caption font-extralight text-xl max-sm:text-xl text-white">
                  {hero?.subFirst}
                  <br />
                  {hero?.subSecond}
                </h2>
                <div className="max-sm:hidden">
                  <Spacing size="md" />
                </div>
                <div className="flex gap-4 max-lg:m-auto max-sm:flex-col max-sm:items-center">
                  <div className="flex gap-4 max-sm:items-center">
                    <CTA label={t("heroSection.contact")} url="/contact" classes="text-black" target="" />
                    <CTA
                      label={t("heroSection.viewOnGitHub")}
                      url={`${user?.githubUrl}`}
                      classes="bg-white hover:bg-slate-200/70 text-black"
                      target="_blank"
                    />
                  </div>
                  {user?.allowCvDownload ? (
                    <CTA
                      label={t("heroSection.downloadCV")}
                      url={`${user?.cvUrl}`}
                      classes="bg-white hover:bg-slate-200/70 gap-2 text-black"
                      target="_blank"
                      icon={Download}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Section>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
