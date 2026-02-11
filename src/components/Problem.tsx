"use client";

import ScrollReveal from "./ScrollReveal";

const painCards = [
  {
    watermark: "90%",
    title: "Revenue Left on the Table",
    description:
      "Most influencers rent their audience to brands for pennies. They never build products, never own customer relationships, never capture the real value of attention they've earned.",
  },
  {
    watermark: "€0",
    title: "Product Revenue Generated",
    description:
      "Zero digital products. Zero courses. Zero paid communities. The average 50K-follower creator has never monetized directly — they don't know how to start.",
  },
  {
    watermark: "0.1%",
    title: "Average Conversion Rate",
    description:
      "Without a proper launch system, most creators convert less than 0.1% of their audience. No psychology, no sequences, no strategy — just hope and a link in bio.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative py-24 md:py-32 bg-brand-black"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,176,107,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[10px] tracking-[5px] text-brand-gold uppercase block mb-4">
            THE PROBLEM
          </span>
          <div className="w-12 h-[2px] bg-gold-gradient-h mb-8" />
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[5px] leading-none mb-6">
            The Creator Economy Has a{" "}
            <span className="gold-text">$50B</span> Problem
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-brand-gray text-[15px] leading-relaxed max-w-2xl mb-16">
            Most influencers with 10K–500K followers leave 90% of their revenue
            potential untouched. They know content. They don&apos;t know commerce.
            That&apos;s where Money Plug comes in.
          </p>
        </ScrollReveal>

        {/* Pain Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {painCards.map((card, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="relative bg-brand-card border border-brand-border rounded-lg p-8 overflow-hidden group hover:border-red-900/40 transition-all duration-500 h-full">
                {/* Red left border */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-600/60" />

                {/* Watermark number */}
                <span className="absolute top-4 right-4 font-montserrat font-black text-[72px] md:text-[80px] leading-none text-white/[0.03] select-none pointer-events-none">
                  {card.watermark}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span className="font-montserrat font-black text-3xl text-red-500/80 block mb-4">
                    {card.watermark}
                  </span>
                  <h3 className="font-montserrat font-bold text-lg text-brand-white mb-3">
                    {card.title}
                  </h3>
                  <p className="font-space text-[12px] text-brand-gray leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
