
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Globe icon removed as per requirements
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // This effect is to ensure hydration doesn't cause issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (value: string) => {
    // Only proceed if the language is actually changing
    if (value !== language) {
      setLanguage(value);

      // Update the URL to reflect the language change
      const currentPath = location.pathname;

      // If we're already on a language-specific route, replace the language part
      if (currentPath.match(/^\/(en|zh)\//)) {
        const newPath = currentPath.replace(/^\/(en|zh)/, `/${value}`);
        navigate(newPath);
      }
      // If we're on a default route, add the language prefix
      else if (currentPath === '/') {
        navigate(`/${value}`);
      }
      // For other routes, add the language prefix
      else {
        navigate(`/${value}${currentPath}`);
      }
    }
  };

  if (!mounted) {
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
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <span className="text-base">{language.flag}</span>
                <span>{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
