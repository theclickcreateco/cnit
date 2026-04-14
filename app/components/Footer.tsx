import React from 'react';
import { Mail } from 'lucide-react';
import { Linkedin, Instagram, Twitter } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="w-full py-24 bg-surface-container-low border-t border-outline-variant/10 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-16">
          <div className="space-y-8 lg:max-w-md">
            <div className="font-headline font-black text-2xl text-on-background uppercase tracking-tighter">
              CN IT Solutions
            </div>
            <p className="font-body text-base leading-relaxed text-on-surface-variant max-w-sm">
              Strategic intelligence for global leaders. Engineering high-performance digital systems that dominate markets.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-body text-xs text-on-surface-variant tracking-wider uppercase">
            © 2026 CN IT Solutions. All Rights Reserved. Strategic Intelligence for Global Leaders.
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/112568314/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-outline-variant/50 flex items-center justify-center cursor-pointer hover:bg-primary-container hover:text-white hover:border-transparent transition-all group">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-outline-variant/50 flex items-center justify-center cursor-pointer hover:bg-[#E1306C] hover:text-white hover:border-transparent transition-all group">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-outline-variant/50 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white hover:border-transparent transition-all group">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a href="/contact" className="w-11 h-11 rounded-full border border-outline-variant/50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white hover:border-transparent transition-all">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
