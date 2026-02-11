"use client";

import ScrollReveal from "./ScrollReveal";
import CounterAnimation from "./CounterAnimation";

const stats = [
  { target: 150, suffix: "+", label: "Sales", color: "text-brand-white" },
  {
    target: 10,
    suffix: "K",
    prefix: "€",
    label: "Revenue",
    color: "text-brand-green",
  },
  { target: 26, suffix: "K", label: "Followers", color: "text-brand-gold" },
  { target: 4, suffix: "", label: "Days", color: "text-brand-white" },
];

export default function Proof() {
  return (
    <section id="proof" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[9px] tracking-[4px] text-brand-gold uppercase block mb-3.5">
            WHY SHOULD YOU TRUST ME
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-tight mb-3">
            Don&apos;t take my word for it.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-brand-gray text-[15px] leading-relaxed max-w-xl mb-14">
            Real creator. Real launch. Real money. Every number documented.
          </p>
        </ScrollReveal>

        {/* Bezdrob — unified case study container */}
        <ScrollReveal delay={0.15}>
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
            <div className="h-[3px] bg-gold-gradient-h" />
            <div className="p-8 md:p-10">
              {/* Badge + Creator info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <span className="inline-block font-space text-[9px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 uppercase shrink-0 w-fit">
                  PROJECT 01
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center font-montserrat font-black text-brand-gold text-sm">
                    B
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-brand-white text-[15px]">
                      Bezdrob{" "}
                      <span className="text-brand-gray text-sm font-normal">(@bezdrob.tp)</span>
                    </p>
                    <p className="font-space text-[11px] text-brand-gray tracking-wide">
                      Fitness — Glute Lab Starter Pack
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-brand-section border border-brand-border rounded-[14px] px-5 py-6 text-center"
                  >
                    <span
                      className={`font-montserrat font-black text-[clamp(28px,4vw,40px)] leading-none ${stat.color}`}
                    >
                      <CounterAnimation
                        target={stat.target}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    </span>
                    <span className="block font-space text-[9px] tracking-[3px] text-brand-gray uppercase mt-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Testimonial + DM Screenshot */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Quote */}
                <div className="bg-brand-section border border-brand-border rounded-2xl p-8 flex flex-col">
                  <blockquote className="text-brand-white text-lg md:text-xl leading-relaxed italic flex-1">
                    &ldquo;Before we started working together, I had followers but I
                    didn&apos;t know how to actually turn them into money. Now I have
                    a complete system. In 5 days, 130+ sales, 0 spent on ads, all
                    organic. Anyone who has followers on Instagram should be working
                    with you.&rdquo;
                  </blockquote>
                </div>

                {/* DM Screenshot */}
                <div className="bg-brand-section border border-brand-border rounded-2xl overflow-hidden">
                  <img
                    src="/images/dm-bezdrob.jpg"
                    alt="DM conversation with Bezdrob — 130+ sales, 0 ad spend, all organic"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-section border border-red-900/30 rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
                  <span className="font-space text-[9px] tracking-[4px] text-red-500/70 uppercase block mb-4">
                    BEFORE
                  </span>
                  <p className="text-brand-gray text-[14px] leading-relaxed">
                    26K followers. Zero product revenue. No digital product. No idea
                    how to monetize her audience.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-brand-section to-[#0D3B0D] border border-brand-green/20 rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
                  <span className="font-space text-[9px] tracking-[4px] text-brand-green uppercase block mb-4">
                    AFTER
                  </span>
                  <p className="text-brand-white text-[14px] leading-relaxed">
                    150+ sales. €10K revenue. Complete digital product. Automated
                    sales system. 4 days. €0 ad spend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* More Case Studies */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Unfazed Club */}
          <ScrollReveal delay={0.4}>
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-gold/20 transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="h-[3px] bg-gold-gradient-h" />
              <div className="p-8">
                <span className="inline-block font-space text-[9px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 mb-6 uppercase">
                  PROJECT 02
                </span>

                <h3 className="font-montserrat font-bold text-xl text-brand-white mb-1">
                  Unfazed Club{" "}
                  <span className="text-brand-gray text-sm font-normal">
                    (@unfazed.club)
                  </span>
                </h3>
                <p className="font-space text-[11px] text-brand-gray tracking-wide mb-8">
                  Streetwear — Drop 001 &amp; Drop 002
                </p>

                <div className="mb-8">
                  <span className="font-montserrat font-black text-[clamp(48px,6vw,64px)] leading-none gold-text">
                    <CounterAnimation target={2} suffix="/2" />
                  </span>
                  <span className="block font-space text-[10px] tracking-[4px] text-brand-gray-light uppercase mt-2">
                    DROPS SOLD OUT
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-brand-border">
                  <div>
                    <span className="font-montserrat font-bold text-lg text-brand-gold">2x</span>
                    <span className="block font-space text-[9px] tracking-wider text-brand-gray uppercase mt-1">Sold Out</span>
                  </div>
                  <div>
                    <span className="font-montserrat font-bold text-lg text-brand-green">Drop 001</span>
                    <span className="block font-space text-[9px] tracking-wider text-brand-gray uppercase mt-1">Launch</span>
                  </div>
                  <div>
                    <span className="font-montserrat font-bold text-lg text-brand-white">Drop 002</span>
                    <span className="block font-space text-[9px] tracking-wider text-brand-gray uppercase mt-1">Scaled</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-space text-[9px] tracking-[3px] text-red-500/70 uppercase mt-0.5 shrink-0">BEFORE</span>
                    <p className="font-space text-[11px] text-brand-gray leading-relaxed">Brand with no launch system, no sales strategy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-space text-[9px] tracking-[3px] text-brand-green uppercase mt-0.5 shrink-0">AFTER</span>
                    <p className="font-space text-[11px] text-brand-white leading-relaxed">Back-to-back sold out drops, structured launch campaigns, repeat buyers</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Case Study 03 — CTA */}
          <ScrollReveal delay={0.45}>
            <div
              onClick={() =>
                document
                  .querySelector("#apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-brand-card border border-dashed border-brand-gold/30 rounded-2xl overflow-hidden group hover:border-brand-gold/60 transition-all duration-500 hover:-translate-y-1 h-full cursor-pointer flex flex-col"
            >
              <div className="h-[3px] bg-gold-gradient-h" />
              <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
                <span className="inline-block font-space text-[9px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 mb-6 uppercase">
                  PROJECT 03
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
