"use client";
import { FranceIcon } from "./icons/FranceIcon";
import { UnitedKingdomIcon } from "./icons/UnitedKingdomIcon";
import { ItalyIcon } from "./icons/ItalyIcon";
import { KoreaIcon } from "./icons/KoreaIcon";
import { JapanIcon } from "./icons/JapanIcon";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";

type Language = "en" | "fr" | "it" | "kr" | "jp";

interface LanguageInfo {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const languages: Record<Language, LanguageInfo> = {
  en: { name: "English", Icon: UnitedKingdomIcon },
  fr: { name: "Français", Icon: FranceIcon },
  it: { name: "Italiano", Icon: ItalyIcon },
  kr: { name: "한국어", Icon: KoreaIcon },
  jp: { name: "日本語", Icon: JapanIcon },
};

const LangSwitcher: React.FC = () => {
  const locale = useLocale() as Language;
  const router = useRouter();
  const activatedLanguages: string[] = ["en", "fr"];

  const handleLocaleChange = (newLocale: Language) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    router.refresh();
  };

  return (
    <Select value={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-9 h-9 p-0 border-none hover:bg-accent/50 focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-none">
        <SelectValue>
          <CurrentLanguage language={locale} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages)
          .filter(([code]) => activatedLanguages.includes(code))
          .map(([code, { name, Icon }]) => (
            <SelectItem key={code} value={code as Language}>
              <Link href="/" locale={code as Language} className="flex items-center">
                <Icon className="mr-2 h-5 w-5 rounded-full" />
                <span>{name}</span>
              </Link>
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

const CurrentLanguage: React.FC<{ language: Language }> = ({ language }) => {
  const { name, Icon } = languages[language];
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Icon className="w-5 h-5 rounded-full" />
      <span className="sr-only">{name}</span>
    </div>
  );
};

export default LangSwitcher;
