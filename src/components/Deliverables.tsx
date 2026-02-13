"use client";

import { BarChart3, Target, Banknote, ClipboardList, MessageSquare, Settings, Smartphone, TrendingUp, Plug } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const deliverables = [
  {
    Icon: BarChart3,
    title: "Audience Psychology Profile",
    description:
      "Deep psychological analysis of your audience — fears, desires, buying triggers, content preferences, and purchase behavior patterns.",
  },
  {
    Icon: Target,
    title: "Product Development",
    description:
      "Course, coaching program, or digital product — designed, structured, and built. Engineered around what your audience actually pays for.",
  },
  {
    Icon: Banknote,
    title: "Pricing Strategy",
    description:
      "Multi-tier architecture with entry, core, and premium tiers. Anchoring psychology, perceived value optimization, and payment flexibility.",
  },
  {
    Icon: ClipboardList,
    title: "Launch Campaign",
    description:
      "14-day psychologically-sequenced system with daily story scripts, engagement phases, cart sequences, and DM triggers.",
  },
  {
    Icon: MessageSquare,
    title: "DM Templates & Scripts",
    description:
      "Pre-written sequences for lead capture, objection handling, urgency creation, and closing — copy-paste ready for your team.",
  },
  {
    Icon: Settings,
    title: "Payment & Funnel Setup",
    description:
      "Complete tech infrastructure — payment processing, product delivery, automated emails, analytics tracking, and payout systems.",
  },
  {
    Icon: Smartphone,
    title: "Content Strategy",
    description:
      "Branded templates, story designs, reel concepts, content calendar — everything you need to show up and sell consistently.",
  },
  {
    Icon: TrendingUp,
    title: "Post-Launch Optimization",
    description:
      "Performance analysis, conversion optimization, audience feedback integration, and next launch strategy development.",
  },
  {
    Icon: Plug,
    title: "The Full Money Plug System",
    description:
      "Personality DNA, Audience DNA, Product DNA, Coaching Offer Architecture, and the complete Launch Blueprint — all engineered for you.",
  },
];

export default function Deliverables() {
  return (
    <section
      id="deliverables"
      className="relative py-24 md:py-32 bg-brand-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[11px] tracking-[5px] text-brand-gold uppercase block mb-4">
            WHAT YOU GET
          </span>
          <div className="w-12 h-[2px] bg-gold-gradient-h mb-8" />
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[5px] leading-none mb-16">
            Everything. <span className="gold-text">Engineered.</span> Delivered.
          </h2>
        </ScrollReveal>

        {/* Deliverable Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="bg-brand-card border border-brand-border rounded-lg p-7 group hover:border-brand-gold/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(201,176,107,0.08)] transition-all duration-500 h-full">
                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.Icon size={28} strokeWidth={1.5} className="text-brand-gold" />
                </div>

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
          <p className="text-center mt-20 font-bebas text-[clamp(28px,4vw,42px)] tracking-[4px]">
            Everything.{" "}
            <span className="gold-text">Engineered.</span>{" "}
            Delivered.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
