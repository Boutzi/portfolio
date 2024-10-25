"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import { PythonIcon } from "./icons/PythonIcon";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { CSharpIcon } from "./icons/CSharpIcon";
import { JavaIcon } from "./icons/JavaIcon";
import { Code } from "lucide-react";
import { useTranslations } from "next-intl";

export interface CarouselItem {
  id: number;
  title: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  descriptionThree?: string;
  image: string;
  origin: string;
  language?: string;
  clicked: () => void;
}

export const WorkCarouselItem = (props: CarouselItem) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const t = useTranslations();

  const handleMouseEnter = (id: number) => {
    if (expandedItem === null) {
      setExpandedItem(id);
    }
  };

  const handleMouseLeave = () => {
    setExpandedItem(null);
  };

  return (
    <CarouselItem
      className="pl-2 md:pl-4 max-md:basis-2/5 md:basis-[22.5%] lg:basis-[22.5%] overflow-visible relative group select-none"
      onMouseEnter={() => handleMouseEnter(props.id)}
      onMouseLeave={handleMouseLeave}
      onClick={props.clicked}
    >
      <Card
        className={`cursor-pointer rounded overflow-hidden border-accent-foreground/40 ${
          props.id ? "border-2" : ""
        }`}
      >
        <CardContent className="p-0 relative group">
          <div className="aspect-w-16 aspect-h-10 overflow-hidden shadow-md">
            <Image
              src={props.image}
              alt={`${props.title} ${t("work.itemAlt")}`}
              fill
              priority
              sizes="(max-width: 500px) 100vw, (max-width: 860px) 50vw, 33vw"
              className="w-full h-auto object-cover"
            />
            <div
              className={`absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-foreground/80 max-md:group-hover:bg-none ${
                props.language === "sm" ? "hidden" : ""
              }`}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full text-foreground/60 hover:bg-none hover:text-foreground max-md:hidden">
                {props.language === "Python" ? (
                  <PythonIcon className="h-16 w-16" />
                ) : props.language === "JavaScript" ? (
                  <JavaScriptIcon className="h-16 w-16" />
                ) : props.language === "TypeScript" ? (
                  <TypeScriptIcon className="h-16 w-16" />
                ) : props.language === "CSharp" ? (
                  <CSharpIcon className="h-16 w-16" />
                ) : props.language === "Java" ? (
                  <JavaIcon className="h-16 w-16" />
                ) : (
                  <Code size={32} className="text-background" />
                )}
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};
