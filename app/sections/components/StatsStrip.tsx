"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Employees Managed" },
  { value: 99.9, suffix: "%", label: "Platform Uptime" },
  { value: 3, suffix: " hrs", label: "Saved Per Manager, Weekly" },
  { value: 500, suffix: "+", label: "Companies Onboarded" },
];

function formatValue(value: number) {
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  if (value % 1 !== 0) return value.toFixed(1);
  return Math.round(value).toString();
}

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1400;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(value * eased);
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-headline-xl font-extrabold text-primary mb-2 tabular-nums"
    >
      {formatValue(display)}
      {suffix}
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section
      className="py-16 px-margin-mobile md:px-margin-desktop bg-secondary-container/20 border-y border-outline-variant/40 relative overflow-hidden"
      aria-label="Platform usage statistics"
    >
      <div
        data-parallax="0.03"
        className="absolute -top-16 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[90px] pointer-events-none"
      />
      <div
        data-parallax="-0.03"
        className="absolute -bottom-16 right-1/4 w-64 h-64 bg-[#1e3a8a]/10 rounded-full blur-[90px] pointer-events-none"
      />
      <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter relative z-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <StatCounter value={stat.value} suffix={stat.suffix} />
            <div className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
