"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <section className="pt-40 pb-16 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-[10px] font-bold tracking-widest uppercase rounded-full border border-primary/20">
              Partner With Us
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-background tracking-tighter">
              Let's engineer your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">breakthrough.</span>
            </h1>
            <p className="text-on-surface-variant text-xl font-light leading-relaxed">
              Whether you need strategic architecture, systemic growth, or a complete digital overhaul, drop us a line. We review every inquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface min-h-[50vh] relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold text-on-background">Direct Contact</h3>
                <a href="mailto:partner@cnitsolutions.com" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="block font-label text-[10px] tracking-widest uppercase font-bold text-on-surface-variant/50">Email</span>
                    <span className="text-lg font-medium">partner@cnitsolutions.com</span>
                  </div>
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold text-on-background">Connect</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all hover:scale-110 group">
                     {/* Using SVG for precise branding, fallback to material icon for layout structure */}
                     <span className="font-headline font-bold text-lg">in</span>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-[#E1306C] hover:text-white transition-all hover:scale-110 group">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-black hover:text-white transition-all hover:scale-110 group border border-transparent hover:border-white/20">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/20 shadow-premium relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                      <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="text-3xl font-headline font-bold text-on-background mb-4">Message Received.</h3>
                    <p className="text-on-surface-variant leading-relaxed max-w-sm mx-auto">
                      Our intelligence layer has logged your request. We will be in touch shortly to architect the next steps.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-8 py-3 bg-surface border border-outline-variant/30 rounded-xl font-label text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10 outline-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-on-background font-label text-xs font-bold uppercase tracking-widest block">Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-surface border border-outline-variant/30 rounded-xl p-4 text-on-background focus:border-primary outline-none transition-colors placeholder:text-on-surface-variant/30" 
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-on-background font-label text-xs font-bold uppercase tracking-widest block">Email</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-surface border border-outline-variant/30 rounded-xl p-4 text-on-background focus:border-primary outline-none transition-colors placeholder:text-on-surface-variant/30" 
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-on-background font-label text-xs font-bold uppercase tracking-widest block">Subject</label>
                      <input 
                        type="text" 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-surface border border-outline-variant/30 rounded-xl p-4 text-on-background focus:border-primary outline-none transition-colors placeholder:text-on-surface-variant/30" 
                        placeholder="e.g. System Integration Inquiry"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-on-background font-label text-xs font-bold uppercase tracking-widest block">Message</label>
                      <textarea 
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-surface border border-outline-variant/30 rounded-xl p-4 text-on-background focus:border-primary outline-none transition-colors resize-none placeholder:text-on-surface-variant/30" 
                        placeholder="Outline your requirements or current bottleneck..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium flex items-center gap-3">
                        <span className="material-symbols-outlined">error</span>
                        System failure. Unable to process transmission. Please try again.
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-5 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-sm hover:bg-white transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                           <span className="material-symbols-outlined animate-spin font-light">progress_activity</span>
                           Transmitting...
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined font-light">send</span>
                          Transmit Request
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-on-surface-variant/50 font-medium">Your data is secured through end-to-end encryption.</p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
