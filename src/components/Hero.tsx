"use client";

import { motion } from "framer-motion";
import GoldParticles from "./GoldParticles";
import CounterAnimation from "./CounterAnimation";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Sales",
    color: "gold" as const,
    desc: "from a single launch, 4 days, zero ad spend",
  },
  {
    value: 9.7,
    suffix: "K",
    prefix: "€",
    label: "Revenue",
    color: "green" as const,
    desc: "generated from 26K followers",
    decimals: 1,
  },
  {
    value: 0.38,
    suffix: "%",
    label: "Conversion",
    color: "white" as const,
    desc: "industry avg is 0.1%",
    decimals: 2,
  },
  {
    value: 400,
    suffix: "+",
    label: "Creators",
    color: "gold" as const,
    desc: "managed through Mita Agency",
  },
];

const colorMap = {
  gold: "text-brand-gold",
  green: "text-brand-green",
  white: "text-brand-white",
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-circuit-grid">
      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(201,176,107,0.07)_0%,transparent_65%)] pointer-events-none" />

      {/* Particles */}
      <GoldParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block border border-brand-gold/30 px-6 py-2 mb-8"
            >
              <span className="font-space text-[10px] tracking-[6px] text-brand-gold uppercase">
                MONEY PLUG LAB™
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-montserrat font-black text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight mb-6"
            >
              I Plug Influencers
              <br />
              Into <span className="gold-text">Money</span> They
              <br />
              Didn&apos;t Know Existed
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-brand-gray text-[15px] leading-relaxed max-w-lg mb-10"
            >
              The shadow operator behind creator product launches that actually
              sell. From audience psychology to payment processing — I engineer
              the entire revenue system.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#apply")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase bg-brand-gold text-brand-black px-8 py-4 hover:bg-brand-gold-bright transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,176,107,0.3)]"
              >
                APPLY TO WORK WITH ME →
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#proof")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase border border-brand-gold/40 text-brand-gold px-8 py-4 hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
              >
                SEE RESULTS
              </button>
            </motion.div>
          </div>

          {/* Right - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-brand-card/80 backdrop-blur-sm border border-brand-border rounded-lg overflow-hidden"
          >
            {/* Gold top border */}
            <div className="h-[3px] bg-gold-gradient-h" />

            <div className="p-6 space-y-1">
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
                    <p className="font-space text-[10px] text-brand-gray tracking-wide">
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
