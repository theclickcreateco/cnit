"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [leadCount, setLeadCount] = useState(247892);
  const [roiMetrics, setRoiMetrics] = useState({
    traffic: 25000,
    conversionRate: 1.5,
    closeRate: 15,
    dealValue: 5000,
    tier: 'pro'
  });

  // Dynamic Lead Counter Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLeadCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculations
  const leadsBasic = Math.round(roiMetrics.traffic * (roiMetrics.conversionRate / 100));
  const dealsBasic = Math.round(leadsBasic * (roiMetrics.closeRate / 100));
  const revenueBasic = dealsBasic * roiMetrics.dealValue * 12;

  const leadsPro = Math.round(roiMetrics.traffic * ((roiMetrics.conversionRate * 2.5) / 100));
  const dealsPro = Math.round(leadsPro * ((roiMetrics.closeRate * 1.5) / 100));
  const revenuePro = dealsPro * roiMetrics.dealValue * 12;

  const displayRevenue = roiMetrics.tier === 'pro' ? revenuePro : revenueBasic;
  const displayLeads = roiMetrics.tier === 'pro' ? leadsPro : leadsBasic;
  const displayDeals = roiMetrics.tier === 'pro' ? dealsPro : dealsBasic;

  return (
    <>
      {/* 1. Hero Section - The Authority Headline */}
      <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container/95 to-primary/10 opacity-95"></div>
          <img
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlNYhVXSXUxiyo7qHqnLt6I2ztTNEU7K6w2W2KQm2tx1Nfby6JeacSALiZK_UYfCRFsTefnYYyX63Z8-3-Fde7ytt3q4Kxk71TSWOq-byiffmT9EfaeYPmpXfqwyucUUssgJJrr11yk-Fb9XRZqJTJavrGAtIW0zLxVKpEepPUSaYUpiuHK1goPDAS_01RyvzCPDi8kdTyvf3nH3Qxz7CBbO6oP8eLaHzS1urAtn3tkusJ6Hwjm2gH_FO6YASITMjN-0yjw_KC0wY"
            alt="Strategic foundation"
          />
        </div>
        <div className='relative flex'>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-4xl space-y-8 md:space-y-12">
              <div className="inline-block px-5 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-label text-[10px] font-bold tracking-[0.4em] uppercase">Sovereign Intelligence</span>
              </div>

              <h1 className="text-white font-headline font-extrabold leading-[1.1] tracking-tight md:leading-[1.0]">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] block">The Authority Approach.</span>
                <span className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] block mt-2 md:mt-0">Lead Capture Solved.</span>
              </h1>

              <p className="text-on-primary-container text-lg sm:text-xl md:text-2xl font-body leading-relaxed max-w-3xl font-light">
                We engineer unshakeable digital systems that transform your market presence into a consistent, scalable engine of new clients. No templates. Only architecture.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 pt-8">
                <button className="px-12 py-6 bg-primary text-primary-container font-headline font-extrabold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-2xl shadow-primary/20 uppercase tracking-[0.2em] text-sm cursor-pointer">
                  Instant Value Audit
                </button>
                <button className="px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white font-headline font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-[0.2em] text-sm cursor-pointer">
                  Our Strategic Thesis
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Metric Overlay */}
          <div className="hidden lg:block absolute bottom-24 right-8 bg-surface-container-lowest p-12 rounded-2xl shadow-premium max-w-sm border-l-[12px] border-primary">
            <span className="block text-6xl font-headline font-extrabold text-primary-container mb-4 tabular-nums">
              {leadCount.toLocaleString()}
            </span>
            <span className="text-on-surface-variant font-label text-xs font-bold tracking-[0.2em] uppercase block mb-2">
              Regional Leads Captured
            </span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Live Integration Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Evidence - Logos & Performance Marquee */}
      <section className="py-24 bg-surface border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <h4 className="text-on-surface-variant font-label text-xs font-bold tracking-[0.3em] uppercase">Trusted at the Edge</h4>
              <p className="text-on-surface font-body text-lg mt-4 font-medium italic">"The architecture behind market-leading acquisition."</p>
            </div>
            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="font-headline font-extrabold text-2xl tracking-tighter italic">Vanguard.</div>
                <div className="font-headline font-extrabold text-2xl tracking-tighter italic">Global-Link</div>
                <div className="font-headline font-extrabold text-2xl tracking-tighter italic">Omnia</div>
                <div className="font-headline font-extrabold text-2xl tracking-tighter italic">Stellar.</div>
                <div className="font-headline font-extrabold text-2xl tracking-tighter italic">Nexus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Growth Modules - Re-positioned existing section */}
      <section id="modules" className="py-40 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-6 max-w-3xl">
              <span className="text-primary font-label text-xs font-bold tracking-[0.4em] uppercase">The Architecture of Growth</span>
              <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-on-background tracking-tighter leading-tight">Growth Modules.</h2>
              <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl font-light">
                We don't just build features; we deploy revenue-generating assets. These are the building blocks of your dominant market position.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'rocket_launch', title: 'High-Performance Capture', tags: ['CRO', 'UX Design'], desc: 'Engineering environments where every pixel serves the bottom line.' },
              { icon: 'query_stats', title: 'Search Authority', tags: ['SEO', 'Market Discovery'], desc: 'Securing your rightful place at the top of market search intent.' },
              { icon: 'campaign', title: 'Multi-Channel Engines', tags: ['Paid Acquisition', 'Strategy'], desc: 'Creating pervasive presence to feed a constant stream of leads.' },
              { icon: 'handshake', title: 'Strategic Partnership', tags: ['Scaling', 'Support'], desc: 'Tactical support that evolves with your business at every stage.' }
            ].map((module, idx) => (
              <div key={idx} className="group p-10 bg-surface-container-lowest hover:bg-primary-container transition-all duration-500 rounded-3xl flex flex-col justify-between min-h-[480px] shadow-sm hover:shadow-premium">
                <div className="space-y-10">
                  <div className="w-16 h-16 flex items-center justify-center bg-surface-container group-hover:bg-primary/20 rounded-2xl transition-colors">
                    <span className="material-symbols-outlined text-primary-container group-hover:text-primary text-4xl">{module.icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-background group-hover:text-white transition-colors leading-snug">
                    {module.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {module.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-primary/10 text-[10px] font-bold text-primary font-label uppercase rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-on-surface-variant group-hover:text-on-primary-container text-base leading-relaxed font-light">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Logic - ROI Calculator */}
      <section id="roi" className="py-40 bg-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-primary font-label text-xs font-bold tracking-[0.4em] uppercase">The Mathematics of Authority</span>
              <h2 className="text-5xl md:text-8xl font-headline font-extrabold text-white tracking-tighter leading-tight">Show Me <br /><span className="text-primary">The Logic.</span></h2>
              <p className="text-on-primary-container text-xl leading-relaxed max-w-lg font-light">
                Digital growth isn't a mystery; it's a calculation. Adjust the variables to see the latent revenue sitting in your current presence.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] shadow-premium space-y-10 relative">
              <div className="flex gap-2 p-1.5 bg-white/5 rounded-xl border border-white/10">
                <button
                  onClick={() => setRoiMetrics({ ...roiMetrics, tier: 'basic' })}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${roiMetrics.tier === 'basic' ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white/80'}`}
                >
                  Current Baseline
                </button>
                <button
                  onClick={() => setRoiMetrics({ ...roiMetrics, tier: 'pro' })}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer ${roiMetrics.tier === 'pro' ? 'bg-primary text-primary-container shadow-md' : 'text-white/40 hover:text-white/80'}`}
                >
                  Authority System (Pro)
                </button>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-white font-label text-xs font-bold uppercase tracking-widest">
                    <span>Monthly Traffic</span>
                    <span className="text-primary">{roiMetrics.traffic.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="1000" max="250000" step="1000"
                    value={roiMetrics.traffic}
                    onChange={(e) => setRoiMetrics({ ...roiMetrics, traffic: parseInt(e.target.value) })}
                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-white font-label text-xs font-bold uppercase tracking-widest">
                    <span>Lead Conversion</span>
                    <span className="text-primary">{roiMetrics.conversionRate.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range" min="0.1" max="10" step="0.1"
                    value={roiMetrics.conversionRate}
                    onChange={(e) => setRoiMetrics({ ...roiMetrics, conversionRate: parseFloat(e.target.value) })}
                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-white font-label text-xs font-bold uppercase tracking-widest">
                    <span>Close Rate</span>
                    <span className="text-primary">{roiMetrics.closeRate}%</span>
                  </div>
                  <input
                    type="range" min="1" max="50" step="1"
                    value={roiMetrics.closeRate}
                    onChange={(e) => setRoiMetrics({ ...roiMetrics, closeRate: parseInt(e.target.value) })}
                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-white font-label text-xs font-bold uppercase tracking-widest">
                    <span>Average Deal Value</span>
                    <span className="text-primary">${roiMetrics.dealValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="500" max="50000" step="500"
                    value={roiMetrics.dealValue}
                    onChange={(e) => setRoiMetrics({ ...roiMetrics, dealValue: parseInt(e.target.value) })}
                    className="w-full accent-primary h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-center text-white/60 font-body text-sm font-medium border-b border-white/10 pb-6">
                  <span>Leads / Mo: <strong className="text-white">{displayLeads.toLocaleString()}</strong></span>
                  <span>Deals / Mo: <strong className="text-white">{displayDeals.toLocaleString()}</strong></span>
                </div>

                <div>
                  <span className="text-white/40 font-label text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">Annual Revenue Projection</span>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl md:text-7xl font-headline font-black text-white tabular-nums">${displayRevenue.toLocaleString()}</span>
                    <span className="text-primary font-bold text-xs">USD</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setRoiMetrics({ ...roiMetrics, tier: 'pro' })}
                className="w-full py-5 bg-white text-primary-container font-headline font-extrabold rounded-2xl hover:bg-primary transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-xs cursor-pointer shadow-xl">
                {roiMetrics.tier === 'pro' ? 'Unlock This Growth' : 'Switch to Authority System'}
              </button>
            </div>
          </div>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 -skew-x-12 translate-x-1/2 blur-3xl"></div>
      </section>

      {/* 5. The Filter - Who This Is For/Not For */}
      <section className="py-40 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-32 space-y-8">
            <span className="text-on-surface-variant font-label text-xs font-bold tracking-[0.5em] uppercase">The Selective Filter</span>
            <h2 className="text-5xl md:text-8xl font-headline font-extrabold text-on-background tracking-tighter leading-tight">Strategic Alignment.</h2>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl font-light">
              We do not accept all projects. We only partner where we can deliver absolute market dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-surface-container-low rounded-[2.5rem] border-l-8 border-primary space-y-10">
              <h4 className="text-primary font-headline font-black text-2xl uppercase tracking-widest italic">Who We Partner With</h4>
              <ul className="space-y-6">
                {[
                  'High-growth service providers ready to scale operations.',
                  'Companies with a minimum annual revenue of $1M+.',
                  'Executives who value architecture over "quick fixes."',
                  'Businesses with a unique, valid market offer.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-on-background font-body text-lg items-start">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 bg-surface-container rounded-[2.5rem] border-l-8 border-on-surface-variant/20 space-y-10 opacity-60">
              <h4 className="text-on-surface-variant font-headline font-black text-2xl uppercase tracking-widest italic">Who We Are Not For</h4>
              <ul className="space-y-6">
                {[
                  'Early-stage startups without a proven offer.',
                  'Low-ticket commodity product traders.',
                  'Companies looking for "pay-per-lead" shortcuts.',
                  'Teams unwilling to overhaul their current digital infrastructure.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-on-surface-variant font-body text-lg items-start">
                    <span className="material-symbols-outlined">cancel</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Partnership - Our MissionSection */}
      <section id="partnership" className="py-40 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl space-y-16">
            <div className="space-y-6">
              <span className="text-primary font-label text-xs font-bold tracking-[0.5em] uppercase">Built for Reliability</span>
              <h2 className="text-6xl md:text-8xl font-headline font-extrabold text-on-background tracking-tighter leading-tight">Mission Critical.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <p className="text-on-surface text-xl font-light leading-relaxed">
                Our mission is to eliminate the fragility of digital client acquisition. In an industry of templates, we provide architecture that stands firm while your competition scales with fragile, fragmented setups.
              </p>
              <p className="text-on-surface-variant text-xl font-light leading-relaxed">
                We act as your long-term tactical partner, embedding ourselves in your growth journey and providing the strategic foresight needed for global leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA - Apply for Strategic Partnership */}
      <section className="py-60 bg-primary-container relative overflow-hidden flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto px-8 relative z-10 space-y-16">
          <h2 className="text-6xl md:text-[9rem] font-headline font-black text-white leading-[0.9] tracking-[ -0.05em]">
            Scale Your <br /><span className="text-primary italic">Authority.</span>
          </h2>
          <div className="space-y-8">
            <p className="text-on-primary-container text-2xl font-light max-w-2xl mx-auto">
              Ready to engineer your growth? We are currently accepting applications for the Q3 Strategic intake.
            </p>
            <button className="px-16 py-8 bg-primary text-primary-container font-headline font-black rounded-3xl hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-primary/20 uppercase tracking-[0.4em] text-lg cursor-pointer">
              Apply for Partnership
            </button>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center -z-0">
          <span className="text-[40rem] font-headline font-black text-white select-none pointer-events-none tracking-tighter">AA</span>
        </div>
      </section>
    </>
  );
}
