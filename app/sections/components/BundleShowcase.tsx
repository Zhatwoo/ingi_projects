"use client";

import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

export default function BundleShowcase() {
  const { lang } = useLanguage();
  const t = translations[lang].bundleShowcase;

  return (
    <section
      className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden"
      id="bundle"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-secondary-fixed-dim font-label-caps text-[11px] font-bold uppercase tracking-widest mb-6 block">
            {t.tag}
          </span>
          <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-6">
            {t.headingLine1} <br className="hidden md:block" />
            <span className="text-secondary-fixed-dim">{t.headingEmphasis}</span>
          </h2>
          <p className="text-lg md:text-xl font-body-md opacity-70 max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-gutter items-stretch">
          <div
            data-reveal
            className="glass-card !bg-white/5 !border-white/10 rounded-xl p-10 flex flex-col"
          >
            <span className="material-symbols-outlined text-4xl text-secondary-fixed-dim mb-6">
              badge
            </span>
            <h3 className="text-headline-md font-headline-md mb-4">{t.deskhrxTitle}</h3>
            <p className="opacity-70 leading-relaxed mb-8 flex-grow">
              {t.deskhrxBody}
            </p>
            <a
              href="#pricing"
              className="font-bold text-secondary-fixed-dim hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              {t.getDeskhrxSolo}
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="120"
            className="rounded-xl p-10 flex flex-col items-center justify-center text-center bg-secondary/10 border-2 border-secondary/40 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
              {t.bestValue}
            </div>
            <span
              className="material-symbols-outlined text-5xl text-secondary-fixed-dim mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              join_inner
            </span>
            <h3 className="text-headline-md font-headline-md mb-4">
              {t.bundleTitle}
            </h3>
            <p className="opacity-70 leading-relaxed mb-8">
              {t.bundleBody}
            </p>
            <a
              href="#pricing"
              className="bg-secondary text-white px-8 py-3.5 rounded-lg font-bold hover:brightness-110 transition-all shadow-lg"
            >
              {t.exploreBundle}
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="240"
            className="glass-card !bg-white/5 !border-white/10 rounded-xl p-10 flex flex-col"
          >
            <span className="material-symbols-outlined text-4xl text-[#60a5fa] mb-6">
              sync_alt
            </span>
            <h3 className="text-headline-md font-headline-md mb-4">{t.loopworkTitle}</h3>
            <p className="opacity-70 leading-relaxed mb-8 flex-grow">
              {t.loopworkBody}
            </p>
            <a
              href="#pricing"
              className="font-bold text-[#60a5fa] hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              {t.getLoopworkSolo}
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
