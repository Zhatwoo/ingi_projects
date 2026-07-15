"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { translations } from "../../lib/translations";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const { lang } = useLanguage();
  const t = translations[lang].cta;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/trial-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 md:py-section-padding px-margin-mobile md:px-margin-desktop relative bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto text-center z-10 relative" data-reveal>
        <h2 className="text-3xl sm:text-4xl md:text-display-lg font-headline-xl mb-12 leading-[1.1] text-on-surface">
          {t.headingLine1} <br />
          <span className="text-gradient">{t.headingEmphasis}</span>
        </h2>
        <div className="flex flex-col items-center gap-6">
          {status === "success" ? (
            <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 text-on-surface px-8 py-4 rounded-xl font-bold max-w-md">
              <span className="material-symbols-outlined text-secondary">
                check_circle
              </span>
              {t.successMessage}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-xl"
              noValidate
            >
              <label htmlFor="cta-email" className="sr-only">
                {t.emailLabel}
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="flex-1 px-6 py-4 md:py-5 rounded-xl border border-outline-variant bg-surface text-on-surface font-medium placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-secondary text-white px-8 py-4 md:px-12 md:py-5 rounded-xl text-base md:text-lg font-extrabold hover:scale-105 hover:shadow-2xl active:scale-95 transition-all shadow-xl border-b-4 border-b-black/20 disabled:opacity-60 disabled:hover:scale-100 whitespace-nowrap"
              >
                {status === "submitting" ? t.sending : t.submit}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="text-error font-medium text-sm">
              {t.errorMessage}
            </p>
          )}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <Image
                className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                alt="Team Member"
                width={56}
                height={56}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJbic3odXbktxTIuuqCdWUBTokxOoEuav3YCqCCakmPhQHksCTOh7kBH5vuyDl3KKSwpkqvnxwpEpIaxsVlXhKuOhe263XWHd4Ifz_CGtqtrEt3IeyKItu51gGO4KipRsCvwsPRz3uYUev2DJGbQsovfDjO4IMmqgpT2Miiei0UFxQrZ-w9EFaFbfZPav3RJOOQZqWHbLdhHMxsCF9FmNvW4K3CFPLRTp1B6mw5LTt3qAViLLaPQLkYGIgz98Ft44D6rUFCk_IGA"
              />
              <Image
                className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                alt="Team Member"
                width={56}
                height={56}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdy_VyR0_kG3a_n5uewXn-gPndl1EtzCxNSGY8qUvPi2-Gz0h3VueNmhZv4ljmer4x2VDxane3ndlCvRQ-2I9R4znBLaz0VXe76CGofxOIQC9ZZBW0n3H3moQY-9s7t1moM8UDMftoDOkgReALEGx2_UWEkx6ruJXiMmPw5V6aqSi0gxlY5BqtQKMeZz3WYXwwfyZfWiHxPhtsjJNqrmDiN6e_x4v5pZ2K-GRByb5vTFFradRgEFL4BH_OnWHkUGxKCqzTaz95A"
              />
              <Image
                className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                alt="Team Member"
                width={56}
                height={56}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXI7op6rz2fwGDWtq4LgQOI16H30ByvN4hCmE6Q8P9w_xFmzPxeTHQp8IBVD559maTz_0rGTlHASxBXHC-KVAPg47_HczlryCj3MwIGINxEE28PdwQ4pafMkCcsJ7vM7bFQllUHJPMYaNl9YijZla7Pv0O_uqYLvb3PKB-KAOiRVtOYiw998fvI9dEkj94HH6Lt2Q3NZzPuya09HI_i5_2JaM2WvG0k6YRhBdTJr9aSbm6xmDb4ujM5Jg-5M0bkz2DLnkJ4YLm4Q"
              />
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white text-xs font-bold shadow-md">
                +5k
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-on-surface-variant font-semibold uppercase tracking-widest text-sm opacity-60">
          {t.joinText}
        </p>
      </div>
      {/* Decorative blobs */}
      <div
        data-parallax="0.07"
        className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        data-parallax="-0.05"
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"
      />
    </section>
  );
}
