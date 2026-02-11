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
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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

        {/* Stats row */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
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
        </ScrollReveal>

        {/* Testimonial + DM Screenshot */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Testimonial card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-brand-section border border-brand-border rounded-2xl p-8 md:p-10 h-full flex flex-col">
              {/* Quote */}
              <blockquote className="text-brand-white text-lg md:text-xl leading-relaxed mb-8 italic flex-1">
                &ldquo;Before we started working together, I had followers but I
                didn&apos;t know how to actually turn them into money. Now I have
                a complete system. In 5 days, 130+ sales, 0 spent on ads, all
                organic. Anyone who has followers on Instagram should be working
                with you.&rdquo;
              </blockquote>

              {/* Creator info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center font-montserrat font-black text-brand-gold text-lg">
                  B
                </div>
                <div>
                  <p className="font-montserrat font-bold text-brand-white text-[15px]">
                    Bezdrob
                  </p>
                  <p className="font-space text-[11px] text-brand-gray tracking-wide">
                    @bezdrob.tp · 26K followers · Fitness
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Real DM Screenshot */}
          <ScrollReveal delay={0.25}>
            <div className="bg-brand-section border border-brand-border rounded-2xl overflow-hidden h-full">
              <img
                src="/images/dm-bezdrob.jpg"
                alt="DM conversation with Bezdrob — 130+ sales, 0 ad spend, all organic"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Before / After */}
        <ScrollReveal delay={0.35}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
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

            {/* After */}
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
        </ScrollReveal>
      </div>
    </section>
  );
}
