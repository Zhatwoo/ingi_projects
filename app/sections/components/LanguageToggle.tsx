"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const isJa = lang === "ja";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={isJa ? "Switch to English" : "日本語に切り替え"}
      className="relative w-[72px] h-9 rounded-full bg-surface-container border border-outline-variant/50 p-1"
    >
      <span
        className={`absolute inset-y-1 left-1 w-8 rounded-full bg-secondary shadow-sm transition-transform duration-300 ease-out ${
          isJa ? "translate-x-8" : "translate-x-0"
        }`}
      />
      <span className="relative z-10 grid grid-cols-2 h-full">
        <span
          className={`flex items-center justify-center text-[10px] font-label-caps font-bold uppercase tracking-wider transition-colors ${
            isJa ? "text-on-surface-variant" : "text-white"
          }`}
        >
          EN
        </span>
        <span
          className={`flex items-center justify-center text-[10px] font-label-caps font-bold uppercase tracking-wider transition-colors ${
            isJa ? "text-white" : "text-on-surface-variant"
          }`}
        >
          JA
        </span>
      </span>
    </button>
  );
}
