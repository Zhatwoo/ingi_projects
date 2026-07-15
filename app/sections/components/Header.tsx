"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#bundle", label: "The Synergy" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface/80 backdrop-blur-lg border-b border-outline-variant/30 sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 md:py-5 max-w-container-max mx-auto">
        <div className="text-base sm:text-xl font-headline-xl font-extrabold text-primary flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <Image
            src="/loopwork-logo.png"
            alt="LoopWork"
            width={32}
            height={32}
            className="h-6 w-auto sm:h-8"
          />
          <span className="text-[#3b82f6]">LoopWork</span>
          <span className="text-secondary text-base sm:text-lg">+</span>
          <Image
            src="/deskhrx-logo.png"
            alt="DeskHRX"
            width={32}
            height={32}
            className="h-6 w-auto sm:h-8"
          />
          <span className="text-secondary">DeskHRX</span>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant font-body-md font-medium hover:text-secondary transition-colors duration-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-6">
          <button className="hidden sm:inline-flex bg-secondary text-white px-5 md:px-7 py-2 md:py-2.5 rounded-lg font-bold hover:brightness-110 transition-all shadow-sm text-sm md:text-base">
            Start Free Trial
          </button>
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-primary hover:bg-primary/5 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface px-margin-mobile py-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-on-surface-variant font-body-md font-medium hover:text-secondary transition-colors duration-200"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="w-full bg-secondary text-white px-7 py-3 rounded-lg font-bold hover:brightness-110 transition-all shadow-sm">
            Start Free Trial
          </button>
        </div>
      )}
    </header>
  );
}
