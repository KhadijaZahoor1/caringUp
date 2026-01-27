import React from 'react';
// import { Info } from 'lucide-react';

const EvidenceClinicalOutcomes = () => {
  const tableData = [
    { condition: "Hypertension", measurement: "SBP (mmHg)", cgBase: "142.0", cg6m: "147.3", igBase: "146.3", ig6m: "136.2", change: "-10.1 vs +5.3", target: "120-129 High-normal" },
    { condition: "", measurement: "DBP (mmHg)", cgBase: "75.5", cg6m: "78.6", igBase: "77.1", ig6m: "71.6", change: "-5.5 vs +3.1", target: "< 80" },
    { condition: "Cholesterol", measurement: "LDL (mmol/L)", cgBase: "3.03", cg6m: "3.32", igBase: "2.65", ig6m: "2.52", change: "-0.13 vs +0.29", target: "< 2.6" },
    { condition: "Diabetes", measurement: "HbA1c (%)", cgBase: "8.4", cg6m: "8.2", igBase: "8.5", ig6m: "7.3", change: "-1.0 vs -0.2", target: "< 7.0%" },
    { condition: "Asthma", measurement: "ACQ-6 score", cgBase: "1.45", cg6m: "1.35", igBase: "1.47", ig6m: "1.03", change: "-0.44 vs -0.10", target: "< 0.75 = Well-controlled" },
    { condition: "Heart Failure", measurement: "NYHA Class", cgBase: "1.86", cg6m: "1.92", igBase: "1.97", ig6m: "1.63", change: "-0.34 vs +0.02", target: "Class I = No limitation" },
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-24 px-4 font-sans text-[#0F172A]">
      {/* Section Header */}
      <h2 className="text-[44px] font-bold text-center mb-16">Clinical Outcomes</h2>

      {/* 1. Detailed Table Card */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-12 mb-8">
        <h3 className="text-xl font-bold mb-8">Detailed Clinical Measurements: Baseline vs 6 Months</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-2">Condition / Biomarker</th>
                <th className="py-4 px-2">Measurement</th>
                <th className="py-4 px-2">CG Baseline</th>
                <th className="py-4 px-2">CG 6 Months</th>
                <th className="py-4 px-2">IG Baseline</th>
                <th className="py-4 px-2 bg-indigo-50/50">IG 6 Months</th>
                <th className="py-4 px-2 bg-indigo-50/50">Change (IG vs CG)</th>
                <th className="py-4 px-2">Target Range*</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-2 font-bold">{row.condition}</td>
                  <td className="py-4 px-2 text-gray-500">{row.measurement}</td>
                  <td className="py-4 px-2">{row.cgBase}</td>
                  <td className="py-4 px-2">{row.cg6m}</td>
                  <td className="py-4 px-2">{row.igBase}</td>
                  <td className="py-4 px-2 bg-indigo-50/30 font-semibold">{row.ig6m}</td>
                  <td className="py-4 px-2 bg-indigo-50/30 font-bold text-indigo-700">{row.change}</td>
                  <td className="py-4 px-2 text-[11px] text-gray-400 leading-tight">{row.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Citations / Info Box */}
        <div className="mt-8 bg-[#F8FAFC] rounded-2xl p-6 flex items-start gap-4 border border-gray-100">
          {/* <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /> */}
          <div className="text-[11px] text-[#64748B] leading-relaxed">
            <p className="font-bold mb-2">*ESC/ESH 2018; MOH Malaysia HTN CPG 2023; AHA/ACC 2018 Lipid Guideline; ADA 2024; WHO 2020 Diagnostic Criteria; GINA 2023; ACC/AHA 2022 HF Guideline.</p>
            <p><span className="font-bold text-gray-600">Table Notes:</span> CG = Control Group, IG = Intervention Group. All measurements taken at baseline and 6-month follow-up. Lower scores indicate better outcomes for all metrics except NYHA class where lower is better.</p>
          </div>
        </div>
      </div>

      {/* 2. Chart Section */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-12">
        <h3 className="text-xl font-bold mb-12">Change from Baseline Comparison</h3>
        
        {/* Placeholder for Diverging Bar Chart */}
        <div className="relative h-[300px] w-full border-b border-gray-200 mb-12 flex flex-col justify-between py-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300" />
          
          {/* Example Bar (SBP) */}
          <div className="flex items-center gap-4 relative z-10">
            <span className="w-24 text-[10px] text-right font-bold uppercase text-gray-400">SBP mmHg</span>
            <div className="flex-1 flex justify-center items-center h-4">
              <div className="w-[10%] h-full bg-indigo-200 rounded-l-sm -mr-[1px]" /> {/* CG Bar */}
              <div className="w-[35%] h-full bg-[#1E293B] rounded-r-sm" /> {/* IG Bar */}
            </div>
          </div>
          {/* Example Bar (HbA1c) */}
          <div className="flex items-center gap-4 relative z-10">
            <span className="w-24 text-[10px] text-right font-bold uppercase text-gray-400">HbA1c %</span>
            <div className="flex-1 flex justify-center items-center h-4">
              <div className="w-[4%] h-full bg-indigo-200 rounded-l-sm" /> 
              <div className="w-[12%] h-full bg-[#1E293B] rounded-r-sm" />
            </div>
          </div>
          
          {/* Axis Labels */}
          <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-300 px-24">
            <span>-12</span><span>-8</span><span>-4</span><span>0</span><span>4</span><span>8</span><span>12</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-200 rounded-sm" /><span className="text-[10px] font-bold text-gray-400">Control Group</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1E293B] rounded-sm" /><span className="text-[10px] font-bold text-gray-400">Intervention Group</span></div>
        </div>

        {/* Summary Footer Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#E8F7F0] border border-[#D1F1E1] rounded-[24px] p-6">
            <h4 className="text-[#2D8A5B] font-bold mb-2">Statistical Significance</h4>
            <p className="text-[#2D8A5B] text-sm opacity-90 leading-relaxed">
              All primary endpoints achieved statistical significance (p &lt; 0.05) with clinically meaningful effect sizes.
            </p>
          </div>
          <div className="bg-[#E8F7F0] border border-[#D1F1E1] rounded-[24px] p-6">
            <h4 className="text-[#2D8A5B] font-bold mb-2">Global Benchmark</h4>
            <p className="text-[#2D8A5B] text-sm opacity-90 leading-relaxed">
              The HbA1c reduction of -1.0% absolute is among the highest documented from any mHealth intervention globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceClinicalOutcomes;