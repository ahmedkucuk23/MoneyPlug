"use client";

import { Shield, Zap, Users, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const featureIcons = [Shield, Zap, Users, Lock];

export default function Platform() {
  const { t } = useLanguage();

  const features = [
    { Icon: featureIcons[0], title: t("platform.feat1Title"), desc: t("platform.feat1Desc") },
    { Icon: featureIcons[1], title: t("platform.feat2Title"), desc: t("platform.feat2Desc") },
    { Icon: featureIcons[2], title: t("platform.feat3Title"), desc: t("platform.feat3Desc") },
    { Icon: featureIcons[3], title: t("platform.feat4Title"), desc: t("platform.feat4Desc") },
  ];

  return (
    <section className="relative py-16 md:py-28 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Top centered header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-space text-[12px] tracking-[3px] text-brand-gray uppercase mb-5 flex items-center justify-center gap-3">
              {t("platform.hostedOn")}
              <img src="/images/whop-logo.svg" alt="Whop" className="h-[22px] inline-block" />
            </p>

            <h2 className="font-montserrat font-black text-[clamp(30px,5vw,52px)] leading-[1.05] tracking-tight mb-5">
              {t("platform.headline")}{" "}
              <span className="gold-text">{t("platform.headlineAccent")}</span>
            </h2>

            <p className="text-brand-gray text-[15px] leading-relaxed max-w-2xl mx-auto">
              {t("platform.desc1")}{" "}
              <span className="text-brand-white font-semibold">{t("platform.descBold1")}</span>{" "}
              {t("platform.desc2")}{" "}
              <span className="text-brand-white font-semibold">{t("platform.descBold2")}</span>{" "}
              {t("platform.desc3")}
            </p>
          </div>
        </ScrollReveal>

        {/* Split: Phone mockup left / Features right */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] gap-10 md:gap-14 items-center">
            {/* Phone mockup with video */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-[240px] md:w-[280px]">
                {/* Phone frame */}
                <div className="rounded-[32px] border-[3px] border-[#2A2A2A] bg-brand-black p-[6px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                  {/* Notch */}
                  <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-brand-black rounded-b-2xl z-20" />
                  {/* Screen */}
                  <div className="rounded-[26px] overflow-hidden bg-[#111]">
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
                {/* Sold out badge */}
                <div className="absolute -bottom-4 -right-4 bg-brand-section border border-brand-green/30 rounded-xl px-4 py-2.5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <span className="font-montserrat font-black text-brand-green text-sm block leading-tight">
                    {t("platform.soldOut")}
                  </span>
                  <span className="font-space text-[9px] tracking-[1.5px] text-brand-gray uppercase">
                    {t("platform.soldOutProduct")}
                  </span>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div>
              <h3 className="font-montserrat font-bold text-xl text-brand-white mb-6">
                {t("platform.whyWhop")}
              </h3>
              <div className="space-y-5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center flex-shrink-0">
                      <f.Icon size={18} strokeWidth={1.5} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-[14px] text-brand-white mb-1">
                        {f.title}
                      </h4>
                      <p className="text-[12px] text-brand-gray leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
