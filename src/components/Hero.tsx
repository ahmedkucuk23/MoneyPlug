"use client";

import { motion } from "framer-motion";
import GoldParticles from "./GoldParticles";
import CounterAnimation from "./CounterAnimation";

const stats = [
  {
    value: 150,
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
    desc: "from an Instagram creator with 26K followers",
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
    value: 5,
    suffix: "",
    label: "Stars",
    color: "gold" as const,
    desc: "rated by 50+ members",
  },
];

const colorMap = {
  gold: "text-brand-gold",
  green: "text-brand-green",
  white: "text-brand-white",
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-depth">
      {/* Gold ambient glow */}
      <div className="absolute inset-0 bg-gold-ambient pointer-events-none" />
      {/* Secondary glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,176,107,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Particles */}
      <GoldParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-space text-[10px] tracking-[5px] text-brand-gold uppercase block mb-4"
            >
              WHO AM I?
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-12 h-[2px] bg-gold-gradient-h mb-8 mx-auto lg:mx-0"
            />

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-montserrat font-black text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight mb-6 uppercase"
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
              className="font-space text-brand-cream text-[14px] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              We build, launch &amp; sell digital products for influencers.
              I build your digital product and give you a step-by-step plan
              to sell it. All powered by software built by me specifically
              for influencers and digital creators.{" "}
              <strong>You pay me €0 upfront.</strong> I work on commission.
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
                APPLY TO WORK WITH ME →
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#proof")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-montserrat font-bold text-[12px] tracking-[2px] uppercase border border-brand-gold/40 text-brand-gold px-8 py-4 bg-white/[0.05] backdrop-blur-md hover:border-brand-gold hover:bg-white/[0.1] transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
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
            className="bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-lg overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.4)]"
          >
            {/* Gold top border */}
            <div className="h-[3px] bg-gold-gradient-h" />

            <div className="p-6 pb-0">
              <span className="font-space text-[10px] tracking-[4px] text-brand-gold uppercase block mb-2">
                LAST PROJECT NUMBERS:
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
