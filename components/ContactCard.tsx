"use client";
import { Card } from "./ui/card";
import { GithubUserResponse } from "@/types/user.types";
import { fetchGithubUserData } from "@/utils/getData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ContactProps = {
  image: string | undefined;
  mediumImage: string;
  name: string;
  description: number | undefined;
  url: string;
};

export const CONTACT: ContactProps[] = [
  {
    image: "/github.jpg",
    mediumImage: "/github.jpg",
    name: "GitHub",
    description: undefined,
    url: "",
  },
  {
    image: "/linkedin-profile.jpg",
    mediumImage: "/linkedin.jpg",
    name: "Linkedin",
    description: 139,
    url: "https://www.linkedin.com/in/joseph-girardi/",
  },
];

export const ContactCard = (props: ContactProps) => {
  const [githubUserData, setGithubUserData] = useState<GithubUserResponse | null>(null);
  const t = useTranslations();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchGithubUserData();
        setGithubUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  const linkUrl = props.name === "GitHub" ? githubUserData?.html_url || "#" : props.url;

  return (
    <Link href={linkUrl} target="_blank" className="w-full hover:bg-accent/20 rounded-xl">
      <Card className="p-2 bg-accent/10 flex items-center gap-3 flex-grow group">
        <div className="relative group">
          <Image
            src={
              props.name === "GitHub"
                ? githubUserData?.avatar_url || "/default-avatar.jpg"
                : props.image || "/default-image.jpg"
            }
            alt={props.name}
            width={40}
            height={40}
            priority
            className="rounded-full"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4">
            {" "}
            <Image
              src={props.mediumImage}
              alt={props.name}
              fill
              sizes="16"
              priority
              className="rounded-full object-contain"
            />
          </div>
        </div>

        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">
            {props.name === "GitHub"
              ? `${githubUserData?.followers} ${t("statusCard.followers")}`
              : `${props.description} ${t("statusCard.connections")}`}{" "}
          </p>
        </div>
        <ArrowUpRight
          size={16}
          className="mr-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        />
      </Card>
    </Link>
  );
};
