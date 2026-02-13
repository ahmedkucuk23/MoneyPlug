"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const followerPresets = [
  { label: "10K", value: 10000 },
  { label: "25K", value: 25000 },
  { label: "50K", value: 50000 },
  { label: "100K", value: 100000 },
  { label: "250K", value: 250000 },
];

const pricePresets = [
  { label: "\u20AC50", value: 50 },
  { label: "\u20AC100", value: 100 },
  { label: "\u20AC150", value: 150 },
  { label: "\u20AC200", value: 200 },
];

function formatCurrency(n: number): string {
  if (n >= 1000000) {
    return `\u20AC${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (n >= 1000) {
    return `\u20AC${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  }
  return `\u20AC${n.toLocaleString()}`;
}

const sliderClass =
  "w-full h-2 bg-brand-border rounded-full appearance-none cursor-pointer accent-brand-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(201,176,107,0.3)]";

const inputClass =
  "bg-transparent text-brand-gold font-montserrat font-bold text-lg text-right w-[100px] border border-brand-border rounded-lg px-3 py-1.5 focus:border-brand-gold/50 focus:outline-none transition-colors";

export default function Calculator() {
  const [followers, setFollowers] = useState(50000);
  const [engagement, setEngagement] = useState(3.0);
  const [price, setPrice] = useState(100);
  const { t } = useLanguage();

  const engagedAudience = Math.round(followers * (engagement / 100));
  const buyers = Math.round(engagedAudience * 0.4);
  const revenue = buyers * price;

  const handleFollowerInput = (val: string) => {
    const num = parseInt(val.replace(/\D/g, ""), 10);
    if (!isNaN(num)) setFollowers(Math.min(500000, Math.max(1000, num)));
  };

  const handleEngagementInput = (val: string) => {
    const num = parseFloat(val);
    if (!isNaN(num)) setEngagement(Math.min(10, Math.max(0.5, num)));
  };

  const handlePriceInput = (val: string) => {
    const num = parseInt(val.replace(/\D/g, ""), 10);
    if (!isNaN(num)) setPrice(Math.min(500, Math.max(10, num)));
  };

  return (
    <section id="calculator" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[11px] tracking-[4px] text-brand-gold uppercase block mb-3.5">
            {t("calc.label")}
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-tight mb-3">
            {t("calc.headline")}{" "}
            <span className="gold-text">{t("calc.headlineAccent")}</span> {t("calc.headlineEnd")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-brand-gray text-[15px] leading-relaxed max-w-xl mb-12">
            {t("calc.subhead")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-brand-section border border-brand-border rounded-2xl p-8 md:p-10">
            {/* Follower count */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="font-space text-[11px] tracking-[3px] text-brand-gray uppercase">
                  {t("calc.followerCount")}
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={followers >= 1000 ? `${(followers / 1000).toFixed(0)}K` : followers}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[Kk]/g, "000").replace(/\D/g, "");
                    handleFollowerInput(raw);
                  }}
                  className={inputClass}
                />
              </div>

              <input
                type="range"
                min={5000}
                max={500000}
                step={1000}
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className={sliderClass}
              />

              <div className="flex gap-2 mt-3">
                {followerPresets.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setFollowers(p.value)}
                    className={`font-space text-[11px] tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                      followers === p.value
                        ? "border-brand-gold/40 text-brand-gold bg-brand-gold/[0.08]"
                        : "border-brand-border text-brand-gray hover:border-brand-gold/20 hover:text-brand-gold"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Engagement rate */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="font-space text-[11px] tracking-[3px] text-brand-gray uppercase">
                  {t("calc.engagementRate")}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    inputMode="decimal"
                    value={engagement.toFixed(1)}
                    onChange={(e) => handleEngagementInput(e.target.value)}
                    className={`${inputClass} w-[80px]`}
                  />
                  <span className="font-montserrat font-bold text-brand-gold text-lg">%</span>
                </div>
              </div>

              <input
                type="range"
                min={0.5}
                max={10}
                step={0.1}
                value={engagement}
                onChange={(e) => setEngagement(Number(e.target.value))}
                className={sliderClass}
              />

              <p className="font-space text-[11px] text-brand-gray-dark mt-2">
                {t("calc.engagementNote")} <span className="text-brand-gold">{t("calc.engagementNoteValue")}</span>. {t("calc.engagementNoteSuffix")}{" "}
                <a
                  href="https://socialblade.com/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline"
                >
                  {t("calc.engagementNoteLink")}
                </a>
                {" "}{t("calc.engagementNoteFree")}
              </p>
            </div>

            {/* Product price */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <label className="font-space text-[11px] tracking-[3px] text-brand-gray uppercase">
                  {t("calc.productPrice")}
                </label>
                <div className="flex items-center gap-1">
                  <span className="font-montserrat font-bold text-brand-gold text-lg">&euro;</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={price}
                    onChange={(e) => handlePriceInput(e.target.value)}
                    className={`${inputClass} w-[80px]`}
                  />
                </div>
              </div>

              <input
                type="range"
                min={20}
                max={500}
                step={5}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className={sliderClass}
              />

              <div className="flex gap-2 mt-3">
                {pricePresets.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPrice(p.value)}
                    className={`font-space text-[11px] tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                      price === p.value
                        ? "border-brand-gold/40 text-brand-gold bg-brand-gold/[0.08]"
                        : "border-brand-border text-brand-gray hover:border-brand-gold/20 hover:text-brand-gold"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-brand-border mb-8" />

            {/* Breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <span className="font-montserrat font-bold text-brand-white text-xl md:text-2xl">
                  {engagedAudience.toLocaleString()}
                </span>
                <span className="block font-space text-[11px] tracking-[2px] text-brand-gray uppercase mt-1">
                  {t("calc.engagedAudience")}
                </span>
              </div>
              <div className="text-center">
                <span className="font-montserrat font-bold text-brand-gold text-xl md:text-2xl">
                  {buyers.toLocaleString()}
                </span>
                <span className="block font-space text-[11px] tracking-[2px] text-brand-gray uppercase mt-1">
                  {t("calc.estimatedBuyers")}
                </span>
              </div>
              <div className="text-center">
                <span className="font-montserrat font-bold text-brand-white text-xl md:text-2xl">
                  &euro;{price}
                </span>
                <span className="block font-space text-[11px] tracking-[2px] text-brand-gray uppercase mt-1">
                  {t("calc.productPriceLabel")}
                </span>
              </div>
            </div>

            {/* Revenue result */}
            <div className="bg-gradient-to-r from-brand-section to-[#0D3B0D] border border-brand-green/20 rounded-2xl px-8 py-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
              <p className="font-space text-[11px] tracking-[3px] text-brand-gray uppercase mb-2">
                {t("calc.resultLabel")}
              </p>
              <p className="font-montserrat font-black text-[clamp(40px,6vw,64px)] leading-none text-brand-green">
                {formatCurrency(revenue)}
              </p>
              <p className="font-space text-[11px] text-brand-gray mt-3">
                {(followers / 1000).toFixed(0)}K {t("calc.formulaFollowers")} &times; {engagement.toFixed(1)}% {t("calc.formulaEngagement")} &times; 40% {t("calc.formulaConversion")} &times; &euro;{price} {t("calc.formulaProduct")}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button
                onClick={() =>
                  document
                    .querySelector("#apply")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase bg-brand-gold/90 text-brand-black px-8 py-4 rounded-[10px] hover:bg-brand-gold-bright transition-all duration-300 shadow-[0_0_30px_rgba(201,176,107,0.15)]"
              >
                {t("calc.cta")}
              </button>
              <p className="text-[13px] text-brand-gray-dark mt-3">
                {t("calc.ctaNote")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
