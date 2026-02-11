"use client";

import ScrollReveal from "./ScrollReveal";
import CounterAnimation from "./CounterAnimation";

const cases = [
  {
    badge: "CASE STUDY 01",
    name: "Bezdrob",
    handle: "@bezdrob.tp",
    niche: "Fitness — Glute Lab Starter Pack",
    heroNumber: "150+",
    heroTarget: 150,
    heroSuffix: "+",
    heroLabel: "SALES IN 4 DAYS",
    metrics: [
      { value: "26K", label: "Followers", color: "text-brand-gold" },
      { value: "€10K", label: "Revenue", color: "text-brand-green" },
      { value: "0.38%", label: "Conversion", color: "text-brand-white" },
    ],
    before: "26K followers, zero product revenue",
    after: "150+ sales, €10K revenue, 0 ad spend",
  },
  {
    badge: "CASE STUDY 02",
    name: "Unfazed Club",
    handle: "@unfazed.club",
    niche: "Streetwear — Drop 001 & Drop 002",
    heroNumber: "2/2",
    heroTarget: 2,
    heroSuffix: "/2",
    heroLabel: "DROPS SOLD OUT",
    metrics: [
      { value: "2x", label: "Sold Out", color: "text-brand-gold" },
      {
        value: "Drop 001",
        label: "Launch",
        color: "text-brand-green",
      },
      {
        value: "Drop 002",
        label: "Scaled",
        color: "text-brand-white",
      },
    ],
    before: "Brand with no launch system, no sales strategy",
    after: "Back-to-back sold out drops, structured launch campaigns, repeat buyers",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="proof"
      className="relative py-24 md:py-32 bg-brand-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[10px] tracking-[5px] text-brand-gold uppercase block mb-4">
            PROVEN RESULTS
          </span>
          <div className="w-12 h-[2px] bg-gold-gradient-h mb-8" />
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[5px] leading-none mb-16">
            We Don&apos;t Talk. We{" "}
            <span className="gold-text">Prove.</span>
          </h2>
        </ScrollReveal>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((cs, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="bg-brand-card border border-brand-border rounded-lg overflow-hidden group hover:border-brand-gold/20 transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Gold top border */}
                <div className="h-[3px] bg-gold-gradient-h" />

                <div className="p-8">
                  {/* Badge */}
                  <span className="inline-block font-space text-[9px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 mb-6 uppercase">
                    {cs.badge}
                  </span>

                  {/* Name & Niche */}
                  <h3 className="font-montserrat font-bold text-xl text-brand-white mb-1">
                    {cs.name}{" "}
                    <span className="text-brand-gray text-sm font-normal">
                      ({cs.handle})
                    </span>
                  </h3>
                  <p className="font-space text-[11px] text-brand-gray tracking-wide mb-8">
                    {cs.niche}
                  </p>

                  {/* Hero Number */}
                  <div className="mb-8">
                    <span className="font-montserrat font-black text-[clamp(48px,6vw,64px)] leading-none gold-text">
                      <CounterAnimation
                        target={cs.heroTarget}
                        suffix={cs.heroSuffix}
                      />
                    </span>
                    <span className="block font-space text-[10px] tracking-[4px] text-brand-gray-light uppercase mt-2">
                      {cs.heroLabel}
                    </span>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-brand-border">
                    {cs.metrics.map((m, j) => (
                      <div key={j}>
                        <span
                          className={`font-montserrat font-bold text-lg ${m.color}`}
                        >
                          {m.value}
                        </span>
                        <span className="block font-space text-[9px] tracking-wider text-brand-gray uppercase mt-1">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Before / After */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="font-space text-[9px] tracking-[3px] text-red-500/70 uppercase mt-0.5 shrink-0">
                        BEFORE
                      </span>
                      <p className="font-space text-[11px] text-brand-gray leading-relaxed">
                        {cs.before}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-space text-[9px] tracking-[3px] text-brand-green uppercase mt-0.5 shrink-0">
                        AFTER
                      </span>
                      <p className="font-space text-[11px] text-brand-white leading-relaxed">
                        {cs.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Case Study 03 — CTA */}
          <ScrollReveal delay={0.3}>
            <div
              onClick={() =>
                document
                  .querySelector("#apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-brand-card border border-dashed border-brand-gold/30 rounded-lg overflow-hidden group hover:border-brand-gold/60 transition-all duration-500 hover:-translate-y-1 h-full cursor-pointer flex flex-col"
            >
              <div className="h-[3px] bg-gold-gradient-h" />

              <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
                <span className="inline-block font-space text-[9px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 mb-6 uppercase">
                  CASE STUDY 03
                </span>

                <span className="font-montserrat font-black text-[clamp(48px,6vw,64px)] leading-none gold-text mb-2">
                  ?
                </span>
                <span className="block font-space text-[10px] tracking-[4px] text-brand-gray-light uppercase mt-2 mb-8">
                  YOUR NAME HERE
                </span>

                <h3 className="font-montserrat font-bold text-xl text-brand-white mb-3">
                  Want to be our next case study?
                </h3>
                <p className="font-space text-[11px] text-brand-gray leading-relaxed mb-8 max-w-xs">
                  Apply now and let&apos;s build your revenue system. Same process. Your numbers.
                </p>

                <span className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase bg-brand-gold/90 text-brand-black px-6 py-3 rounded-[10px] group-hover:bg-brand-gold-bright transition-all duration-300">
                  APPLY NOW →
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
