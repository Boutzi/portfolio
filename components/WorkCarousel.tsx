"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WorkCarouselItem } from "./WorkCarouselItem";
import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { ViewerProps } from "./WorkViewer";

export interface CarouselCategory {
  data: ViewerProps[];
  setSelectedItem: (id: number) => void;
}

export const WorkCarousel = (props: CarouselCategory) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dataLength = props.data.length;
  const t = useTranslations();

  const handleNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    },
    [dataLength]
  );

  const handlePrev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setCurrentIndex((prevIndex) => (prevIndex - 1 + dataLength) % dataLength);
    },
    [dataLength]
  );

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-bold text-primary mb-2">
        {t("work.title")}
      </h1>
      <div className="overflow-visible">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            skipSnaps: true,
          }}
          className="w-full overflow-visible"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {props.data.map((item, index) => (
              <WorkCarouselItem
                key={item.id}
                id={index + 1}
                title={item.title}
                language={item.language}
                image={item.image ? item.image : "/empty.webp"}
                origin={
                  index === currentIndex
                    ? "origin-left"
                    : index === (currentIndex + 4) % props.data.length
                    ? "origin-right"
                    : "origin-center"
                }
                clicked={() => props.setSelectedItem(index + 1)}
              />
            ))}
          </CarouselContent>
          <a onClick={handlePrev}>
            <CarouselPrevious className="hidden md:flex -left-12 bg-none hover:border-foreground hover:bg-card border-2">
              <ChevronLeft className="h-8 w-8" />
            </CarouselPrevious>
          </a>
          <a onClick={handleNext}>
            <CarouselNext className="hidden md:flex -right-12 bg-none hover:border-foreground hover:bg-card border-2">
              <ChevronRight className="h-8 w-8" />
            </CarouselNext>
          </a>
        </Carousel>
      </div>
    </div>
  );
};
