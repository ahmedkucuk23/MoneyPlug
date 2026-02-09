"use client";


export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/images/logo-mpl.png"
              alt="Money Plug Lab"
              width={60}
              height={60}
            />
            <div>
              <span className="font-montserrat font-black text-sm tracking-[3px] text-brand-gold block">
                MONEY PLUG LAB™
              </span>
              <span className="font-space text-[10px] text-brand-gray tracking-wider">
                Influencer Monetization Operator
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://instagram.com/moneyplug.ak"
              target="_blank"
              rel="noopener noreferrer"
              className="font-space text-[11px] tracking-wider text-brand-gray hover:text-brand-gold transition-colors"
            >
              @moneyplug.ak
            </a>
            <span className="text-brand-border hidden sm:inline">|</span>
            <a
              href="https://instagram.com/moneypluglab"
              target="_blank"
              rel="noopener noreferrer"
              className="font-space text-[11px] tracking-wider text-brand-gray hover:text-brand-gold transition-colors"
            >
              @moneypluglab
            </a>
            <span className="text-brand-border hidden sm:inline">|</span>
            <a
              href="mailto:info@money-plug.com"
              className="font-space text-[11px] tracking-wider text-brand-gray hover:text-brand-gold transition-colors"
            >
              info@money-plug.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-border text-center">
          <p className="font-space text-[10px] text-brand-gray-dark tracking-[3px]">
            © 2026 Money Plug Lab™
          </p>
        </div>
      </div>
    </footer>
  );
}
