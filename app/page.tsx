"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [roiMetrics, setRoiMetrics] = useState({
    traffic: 25000,
    conversionRate: 1.5,
    closeRate: 15,
    dealValue: 5000,
    tier: 'pro'
  });
  const [dataPoints, setDataPoints] = useState(1284592);

  // Dynamic Network Impact Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => prev + Math.floor(Math.random() * 25) + 3);
    }, 2800);
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
      {/* 1. Hero Section - The CN IT Headline */}
      <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container/95 to-primary/10 opacity-95"></div>
          <img
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlNYhVXSXUxiyo7qHqnLt6I2ztTNEU7K6w2W2KQm2tx1Nfby6JeacSALiZK_UYfCRFsTefnYYyX63Z8-3-Fde7ytt3q4Kxk71TSWOq-byiffmT9EfaeYPmpXfqwyucUUssgJJrr11yk-Fb9XRZqJTJavrGAtIW0zLxVKpEepPUSaYUpiuHK1goPDAS_01RyvzCPDi8kdTyvf3nH3Qxz7CBbO6oP8eLaHzS1urAtn3tkusJ6Hwjm2gH_FO6YASITMjN-0yjw_KC0wY"
            alt="Strategic foundation"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-16 lg:gap-8 min-h-[50vh]">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            <div className="inline-block px-5 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary font-label text-[10px] font-bold tracking-[0.4em] uppercase">Sovereign Intelligence</span>
            </div>

            <h1 className="text-white font-headline font-extrabold leading-[1.1] tracking-tight md:leading-[1.0]">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] block">A Digital Growth &</span>
              <span className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] block mt-2 md:mt-0">Lead Capture Agency</span>
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

          {/* Dynamic Metric Overlay */}
          <div className="hidden lg:inline-flex bg-surface-container-lowest p-10 xl:p-12 rounded-2xl shadow-premium w-full max-w-xs xl:max-w-sm border-l-[12px] border-primary flex-col z-20 shrink-0 transform translate-y-12 hover:-translate-y-2 transition-transform duration-500">
            <span className="block text-5xl xl:text-6xl font-headline font-extrabold text-primary-container mb-4 tabular-nums shrink-0">
              {dataPoints.toLocaleString()}
            </span>
            <span className="text-on-surface-variant font-label text-[10px] xl:text-xs font-bold tracking-[0.2em] uppercase block mb-2 shrink-0">
              Market Signals Tracked
            </span>
            <div className="flex gap-2 items-center shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[9px] xl:text-[10px] text-primary font-bold uppercase tracking-widest leading-none pt-0.5">Live Data Feed Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Evidence - Tech Infrastructure */}
      <section className="py-32 bg-primary-container relative overflow-hidden z-10 border-b border-white/5">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-primary/5 -skew-x-12 translate-x-1/3 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-[50%] h-full bg-white/5 skew-x-12 -translate-x-1/2 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-4 relative">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary font-label text-[10px] font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-sm shadow-sm">
                <span className="material-symbols-outlined text-[14px]">settings_input_component</span>
                Enterprise Architecture
              </span>
              <h2 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tighter leading-[1.1] mb-6">
                Native <br/> <span className="text-primary italic">Connectivity.</span>
              </h2>
              <p className="text-on-primary-container text-xl font-light leading-relaxed max-w-sm">
                We embed directly into the premium data pipelines driving the modern web. Our structural frameworks converse fluently with the most powerful growth networks available.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { name: 'Next.js / React', icon: 'code', sub: 'Protocol' },
                  { name: 'Figma Cloud', icon: 'palette', sub: 'UX System' },
                  { name: 'Search API', icon: 'query_stats', sub: 'SEO Engine' },
                  { name: 'Ads Networks', icon: 'ads_click', sub: 'Omnichannel' },
                  { name: 'Adobe Suite', icon: 'brush', sub: 'Design Engine' },
                  { name: 'System Data', icon: 'analytics', sub: 'Flow Analytics' }
                ].map((tech, i) => (
                  <div key={i} className="group relative flex flex-col justify-between p-6 md:p-8 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-2 cursor-default overflow-hidden">
                    {/* Subtle inner hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    
                    <span className="material-symbols-outlined text-4xl text-white/50 group-hover:text-primary transition-all duration-500 mb-10 group-hover:scale-110 transform">
                      {tech.icon}
                    </span>
                    <div className="relative z-10">
                      <span className="block font-headline font-black text-xs md:text-sm tracking-widest text-white uppercase mb-1.5">{tech.name}</span>
                      <span className="block font-label font-bold text-[9px] md:text-[10px] tracking-[0.2em] text-primary/70 uppercase">{tech.sub}</span>
                    </div>
                  </div>
                ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'code_blocks', title: 'High-Performance Web', tags: ['Development', 'CRO'], desc: 'Engineering fast, responsive architectures where every pixel serves the bottom line.' },
              { icon: 'query_stats', title: 'Search Engine Dominance', tags: ['SEO', 'Discovery'], desc: 'Securing your rightful place at the absolute top of market search intent.' },
              { icon: 'campaign', title: 'Omnichannel Marketing', tags: ['Paid Ads', 'Strategy'], desc: 'Creating pervasive digital presence to feed a constant stream of leads.' },
              { icon: 'palette', title: 'Premium Graphic Design', tags: ['Branding', 'Visuals'], desc: 'Tactical aesthetic design systems that elevate trust at every touchpoint.' }
            ].map((module, idx) => (
              <div key={idx} className="group relative p-8 bg-surface-container-lowest rounded-3xl border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 hover:shadow-premium overflow-hidden flex flex-col justify-between min-h-[380px] bg-gradient-to-b hover:from-white hover:to-primary/5">
                {/* Decorative glowing orb on hover */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-12 -translate-y-12"></div>
                
                <div className="space-y-8 relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/5 border border-primary/10 group-hover:bg-primary/10 rounded-2xl transition-all duration-500 group-hover:scale-110 transform">
                    <span className="material-symbols-outlined text-primary text-3xl group-hover:fill-current">{module.icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-extrabold text-on-background leading-tight">
                    {module.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {module.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold text-on-surface-variant font-label uppercase tracking-wider rounded-lg border border-outline-variant/10 group-hover:border-primary/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light mt-8 relative z-10 group-hover:text-on-surface transition-colors">
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
              <span className="text-primary font-label text-xs font-bold tracking-[0.4em] uppercase">The Mathematics of Growth</span>
              <h2 className="text-5xl md:text-8xl font-headline font-extrabold text-white tracking-tighter leading-tight">Show Me <br /><span className="text-primary">The Logic.</span></h2>
              <p className="text-on-primary-container text-xl leading-relaxed max-w-lg font-light">
                Digital growth isn't a mystery; it's a calculation. Adjust the variables to see the latent revenue sitting in your current presence.
              </p>
              
              <div className="bg-white/10 border border-white/20 p-6 md:p-8 rounded-2xl max-w-lg space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-white font-headline font-bold text-lg mb-2">
                    <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                    How this works
                  </h4>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    This calculator demonstrates the compound effect of scaling your digital pipeline. By increasing conversion and close rates—even slightly via our advanced framework—revenue scales exponentially without entirely depending on new traffic.
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-white font-headline font-bold text-lg mb-2">
                    <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
                    Why it benefits you
                  </h4>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    Discover exactly where your current strategy is leaking revenue. A clear, numerical projection empowers you to make strategic investments in structural growth rather than gambling on isolated generic marketing tactics.
                  </p>
                </div>
              </div>
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
                  CN IT System (Pro)
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
                  <div className="flex justify-between items-center text-white font-label text-xs font-bold uppercase tracking-widest">
                    <span>Average Deal Value</span>
                    <div className="flex items-center gap-2 border border-white/20 bg-white/5 rounded-lg px-3 py-1.5 focus-within:border-primary transition-colors">
                      <span className="text-primary font-bold">$</span>
                      <input 
                        type="number"
                        min="1"
                        value={roiMetrics.dealValue || ''}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setRoiMetrics({ ...roiMetrics, dealValue: isNaN(val) ? 0 : val });
                        }}
                        className="bg-transparent text-primary font-bold w-20 text-right appearance-none focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range" min="10" max="50000" step="10"
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
                {roiMetrics.tier === 'pro' ? 'Unlock This Growth' : 'Switch to Pro System'}
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
            Scale Your <br /><span className="text-primary italic">Success.</span>
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
