"use client";

import ScrollReveal from "./ScrollReveal";

const deliverables = [
  {
    icon: "📊",
    title: "Audience Psychology Profile",
    description:
      "Deep psychological analysis of your audience — fears, desires, buying triggers, content preferences, and purchase behavior patterns.",
  },
  {
    icon: "🎯",
    title: "Product Development",
    description:
      "Course, coaching program, or digital product designed around your audience psychology — not guesswork, engineered solutions.",
  },
  {
    icon: "💰",
    title: "Pricing Strategy",
    description:
      "Multi-tier architecture with entry, core, and premium tiers. Anchoring psychology, perceived value optimization, and payment flexibility.",
  },
  {
    icon: "📋",
    title: "Launch Campaign",
    description:
      "14-day psychologically-sequenced system with daily story scripts, engagement phases, cart sequences, and DM triggers.",
  },
  {
    icon: "💬",
    title: "DM Templates & Scripts",
    description:
      "Pre-written sequences for lead capture, objection handling, urgency creation, and closing — copy-paste ready for your team.",
  },
  {
    icon: "⚙️",
    title: "Payment & Funnel Setup",
    description:
      "Complete tech infrastructure — payment processing, product delivery, automated emails, analytics tracking, and payout systems.",
  },
  {
    icon: "📱",
    title: "Content Strategy",
    description:
      "Branded templates, story designs, reel concepts, content calendar — everything you need to show up and sell consistently.",
  },
  {
    icon: "📈",
    title: "Post-Launch Optimization",
    description:
      "Performance analysis, conversion optimization, audience feedback integration, and next launch strategy development.",
  },
  {
    icon: "🔌",
    title: "The Full Money Plug System",
    description:
      "Personality DNA, Audience DNA, Product DNA, Coaching Offer Architecture, and the complete Launch Blueprint — all engineered for you.",
  },
];

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      className="relative py-24 md:py-32 bg-brand-section bg-diagonal-lines"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[10px] tracking-[5px] text-brand-gold uppercase block mb-4">
            WHAT YOU GET
          </span>
          <div className="w-12 h-[2px] bg-gold-gradient-h mb-8" />
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4vw,48px)] leading-tight mb-16">
            Everything. <span className="gold-text">Engineered.</span> Delivered.
          </h2>
        </ScrollReveal>

        {/* Deliverable Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="bg-brand-card border border-brand-border rounded-lg p-7 group hover:border-brand-gold/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(201,176,107,0.08)] transition-all duration-500 h-full">
                {/* Icon */}
                <span className="text-2xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-[15px] text-brand-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-space text-[11px] text-brand-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing tagline */}
        <ScrollReveal delay={0.3}>
          <p className="text-center mt-20 font-montserrat font-black text-xl md:text-2xl tracking-wide">
            Everything.{" "}
            <span className="gold-text">Engineered.</span>{" "}
            Delivered.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
