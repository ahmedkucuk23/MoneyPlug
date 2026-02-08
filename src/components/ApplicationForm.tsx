"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const followerOptions = [
  "Under 10K",
  "10K–25K",
  "25K–50K",
  "50K–100K",
  "100K–250K",
  "250K–500K",
  "500K+",
];

const nicheOptions = [
  "Fitness",
  "Lifestyle",
  "Education",
  "Beauty",
  "Wellness",
  "Business",
  "Food",
  "Other",
];

const revenueOptions = ["€0", "€1–500", "€500–2K", "€2K–5K", "€5K+"];

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission — replace with actual webhook/API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  const inputBase =
    "w-full bg-brand-black border border-brand-border rounded-lg px-5 py-4 text-brand-white font-space text-[13px] placeholder:text-brand-gray-dark focus:border-brand-gold transition-colors duration-300";

  const selectBase =
    "w-full bg-brand-black border border-brand-border rounded-lg px-5 py-4 text-brand-white font-space text-[13px] appearance-none cursor-pointer focus:border-brand-gold transition-colors duration-300";

  return (
    <section id="apply" className="relative py-24 md:py-32 bg-brand-black">
      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,176,107,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Label */}
        <ScrollReveal>
          <span className="font-space text-[10px] tracking-[5px] text-brand-gold uppercase block mb-4 text-center">
            LIMITED SPOTS
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-[clamp(36px,5vw,56px)] tracking-[5px] leading-none mb-4 text-center">
            Apply to <span className="gold-text">Work With Me</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-brand-gray text-[14px] leading-relaxed text-center max-w-xl mx-auto mb-12">
            I only work with 5 creators per quarter. Not everyone qualifies.
            Fill out the application — if we&apos;re a fit, I&apos;ll reach out
            within 48 hours.
          </p>
        </ScrollReveal>

        {/* Form Card */}
        <ScrollReveal delay={0.2}>
          <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden">
            {/* Gold top border */}
            <div className="h-[3px] bg-gold-gradient-h" />

            <div className="p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <span className="text-4xl mb-4 block">✓</span>
                  <h3 className="font-montserrat font-bold text-2xl text-brand-gold mb-3">
                    Application Received
                  </h3>
                  <p className="font-space text-[13px] text-brand-gray">
                    If we&apos;re a fit, you&apos;ll hear from me within 48
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row: Name + Instagram */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase block mb-2">
                        Instagram Handle
                      </label>
                      <input
                        type="text"
                        name="instagram"
                        required
                        placeholder="@yourhandle"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Row: Followers + Niche */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase block mb-2">
                        Follower Count
                      </label>
                      <div className="relative">
                        <select
                          name="followers"
                          required
                          defaultValue=""
                          className={selectBase}
                        >
                          <option value="" disabled>
                            Select range
                          </option>
                          {followerOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none text-xs">
                          ▼
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase block mb-2">
                        Niche
                      </label>
                      <div className="relative">
                        <select
                          name="niche"
                          required
                          defaultValue=""
                          className={selectBase}
                        >
                          <option value="" disabled>
                            Select niche
                          </option>
                          {nicheOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none text-xs">
                          ▼
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Current Revenue */}
                  <div>
                    <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase block mb-2">
                      Current Monthly Revenue from Audience
                    </label>
                    <div className="relative">
                      <select
                        name="revenue"
                        required
                        defaultValue=""
                        className={selectBase}
                      >
                        <option value="" disabled>
                          Select range
                        </option>
                        {revenueOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none text-xs">
                        ▼
                      </span>
                    </div>
                  </div>

                  {/* Biggest Challenge */}
                  <div>
                    <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase block mb-2">
                      Biggest Challenge
                    </label>
                    <textarea
                      name="challenge"
                      required
                      rows={4}
                      placeholder="What's the #1 thing stopping you from making more money from your audience?"
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {/* Contact Email */}
                  <div>
                    <label className="font-space text-[9px] tracking-[3px] text-brand-gray uppercase block mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className={inputBase}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-montserrat font-bold text-[13px] tracking-[2px] uppercase bg-brand-gold text-brand-black py-5 rounded-lg hover:bg-brand-gold-bright hover:shadow-[0_0_40px_rgba(201,176,107,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
                        SUBMITTING...
                      </span>
                    ) : (
                      "SUBMIT APPLICATION →"
                    )}
                  </button>

                  {/* Note */}
                  <p className="font-space text-[10px] text-brand-gray-dark text-center tracking-wide pt-2">
                    Currently accepting 5 creators for Q1 2026. Applications
                    reviewed within 48 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
