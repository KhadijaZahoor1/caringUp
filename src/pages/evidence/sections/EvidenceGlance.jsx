import React, { useRef } from 'react';
// import { CheckCircle2 } from 'lucide-react';

const EvidenceGlance = () => {

  const stats = [
    { label: "Study Populations", value: "1,160", sub: "Control Group: 541\nIntervention Group: 619" },
    { label: "Medication Adherence (6 months)", value: "88,4%", sub: "+34% absolute from baseline\nvs. 68.7% control group", highlight: true },
    { label: "Cost Savings", value: "-37%", sub: "IG vs. CG (excl. hospitalization)", orange: true },
  ];

  const outcomeCards = [
    { title: "Diabetes (HbA1c)", value: "-1.0%", desc: "absolute IG vs. +0.2% CG" },
    { title: "Asthma (ACQ-6 score)", value: "-0.63", desc: "IG vs. -0.27 in CG" },
    { title: "Heart Failure (EF%)", value: "+50%", desc: "relative from baseline" },
    { title: "Cholesterol (LDL mmol/L)", value: "-0.13", desc: "IG vs. +0.28 in CG" },
    { title: "Hypertension (SBP mmHg)", value: "-10", desc: "IG vs. +1.3 CG" },
    { title: "Quality of Life (AQoL-8D)", value: "0.56 → 0.68", desc: "major improvement" },
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-12 px-4 font-sans text-[#0F172A]">

      {/* 2. Main Title */}
      <div className="text-center mb-16 pt-10">
        <h2 className="text-[56px] font-bold tracking-tight">At A Glance</h2>
      </div>

      {/* 3. Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
            <p className="text-[#64748B] text-sm font-medium mb-4">{stat.label}</p>
            <h3 className="text-[48px] font-bold mb-4">{stat.value}</h3>
            <div className="text-sm leading-relaxed whitespace-pre-line text-[#64748B]">
              {stat.highlight && <span className="text-[#22C55E] font-bold block mb-1">✓ +34% absolute from baseline</span>}
              {stat.orange && <span className="text-[#F97316] font-bold block mb-1">IG vs. CG (excl. hospitalization)</span>}
              {!stat.highlight && !stat.orange && stat.sub}
              {(stat.highlight || stat.orange) && <span className="opacity-70">vs. 68.7% control group</span>}
            </div>
          </div>
        ))}
      </div>

      {/* 4. Clinical Outcomes Section */}
      <div className="bg-white rounded-[40px] p-12 border border-gray-100 shadow-sm pt-10">
        <h4 className="text-xl font-bold mb-10">Clinical Outcomes (IG @ 6 months from baseline)</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomeCards.map((card, idx) => (
            <div key={idx} className="bg-[#F8FAFC] rounded-[24px] p-8 flex items-center gap-6 border border-gray-50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 shadow-sm flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">{card.title}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[32px] font-bold">{card.value}</span>
                  <span className="text-sm text-gray-500">{card.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Blue Footer Info Box */}
        <div className="mt-12 bg-[#E0E7FF] bg-opacity-60 border border-white rounded-[24px] p-8 flex items-start gap-4">
          <div className="mt-1">
            {/* <CheckCircle2 className="w-6 h-6 text-[#22C55E]" fill="white" /> */}
          </div>
          <p className="text-[#374151] text-lg leading-relaxed">
            The impact is clinically and statistically significant. HbA1c impact is one of the highest from any mHealth tool globally. 
            Asthma patients on CareAide are <span className="text-[#2E3A8C] font-bold underline">2x more likely</span> to control their condition compared to standard care.
          </p>
        </div>
      </div>

    </div>
  );
};

export default EvidenceGlance;