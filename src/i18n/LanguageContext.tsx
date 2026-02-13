"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./en";
import bs from "./bs";

type Lang = "en" | "bs";

const translations: Record<Lang, typeof en> = { en, bs };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("mp-lang") as Lang | null;
    if (stored && translations[stored]) {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("mp-lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[lang];
    for (const k of keys) {
      result = result?.[k];
    }
    return typeof result === "string" ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export type { Lang };
