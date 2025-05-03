
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage, SupportedLanguage } from "@/contexts/LanguageContext";

type Language = {
  code: SupportedLanguage;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSelector() {
  const { language, setLanguage, isLanguageLoaded } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // This effect is to ensure hydration doesn't cause issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (value: string) => {
    // Only proceed if the language is actually changing and is a supported language
    if (value !== language && (value === "en" || value === "zh")) {
      setLanguage(value as SupportedLanguage);
    }
  };

  // Don't render until client-side hydration is complete and language is loaded
  if (!mounted || !isLanguageLoaded) {
    return null;
  }

  return (
    <div className="flex items-center">
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger
          className="w-[120px] h-10 rounded-md border-none bg-transparent hover:bg-transparent focus:ring-0 focus:bg-transparent"
          aria-label="Select Language"
        >
          <div className="flex items-center">
            <SelectValue placeholder="Select language" />
          </div>
        </SelectTrigger>
        <SelectContent align="start" className="w-[120px]">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
