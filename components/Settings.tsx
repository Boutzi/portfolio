"use client";
import * as React from "react";
import { Check, LucideSettings } from "lucide-react";

import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { useTheme } from "@teispace/next-themes";
import { useColor } from "@/context/ColorContext";

export function Settings() {
  const t = useTranslations();
  const { theme } = useTheme();
  const { color, setColor } = useColor();

  const handleChange = (newColor: string) => {
    setColor(newColor);
  };

  React.useEffect(() => {
    document.documentElement.classList.remove(
      "gray",
      "violet",
      "blue",
      "green",
      "orange",
      "pink",
      "gray-dark",
      "violet-dark",
      "blue-dark",
      "green-dark",
      "orange-dark",
      "pink-dark",
    );
    document.documentElement.classList.add(color);
  }, [color, theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="bg-transparent border-none hover:bg-accent/30 shadow-none">
          <LucideSettings className="h-[1.2rem] w-[1.2rem] text-foreground" />
          <span className="sr-only">{t("toggleTheme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="grid grid-cols-3 gap-2 p-2 text-black">
        <DropdownMenuItem
          onClick={() => {
            if (theme === "dark") {
              handleChange("gray-dark");
            } else {
              handleChange("gray");
            }
          }}
          className="size-8 cursor-pointer aspect-square bg-gray-100 hover:outline-foreground outline-2"
        >
          {(color === "gray" && <Check />) || (color === "gray-dark" && <Check />)}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            if (theme === "dark") {
              handleChange("violet-dark");
            } else {
              handleChange("violet");
            }
          }}
          className="size-8 cursor-pointer aspect-square bg-violet-700 hover:outline-foreground outline-2"
        >
          {(color === "violet" && <Check />) || (color === "violet-dark" && <Check />)}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            if (theme === "dark") {
              handleChange("blue-dark");
            } else {
              handleChange("blue");
            }
          }}
          className="size-8 cursor-pointer aspect-square bg-blue-600 hover:outline-foreground outline-2"
        >
          {(color === "blue" && <Check />) || (color === "blue-dark" && <Check />)}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            if (theme === "dark") {
              handleChange("green-dark");
            } else {
              handleChange("green");
            }
          }}
          className="size-8 cursor-pointer aspect-square bg-green-600 hover:outline-foreground outline-2"
        >
          {(color === "green" && <Check />) || (color === "green-dark" && <Check />)}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            if (theme === "dark") {
              handleChange("orange-dark");
            } else {
              handleChange("orange");
            }
          }}
          className="size-8 cursor-pointer aspect-square bg-orange-700 hover:outline-foreground outline-2"
        >
          {(color === "orange" && <Check />) || (color === "orange-dark" && <Check />)}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            if (theme === "dark") {
              handleChange("pink-dark");
            } else {
              handleChange("pink");
            }
          }}
          className="size-8 cursor-pointer aspect-square bg-pink-700 hover:outline-foreground outline-2"
        >
          {(color === "pink" && <Check />) || (color === "pink-dark" && <Check />)}
        </DropdownMenuItem>

        {/* <div className="col-span-3 text-white bg-primary px-2 rounded">
          Coming soon
        </div> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
