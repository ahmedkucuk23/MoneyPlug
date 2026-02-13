"use client";

import { Footer as AnimatedFooter } from "@/components/ui/modem-animated-footer";
import { Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const socialLinks = [
  {
    icon: <Instagram className="w-6 h-6" />,
    href: "https://instagram.com/moneyplug.ak",
    label: "@moneyplug.ak",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:info@money-plug.com",
    label: "Email",
  },
];

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("footer.system"), href: "#system" },
    { label: t("footer.proof"), href: "#proof" },
    { label: t("footer.calculator"), href: "#calculator" },
    { label: t("footer.deliverables"), href: "#pipeline" },
    { label: t("footer.apply"), href: "#apply" },
  ];

  return (
    <AnimatedFooter
      brandName="MONEY PLUG™"
      brandDescription={t("footer.description")}
      socialLinks={socialLinks}
      navLinks={navLinks}
      brandIcon={
        <img
          src="/images/logo-mp-gold.png"
          alt="Money Plug"
          className="w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 object-contain"
        />
      }
    />
  );
}
