"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

const testimonialImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsI35kOir5nVSnctWYUW2FUzqhtx6Ez0sQ0TFcS7ioMI-bgE6HR32Bw5RTZjZsNYNASZebqTQidv0QJW37yf58kSnwVaSRNm2RCTiOz5Bkqh0TlrELoyGcLaFUxyZsfP1pChMv6RC7u2BtRcJO-PwVxxEQDyhELY3GvSAflEPfo1kd5J-_J5p-ysyk5a8Jxu3lytBNrOzH6MiDqFN_dgZ2Z1J0ONEbYxYSFfCsstjVew_ulJdsx7WLTmdkM8M5lJBDc_L2kvTQzg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJbic3odXbktxTIuuqCdWUBTokxOoEuav3YCqCCakmPhQHksCTOh7kBH5vuyDl3KKSwpkqvnxwpEpIaxsVlXhKuOhe263XWHd4Ifz_CGtqtrEt3IeyKItu51gGO4KipRsCvwsPRz3uYUev2DJGbQsovfDjO4IMmqgpT2Miiei0UFxQrZ-w9EFaFbfZPav3RJOOQZqWHbLdhHMxsCF9FmNvW4K3CFPLRTp1B6mw5LTt3qAViLLaPQLkYGIgz98Ft44D6rUFCk_IGA",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDVdy_VyR0_kG3a_n5uewXn-gPndl1EtzCxNSGY8qUvPi2-Gz0h3VueNmhZv4ljmer4x2VDxane3ndlCvRQ-2I9R4znBLaz0VXe76CGofxOIQC9ZZBW0n3H3moQY-9s7t1moM8UDMftoDOkgReALEGx2_UWEkx6ruJXiMmPw5V6aqSi0gxlY5BqtQKMeZz3WYXwwfyZfWiHxPhtsjJNqrmDiN6e_x4v5pZ2K-GRByb5vTFFradRgEFL4BH_OnWHkUGxKCqzTaz95A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXI7op6rz2fwGDWtq4LgQOI16H30ByvN4hCmE6Q8P9w_xFmzPxeTHQp8IBVD559maTz_0rGTlHASxBXHC-KVAPg47_HczlryCj3MwIGINxEE28PdwQ4pafMkCcsJ7vM7bFQllUHJPMYaNl9YijZla7Pv0O_uqYLvb3PKB-KAOiRVtOYiw998fvI9dEkj94HH6Lt2Q3NZzPuya09HI_i5_2JaM2WvG0k6YRhBdTJr9aSbm6xmDb4ujM5Jg-5M0bkz2DLnkJ4YLm4Q",
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const { lang } = useLanguage();
  const t = translations[lang].testimonial;
  const active = t.testimonials[index];

  const goPrev = () =>
    setIndex((i) => (i - 1 + t.testimonials.length) % t.testimonials.length);
  const goNext = () => setIndex((i) => (i + 1) % t.testimonials.length);

  return (
    <section className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface relative">
      <div
        data-parallax="0.04"
        className="absolute top-0 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"
      />
      <div
        data-parallax="-0.05"
        className="absolute bottom-0 -left-20 w-80 h-80 bg-[#1e3a8a]/5 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="md:w-1/3">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[11px] font-label-caps">
              {t.tag}
            </span>
            <h2 className="text-3xl md:text-headline-xl font-headline-xl mt-6 mb-8 text-on-surface leading-tight">
              {t.headingPre}{" "}
              <span className="text-secondary">{t.headingEmphasis}</span>{" "}
              {t.headingPost}
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
              {t.subheading}
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-14 h-14 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                  chevron_left
                </span>
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-14 h-14 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </button>
              <div className="flex gap-2 ml-2">
                {t.testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-6 bg-secondary"
                        : "w-2 bg-outline-variant hover:bg-outline"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-2/3" data-reveal>
            <div
              key={index}
              className="glass-card p-8 sm:p-10 md:p-16 rounded-xl relative border-l-8 border-l-secondary shadow-2xl animate-testimonial-in"
            >
              <span className="material-symbols-outlined text-[120px] absolute -top-4 -right-2 text-on-surface opacity-[0.03]">
                format_quote
              </span>
              <div className="flex gap-1.5 mb-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <blockquote className="text-xl md:text-3xl font-headline-md mb-8 md:mb-12 text-on-surface leading-snug italic">
                &quot;{active.quote}&quot;
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-secondary shadow-lg">
                  <Image
                    className="w-full h-full object-cover"
                    alt={`${active.name} - ${active.role}`}
                    width={80}
                    height={80}
                    src={testimonialImages[index]}
                  />
                </div>
                <div>
                  <p className="font-bold text-2xl text-on-surface">
                    {active.name}
                  </p>
                  <p className="text-on-surface-variant font-medium tracking-wide">
                    {active.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
