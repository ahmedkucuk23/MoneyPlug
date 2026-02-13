"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t("nav.system"), href: "#system" },
    { label: t("nav.software"), href: "#different" },
    { label: t("nav.proof"), href: "#proof" },
    { label: t("nav.calculator"), href: "#calculator" },
    { label: t("nav.deliverables"), href: "#pipeline" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setLangOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const selectLang = (l: "en" | "bs") => {
    setLang(l);
    setLangOpen(false);
  };

  const currentFlag = lang === "en" ? "\uD83C\uDDEC\uD83C\uDDE7" : "\uD83C\uDDE7\uD83C\uDDE6\uD83C\uDDED\uD83C\uDDF7\uD83C\uDDF7\uD83C\uDDF8";
  const currentLabel = lang === "en" ? "EN" : "BHS";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/90 backdrop-blur-xl border-b border-brand-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="select-none flex items-center"
          >
            <img
              src="/images/logo-header.png"
              alt="Money Plug Lab"
              style={{ height: '38px', width: 'auto', maxWidth: 'none' }}
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-space text-[11px] tracking-[2.5px] uppercase text-brand-gray hover:text-brand-gold transition-colors duration-300 font-semibold"
              >
                {link.label}
              </button>
            ))}

            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 font-space text-[11px] tracking-[2px] uppercase text-brand-gray hover:text-brand-white transition-colors duration-300 font-semibold py-1"
              >
                <span className="text-sm leading-none">{currentFlag}</span>
                <span>{currentLabel}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-3 w-[220px] bg-brand-section border border-brand-border rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-50"
                  >
                    <button
                      onClick={() => selectLang("en")}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors duration-200 ${
                        lang === "en"
                          ? "bg-brand-gold/[0.08] text-brand-gold"
                          : "text-brand-gray hover:text-brand-white hover:bg-white/[0.03]"
                      }`}
                    >
                      <span className="text-base leading-none">{"\uD83C\uDDEC\uD83C\uDDE7"}</span>
                      <span className="font-space text-[12px] tracking-[1px] font-semibold">English</span>
                    </button>
                    <div className="h-px bg-brand-border" />
                    <button
                      onClick={() => selectLang("bs")}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors duration-200 ${
                        lang === "bs"
                          ? "bg-brand-gold/[0.08] text-brand-gold"
                          : "text-brand-gray hover:text-brand-white hover:bg-white/[0.03]"
                      }`}
                    >
                      <span className="text-base leading-none flex gap-0.5">{"\uD83C\uDDE7\uD83C\uDDE6"}{"\uD83C\uDDED\uD83C\uDDF7"}{"\uD83C\uDDF7\uD83C\uDDF8"}</span>
                      <div>
                        <span className="font-space text-[12px] tracking-[1px] font-semibold block">BHS</span>
                        <span className="font-space text-[9px] tracking-[0.5px] text-brand-gray-dark">Bosanski / Hrvatski / Srpski</span>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollTo("#apply")}
              className="font-montserrat font-bold text-[11px] tracking-[2px] uppercase bg-brand-gold text-brand-black px-6 py-2.5 hover:bg-brand-gold-bright transition-colors duration-300"
            >
              {t("nav.applyNow")}
            </button>
          </div>

          {/* Mobile: Lang + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Dropdown */}
            <div ref={!mobileOpen ? langRef : undefined} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 font-space text-[11px] tracking-[1.5px] uppercase text-brand-gray hover:text-brand-white transition-colors duration-300 font-semibold px-2 py-1.5"
              >
                <span className="text-sm leading-none">{currentFlag}</span>
                <span>{currentLabel}</span>
                <ChevronDown
                  size={10}
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && !mobileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-3 w-[210px] bg-brand-section border border-brand-border rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-50"
                  >
                    <button
                      onClick={() => selectLang("en")}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                        lang === "en"
                          ? "bg-brand-gold/[0.08] text-brand-gold"
                          : "text-brand-gray hover:text-brand-white"
                      }`}
                    >
                      <span className="text-base leading-none">{"\uD83C\uDDEC\uD83C\uDDE7"}</span>
                      <span className="font-space text-[12px] tracking-[1px] font-semibold">English</span>
                    </button>
                    <div className="h-px bg-brand-border" />
                    <button
                      onClick={() => selectLang("bs")}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                        lang === "bs"
                          ? "bg-brand-gold/[0.08] text-brand-gold"
                          : "text-brand-gray hover:text-brand-white"
                      }`}
                    >
                      <span className="text-base leading-none flex gap-0.5">{"\uD83C\uDDE7\uD83C\uDDE6"}{"\uD83C\uDDED\uD83C\uDDF7"}{"\uD83C\uDDF7\uD83C\uDDF8"}</span>
                      <div>
                        <span className="font-space text-[12px] tracking-[1px] font-semibold block">BHS</span>
                        <span className="font-space text-[9px] tracking-[0.5px] text-brand-gray-dark">Bosanski / Hrvatski / Srpski</span>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => { setMobileOpen(!mobileOpen); setLangOpen(false); }}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-brand-gold"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[2px] bg-brand-gold"
              />
              <motion.span
                animate={
                  mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-[2px] bg-brand-gold"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl pt-28 px-8 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-bebas text-3xl tracking-[4px] text-brand-white hover:text-brand-gold transition-colors text-left"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                onClick={() => scrollTo("#apply")}
                className="font-montserrat font-bold text-sm tracking-[2px] bg-brand-gold text-brand-black px-8 py-4 mt-4 w-fit"
              >
                {t("nav.applyNow")}
              </motion.button>
            </div>

            {/* Mobile Language Selector */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex gap-3"
            >
              <button
                onClick={() => selectLang("en")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                  lang === "en"
                    ? "border-brand-gold/30 text-brand-gold bg-brand-gold/[0.06]"
                    : "border-brand-border text-brand-gray hover:border-brand-gold/20"
                }`}
              >
                <span className="text-base leading-none">{"\uD83C\uDDEC\uD83C\uDDE7"}</span>
                <span className="font-space text-[11px] tracking-[1.5px] font-semibold">EN</span>
              </button>
              <button
                onClick={() => selectLang("bs")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                  lang === "bs"
                    ? "border-brand-gold/30 text-brand-gold bg-brand-gold/[0.06]"
                    : "border-brand-border text-brand-gray hover:border-brand-gold/20"
                }`}
              >
                <span className="text-sm leading-none flex gap-0.5">{"\uD83C\uDDE7\uD83C\uDDE6"}{"\uD83C\uDDED\uD83C\uDDF7"}{"\uD83C\uDDF7\uD83C\uDDF8"}</span>
                <span className="font-space text-[11px] tracking-[1.5px] font-semibold">BHS</span>
              </button>
            </motion.div>

            {/* Social links */}
            <div className="mt-auto pb-12 flex gap-6 justify-center">
              <a href="https://instagram.com/moneyplug.ak" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
