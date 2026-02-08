"use client";

import ScrollReveal from "./ScrollReveal";

const logos = [
  "Samsung",
  "HP",
  "Coca-Cola",
  "United Nations",
  "European Union",
  "US Embassy",
];

export default function LogoBar() {
  return (
    <section className="relative py-16 border-y border-brand-border bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="font-space text-[10px] tracking-[4px] text-brand-gray uppercase text-center mb-10">
            Brands we&apos;ve partnered creators with through Mita Agency
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
            {logos.map((name) => (
              <span
                key={name}
                className="font-montserrat font-bold text-[13px] md:text-[15px] tracking-[4px] uppercase text-brand-gray-dark opacity-40 hover:opacity-100 hover:text-brand-gray-light transition-all duration-500 cursor-default select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
