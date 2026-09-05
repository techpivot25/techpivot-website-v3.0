import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Globe, Check } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

export const LanguageThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[88px] h-9" />;

  const isDark = theme === "dark";
  const current = i18n.resolvedLanguage || i18n.language || "en";

  return (
    <div className="flex items-center gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            aria-label={t("header.language")}
            className="inline-flex items-center gap-1 h-9 px-2.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{current}</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[140px]">
          {languages.map((l) => (
            <DropdownMenuItem
              key={l.code}
              onClick={() => i18n.changeLanguage(l.code)}
              className="cursor-pointer"
            >
              <span className="flex-1">{l.label}</span>
              {current === l.code && <Check className="w-3.5 h-3.5 text-primary" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? t("header.theme.light") : t("header.theme.dark")}
        className="inline-flex items-center justify-center h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default LanguageThemeToggle;
