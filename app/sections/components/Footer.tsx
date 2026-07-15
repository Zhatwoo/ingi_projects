"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  const active = activeModal
    ? t.modalContent[activeModal as keyof typeof t.modalContent]
    : null;

  return (
    <footer className="bg-primary text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-gutter gap-y-12 px-margin-mobile md:px-margin-desktop py-14 md:py-24 max-w-container-max mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="text-2xl font-headline-xl font-bold mb-8 flex items-center gap-2 flex-wrap">
            <Image
              src="/loopwork-logo.png"
              alt="LoopWork"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="text-[#3b82f6]">LoopWork</span>
            <span className="text-secondary text-lg">+</span>
            <Image
              src="/deskhrx-logo.png"
              alt="DeskHRX"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="text-secondary">DeskHRX</span>
          </div>
          <p className="text-body-md opacity-60 mb-10 max-w-xs leading-relaxed">
            {t.description}
          </p>
          <div className="flex gap-5">
            <a
              className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="https://inspirenextglobal.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="InspireNext Global website"
            >
              <span className="material-symbols-outlined text-lg">
                public
              </span>
            </a>
            <a
              className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">
                alternate_email
              </span>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary text-sm">
            {t.product}
          </h4>
          <ul className="space-y-4 opacity-70">
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#features"
              >
                {t.features}
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#pricing"
              >
                {t.pricing}
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#bundle"
              >
                {t.synergy}
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#about"
              >
                {t.about}
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary text-sm">
            {t.company}
          </h4>
          <ul className="space-y-4 opacity-70">
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#about"
              >
                {t.aboutUs}
              </a>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("careers")}
              >
                {t.careers}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("blog")}
              >
                {t.blog}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("contact")}
              >
                {t.contactUs}
              </button>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary text-sm">
            {t.legal}
          </h4>
          <ul className="space-y-4 opacity-70">
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("privacy")}
              >
                {t.privacyPolicy}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("terms")}
              >
                {t.termsOfService}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("cookies")}
              >
                {t.cookiePolicy}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("support")}
              >
                {t.support}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-label-caps tracking-widest opacity-40 uppercase font-bold">
        <p>© {new Date().getFullYear()} {t.copyright}</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <span>{t.language}</span>
          <span>{t.systemStatus}</span>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-margin-mobile"
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          />
          <div className="relative bg-surface text-on-surface rounded-xl shadow-2xl max-w-md w-full p-7 sm:p-10">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-on-surface/5 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <h3 id="footer-modal-title" className="text-xl font-bold mb-4">
              {active.title}
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {active.body}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
