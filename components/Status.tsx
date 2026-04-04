/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work } from "./Work";
import { CONTACT, ContactCard } from "./ContactCard";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { getRepositories } from "@/utils/getData";
import { useTranslations } from "next-intl";
import { ViewerProps } from "./WorkViewer";
import { EducationCardProps } from "./EducationCard";
import { ExperienceCardProps } from "./ExperienceCard";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { useLocale } from "next-intl";

export const Status = () => {
  const [repos, setRepos] = useState<SideProjectProps[]>([]);
  const t = useTranslations();
  const locale = useLocale();
  const [education, setEducation] = useState<EducationCardProps>();
  const [experience, setExperience] = useState<ExperienceCardProps>();
  const [works, setWorks] = useState<ViewerProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "education", "education");
        setEducation(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "experience", "experience");
        setExperience(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [experience, locale]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "work", "projects");
        setWorks(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [locale]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const repositories = await getRepositories();
      setRepos(repositories);
    };

    fetchRepositories();
  }, []);

  return (
    <Section className="flex flex-col gap-4">
      <ScrollAnimation animated={true} animationType="fade">
        <div className="flex flex-col gap-4 items-start">
          <Badge variant="outline" className="rounded-full text-primary border-primary">
            {t("status.activity")}
          </Badge>
          <h2 className="font-caption font-extralight text-5xl max-sm:text-3xl">{t("status.LiveStatus")}</h2>
        </div>
        <div className="flex max-lg:flex-col items-start justify-between gap-4">
          <div className="flex-[3] w-full">
            {/* <ScrollAnimation animated={true} animationType="slide-x"> */}
            <Card className="w-full p-4 flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">{t("status.StarredRepositories")}</p>
              <div className="flex flex-col gap-3">
                {repos?.map((repo: SideProjectProps, index) =>
                  repo.name === "arkaans-copilot" ? (
                    <SideProject
                      key={index}
                      name={repo.name}
                      description={repo.description}
                      html_url={repo.html_url}
                      language={"JavaScript"}
                    />
                  ) : repo.name === "portfolio" ? (
                    <SideProject
                      key={index}
                      name={repo.name}
                      description={repo.description}
                      html_url={repo.html_url}
                      language={"TypeScript"}
                    />
                  ) : (
                    <SideProject
                      key={index}
                      name={repo.name}
                      description={repo.description}
                      html_url={repo.html_url}
                      language={repo.language}
                    />
                  )
                )}
              </div>
              <Link
                href={"https://github.com/Boutzi?tab=repositories"}
                target="_blank"
                className="flex items-center -m-4 mt-1 p-2 bg-accent/20 hover:bg-accent/50 text-foreground rounded-t-none rounded-lg border-t"
              >
                <div className="m-auto flex gap-2 text-md items-center">
                  <span className="">{t("heroSection.viewOnGitHub")}</span>
                  <ArrowUpRight className="" size={18} />
                </div>
              </Link>
            </Card>
            {/* </ScrollAnimation> */}
          </div>
          <div className="flex-[2] w-full h-full flex flex-col gap-4">
            {/* <ScrollAnimation animated={true} animationType="-slide-x"> */}
            <Card className="flex-1 p-4">
              <p className="text-sm text-muted-foreground">{t("status.LastestJobs")}</p>
              <div className="flex flex-col gap-4 py-2">
                <Work
                  title={education?.course}
                  role={education?.school}
                  date={education?.year}
                  image={education?.logo}
                  type={t("aboutNav.education")}
                />
                <Work
                  title={experience?.company}
                  role={experience?.role}
                  date={experience?.year}
                  image={experience?.logo}
                  type={t("aboutNav.experience")}
                />
                <Work
                  title={works?.title}
                  role={works?.language}
                  date={works?.date}
                  image={works?.image}
                  type={t("Metadata.layout.work")}
                />
              </div>
              <Link
                href={"https://www.linkedin.com/in/joseph-girardi/details/experience/"}
                target="_blank"
                className="flex items-center -m-4 mt-1 p-2 bg-accent/20 hover:bg-accent/50 text-foreground rounded-t-none rounded-lg border-t"
              >
                <div className="m-auto flex gap-2 text-md items-center">
                  <span className="">{t("heroSection.viewAllExperiences")}</span>
                  <ArrowUpRight className="" size={18} />
                </div>
              </Link>
            </Card>
            {/* </ScrollAnimation> */}
            {/* <ScrollAnimation animated={true} animationType="-slide-y"> */}
            <Card className="flex-1 p-4">
              <p className="text-sm text-muted-foreground">{t("heroSection.connectWithMe")}</p>
              <div className="flex gap-4 pt-2 max-lg:flex-col">
                {CONTACT.map((contact, index) => (
                  <ContactCard key={index} {...contact} />
                ))}
              </div>
            </Card>
            {/* </ScrollAnimation> */}
          </div>
        </div>
      </ScrollAnimation>
    </Section>
  );
};
