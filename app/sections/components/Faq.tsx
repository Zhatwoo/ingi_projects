"use client";

import { useState } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang].faq;
  const active = activeIndex !== null ? t.items[activeIndex] : null;

  return (
    <section className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low relative overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-secondary font-label-caps text-[11px] font-bold uppercase tracking-widest mb-6 block">
            {t.tag}
          </span>
          <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-6 text-on-surface">
            {t.heading}
          </h2>
          <p className="text-lg md:text-xl font-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {t.items.map((faq, i) => (
            <button
              key={faq.question}
              type="button"
              data-reveal
              data-reveal-delay={(i % 2) * 120}
              onClick={() => setActiveIndex(i)}
              className="glass-card rounded-xl p-6 text-left flex items-center justify-between gap-4 border border-outline-variant/50 hover:border-secondary/50 transition-colors group"
            >
              <span className="font-medium text-on-surface">{faq.question}</span>
              <span className="material-symbols-outlined text-secondary flex-shrink-0 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-margin-mobile"
          role="dialog"
          aria-modal="true"
          aria-labelledby="faq-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          />
          <div className="relative bg-surface text-on-surface rounded-xl shadow-2xl max-w-md w-full p-7 sm:p-10">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-on-surface/5 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <h3 id="faq-modal-title" className="text-xl font-bold mb-4 pr-8">
              {active.question}
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {active.answer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
