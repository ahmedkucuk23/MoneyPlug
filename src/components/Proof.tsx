"use client";

import ScrollReveal from "./ScrollReveal";
import CounterAnimation from "./CounterAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Proof() {
  const { t } = useLanguage();

  const stats = [
    { target: 150, suffix: "+", label: t("proof.statSales"), color: "text-brand-white" },
    {
      target: 10,
      suffix: "K",
      prefix: "\u20AC",
      label: t("proof.statRevenue"),
      color: "text-brand-green",
    },
    { target: 26, suffix: "K", label: t("proof.statFollowers"), color: "text-brand-gold" },
    { target: 7, suffix: "", label: t("proof.statDays"), color: "text-brand-white" },
  ];

  return (
    <section id="proof" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[11px] tracking-[4px] text-brand-gold uppercase block mb-3.5">
            {t("proof.label")}
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-tight mb-3">
            {t("proof.headline")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-brand-gray text-[15px] leading-relaxed max-w-xl mb-14">
            {t("proof.subhead")}
          </p>
        </ScrollReveal>

        {/* Bezdrob — unified case study container */}
        <ScrollReveal delay={0.15}>
          <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
            <div className="h-[3px] bg-gold-gradient-h" />
            <div className="p-8 md:p-10">
              {/* Badge + Creator info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                <span className="inline-block font-space text-[11px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 uppercase shrink-0 w-fit">
                  {t("proof.project01")}
                </span>
                <div className="flex items-center gap-3">
                  <img
                    src="/images/bezdrob-avatar.png"
                    alt="Bezdrob"
                    className="w-10 h-10 rounded-full border border-brand-gold/30 object-cover"
                  />
                  <div>
                    <p className="font-montserrat font-bold text-brand-white text-[15px]">
                      Bezdrob{" "}
                      <a href="https://www.instagram.com/bezdrob.tp/" target="_blank" rel="noopener noreferrer" className="text-brand-gray text-sm font-normal hover:text-brand-gold transition-colors">(@bezdrob.tp)</a>
                    </p>
                    <p className="font-space text-[11px] text-brand-gray tracking-wide flex items-center gap-2">
                      {t("proof.bezdrobNiche")}
                      <a href="https://www.bezdrobacademy.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-gold/70 hover:text-brand-gold transition-colors border border-brand-gold/20 rounded px-1.5 py-0.5 text-[10px] tracking-[2px] uppercase">
                        {t("proof.websiteLink")}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
                    <span className="block font-space text-[11px] tracking-[3px] text-brand-gray uppercase mt-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* DM Screenshot */}
              <div className="mb-6">
                <div className="bg-brand-section border border-brand-border rounded-2xl overflow-hidden max-w-md mx-auto">
                  <img
                    src="/images/dm-bezdrob.jpg"
                    alt="DM conversation with Bezdrob — 130+ sales, 0 ad spend, all organic"
                    className="w-full h-auto object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Revenue Dashboards */}
              <div className="mb-6">
                <span className="font-space text-[11px] tracking-[3px] text-brand-gold uppercase block mb-4">
                  {t("proof.dashboardLabel")}
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-section border border-brand-border rounded-2xl overflow-hidden">
                    <img
                      src="/images/dashboard-bezdrob-eur.png"
                      alt="Bezdrob Whop dashboard — 1.905,17 EUR gross revenue, 150 users"
                      className="w-full h-auto object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-brand-section border border-brand-border rounded-2xl overflow-hidden">
                    <img
                      src="/images/dashboard-bezdrob-bam.png"
                      alt="Bezdrob Whop dashboard — 6.639,18 KM gross revenue, 150 users"
                      className="w-full h-auto object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Product Preview */}
              <div className="mb-6">
                <span className="font-space text-[11px] tracking-[3px] text-brand-gold uppercase block mb-4">
                  {t("proof.productLabel")}
                </span>
                <div className="flex justify-center">
                  <div className="relative w-[220px] md:w-[260px] rounded-[28px] border-2 border-brand-border bg-brand-black p-2 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="rounded-[22px] overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                      >
                        <source src="/images/whop-preview.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-section border border-red-900/30 rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
                  <span className="font-space text-[11px] tracking-[4px] text-red-500/70 uppercase block mb-4">
                    {t("proof.before")}
                  </span>
                  <p className="text-brand-gray text-[14px] leading-relaxed">
                    {t("proof.bezdrobBefore")}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-brand-section to-[#0D3B0D] border border-brand-green/20 rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
                  <span className="font-space text-[11px] tracking-[4px] text-brand-green uppercase block mb-4">
                    {t("proof.after")}
                  </span>
                  <p className="text-brand-white text-[14px] leading-relaxed">
                    {t("proof.bezdrobAfter")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* More Case Studies */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Unfazed Club */}
          <ScrollReveal delay={0.4}>
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group hover:border-brand-gold/20 transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="h-[3px] bg-gold-gradient-h" />
              <div className="p-8">
                <span className="inline-block font-space text-[11px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 mb-6 uppercase">
                  {t("proof.project02")}
                </span>

                <h3 className="font-montserrat font-bold text-xl text-brand-white mb-1">
                  Unfazed Club{" "}
                  <a href="https://www.instagram.com/unfazed_club/" target="_blank" rel="noopener noreferrer" className="text-brand-gray text-sm font-normal hover:text-brand-gold transition-colors">
                    (@unfazed_club)
                  </a>
                </h3>
                <p className="font-space text-[11px] text-brand-gray tracking-wide flex items-center gap-2 mb-8">
                  {t("proof.unfazedNiche")}
                  <a href="https://unfazedclub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-gold/70 hover:text-brand-gold transition-colors border border-brand-gold/20 rounded px-1.5 py-0.5 text-[10px] tracking-[2px] uppercase">
                    {t("proof.websiteLink")}
                  </a>
                </p>

                <div className="mb-8">
                  <span className="font-montserrat font-black text-[clamp(48px,6vw,64px)] leading-none gold-text">
                    <CounterAnimation target={2} suffix="/2" />
                  </span>
                  <span className="block font-space text-[11px] tracking-[4px] text-brand-gray-light uppercase mt-2">
                    {t("proof.dropsSoldOut")}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-brand-border">
                  <div>
                    <span className="font-montserrat font-bold text-lg text-brand-gold">2x</span>
                    <span className="block font-space text-[11px] tracking-wider text-brand-gray uppercase mt-1">{t("proof.soldOut")}</span>
                  </div>
                  <div>
                    <span className="font-montserrat font-bold text-lg text-brand-green">Drop 001</span>
                    <span className="block font-space text-[11px] tracking-wider text-brand-gray uppercase mt-1">{t("proof.launch")}</span>
                  </div>
                  <div>
                    <span className="font-montserrat font-bold text-lg text-brand-white">Drop 002</span>
                    <span className="block font-space text-[11px] tracking-wider text-brand-gray uppercase mt-1">{t("proof.scaled")}</span>
                  </div>
                </div>

                {/* Shopify Dashboard */}
                <div className="mb-8">
                  <span className="font-space text-[11px] tracking-[3px] text-brand-gold uppercase block mb-3">
                    {t("proof.shopifyLabel")}
                  </span>
                  <div className="bg-brand-section border border-brand-border rounded-xl overflow-hidden">
                    <img
                      src="/images/unfazed-dashboard-dark.jpg"
                      alt="Unfazed Club Shopify dashboard — KM 16.521 total sales, 82 orders, 0.76% conversion"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-space text-[11px] tracking-[3px] text-red-500/70 uppercase mt-0.5 shrink-0">{t("proof.before")}</span>
                    <p className="font-space text-[11px] text-brand-gray leading-relaxed">{t("proof.unfazedBefore")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-space text-[11px] tracking-[3px] text-brand-green uppercase mt-0.5 shrink-0">{t("proof.after")}</span>
                    <p className="font-space text-[11px] text-brand-white leading-relaxed">{t("proof.unfazedAfter")}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Case Study 03 — CTA */}
          <ScrollReveal delay={0.45}>
            <div
              onClick={() =>
                document
                  .querySelector("#apply")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-brand-card border border-dashed border-brand-gold/30 rounded-2xl overflow-hidden group hover:border-brand-gold/60 transition-all duration-500 hover:-translate-y-1 h-full cursor-pointer flex flex-col"
            >
              <div className="h-[3px] bg-gold-gradient-h" />
              <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
                <span className="inline-block font-space text-[11px] tracking-[4px] text-brand-gold border border-brand-gold/30 px-4 py-1.5 mb-6 uppercase">
                  {t("proof.project03")}
                </span>

                <span className="font-montserrat font-black text-[clamp(48px,6vw,64px)] leading-none gold-text mb-2">
                  ?
                </span>
                <span className="block font-space text-[11px] tracking-[4px] text-brand-gray-light uppercase mt-2 mb-8">
                  {t("proof.yourNameHere")}
                </span>

                <h3 className="font-montserrat font-bold text-xl text-brand-white mb-3">
                  {t("proof.nextCaseStudy")}
                </h3>
                <p className="font-space text-[11px] text-brand-gray leading-relaxed mb-8 max-w-xs">
                  {t("proof.nextCaseStudyDesc")}
                </p>

                <span className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase bg-brand-gold/90 text-brand-black px-6 py-3 rounded-[10px] group-hover:bg-brand-gold-bright transition-all duration-300">
                  {t("proof.applyNow")}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
