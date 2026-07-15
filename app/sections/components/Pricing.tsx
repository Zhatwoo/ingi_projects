"use client";

import { useState } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

const deskhrxPricing = [
  { base: 1000, perEmployee: 100 },
  { base: 1000, perEmployee: 150 },
  { base: 1000, perEmployee: 200 },
];

const loopworkPricing = [{ price: 7000 }, { price: 14000 }, { price: 28000 }];

function formatPHP(amount: number) {
  return `₱${amount.toLocaleString("en-PH")}`;
}

export default function Pricing() {
  const [deskhrxIndex, setDeskhrxIndex] = useState(1);
  const [loopworkIndex, setLoopworkIndex] = useState(1);
  const { lang } = useLanguage();
  const t = translations[lang].pricing;

  const deskhrxTier = t.deskhrxTiers[deskhrxIndex];
  const loopworkTier = t.loopworkTiers[loopworkIndex];
  const deskhrxPrice = deskhrxPricing[deskhrxIndex];
  const loopworkPrice = loopworkPricing[loopworkIndex];
  const bundleTotal = Math.round(
    (deskhrxPrice.base + deskhrxPrice.perEmployee * 50 + loopworkPrice.price) * 0.7
  );

  return (
    <section
      className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop bg-primary relative overflow-hidden"
      id="pricing"
    >
      <div
        data-parallax="0.05"
        className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-[#1e3a8a]/20 rounded-full blur-[130px] pointer-events-none"
      />
      <div
        data-parallax="-0.04"
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-secondary/15 rounded-full blur-[130px] pointer-events-none"
      />
      <div className="max-w-container-max mx-auto text-white relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-6">
            {t.heading}
          </h2>
          <p className="text-lg md:text-xl font-body-md text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter items-end">
          {/* DeskHRX Standalone */}
          <div
            data-reveal
            className="bg-surface text-on-surface rounded-xl p-10 flex flex-col border-t-[10px] border-secondary"
          >
            <div className="mb-8">
              <span className="text-[11px] font-label-caps text-secondary font-bold uppercase tracking-widest">
                {t.hrPower}
              </span>
              <h3 className="text-headline-md font-headline-md mt-4 text-on-surface">
                {t.deskhrxTitle}
              </h3>
              <p className="text-sm font-medium text-on-surface-variant mt-2 opacity-80">
                {t.deskhrxTagline}
              </p>
            </div>
            <div className="flex gap-2 mb-8 bg-surface-container rounded-lg p-1">
              {t.deskhrxTiers.map((tier, i) => (
                <button
                  key={tier.label}
                  onClick={() => setDeskhrxIndex(i)}
                  className={`flex-1 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                    i === deskhrxIndex
                      ? "bg-primary text-white shadow"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
            <div className="mb-2 flex items-baseline gap-1 flex-wrap">
              <span className="text-4xl font-bold text-on-surface">
                {formatPHP(deskhrxPrice.base)}
              </span>
              <span className="text-lg opacity-60 font-medium">/mo</span>
            </div>
            <p className="text-sm text-on-surface-variant mb-2">
              + {formatPHP(deskhrxPrice.perEmployee)} {t.perEmployee}
            </p>
            <p className="text-xs text-on-surface-variant opacity-60 mb-8">
              {deskhrxTier.range}
            </p>
            <ul className="space-y-5 mb-12 flex-grow">
              {deskhrxTier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 text-on-surface-variant"
                >
                  <span className="material-symbols-outlined text-secondary font-bold">
                    check
                  </span>{" "}
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-5 border-2 border-primary text-on-surface rounded-lg font-bold hover:bg-primary hover:text-white transition-all duration-300">
              {t.getStarted}
            </button>
          </div>

          {/* Bundle: Pro Package (Featured) */}
          <div
            data-reveal
            data-reveal-delay="120"
            className="bg-primary-container text-white rounded-xl p-8 md:p-10 flex flex-col border-2 border-secondary relative md:transform md:scale-[1.03] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 md:min-h-[700px]"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
              {t.mostPopular}
            </div>
            <div className="mb-10">
              <span className="text-[11px] font-label-caps text-secondary-fixed-dim font-bold uppercase tracking-widest">
                {t.ultimateSynergy}
              </span>
              <h3 className="text-headline-md font-headline-md mt-4">
                {t.proBundleTitle}
              </h3>
              <p className="text-sm opacity-80 mt-2 font-medium">
                {deskhrxTier.label} DeskHRX + {loopworkTier.label} LoopWork,{" "}
                {t.proBundleTagline}
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-5xl font-bold">
                  {formatPHP(bundleTotal)}
                </span>
                <span className="text-xl opacity-60 font-medium">
                  {t.perMoEst}
                </span>
              </div>
              <div className="text-secondary-fixed-dim text-sm font-bold mt-4 px-3 py-1 bg-white/10 rounded-lg inline-block">
                {t.save30}
              </div>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              {t.bundleFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary font-bold">
                    stars
                  </span>{" "}
                  <span className="font-medium text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-6 bg-secondary text-white rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-xl active:scale-95">
              {t.startBundleTrial}
            </button>
          </div>

          {/* LoopWork Standalone */}
          <div
            data-reveal
            data-reveal-delay="240"
            className="bg-surface text-on-surface rounded-xl p-10 flex flex-col border-t-[10px] border-primary"
          >
            <div className="mb-8">
              <span className="text-[11px] font-label-caps text-on-surface font-bold uppercase tracking-widest opacity-70">
                {t.workflowPro}
              </span>
              <h3 className="text-headline-md font-headline-md mt-4 text-on-surface">
                {t.loopworkTitle}
              </h3>
              <p className="text-sm font-medium text-on-surface-variant mt-2 opacity-80">
                {t.loopworkTagline}
              </p>
            </div>
            <div className="flex gap-2 mb-8 bg-surface-container rounded-lg p-1">
              {t.loopworkTiers.map((tier, i) => (
                <button
                  key={tier.label}
                  onClick={() => setLoopworkIndex(i)}
                  className={`flex-1 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                    i === loopworkIndex
                      ? "bg-primary text-white shadow"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
            <div className="mb-2 flex items-baseline gap-1 flex-wrap">
              <span className="text-4xl font-bold text-on-surface">
                {formatPHP(loopworkPrice.price)}
              </span>
              <span className="text-lg opacity-60 font-medium">/mo</span>
            </div>
            <p className="text-xs text-on-surface-variant opacity-60 mb-8">
              {loopworkTier.accounts}
            </p>
            <ul className="space-y-5 mb-12 flex-grow">
              {loopworkTier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 text-on-surface-variant"
                >
                  <span className="material-symbols-outlined text-secondary font-bold">
                    check
                  </span>{" "}
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-5 border-2 border-primary text-on-surface rounded-lg font-bold hover:bg-primary hover:text-white transition-all duration-300">
              {t.getStarted}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
