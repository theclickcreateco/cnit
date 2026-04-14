"use client";

import React, { useState, useEffect } from 'react';

// Individual Calculator Components

const StandardROICalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ netProfit: 5000, costOfInvestment: 20000 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('standard_roi_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('standard_roi_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const roi = metrics.costOfInvestment > 0 ? ((metrics.netProfit / metrics.costOfInvestment) * 100).toFixed(2) : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Net Profit ($)</label>
          <input type="number" value={metrics.netProfit} onChange={(e) => setMetrics({...metrics, netProfit: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Cost of Investment ($)</label>
          <input type="number" value={metrics.costOfInvestment} onChange={(e) => setMetrics({...metrics, costOfInvestment: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4 text-center">
        <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Standard ROI</span>
        <span className="text-5xl text-white font-black">{roi}%</span>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

const NetProfitMarginCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ totalRevenue: 100000, totalExpenses: 80000 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('npm_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('npm_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const netProfit = metrics.totalRevenue - metrics.totalExpenses;
  const margin = metrics.totalRevenue > 0 ? ((netProfit / metrics.totalRevenue) * 100).toFixed(2) : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Total Revenue ($)</label>
          <input type="number" value={metrics.totalRevenue} onChange={(e) => setMetrics({...metrics, totalRevenue: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Total Expenses ($)</label>
          <input type="number" value={metrics.totalExpenses} onChange={(e) => setMetrics({...metrics, totalExpenses: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4">
        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-white/70">Net Profit</span>
          <span className="text-white font-bold">${netProfit.toLocaleString()}</span>
        </div>
        <div className="pt-2 text-center">
          <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Net Profit Margin</span>
          <span className="text-5xl text-white font-black">{margin}%</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

const PipelineROICalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({
    traffic: 25000,
    conversionRate: 1.5,
    closeRate: 15,
    dealValue: 5000,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('roi_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('roi_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const leads = Math.round(metrics.traffic * (metrics.conversionRate / 100));
  const deals = Math.round(leads * (metrics.closeRate / 100));
  const maxRevenue = deals * metrics.dealValue * 12;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Monthly Traffic</label>
          <input type="number" value={metrics.traffic} onChange={(e) => setMetrics({...metrics, traffic: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Conversion (%)</label>
            <input type="number" step="0.1" value={metrics.conversionRate} onChange={(e) => setMetrics({...metrics, conversionRate: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Close Rate (%)</label>
            <input type="number" step="0.1" value={metrics.closeRate} onChange={(e) => setMetrics({...metrics, closeRate: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Average Deal Value ($)</label>
          <input type="number" value={metrics.dealValue} onChange={(e) => setMetrics({...metrics, dealValue: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4">
        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-white/70">Leads / Mo</span>
          <span className="text-white font-bold">{leads.toLocaleString()}</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-white/70">Deals / Mo</span>
          <span className="text-white font-bold">{deals.toLocaleString()}</span>
        </div>
        <div className="pt-2">
          <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Annual Revenue Projection</span>
          <span className="text-4xl text-white font-black">${maxRevenue.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved Successfully!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
          Close
        </button>
      </div>
    </div>
  );
};

const ROASCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({
    budget: 5000,
    cpc: 2.50,
    conversionRate: 5,
    dealValue: 1000,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('roas_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('roas_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const clicks = Math.round(metrics.budget / metrics.cpc);
  const conversions = Math.round(clicks * (metrics.conversionRate / 100));
  const revenue = conversions * metrics.dealValue;
  const roas = metrics.budget > 0 ? ((revenue / metrics.budget) * 100).toFixed(0) : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Monthly Budget ($)</label>
            <input type="number" value={metrics.budget} onChange={(e) => setMetrics({...metrics, budget: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Cost Per Click ($)</label>
            <input type="number" step="0.1" value={metrics.cpc} onChange={(e) => setMetrics({...metrics, cpc: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Conversion (%)</label>
            <input type="number" step="0.1" value={metrics.conversionRate} onChange={(e) => setMetrics({...metrics, conversionRate: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Deal Value ($)</label>
            <input type="number" value={metrics.dealValue} onChange={(e) => setMetrics({...metrics, dealValue: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4">
        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-white/70">Estimated Clicks</span>
          <span className="text-white font-bold">{clicks.toLocaleString()}</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-white/70">Total Conversions</span>
          <span className="text-white font-bold">{conversions.toLocaleString()}</span>
        </div>
        <div className="flex align-end justify-between pt-2">
          <div>
             <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Total Revenue</span>
             <span className="text-2xl text-white font-black">${revenue.toLocaleString()}</span>
          </div>
          <div className="text-right">
             <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">ROAS</span>
             <span className="text-2xl text-primary font-black">{roas}%</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
          Close
        </button>
      </div>
    </div>
  );
};

const CACCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ marketingSpend: 15000, newCustomers: 50 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('cac_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('cac_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const cac = metrics.newCustomers > 0 ? (metrics.marketingSpend / metrics.newCustomers).toFixed(2) : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Total Sales & Marketing Spend ($)</label>
          <input type="number" value={metrics.marketingSpend} onChange={(e) => setMetrics({...metrics, marketingSpend: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">New Customers Acquired</label>
          <input type="number" value={metrics.newCustomers} onChange={(e) => setMetrics({...metrics, newCustomers: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4 text-center">
        <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Customer Acquisition Cost (CAC)</span>
        <span className="text-5xl text-white font-black">${cac}</span>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

const LTVCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ avgPurchaseValue: 500, purchaseFrequencyPerYear: 4, customerLifespanYears: 3 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('ltv_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('ltv_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const ltv = metrics.avgPurchaseValue * metrics.purchaseFrequencyPerYear * metrics.customerLifespanYears;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Avg Purchase Value ($)</label>
          <input type="number" value={metrics.avgPurchaseValue} onChange={(e) => setMetrics({...metrics, avgPurchaseValue: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Freq Per Year</label>
            <input type="number" value={metrics.purchaseFrequencyPerYear} onChange={(e) => setMetrics({...metrics, purchaseFrequencyPerYear: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Lifespan (Years)</label>
            <input type="number" value={metrics.customerLifespanYears} onChange={(e) => setMetrics({...metrics, customerLifespanYears: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4 text-center">
        <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Lifetime Value (LTV)</span>
        <span className="text-5xl text-white font-black">${ltv.toLocaleString()}</span>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

const LTVCACRatioCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ ltv: 6000, cac: 1500 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('ltvcac_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('ltvcac_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const ratio = metrics.cac > 0 ? (metrics.ltv / metrics.cac).toFixed(1) : 0;
  
  let healthText = "Needs Improvement";
  let healthColor = "text-yellow-400";
  if (ratio >= 3) { healthText = "Healthy / Scalable"; healthColor = "text-primary"; }
  if (ratio >= 5) { healthText = "Underspending (Too High)"; healthColor = "text-white/60"; }
  if (ratio < 1) { healthText = "Losing Money"; healthColor = "text-red-400"; }

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Lifetime Value (LTV) ($)</label>
          <input type="number" value={metrics.ltv} onChange={(e) => setMetrics({...metrics, ltv: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Acquisition Cost (CAC) ($)</label>
          <input type="number" value={metrics.cac} onChange={(e) => setMetrics({...metrics, cac: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4 text-center">
        <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">LTV:CAC Ratio</span>
        <span className="text-4xl text-white font-black block mb-2">{ratio} : 1</span>
        <span className={`text-xs font-label uppercase tracking-widest font-bold ${healthColor}`}>{healthText}</span>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

const BreakEvenCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({
    fixedCosts: 3000,
    variableCostPerClient: 200,
    revenuePerClient: 1500,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('breakeven_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('breakeven_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const contributionMargin = metrics.revenuePerClient - metrics.variableCostPerClient;
  const breakEvenClients = contributionMargin > 0 ? Math.ceil(metrics.fixedCosts / contributionMargin) : 0;
  const breakEvenRevenue = breakEvenClients * metrics.revenuePerClient;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Monthly Fixed Costs ($) e.g., Agency Retainer</label>
          <input type="number" value={metrics.fixedCosts} onChange={(e) => setMetrics({...metrics, fixedCosts: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-1">Variable Cost</label>
            <span className="block text-[9px] text-white/50 mb-2">(Per Client)</span>
            <input type="number" value={metrics.variableCostPerClient} onChange={(e) => setMetrics({...metrics, variableCostPerClient: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
          <div>
            <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-1">Revenue</label>
            <span className="block text-[9px] text-white/50 mb-2">(Per Client)</span>
            <input type="number" value={metrics.revenuePerClient} onChange={(e) => setMetrics({...metrics, revenuePerClient: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
          </div>
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4">
        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-white/70">Margin Per Client</span>
          <span className="text-white font-bold">${contributionMargin.toLocaleString()}</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-white/70">Break-Even Revenue</span>
          <span className="text-white font-bold">${breakEvenRevenue.toLocaleString()}</span>
        </div>
        <div className="pt-2">
          <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Clients Needed To Break Even</span>
          <span className="text-4xl text-white font-black">{contributionMargin <= 0 ? 'N/A' : breakEvenClients}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
          Close
        </button>
      </div>
    </div>
  );
};


const InventoryTurnoverCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ cogs: 50000, avgInventory: 10000 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('inventory_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('inventory_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const ratio = metrics.avgInventory > 0 ? (metrics.cogs / metrics.avgInventory).toFixed(1) : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Cost of Goods Sold (COGS) ($)</label>
          <input type="number" value={metrics.cogs} onChange={(e) => setMetrics({...metrics, cogs: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Average Inventory Value ($)</label>
          <input type="number" value={metrics.avgInventory} onChange={(e) => setMetrics({...metrics, avgInventory: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4 text-center">
        <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Inventory Turnover Ratio</span>
        <span className="text-5xl text-white font-black">{ratio}x</span>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

const ProductivityCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ totalOutput: 15000, totalHours: 160 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('productivity_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('productivity_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const productivity = metrics.totalHours > 0 ? (metrics.totalOutput / metrics.totalHours).toFixed(2) : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Total Output Value ($)</label>
          <input type="number" value={metrics.totalOutput} onChange={(e) => setMetrics({...metrics, totalOutput: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Total Input (Labor Hours)</label>
          <input type="number" value={metrics.totalHours} onChange={(e) => setMetrics({...metrics, totalHours: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4 text-center">
        <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Employee Productivity Rate</span>
        <span className="text-4xl text-white font-black block">${productivity} <span className="text-lg opacity-60">/ hr</span></span>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

const ChurnRateCalculator = ({ onClose }) => {
  const [metrics, setMetrics] = useState({ startingCustomers: 250, lostCustomers: 12 });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('churn_calculator');
    if (savedData) setMetrics(JSON.parse(savedData));
  }, []);

  const handleSave = () => {
    localStorage.setItem('churn_calculator', JSON.stringify(metrics));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const churn = metrics.startingCustomers > 0 ? ((metrics.lostCustomers / metrics.startingCustomers) * 100).toFixed(2) : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Customers at Start of Period</label>
          <input type="number" value={metrics.startingCustomers} onChange={(e) => setMetrics({...metrics, startingCustomers: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
        <div>
          <label className="text-white font-label text-xs font-bold uppercase tracking-widest block mb-2">Customers Lost During Period</label>
          <input type="number" value={metrics.lostCustomers} onChange={(e) => setMetrics({...metrics, lostCustomers: Number(e.target.value)})} className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white focus:border-primary outline-none" />
        </div>
      </div>

      <div className="bg-primary/20 p-6 rounded-xl border border-primary/30 space-y-4 text-center">
        <span className="block text-primary/70 font-label text-[10px] uppercase tracking-widest mb-1">Customer Churn Rate</span>
        <span className="text-5xl text-white font-black">{churn}%</span>
      </div>

      <div className="flex gap-4">
        <button onClick={handleSave} className="flex-1 py-4 bg-primary text-primary-container font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all active:scale-95">
          {saved ? 'Saved!' : 'Save to Browser'}
        </button>
        <button onClick={onClose} className="py-4 px-6 bg-white/10 text-white font-headline font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Close</button>
      </div>
    </div>
  );
};

// Main Page Component

export default function CalculatorsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const calculatorCategories = [
    {
      title: "1. The Core Profitability Calculators",
      description: "These are the \"big picture\" tools every business owner needs to keep the lights on.",
      calculators: [
        {
          id: 'standard_roi',
          title: 'Standard ROI',
          description: 'It measures the gain or loss generated on an investment relative to the amount of money invested.',
          icon: 'price_check',
        },
        {
          id: 'breakeven',
          title: 'Break-Even Point',
          description: 'This tells you exactly how many units you need to sell to cover your total costs.',
          icon: 'balance',
        },
        {
          id: 'net_profit_margin',
          title: 'Net Profit Margin',
          description: 'Essential for seeing how much "actual" cash you keep from every dollar of revenue after all expenses are paid.',
          icon: 'percent',
        }
      ]
    },
    {
      title: "2. Marketing & Growth Calculators",
      description: "If you’re spending money on ads or sales teams, these metrics ensure you aren't just \"buying\" revenue at a loss.",
      calculators: [
        {
          id: 'cac',
          title: 'CAC Calculator',
          description: 'How much does it cost to get one new customer? Calculates total spend over new acquisitions.',
          icon: 'person_add',
        },
        {
          id: 'ltv',
          title: 'Lifetime Value (LTV)',
          description: 'The total revenue you expect from a single customer over the duration of your relationship.',
          icon: 'all_inclusive',
        },
        {
          id: 'ltvcac',
          title: 'LTV:CAC Ratio',
          description: 'A gold-standard metric. If your LTV is 3x your CAC, you have a healthy, scalable business.',
          icon: 'scale',
        },
        {
          id: 'roas',
          title: 'Return on Ad Spend (ROAS)',
          description: 'Specifically for digital marketing to see which campaigns are pulling their weight.',
          icon: 'campaign',
        },
        {
          id: 'roi',
          title: 'Pipeline ROI Projection',
          description: 'Model your current traffic and conversion rates to see latent revenue in your overall system.',
          icon: 'trending_up',
        }
      ]
    },
    {
      title: "3. Operational & Efficiency Calculators",
      description: "These help you identify \"hidden\" costs in your workflow and verify resource utility.",
      calculators: [
        {
          id: 'inventory',
          title: 'Inventory Turnover',
          description: 'Measures how many times a company has sold and replaced inventory during a period.',
          icon: 'inventory_2',
        },
        {
          id: 'productivity',
          title: 'Employee Productivity',
          description: 'Calculates efficiency for service-based models measuring total output against labor inputs.',
          icon: 'engineering',
        },
        {
          id: 'churn',
          title: 'Customer Churn Rate',
          description: 'The percentage of customers who stop using your service over a given time—crucial for MRR.',
          icon: 'heart_broken',
        }
      ]
    }
  ];

  const renderActiveCalculator = () => {
    switch (activeModal) {
      case 'standard_roi': return <StandardROICalculator onClose={() => setActiveModal(null)} />;
      case 'net_profit_margin': return <NetProfitMarginCalculator onClose={() => setActiveModal(null)} />;
      case 'cac': return <CACCalculator onClose={() => setActiveModal(null)} />;
      case 'ltv': return <LTVCalculator onClose={() => setActiveModal(null)} />;
      case 'ltvcac': return <LTVCACRatioCalculator onClose={() => setActiveModal(null)} />;
      case 'roi': return <PipelineROICalculator onClose={() => setActiveModal(null)} />;
      case 'roas': return <ROASCalculator onClose={() => setActiveModal(null)} />;
      case 'breakeven': return <BreakEvenCalculator onClose={() => setActiveModal(null)} />;
      case 'inventory': return <InventoryTurnoverCalculator onClose={() => setActiveModal(null)} />;
      case 'productivity': return <ProductivityCalculator onClose={() => setActiveModal(null)} />;
      case 'churn': return <ChurnRateCalculator onClose={() => setActiveModal(null)} />;
      default: return null;
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-surface-container-low min-h-[40vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-4xl space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-label text-[10px] font-bold tracking-widest uppercase rounded-full">
              Growth Tools & Categories
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-background tracking-tighter">
              Calculators Hub.
            </h1>
            <p className="text-on-surface-variant text-xl font-light leading-relaxed">
              Calculating your Return on Investment (ROI) is the bread and butter of business health, but it’s often just the tip of the iceberg. Depending on whether you're looking at marketing, operations, or HR, different formulas provide better clarity on where your money is actually going.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-surface min-h-[50vh] space-y-24">
        {calculatorCategories.map((cat, idx) => (
          <div key={idx} className="max-w-7xl mx-auto px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-headline font-black text-on-background tracking-tight mb-4">{cat.title}</h2>
              <p className="text-on-surface-variant text-lg font-light">{cat.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.calculators.map((calc) => (
                <div 
                  key={calc.id} 
                  onClick={() => setActiveModal(calc.id)}
                  className="group cursor-pointer p-10 bg-surface-container-lowest rounded-3xl border border-outline-variant/20 hover:border-primary/50 hover:shadow-premium transition-all duration-300 flex flex-col items-start gap-6 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">{calc.icon}</span>
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-headline font-bold text-on-background group-hover:text-primary transition-colors">{calc.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm font-light">{calc.description}</p>
                  </div>
                  <div className="mt-auto pt-8 w-full border-t border-outline-variant/10">
                    <span className="font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-primary group-hover:text-primary-container transition-colors">
                      Open Calculator <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-primary-container/80 backdrop-blur-md transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-lg bg-primary-container border border-white/10 rounded-3xl shadow-premium overflow-hidden animate-in fade-in zoom-in duration-300 transform scale-100">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <h3 className="text-white font-headline font-bold text-xl tracking-tight">
                {calculatorCategories.flatMap(c => c.calculators).find(c => c.id === activeModal)?.title}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-8">
              {renderActiveCalculator()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
