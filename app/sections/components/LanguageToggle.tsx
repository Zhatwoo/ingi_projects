"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "日本語に切り替え" : "Switch to English"}
      className="h-10 px-3 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-on-surface/5 hover:text-on-surface transition-colors font-label-caps text-xs font-bold uppercase tracking-wider"
    >
      {lang === "en" ? "JA" : "EN"}
    </button>
  );
}
