"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "AUDIT",
    icon: "🔍",
    description:
      "Deep analysis of your audience, content, engagement, and untapped revenue potential.",
  },
  {
    num: "02",
    title: "ARCHITECT",
    icon: "📐",
    description:
      "Design the complete monetization blueprint — product concept, pricing, psychology mapping, launch strategy.",
  },
  {
    num: "03",
    title: "LAUNCH",
    icon: "🚀",
    description:
      "Execute the 14-day campaign — story scripts, DM templates, content calendar, payment processing.",
  },
  {
    num: "04",
    title: "SCALE",
    icon: "📈",
    description:
      "Post-launch optimization, recurring revenue systems, next product development.",
  },
];

export default function System() {
  return (
    <section id="system" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[10px] tracking-[5px] text-brand-gold uppercase block mb-4">
            THE SYSTEM
          </span>
          <div className="w-12 h-[2px] bg-gold-gradient-h mb-8" />
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4vw,48px)] leading-tight mb-16">
            The Money Plug <span className="gold-text">Model</span>
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[1px] bg-brand-border z-0" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="relative z-10 text-center group">
                {/* Step number */}
                <span className="font-space text-[10px] tracking-[4px] text-brand-gold block mb-4">
                  STEP {step.num}
                </span>

                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-[72px] h-[72px] mx-auto mb-6 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-2xl group-hover:border-brand-gold/40 group-hover:shadow-[0_0_20px_rgba(201,176,107,0.15)] transition-all duration-500"
                >
                  {step.icon}
                </motion.div>

                {/* Arrow (between steps on desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[56px] -right-3 z-20">
                    <span className="text-brand-gold/40 text-lg">→</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="font-montserrat font-bold text-base tracking-wider mb-3 text-brand-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-space text-[11px] text-brand-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tagline */}
        <ScrollReveal delay={0.4}>
          <p className="text-center mt-20 font-montserrat text-lg md:text-xl text-brand-gray">
            We do{" "}
            <span className="font-bold gold-text">everything</span>. You show
            up and sell.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
