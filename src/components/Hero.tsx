"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import CounterAnimation from "./CounterAnimation";

const colorMap = {
  gold: "text-brand-gold",
  green: "text-brand-green",
  white: "text-brand-white",
};

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    {
      value: 150,
      suffix: "+",
      label: t("hero.statSalesLabel"),
      color: "gold" as const,
      desc: t("hero.statSalesDesc"),
    },
    {
      value: 10,
      suffix: "K",
      prefix: "\u20AC",
      label: t("hero.statRevenueLabel"),
      color: "green" as const,
      desc: t("hero.statRevenueDesc"),
    },
    {
      value: 0.38,
      suffix: "%",
      label: t("hero.statConversionLabel"),
      color: "white" as const,
      desc: t("hero.statConversionDesc"),
      decimals: 2,
    },
    {
      value: 5,
      suffix: "/5",
      label: t("hero.statRatingLabel"),
      color: "gold" as const,
      desc: t("hero.statRatingDesc"),
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-depth">
      {/* Subtle depth glow — no gold wash */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-32 lg:pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-montserrat font-black text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight mb-6"
            >
              {t("hero.headline1")} {t("hero.headline2")} <span className="gold-text">{t("hero.headlineAccent")}</span> {t("hero.headline3")} {t("hero.headline4")}
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-space text-brand-cream text-[14px] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              {t("hero.subhead")}{" "}
              <strong>{t("hero.subheadBold")}</strong> {t("hero.subheadEnd")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#apply")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase bg-brand-gold/90 backdrop-blur-md text-brand-black px-8 py-4 hover:bg-brand-gold-bright transition-all duration-300 shadow-[0_0_30px_rgba(201,176,107,0.2),inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                {t("hero.ctaPrimary")}
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#proof")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase border border-brand-gold/40 text-brand-gold px-8 py-4 bg-white/[0.05] backdrop-blur-md hover:border-brand-gold hover:bg-white/[0.1] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
              >
                {t("hero.ctaSecondary")}
              </button>
            </motion.div>
          </div>

          {/* Right - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-lg overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.4)]"
          >
            {/* Gold top border */}
            <div className="h-[3px] bg-gold-gradient-h" />

            <div className="p-6 pb-0">
              <span className="font-space text-[11px] tracking-[4px] text-brand-gold uppercase block mb-2">
                {t("hero.statsLabel")}
              </span>
            </div>

            <div className="p-6 pt-2 space-y-1">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span
                        className={`font-montserrat font-black text-2xl ${colorMap[stat.color]}`}
                      >
                        <CounterAnimation
                          target={stat.value}
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                          decimals={stat.decimals}
                        />
                      </span>
                      <span
                        className={`font-space text-[11px] tracking-wider uppercase ${colorMap[stat.color]}`}
                      >
                        {stat.label}
                      </span>
                    </div>
                    <p className="font-montserrat text-[11px] text-brand-gray-light">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
