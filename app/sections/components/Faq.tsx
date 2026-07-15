"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I use DeskHRX and LoopWork separately?",
    answer:
      "Yes. Each product works fully on its own — DeskHRX for HR, payroll, and compliance, and LoopWork for Kanban, Gantt, and workload planning. The bundle is optional and simply connects the two.",
  },
  {
    question: "How does the 2-month free trial work?",
    answer:
      "Sign up with your work email and get full access to your chosen plan for 2 months, no credit card required. You can cancel anytime before the trial ends with no charge.",
  },
  {
    question: "What happens to our data if we cancel?",
    answer:
      "Your data remains exportable for 30 days after cancellation. After that period, it is permanently deleted from our servers in line with our data retention policy.",
  },
  {
    question: "Is there a setup fee or long-term contract?",
    answer:
      "No setup fees. All plans are billed monthly with no long-term lock-in — upgrade, downgrade, or cancel whenever you need to.",
  },
  {
    question: "How secure is our HR and payroll data?",
    answer:
      "Both platforms are SOC 2 Type II certified and GDPR compliant, with 256-bit AES encryption and role-based access controls protecting your records at every layer.",
  },
  {
    question: "Can we migrate from our current HR or PM tool?",
    answer:
      "Yes, our team assists with data migration from most common HR and project management tools as part of onboarding. Reach out via Support once you're ready to start.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? faqs[activeIndex] : null;

  return (
    <section className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low relative overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-secondary font-label-caps text-[11px] font-bold uppercase tracking-widest mb-6 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-6 text-primary">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-lg md:text-xl font-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Tap any question below to see the full answer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <button
              key={faq.question}
              type="button"
              data-reveal
              data-reveal-delay={(i % 2) * 120}
              onClick={() => setActiveIndex(i)}
              className="glass-card rounded-xl p-6 text-left flex items-center justify-between gap-4 border border-outline-variant/50 hover:border-secondary/50 transition-colors group"
            >
              <span className="font-medium text-primary">{faq.question}</span>
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
          <div className="relative bg-white text-primary rounded-xl shadow-2xl max-w-md w-full p-7 sm:p-10">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
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
