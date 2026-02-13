"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Search, PenTool, Rocket, TrendingUp];

export default function System() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t("system.step1Title"),
      Icon: icons[0],
      description: t("system.step1Desc"),
    },
    {
      num: "02",
      title: t("system.step2Title"),
      Icon: icons[1],
      description: t("system.step2Desc"),
    },
    {
      num: "03",
      title: t("system.step3Title"),
      Icon: icons[2],
      description: t("system.step3Desc"),
    },
    {
      num: "04",
      title: t("system.step4Title"),
      Icon: icons[3],
      description: t("system.step4Desc"),
    },
  ];

  return (
    <section id="system" className="relative py-16 md:py-32 bg-brand-black">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,176,107,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[11px] tracking-[5px] text-brand-gold uppercase block mb-4">
            {t("system.label")}
          </span>
          <div className="w-12 h-[2px] bg-gold-gradient-h mb-8" />
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[5px] leading-none mb-10 md:mb-16">
            {t("system.headline")} <span className="gold-text">{t("system.headlineAccent")}</span>
          </h2>
        </ScrollReveal>

        {/* Steps — Mobile: vertical timeline / Desktop: 4-col grid */}

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden relative pl-10">
          {/* Vertical connecting line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-brand-border" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className={`relative ${i < steps.length - 1 ? "pb-8" : ""}`}>
                {/* Dot on the line */}
                <div className="absolute -left-10 top-1 w-[11px] h-[11px] rounded-full border-2 border-brand-gold bg-brand-black z-10" />

                {/* Step label + icon row */}
                <div className="flex items-center gap-3 mb-2">
                  <step.Icon size={20} strokeWidth={1.5} className="text-brand-gold flex-shrink-0" />
                  <span className="font-space text-[10px] tracking-[3px] text-brand-gold/60">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-[15px] tracking-wider text-brand-white mb-1.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-brand-gray leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-[60px] left-[12.5%] right-[12.5%] h-[1px] bg-brand-border z-0" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="relative z-10 text-center group">
                <span className="font-space text-[11px] tracking-[4px] text-brand-gold block mb-4">
                  {t("system.stepPrefix")} {step.num}
                </span>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-[72px] h-[72px] mx-auto mb-6 rounded-full bg-brand-card border border-brand-border flex items-center justify-center group-hover:border-brand-gold/40 group-hover:shadow-[0_0_20px_rgba(201,176,107,0.15)] transition-all duration-500"
                >
                  <step.Icon size={28} strokeWidth={1.5} className="text-brand-gold" />
                </motion.div>

                {i < steps.length - 1 && (
                  <div className="absolute top-[56px] -right-3 z-20">
                    <span className="text-brand-gold/40 text-lg">&rarr;</span>
                  </div>
                )}

                <h3 className="font-montserrat font-bold text-base tracking-wider mb-3 text-brand-white">
                  {step.title}
                </h3>

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
            {t("system.tagline1")}{" "}
            <span className="font-bold gold-text">{t("system.taglineAccent")}</span>{t("system.tagline2")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
