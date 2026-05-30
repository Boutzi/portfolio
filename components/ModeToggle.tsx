"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@teispace/next-themes";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useColor } from "@/context/ColorContext";

export function ModeToggle() {
  const t = useTranslations();
  const { color, setColor } = useColor();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    const prevColor = color.includes("-dark");
    const newColor = prevColor ? color.replace("-dark", "") : `${color}-dark`;
    setColor(newColor);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="border-none hover:bg-accent/30 shadow-none">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{t("toggleTheme")}</span>
    </Button>
  );
}
