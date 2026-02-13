"use client";

import { useState } from "react";
import { Brain, Cpu, BarChart3, Plug, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const cardIcons = [Brain, Cpu, BarChart3, Plug];

const screenshots = [
  {
    id: "analysis",
    labelKey: "diff.tabAnalysis",
    src: "/images/software-brand-analysis.png",
    alt: "Brand Analysis tool — Personality DNA, audience research, brand identity",
  },
  {
    id: "launch",
    labelKey: "diff.tabLaunch",
    src: "/images/software-launch-output.png",
    alt: "14-Day Story Launch System — AI-generated launch campaign with daily scripts",
  },
];

export default function Differentiator() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  const cards = [
    { Icon: cardIcons[0], title: t("diff.card1Title"), stat: t("diff.card1Stat") },
    { Icon: cardIcons[1], title: t("diff.card2Title"), stat: t("diff.card2Stat") },
    { Icon: cardIcons[2], title: t("diff.card3Title"), stat: t("diff.card3Stat") },
    { Icon: cardIcons[3], title: t("diff.card4Title"), stat: t("diff.card4Stat") },
  ];

  return (
    <section id="different" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[11px] tracking-[4px] text-brand-gold uppercase block mb-3.5">
            {t("diff.label")}
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-tight mb-10">
            {t("diff.headline")}{" "}
            <span className="gold-text">{t("diff.headlineAccent")}</span>
          </h2>
        </ScrollReveal>

        {/* Cards — horizontal scroll mobile, 4-col desktop */}
        <ScrollReveal delay={0.1}>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {cards.map((card, i) => (
              <div
                key={i}
                className="min-w-[220px] md:min-w-0 snap-start bg-brand-section border border-brand-border rounded-[14px] p-6 group hover:border-brand-gold/[0.15] hover:translate-y-[-2px] transition-all duration-300 flex-shrink-0 md:flex-shrink"
              >
                <card.Icon size={24} strokeWidth={1.5} className="text-brand-gold mb-4" />
                <h3 className="font-montserrat font-bold text-[14px] text-brand-white mb-1.5 leading-tight">
                  {card.title}
                </h3>
                <p className="text-[12px] text-brand-gray leading-relaxed">
                  {card.stat}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Software Screenshot Showcase */}
        <ScrollReveal delay={0.15}>
          <div className="mt-10">
            <span className="font-space text-[11px] tracking-[3px] text-brand-gold uppercase block mb-4">
              {t("diff.softwareLabel")}
            </span>

            {/* Browser Frame */}
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden">
              {/* Browser Top Bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#1A1A1A] border-b border-brand-border">
                {/* Dots */}
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>

                {/* Tab Buttons */}
                <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                  {screenshots.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveTab(i)}
                      className={`font-space text-[11px] tracking-wider px-4 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap ${
                        activeTab === i
                          ? "bg-brand-gold/15 text-brand-gold"
                          : "text-brand-gray hover:text-brand-white"
                      }`}
                    >
                      {t(s.labelKey)}
                    </button>
                  ))}
                </div>

                <div className="w-[52px]" />
              </div>

              {/* Screenshot */}
              <div className="relative aspect-[16/9] bg-[#0A0A12] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={screenshots[activeTab].id}
                    src={screenshots[activeTab].src}
                    alt={screenshots[activeTab].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trophy statement */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 bg-gradient-to-r from-brand-section to-[#0D3B0D] border border-brand-green/20 rounded-2xl px-8 py-6 relative overflow-hidden shadow-[0_0_40px_rgba(29,185,84,0.06)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
            <div className="flex items-center gap-4">
              <Trophy size={24} strokeWidth={1.5} className="text-brand-gold flex-shrink-0" />
              <p className="font-montserrat font-bold text-brand-white text-[14px] md:text-[15px] leading-snug">
                {t("diff.trophy")}{" "}
                <span className="text-brand-gray font-normal">{t("diff.trophySub")}</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.25}>
          <div className="mt-8 text-center">
            <button
              onClick={() =>
                document
                  .querySelector("#calculator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase bg-brand-gold/90 text-brand-black px-8 py-4 rounded-[10px] hover:bg-brand-gold-bright transition-all duration-300 shadow-[0_0_30px_rgba(201,176,107,0.15)]"
            >
              {t("diff.cta")}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
