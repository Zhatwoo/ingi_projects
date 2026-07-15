"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealEls = document.querySelectorAll<HTMLElement>(
      "[data-reveal], .glass-card"
    );

    if (reduceMotion) {
      revealEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay || "0";
            el.style.transitionDelay = `${delay}ms`;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition =
        "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
      observer.observe(el);
    });

    const parallaxEls = document.querySelectorAll<HTMLElement>(
      "[data-parallax]"
    );

    let ticking = false;
    const applyParallax = () => {
      const viewportH = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const rect = el.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
        el.style.transform = `translate3d(0, ${(-centerOffset * speed).toFixed(1)}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(applyParallax);
        ticking = true;
      }
    };

    if (parallaxEls.length) {
      applyParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", applyParallax);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", applyParallax);
    };
  }, []);

  return null;
}
