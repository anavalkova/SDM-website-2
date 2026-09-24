import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type Lang = "bg" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const STORAGE_KEY = "sdm-lang";

const LanguageContext = createContext<LanguageContextValue>({
  lang: "bg",
  setLang: () => undefined,
});

const readInitialLang = (): Lang => {
  if (typeof window === "undefined") return "bg";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "bg" || stored === "en") return stored;
  return window.navigator.language?.toLowerCase().startsWith("bg") ? "bg" : "bg";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang: (next: Lang) => setLangState(next) }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);

/** Pick the current language variant of a copy object. */
export function useT<T>(copy: Record<Lang, T>): T {
  const { lang } = useLang();
  return copy[lang];
}
