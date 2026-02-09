"use client";

import ScrollReveal from "./ScrollReveal";
import CounterAnimation from "./CounterAnimation";

const cases = [
  {
    badge: "CASE STUDY 01",
    name: "Bezdrob",
    handle: "@bezdrob.tp",
    niche: "Fitness — Glute Lab Starter Pack",
    heroNumber: "100+",
    heroTarget: 100,
    heroSuffix: "+",
    heroLabel: "SALES IN 4 DAYS",
    metrics: [
      { value: "26K", label: "Followers", color: "text-brand-gold" },
      { value: "€9,700", label: "Revenue", color: "text-brand-green" },
      { value: "0.38%", label: "Conversion", color: "text-brand-white" },
    ],
    before: "26K followers, zero product revenue",
    after: "100+ sales, €9,700 revenue, 0 ad spend",
  },
  {
    badge: "CASE STUDY 02",
    name: "Ana Bavrka",
    handle: "@ana.bavrka",
    niche: "Fitness — 30+ Mama Power Programs",
    heroNumber: "119K",
    heroTarget: 119,
    heroSuffix: "K",
    heroLabel: "AUDIENCE REACH",
    metrics: [
      { value: "119K", label: "Followers", color: "text-brand-gold" },
      {
        value: "Multi-Tier",
        label: "Pricing",
        color: "text-brand-green",
      },
      {
        value: "Collab",
        label: "Challenge",
        color: "text-brand-white",
      },
    ],
    before: "119K audience, single revenue stream",
    after: "Multi-tier challenge, collab framework, structured revenue system",
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
        <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
}
