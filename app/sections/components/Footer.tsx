"use client";

import Image from "next/image";
import { useState } from "react";

const modalContent: Record<string, { title: string; body: string }> = {
  about: {
    title: "About Us",
    body: "LoopWork + DeskHRX is built for modern enterprises that need workforce management and payroll under one roof. Run either platform on its own, or bundle both for a fully connected HR and project management experience.",
  },
  careers: {
    title: "Careers",
    body: "We're not hiring publicly right now. Check back soon or reach out via Contact Us if you'd like to get in touch about future opportunities.",
  },
  blog: {
    title: "Blog",
    body: "Our blog is coming soon. We'll be sharing product updates, HR best practices, and workforce management tips here.",
  },
  contact: {
    title: "Contact Us",
    body: "Have a question? Reach us anytime and our team will get back to you as soon as possible.",
  },
  privacy: {
    title: "Privacy Policy",
    body: "We take your data seriously. LoopWork + DeskHRX collects only the information necessary to run our services and never sells your data to third parties.",
  },
  terms: {
    title: "Terms of Service",
    body: "By using LoopWork + DeskHRX, you agree to use the platform responsibly and in accordance with applicable laws. Full terms will be published here soon.",
  },
  cookies: {
    title: "Cookie Policy",
    body: "We use cookies to keep you signed in and to understand how our site is used, so we can keep improving it for you.",
  },
  support: {
    title: "Support",
    body: "Need help? Our support team is available to assist with anything related to LoopWork or DeskHRX.",
  },
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const active = activeModal ? modalContent[activeModal] : null;

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
            Enterprise-grade HR, payroll, and project management software
            designed for modern businesses. Run LoopWork and DeskHRX
            separately, or bundle both to transform your entire workforce.
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
            Product
          </h4>
          <ul className="space-y-4 opacity-70">
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#features"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#pricing"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#bundle"
              >
                The Synergy
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary transition-colors font-medium"
                href="#about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary text-sm">
            Company
          </h4>
          <ul className="space-y-4 opacity-70">
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("about")}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("careers")}
              >
                Careers
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("blog")}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("contact")}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-secondary text-sm">
            Legal
          </h4>
          <ul className="space-y-4 opacity-70">
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("privacy")}
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("terms")}
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("cookies")}
              >
                Cookie Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                className="hover:text-secondary transition-colors font-medium"
                onClick={() => setActiveModal("support")}
              >
                Support
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-label-caps tracking-widest opacity-40 uppercase font-bold">
        <p>© {new Date().getFullYear()} LoopWork + DeskHRX. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <span>English (US)</span>
          <span>System Status: Optimal</span>
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
          <div className="relative bg-white text-primary rounded-xl shadow-2xl max-w-md w-full p-7 sm:p-10">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
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
