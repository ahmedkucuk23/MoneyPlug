"use client";

import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: "🧠",
    title: "100% Psychologically Engineered",
    desc: "Every word, every story, every DM script is built on behavioral psychology — not guesswork. Tested triggers that make audiences buy.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Strategy Engine",
    desc: "My software generates complete monetization gameplans, audience psychology profiles, and 14-day launch campaigns. Custom for every creator.",
  },
  {
    icon: "📊",
    title: "Highest Conversion Rate Per Follower",
    desc: "0.38% conversion from organic traffic. Nearly 4x the industry average. No other system on the planet converts higher per follower count.",
  },
  {
    icon: "🔌",
    title: "I Build Everything For You",
    desc: "Product creation, recording, packaging, sales page, payment processing, launch campaign. You show up. I handle the rest.",
  },
];

export default function Differentiator() {
  return (
    <section id="different" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[9px] tracking-[4px] text-brand-gold uppercase block mb-3.5">
            WHAT MAKES THIS DIFFERENT
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-tight mb-3">
            I built my own AI-powered{" "}
            <span className="gold-text">monetization system.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-montserrat font-bold text-brand-white text-lg md:text-xl mb-2">
            The first of its kind.
          </p>
          <p className="text-brand-gray text-[15px] leading-relaxed max-w-xl mb-14">
            This isn&apos;t a generic marketing plan. I coded a proprietary software
            that creates psychologically-engineered launch strategies — tested,
            proven, and unmatched.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="bg-brand-section border border-brand-border rounded-[14px] p-7 group hover:border-brand-gold/[0.15] hover:translate-y-[-2px] transition-all duration-300 h-full">
                <span className="text-2xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </span>
                <h3 className="font-montserrat font-extrabold text-[15px] text-brand-white mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[13px] text-brand-gray leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trophy statement */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 bg-gradient-to-r from-brand-section to-[#0D3B0D] border border-brand-green/20 rounded-2xl px-8 py-7 relative overflow-hidden shadow-[0_0_40px_rgba(29,185,84,0.06)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0 mt-0.5">🏆</span>
              <div>
                <p className="font-montserrat font-extrabold text-brand-white text-[15px] md:text-base leading-snug mb-1">
                  There is no other software on the planet that can match this
                  conversion rate.
                </p>
                <p className="text-[13px] text-brand-gray leading-relaxed">
                  It&apos;s not a claim — it&apos;s documented, tested data. The system is
                  built to make money.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.35}>
          <div className="mt-10 text-center">
            <button
              onClick={() =>
                document
                  .querySelector("#apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase bg-brand-gold/90 text-brand-black px-8 py-4 rounded-[10px] hover:bg-brand-gold-bright transition-all duration-300 shadow-[0_0_30px_rgba(201,176,107,0.15)]"
            >
              SHOW ME WHAT MY AUDIENCE IS WORTH →
            </button>
            <p className="text-[13px] text-brand-gray-dark mt-3">
              Free. No commitment. I&apos;ll personally review your profile.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
