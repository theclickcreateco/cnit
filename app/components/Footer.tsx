import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-24 bg-surface-container-low border-t border-outline-variant/10 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-16">
          <div className="space-y-8 lg:max-w-md">
            <div className="font-headline font-black text-2xl text-on-background uppercase tracking-tighter">
              The Authority Approach
            </div>
            <p className="font-body text-base leading-relaxed text-on-surface-variant max-w-sm">
              Strategic intelligence for global leaders. Engineering high-performance digital systems that dominate markets.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-24 gap-y-12">
            <div className="space-y-6">
              <h5 className="text-on-background font-headline font-black text-xs uppercase tracking-[0.4em]">Ecosystem</h5>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium" href="#">Privacy Policy</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium" href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-on-background font-headline font-black text-xs uppercase tracking-[0.4em]">Intelligence</h5>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium" href="#">Executive Briefing</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium" href="#">Global Network</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-body text-xs text-on-surface-variant tracking-wider uppercase">
            © 2026 CN IT Solutions. All Rights Reserved. Strategic Intelligence for Global Leaders.
          </div>
          <div className="flex gap-6">
            <div className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center cursor-pointer hover:bg-primary-container hover:text-white hover:border-transparent transition-all">
              <span className="material-symbols-outlined text-base">share</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center cursor-pointer hover:bg-primary-container hover:text-white hover:border-transparent transition-all">
              <span className="material-symbols-outlined text-base">mail</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
