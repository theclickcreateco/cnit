"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Mail, Calculator, Info, LayoutGrid } from "lucide-react";
import { Linkedin, Instagram, Twitter } from "./BrandIcons";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        {/* Top Ribbon */}
        <div className="hidden md:flex w-full bg-surface-container-highest text-on-surface-variant py-2 px-6 md:px-8 md:justify-between items-center border-b border-outline-variant/10">
          <a
            href="mailto:partner@cnitsolutions.com"
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Mail
              size={14}
              strokeWidth={1.5}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-label text-[10px] font-bold tracking-widest uppercase mt-0.5">
              partner@cnitsolutions.com
            </span>
          </a>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/cnitsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors group"
            >
              <Linkedin
                size={14}
                strokeWidth={1.5}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/cinorium_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition-colors group"
            >
              <Instagram
                size={14}
                strokeWidth={1.5}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://x.com/cinorium_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors group"
            >
              <Twitter
                size={14}
                strokeWidth={1.5}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Main NavBar */}
        <nav className="w-full glass-nav shadow-sm border-b border-outline-variant/5">
          <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
            <a
              href="/"
              className="text-lg md:text-xl font-black tracking-tighter text-on-background uppercase font-headline cursor-pointer active:scale-95 transition-transform"
            >
              CN IT Solutions
            </a>
            <div className="hidden md:flex items-center gap-10">
              <a
                className="font-headline font-bold text-xs tracking-widest text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer active:scale-95 uppercase"
                href="/#modules"
              >
                Modules
              </a>
              <a
                className="font-headline font-bold text-xs tracking-widest text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer active:scale-95 uppercase"
                href="/#roi"
              >
                Logic
              </a>
              <a
                className="font-headline font-bold text-xs tracking-widest text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer active:scale-95 uppercase"
                href="/#partnership"
              >
                Partnership
              </a>
              <a
                className={`font-headline font-bold text-xs tracking-widest transition-colors cursor-pointer active:scale-95 uppercase ${pathname === "/calculators" ? "text-primary" : "text-on-surface/60 hover:text-on-surface"}`}
                href="/calculators"
              >
                Calculators
              </a>
              <a
                className={`font-headline font-bold text-xs tracking-widest transition-colors cursor-pointer active:scale-95 uppercase ${pathname === "/about" ? "text-primary" : "text-on-surface/60 hover:text-on-surface"}`}
                href="/about"
              >
                About
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/contact"
                className="hidden md:block bg-primary-container text-on-primary px-8 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-primary-container/90 transition-all active:scale-95 cursor-pointer text-center"
              >
                Free Audit
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-outline-variant/10 z-50 px-4 py-2 flex justify-around items-center">
        <a
          href="/calculators"
          className={`flex flex-col items-center gap-1 p-2 transition-colors cursor-pointer ${pathname === "/calculators" ? "text-primary-container" : "text-on-surface-variant hover:text-primary-container"}`}
        >
          <Calculator size={20} strokeWidth={1.5} />
          <span className="text-[10px] font-label font-bold uppercase tracking-tighter">
            Tools
          </span>
        </a>
        <a
          href="/about"
          className={`flex flex-col items-center gap-1 p-2 transition-colors cursor-pointer ${pathname === "/about" ? "text-primary-container" : "text-on-surface-variant hover:text-primary-container"}`}
        >
          <Info size={20} strokeWidth={1.5} />
          <span className="text-[10px] font-label font-bold uppercase tracking-tighter">
            About
          </span>
        </a>
        <a
          href="/contact"
          className={`flex flex-col items-center gap-1 p-2 transition-colors cursor-pointer ${pathname === "/contact" ? "text-primary-container" : "text-on-surface-variant hover:text-primary-container"}`}
        >
          <Mail size={20} strokeWidth={1.5} />
          <span className="text-[10px] font-label font-bold uppercase tracking-tighter">
            Contact
          </span>
        </a>
      </div>
    </>
  );
}
