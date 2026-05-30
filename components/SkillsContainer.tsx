"use client";
import { ReactNode, useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { fetchDataFromBucket } from "@/utils/getBucket";
import { useLocale, useTranslations } from "next-intl";
import Loading from "@/app/[locale]/about/(me)/skills/loading";

interface Skill {
  name: string;
  icon: ReactNode | ReactNode;
  // proficiency: number;
  categories: string[];
  description: string;
}

export default function SkillsContainer() {
  const locale = useLocale();
  const t = useTranslations();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const bucketUrl = process.env.NEXT_PUBLIC_S3_BUCKET_URL;
  const [categories, setCategories] = useState<string[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "skills", "categories");
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [categories, locale]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromBucket(locale, "skills", "skills");
        data.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
        setSkills(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [skills, locale]);

  const filteredSkills =
    selectedCategories.length === 0
      ? skills
      : skills.filter((skill) => selectedCategories.some((category) => skill.categories.includes(category)));

  const resetFilters = () => {
    setSelectedCategories([]);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("mySkills")}</h1>

      <div className="mb-4 flex flex-wrap gap-2 justify-center">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategories.includes(category) ? "default" : "outline"}
            onClick={() => toggleCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="w-full flex h-10 justify-center">
        {selectedCategories && selectedCategories.length > 0 && (
          <Button
            className="aspect-square rounded-full flex gap-1 bg-destructive hover:bg-destructive/80"
            onClick={resetFilters}
          >
            <X size={16} /> {t("resetFilters")}
          </Button>
        )}
      </div>
      <div className="grid gap-2 grid-cols-5 max-lg:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 ">
        {filteredSkills.map((skill) => (
          <HoverCard key={skill.name}>
            <HoverCardTrigger asChild>
              <Card
                key={skill.name}
                className="overflow-hidden bg-transparent border-none shadow-none hover:bg-accent/30 cursor-pointer"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex flex-col items-center gap-4 justify-between">
                    <div className="flex flex-col items-center gap-2 text-md whitespace-nowrap">
                      <div className="aspect-square p-4 w-28">
                        <Image
                          src={`${bucketUrl}/icons/${skill.icon}.svg`}
                          width={64}
                          height={64}
                          alt={`${skill.name} Logo`}
                          className="w-auto"
                        />
                      </div>
                      {skill.name}
                    </div>
                  </CardTitle>
                  {/* <div className="flex items-center gap-2">
                    <Progress value={skill.proficiency} className="w-full" />
                    <span className="text-sm font-medium">{skill.proficiency}%</span>
                  </div> */}
                </CardHeader>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-3">
                <div className="aspect-square w-48">
                  <Image
                    src={`${bucketUrl}/icons/${skill.icon}.svg`}
                    width={64}
                    height={64}
                    alt={`${skill.name} Logo`}
                    className="w-auto"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{skill.name}</h4>
                  <p className="text-sm">{skill.description}</p>
                  <div className="flex gap-2 flex-wrap items-center pt-2">
                    {skill.categories.map((category) => (
                      <Badge key={category} variant="outline" className="capitalize text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
