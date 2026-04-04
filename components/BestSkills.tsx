"use client";
import { Badge } from "./ui/badge";
import { Section } from "./Section";
import { ScrollAnimation } from "./ScrollAnimation";
import { useTranslations } from "next-intl";
import { PythonIcon } from "./icons/PythonIcon";
import { AwsIcon } from "./icons/awsIcon";
import { JupyterIcon } from "./icons/JupyterIcon";

export const BestSkills = () => {
  const t = useTranslations();

  return (
    <ScrollAnimation animated={true} animationType="fade">
      <Section className="flex flex-col items-start justify-between gap-4">
        <Badge variant="outline" className="rounded-full text-white border-white">
          {t("skills")}
        </Badge>
        <h2 className="font-caption font-extralight text-5xl max-sm:text-3xl text-slate-300">
          {t("bestSkills.title")}
        </h2>

        <div className="flex max-md:flex-col gap-8">
          <ScrollAnimation animated={true} animationType="fade" animationDelay={700} className="flex-1">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-14 lg:w-14 ">
                <PythonIcon size={64} />
              </div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2 text-white">
                {t("bestSkills.python")}
              </h3>
              <p className="text-sm text-slate-300/80">{t("bestSkills.pythonDescription")} </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animated={true} animationType="fade" animationDelay={100} className="flex-1">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-16 lg:w-16 ">
                <AwsIcon size={64} />
              </div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2 text-white">
                {t("bestSkills.aws")}
              </h3>
              <p className="text-sm text-slate-300/80">{t("bestSkills.awsDescription")} </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animated={true} animationType="fade" animationDelay={400} className="flex-1">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-16 lg:w-16 ">
                <JupyterIcon size={64} />
              </div>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2 text-white">
                {t("bestSkills.jupyter")}
              </h3>
              <p className="text-sm text-slate-300/80">{t("bestSkills.jupyterDescription")} </p>
            </div>
          </ScrollAnimation>
        </div>
      </Section>
    </ScrollAnimation>
  );
};
