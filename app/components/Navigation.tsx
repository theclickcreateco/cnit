"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
          <a href="/" className="text-lg md:text-xl font-black tracking-tighter text-on-background uppercase font-headline cursor-pointer active:scale-95 transition-transform">
            The Authority Approach
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a className="font-headline font-bold text-xs tracking-widest text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer active:scale-95 uppercase" href="/#modules">Modules</a>
            <a className="font-headline font-bold text-xs tracking-widest text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer active:scale-95 uppercase" href="/#roi">Logic</a>
            <a className="font-headline font-bold text-xs tracking-widest text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer active:scale-95 uppercase" href="/#partnership">Partnership</a>
            <a 
              className={`font-headline font-bold text-xs tracking-widest transition-colors cursor-pointer active:scale-95 uppercase ${pathname === '/about' ? 'text-primary' : 'text-on-surface/60 hover:text-on-surface'}`} 
              href="/about"
            >
              About
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-primary-container text-on-primary px-8 py-3 rounded-lg font-headline font-bold text-xs tracking-widest uppercase hover:bg-primary-container/90 transition-all active:scale-95 cursor-pointer">
              Free Audit
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-outline-variant/10 z-50 px-4 py-2 flex justify-around items-center">
        <a href="/#modules" className="flex flex-col items-center gap-1 p-2 text-on-surface-variant hover:text-primary-container transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-2xl">architecture</span>
          <span className="text-[10px] font-label font-bold uppercase tracking-tighter">Modules</span>
        </a>
        <a href="/#roi" className="flex flex-col items-center gap-1 p-2 text-on-surface-variant hover:text-primary-container transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-2xl">analytics</span>
          <span className="text-[10px] font-label font-bold uppercase tracking-tighter">Logic</span>
        </a>
        <a href="/about" className={`flex flex-col items-center gap-1 p-2 transition-colors cursor-pointer ${pathname === '/about' ? 'text-primary-container' : 'text-on-surface-variant hover:text-primary-container'}`}>
          <span className="material-symbols-outlined text-2xl">info</span>
          <span className="text-[10px] font-label font-bold uppercase tracking-tighter">About</span>
        </a>
        <button className="flex flex-col items-center gap-1 p-2 text-on-surface-variant hover:text-primary-container transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-2xl">mail</span>
          <span className="text-[10px] font-label font-bold uppercase tracking-tighter">Contact</span>
        </button>
      </div>
    </>
  );
}
