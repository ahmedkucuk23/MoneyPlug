"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Audience Psychology Analysis",
    icon: "🧠",
    desc: "AI-powered deep dive into your followers — what they want, what they fear, and what triggers them to buy.",
  },
  {
    num: "02",
    title: "Your Digital Product",
    icon: "🎯",
    desc: "Course, coaching program, or guide — designed, structured, and recorded. Built around what your audience actually pays for.",
  },
  {
    num: "03",
    title: "Sales Page + Payments",
    icon: "💰",
    desc: "Landing page, checkout, delivery — multi-tier pricing engineered to maximize every sale. Ready to accept money.",
  },
  {
    num: "04",
    title: "14-Day Launch Campaign",
    icon: "🚀",
    desc: "Daily story scripts, content calendar, psychological triggers — every post mapped to move your audience from watching to buying.",
  },
  {
    num: "05",
    title: "DM Scripts + Closing",
    icon: "💬",
    desc: "Pre-written sequences that turn story viewers into buyers. Objection handling, lead capture, and closing — all scripted.",
  },
  {
    num: "06",
    title: "Content + Post-Launch Scaling",
    icon: "📈",
    desc: "Branded templates, content strategy, performance optimization, and the roadmap for your next product launch.",
  },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[9px] tracking-[4px] text-brand-gold uppercase block mb-3.5">
            WHAT I BUILD
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-tight">
            From your followers to{" "}
            <span className="gold-text">money in your account.</span>
          </h2>
        </ScrollReveal>

        {/* Subhead */}
        <ScrollReveal delay={0.1}>
          <p className="text-brand-gray text-[15px] leading-relaxed mt-2.5 max-w-[480px]">
            6 steps. I engineer all of them. You show up at the end and sell.
          </p>
        </ScrollReveal>

        {/* Pipeline steps */}
        <div className="mt-12 flex flex-col relative">
          {/* Vertical gold connecting line */}
          <div className="absolute left-[23px] md:left-[31px] top-[48px] bottom-[48px] w-px bg-gradient-to-b from-brand-gold/20 via-brand-gold/10 to-brand-gold/20 pointer-events-none" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={0.05 * i}>
              <div className="flex gap-5 md:gap-7 items-start py-5 md:py-6 relative group">
                {/* Step number circle */}
                <div className="w-12 h-12 md:w-16 md:h-16 min-w-[48px] md:min-w-[64px] rounded-full bg-brand-section border-2 border-brand-gold flex items-center justify-center font-montserrat font-black text-base md:text-lg text-brand-gold relative z-[2] transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-black">
                  {step.num}
                </div>

                {/* Step card */}
                <div className="flex-1 bg-brand-section border border-brand-border rounded-[14px] px-6 py-[22px] transition-all duration-250 group-hover:border-brand-gold/[0.12] group-hover:translate-x-1">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h3 className="font-montserrat font-extrabold text-base md:text-[17px] leading-tight text-brand-white">
                      {step.title}
                    </h3>
                    <span className="text-[22px] flex-shrink-0">{step.icon}</span>
                  </div>
                  <p className="text-[13px] text-brand-gray leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Result card */}
        <ScrollReveal delay={0.3}>
          <div className="mt-9 bg-brand-section border border-brand-gold/[0.15] rounded-2xl px-8 py-7 text-center relative overflow-hidden">
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold-dim via-brand-gold to-brand-gold-dim" />

            <p className="font-montserrat font-extrabold text-[clamp(16px,2.5vw,20px)] text-brand-gray">
              You bring the audience. I build the{" "}
              <span className="text-brand-gold">money machine.</span>
            </p>
            <p className="text-[13px] text-brand-gray-dark mt-1.5">
              Every step engineered. Every asset delivered. You just show up and post.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
