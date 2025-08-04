"use client";

import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({
  className = ""
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { changeLanguage, currentLanguage } = useTranslation();

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageSelect = (language: Language) => {
    setIsOpen(false);
    changeLanguage(language.code);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 py-2 px-3 sm:px-4 text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
        <span className="hidden md:inline">{currentLang.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close dropdown when clicking outside */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[160px]">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                    language.code === currentLanguage
                      ? 'bg-gray-50 text-gray-900'
                      : 'text-gray-700'
                  }`}
                >
                  <span className="text-base">{language.flag}</span>
                  <span>{language.name}</span>
                  {language.code === currentLanguage && (
                    <div className="ml-auto w-2 h-2 bg-gray-900 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
