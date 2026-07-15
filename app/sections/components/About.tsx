"use client";

import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section
      id="about"
      className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden"
    >
      <div
        data-parallax="0.05"
        className="absolute -top-24 right-0 w-[380px] h-[380px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-reveal>
            <span className="text-secondary font-label-caps text-[11px] font-bold uppercase tracking-widest mb-6 block">
              {t.tag}
            </span>
            <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-6 text-on-surface leading-tight">
              {t.heading}
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              {t.body1}
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {t.body2}
            </p>
          </div>
          <div
            data-reveal
            data-reveal-delay="120"
            className="grid grid-cols-2 gap-6"
          >
            {t.highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-8 border border-outline-variant/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-headline-xl font-extrabold text-on-surface mb-2 tabular-nums">
                  {item.value}
                </div>
                <div className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant opacity-70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
