"use client";

import Image from "next/image";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

const statIcons = [
  {
    icon: "badge",
    iconBg: "bg-[#2563eb]/10",
    iconColor: "text-[#2563eb]",
    stat: "10K+",
  },
  {
    icon: "insights",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    stat: "99.9%",
  },
  {
    icon: "verified_user",
    iconBg: "bg-[#16a34a]/10",
    iconColor: "text-[#16a34a]",
    stat: "256-bit",
  },
];

export default function Features() {
  const { lang } = useLanguage();
  const t = translations[lang].features;

  return (
    <section
      className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low relative overflow-hidden"
      id="features"
    >
      <div
        data-parallax="0.05"
        className="absolute -top-32 right-0 w-[420px] h-[420px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        data-parallax="-0.04"
        className="absolute bottom-0 -left-24 w-[360px] h-[360px] bg-[#1e3a8a]/10 rounded-full blur-[110px] pointer-events-none"
      />
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-6 text-on-surface">
            {t.heading}
          </h2>
          <p className="text-lg md:text-xl font-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-gutter">
          {/* Bento Item 1: Onboarding to task assignment */}
          <div
            data-reveal
            className="md:col-span-8 glass-card rounded-xl p-6 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group border-t-4 border-t-secondary/20"
          >
            <div className="z-10">
              <span className="text-secondary font-label-caps text-[11px] font-bold uppercase tracking-widest mb-6 block">
                {t.item1Tag}
              </span>
              <h3 className="text-headline-md font-headline-md mb-6 text-on-surface">
                {t.item1Title}
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-md leading-relaxed">
                {t.item1Body}
              </p>
            </div>
            <div className="mt-16 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
              <Image
                className="rounded-lg shadow-2xl w-full h-auto border border-outline-variant/40"
                alt="Employee Profile UI"
                width={800}
                height={500}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDit3Q1keZ8W0AWqgI0sIu0asmSEkB-ylSJJ3l4iXqKvwOoeP2VYjXdifLWTxemt1p4HQmeSzqLXkV7hdb1o28xDEMlMEUbEDfCP1SrlIma7VU4WyhkbYd9pYFnyTuJ8JJBNYqltcWRXbCpocrUeyvc2dxW32dEOmuedLyoROnMfXCfWOAPRoIBWfB1JEOZ1KxRQCIZIeuN6oct1bnQlhW6r8dXMIMMNAE4oiipIQGQauvG7m9nHR9TD7hYqrjhr_mZ8hTLVCGxxA"
              />
            </div>
            <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
              <span className="material-symbols-outlined text-[160px] text-on-surface">
                badge
              </span>
            </div>
          </div>
          {/* Bento Item 2: Automation across both */}
          <div
            data-reveal
            data-reveal-delay="120"
            className="md:col-span-4 bg-primary rounded-xl p-6 sm:p-8 md:p-12 text-on-primary flex flex-col md:justify-between relative overflow-hidden shadow-xl"
          >
            <div>
              <h3 className="text-headline-md font-headline-md mb-6">
                {t.item2Title}
              </h3>
              <p className="opacity-80 text-body-md leading-relaxed">
                {t.item2Body}
              </p>
            </div>
            <ul className="space-y-6 mt-8 md:mt-12">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim">
                  check_circle
                </span>
                <span className="font-medium">{t.item2Bullet1}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim">
                  check_circle
                </span>
                <span className="font-medium">{t.item2Bullet2}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim">
                  check_circle
                </span>
                <span className="font-medium">{t.item2Bullet3}</span>
              </li>
            </ul>
          </div>

          {/* Bento Item 3: Numbered process list (LoopWork-style) */}
          <div
            data-reveal
            className="md:col-span-5 glass-card rounded-xl p-6 sm:p-8 md:p-12 flex flex-col border border-outline-variant/50"
          >
            <span className="text-tertiary font-label-caps text-[11px] font-bold uppercase tracking-widest mb-6 block">
              {t.item3Tag}
            </span>
            <h3 className="text-headline-md font-headline-md mb-8 text-on-surface">
              {t.item3Title}
            </h3>
            <ol className="space-y-1">
              {t.processSteps.map((step, i) => (
                <li
                  key={step.label}
                  className="flex items-center gap-5 py-3 border-b border-outline-variant/30 last:border-b-0"
                >
                  <span className="font-label-caps text-xs text-outline w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-on-surface flex-grow">
                    {step.label}
                  </span>
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">
                    {step.app}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Bento Item 4: Workload + capacity, both products */}
          <div
            data-reveal
            data-reveal-delay="120"
            className="md:col-span-7 bg-surface-container-highest rounded-xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10 border border-outline-variant/50 text-center md:text-left"
          >
            <div className="w-24 h-24 flex-shrink-0 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span
                className="material-symbols-outlined text-5xl text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                dashboard_customize
              </span>
            </div>
            <div>
              <h3 className="text-headline-md font-headline-md mb-4 text-on-surface">
                {t.item4Title}
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                {t.item4Body}
              </p>
            </div>
          </div>

          {/* Bento Items 5-7: DeskHRX-style stat cards */}
          {t.statCards.map((card, i) => (
            <div
              key={card.title}
              data-reveal
              data-reveal-delay={i * 120}
              className="md:col-span-4 glass-card rounded-xl p-6 sm:p-8 md:p-10 flex flex-col border border-outline-variant/50"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${statIcons[i].iconBg}`}
              >
                <span
                  className={`material-symbols-outlined text-2xl ${statIcons[i].iconColor}`}
                >
                  {statIcons[i].icon}
                </span>
              </div>
              <h3 className="text-lg font-headline-md font-bold mb-4 text-on-surface">
                {card.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-10 flex-grow">
                {card.description}
              </p>
              <div>
                <div className="text-3xl font-headline-xl font-extrabold text-on-surface tabular-nums">
                  {statIcons[i].stat}
                </div>
                <div className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant opacity-70">
                  {card.statLabel}
                </div>
              </div>
            </div>
          ))}

          {/* Bento Item 8: Security across both */}
          <div
            data-reveal
            className="md:col-span-12 glass-card rounded-xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center border-b-4 border-b-primary/10"
          >
            <div className="flex-1">
              <h3 className="text-headline-md font-headline-md mb-6 text-on-surface">
                {t.item8Title}
              </h3>
              <p className="text-body-md text-on-surface-variant mb-10 leading-relaxed">
                {t.item8Body}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-2.5 bg-primary/5 rounded-lg font-label-caps text-[10px] font-bold text-on-surface flex items-center gap-3 border border-primary/10">
                  <span className="material-symbols-outlined text-on-surface text-lg">
                    security
                  </span>{" "}
                  {t.badge256}
                </div>
                <div className="px-5 py-2.5 bg-primary/5 rounded-lg font-label-caps text-[10px] font-bold text-on-surface flex items-center gap-3 border border-primary/10">
                  <span className="material-symbols-outlined text-on-surface text-lg">
                    verified_user
                  </span>{" "}
                  {t.badgeSoc2}
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                className="w-full h-auto rounded-lg shadow-xl"
                alt="Security Illustration"
                width={600}
                height={400}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqFZL7IBPIGd-kp5dusd--Wt0lmfnn99ukUgqjgVSNDM8jT6CR-qL-b7EIDKMiblLtWXIP6jrywtdFY8GAVQxpzjntSHDOYBiLXkG7F99jHSIAW3TrjuFmVOO7xPRE52UpygrEKAxkSjGHbiUWuKeT03044QPc6KV8DineGBKBakJmUF9-WFKMIrcku7m7PtgPbLqwYbEibrAAornC_THEgV3O50L80NhY-ozoDTTQ8o6HNaQkjzOZapox_8Z4b1rCN_ME-hA_xA"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
