"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const followerPresets = [
  { label: "10K", value: 10000 },
  { label: "25K", value: 25000 },
  { label: "50K", value: 50000 },
  { label: "100K", value: 100000 },
  { label: "250K", value: 250000 },
];

const pricePresets = [
  { label: "€50", value: 50 },
  { label: "€100", value: 100 },
  { label: "€150", value: 150 },
  { label: "€200", value: 200 },
];

function formatCurrency(n: number): string {
  if (n >= 1000000) {
    return `€${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (n >= 1000) {
    return `€${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  }
  return `€${n.toLocaleString()}`;
}

export default function Calculator() {
  const [followers, setFollowers] = useState(50000);
  const [engagement, setEngagement] = useState(3.0);
  const [price, setPrice] = useState(100);

  const engagedAudience = Math.round(followers * (engagement / 100));
  const buyers = Math.round(engagedAudience * 0.5);
  const revenue = buyers * price;

  return (
    <section id="calculator" className="relative py-24 md:py-32 bg-brand-black">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[9px] tracking-[4px] text-brand-gold uppercase block mb-3.5">
            REVENUE CALCULATOR
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-montserrat font-black text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-tight mb-3">
            How much money can{" "}
            <span className="gold-text">your audience</span> generate?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-brand-gray text-[15px] leading-relaxed max-w-xl mb-12">
            Enter your numbers. See what one launch could make you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-brand-section border border-brand-border rounded-2xl p-8 md:p-10">
            {/* Follower count */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase">
                  FOLLOWER COUNT
                </label>
                <span className="font-montserrat font-bold text-brand-gold text-lg">
                  {followers >= 1000
                    ? `${(followers / 1000).toFixed(0)}K`
                    : followers}
                </span>
              </div>

              <input
                type="range"
                min={5000}
                max={500000}
                step={1000}
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full h-1.5 bg-brand-border rounded-full appearance-none cursor-pointer accent-brand-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />

              <div className="flex gap-2 mt-3">
                {followerPresets.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setFollowers(p.value)}
                    className={`font-space text-[10px] tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-200 ${
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
                <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase">
                  ENGAGEMENT RATE
                </label>
                <span className="font-montserrat font-bold text-brand-gold text-lg">
                  {engagement.toFixed(1)}%
                </span>
              </div>

              <input
                type="range"
                min={0.5}
                max={10}
                step={0.1}
                value={engagement}
                onChange={(e) => setEngagement(Number(e.target.value))}
                className="w-full h-1.5 bg-brand-border rounded-full appearance-none cursor-pointer accent-brand-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />

              <p className="font-space text-[10px] text-brand-gray-dark mt-2">
                Average for most creators: <span className="text-brand-gold">3%</span>. Don&apos;t know yours? Search your @handle on{" "}
                <a
                  href="https://socialblade.com/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline"
                >
                  socialblade.com/instagram
                </a>
                {" "}— it&apos;s free.
              </p>
            </div>

            {/* Product price */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase">
                  PRODUCT PRICE
                </label>
                <span className="font-montserrat font-bold text-brand-gold text-lg">
                  €{price}
                </span>
              </div>

              <input
                type="range"
                min={20}
                max={500}
                step={5}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-brand-border rounded-full appearance-none cursor-pointer accent-brand-gold [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-brand-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />

              <div className="flex gap-2 mt-3">
                {pricePresets.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPrice(p.value)}
                    className={`font-space text-[10px] tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-200 ${
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
                <span className="block font-space text-[9px] tracking-[2px] text-brand-gray uppercase mt-1">
                  Engaged Audience
                </span>
              </div>
              <div className="text-center">
                <span className="font-montserrat font-bold text-brand-gold text-xl md:text-2xl">
                  {buyers.toLocaleString()}
                </span>
                <span className="block font-space text-[9px] tracking-[2px] text-brand-gray uppercase mt-1">
                  Estimated Buyers
                </span>
              </div>
              <div className="text-center">
                <span className="font-montserrat font-bold text-brand-white text-xl md:text-2xl">
                  €{price}
                </span>
                <span className="block font-space text-[9px] tracking-[2px] text-brand-gray uppercase mt-1">
                  Product Price
                </span>
              </div>
            </div>

            {/* Revenue result */}
            <div className="bg-gradient-to-r from-brand-section to-[#0D3B0D] border border-brand-green/20 rounded-2xl px-8 py-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent" />
              <p className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase mb-2">
                ESTIMATED FIRST LAUNCH REVENUE
              </p>
              <p className="font-montserrat font-black text-[clamp(40px,6vw,64px)] leading-none text-brand-green">
                {formatCurrency(revenue)}
              </p>
              <p className="font-space text-[11px] text-brand-gray mt-3">
                {(followers / 1000).toFixed(0)}K followers × {engagement.toFixed(1)}% engagement × 50% conversion × €{price} product
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
                I WANT THIS REVENUE →
              </button>
              <p className="text-[13px] text-brand-gray-dark mt-3">
                Free consultation. I&apos;ll personally analyze your account.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
