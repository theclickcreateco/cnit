import React from 'react';
import { Server, Target, Handshake } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-40 pb-20 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale opacity-20"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Engineering framework architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-4xl space-y-8 md:space-y-10">
            <div className="inline-block px-5 py-2 bg-primary-container text-white border border-primary-container/20 rounded-full">
              <span className="font-label text-[10px] font-bold tracking-[0.4em] uppercase">About CN IT Solutions</span>
            </div>

            <h1 className="text-on-background font-headline font-extrabold leading-[1.1] tracking-tight md:leading-[1.0]">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] block">Beyond Technologies.</span>
              <span className="text-primary-container text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] block mt-2 md:mt-0">Into Growth.</span>
            </h1>

            <p className="text-on-surface-variant text-lg sm:text-xl md:text-2xl font-body leading-relaxed max-w-3xl font-light">
              At CN IT Solutions, we believe that in a digital-first economy, the greatest failure of technology is when it remains "just technology." A high-end website or a top-ranking search position is meaningless unless it translates into a tangible business result: <strong className="text-primary-container font-semibold">A new client.</strong>
            </p>

            <p className="text-primary font-headline font-bold text-xl tracking-tight !mt-6">
              We don't identify as a traditional IT shop or a creative agency.<br />
              We are a Digital Growth & Lead Capture Agency.
            </p>
          </div>
        </div>
      </section>

      {/* The Reality Check (Asymmetric Impact Section) */}
      <section className="py-32 bg-primary-container text-white relative flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <span className="absolute -top-16 -left-8 text-[12rem] font-headline font-black text-white/5 leading-none select-none">!</span>
              <h2 className="text-5xl md:text-6xl font-headline font-black leading-tight tracking-tighter">
                The Reality Check.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-1 border-l border-white/20 hidden md:block h-32"></div>
            <div className="md:col-span-6 space-y-6">
              <p className="text-3xl font-headline font-light leading-snug">
                <strong className="text-primary">90% of business websites</strong> are severely underperforming assets. They provide visibility, but they fail to drive conversion.
              </p>
              <p className="text-on-primary-container text-xl font-light leading-relaxed">
                CN IT Solutions was explicitly built to fix this critical market gap. We transform digital liabilities into aggressive, market-capturing machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-40 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-primary font-label text-xs font-bold tracking-[0.4em] uppercase">Our Philosophy</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-on-background leading-tight tracking-tighter">
                The Result is the Solution.
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
                <p>
                  The market is saturated with "digital solutions" that provide visibility but lack conversion. Our mission is to solve the most critical problem facing modern businesses: The gap between being found and being hired.
                </p>
                <p>
                  Through our <strong className="text-on-background font-semibold">Multi-Channel Lead Generation Framework</strong>, we integrate the technical precision of IT with the strategic aggression of digital marketing.
                </p>
                <p className="italic border-l-4 border-primary pl-6 py-2 mt-4 text-primary-container font-medium text-xl">
                  We don't just build your digital presence; we engineer it to act as your most productive salesperson.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-surface-container-high rounded-3xl overflow-hidden relative shadow-premium group">
              <img
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-1000"
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                alt="Precision engineering blueprint"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Partner With Us (Cards Grid) */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 space-y-6 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-background tracking-tighter">
              Why Businesses Partner With Us
            </h2>
            <p className="text-on-surface-variant text-xl leading-relaxed font-light">
              Companies don't choose CN IT Solutions for a one-time project. They partner with us for the long term because we offer structure, strategy, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Server size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Strategic Reliability</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We provide the stable, high-performance infrastructure your business needs to scale without technical friction.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Intent-Based Engineering</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Every line of code and every SEO keyword we deploy is chosen for one reason: its ability to capture a qualified lead.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Handshake size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Skin in the Game</h3>
              <p className="text-on-surface-variant leading-relaxed">
                We view our clients as partners. Your growth isn't just a goal; it's our only metric for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Beyond Technologies & The Vision */}
      <section className="py-40 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h3 className="text-3xl font-headline font-black tracking-tighter text-on-background uppercase">
                Solutions Beyond Technologies
              </h3>
              <div className="w-12 h-1 bg-primary"></div>
              <div className="space-y-6 text-on-surface-variant text-lg font-light leading-relaxed">
                <p>
                  The "Solutions" we provide are not just software or code. They are the new partnerships, increased revenue, and expanded market share our clients achieve through our work.
                </p>
                <p>
                  We handle the complexities of the digital landscape—SEO algorithms, conversion architecture, and multi-channel marketing—so that you can focus on what you do best: running your business.
                </p>
              </div>
            </div>

            <div className="p-12 bg-primary-container text-white rounded-3xl shadow-premium space-y-8">
              <h3 className="text-3xl font-headline font-black tracking-tighter text-primary uppercase">
                The Vision
              </h3>
              <p className="text-2xl font-medium leading-relaxed font-headline italic">
                "To be the global benchmark for Client Acquisition Systems, empowering businesses to move beyond the limitations of standard technology and into a future of predictable, sustainable growth."
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
