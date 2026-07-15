import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-40 overflow-hidden px-margin-mobile md:px-margin-desktop bg-primary mesh-bg-dark text-white">
      <div
        data-parallax="0.08"
        className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] pointer-events-none"
      >
        <div className="w-full h-full bg-secondary/10 rounded-full blur-[120px] animate-float-a" />
      </div>
      <div
        data-parallax="-0.06"
        className="absolute -bottom-1/3 -left-1/4 w-[120%] h-[120%] pointer-events-none"
      >
        <div className="w-full h-full bg-[#1e3a8a]/25 rounded-full blur-[130px] animate-float-b" />
      </div>

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 mb-10">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-caps text-[11px] tracking-widest text-secondary-fixed-dim uppercase">
                Unified HR &amp; Workflow Powerhouse
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-display-lg font-headline-xl mb-8 leading-[1.1]">
              Run payroll and projects{" "}
              <span className="text-secondary italic">
                without switching tabs
              </span>
            </h1>
            <p className="text-lg md:text-xl font-body-md text-white/70 mb-12 max-w-xl leading-relaxed">
              DeskHRX handles HR, payroll, and compliance. LoopWork handles
              Kanban, Gantt, and workload planning. Buy either on its own, or
              bundle both and let a new hire&apos;s first day trigger their
              first project task automatically.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://inspire-loopwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e3a8a] text-white px-10 py-5 rounded-lg font-black flex items-center gap-3 hover:scale-105 transition-all shadow-2xl group"
              >
                Go to LoopWork{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                href="https://deskhrx.com/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-10 py-5 rounded-lg font-black flex items-center gap-3 hover:scale-105 transition-all shadow-2xl glow-secondary group"
              >
                Go to DeskHRX{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          <div className="relative" data-reveal>
            <div
              data-parallax="0.06"
              className="absolute -top-20 -right-20 w-96 h-96 pointer-events-none"
            >
              <div className="w-full h-full bg-secondary/10 rounded-full blur-[100px] animate-float-a" />
            </div>
            <div
              data-parallax="-0.04"
              className="absolute -bottom-20 -left-20 w-96 h-96 pointer-events-none"
            >
              <div className="w-full h-full bg-[#1e3a8a]/20 rounded-full blur-[100px] animate-float-b" />
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <Image
                className="rounded-xl w-full h-auto"
                alt="Unified DeskHRX and LoopWork dashboard"
                width={640}
                height={480}
                priority
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO3vH8OLcIf8RpK8Lpgy9VVoY5N3FSCe6EEChdFLwCmhJbPL__SJxFwMmNMuX_m7LY9ilM2dqjHGizclYvzAF-xJHUnDZ2Nd3qlS3QpQn_QbQFuOAW_2xZF-IT_xBpM9zT1glO5TT0l7Lp71kWbcFxFDrT0LX8FQFmqUBf3fgNyc1InijPa8urXDPV6eHs7W6pgW2UQEO8rH4Cbs88NK7pxO1hs2n9ydVcHlhfgLMM45G3yBadtU9qUMv5J_jSiwwGdaIOY_5FGQ"
              />
              <div className="absolute -bottom-6 left-4 right-4 sm:right-auto sm:-bottom-10 sm:-left-10 bg-primary border border-white/10 p-6 sm:p-8 rounded-xl shadow-2xl sm:max-w-[280px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">
                      bolt
                    </span>
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs">
                    Efficiency Gain
                  </span>
                </div>
                <p className="text-sm text-white/60">
                  New hire onboarded in DeskHRX, first task auto-assigned in{" "}
                  <span className="text-secondary font-bold">LoopWork</span> —
                  same minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
