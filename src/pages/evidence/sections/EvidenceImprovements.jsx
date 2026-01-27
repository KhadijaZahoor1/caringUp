import React from 'react';
// import { Check } from 'lucide-react';

const EvidenceImprovements = () => {
  const populationStats = [
    { label: "Patient Population", value: "1,160" },
    { label: "Control Group", value: "541" },
    { label: "Intervention Group", value: "565" },
  ];

  const keyPoints = [
    "24 percent-point absolute increase in adherence (PDC)",
    "~2X more patients achieving adherent status",
    "Consistent improvement across income groups, including low-income B40 group",
    "World-class results achieved by reducing treatment burden, without increasing patient effort"
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-24 px-4 font-sans text-[#0F172A]">
      {/* 1. Section Header */}
      <h2 className="text-[44px] font-bold text-center mb-16">
        Adherence Improvements
      </h2>

      {/* 2. Main Dashboard Container */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-12 space-y-8">
        
        {/* Population Stats Row */}
        <div className="flex justify-around items-center py-4 text-center">
          {populationStats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <h3 className="text-[32px] font-bold">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Measurement Methods Box */}
        <div className="bg-[#F8FAFC] rounded-[24px] p-8 border border-gray-50">
          <h4 className="font-bold mb-6">Measurement Methods</h4>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">PDC (Proportion of Days Covered):</p>
              <p className="font-semibold text-gray-700">Record at hospital pharmacy</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">MMAS-8:</p>
              <p className="font-semibold text-gray-700">Questionnaire at hospital</p>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PDC Chart Card */}
          <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm">
            <h4 className="font-bold mb-8">PDC (Proportion of Days Covered)</h4>
            <div className="h-[200px] flex items-end justify-center gap-12 border-b border-gray-100 mb-6">
               {/* Simplified Chart Visual */}
               <div className="flex flex-col items-center gap-2">
                 <div className="w-10 bg-indigo-200 h-[120px] rounded-t-sm" />
                 <span className="text-[10px] text-gray-400">Baseline</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="w-10 bg-green-500 h-[160px] rounded-t-sm" />
                 <span className="text-[10px] text-gray-400">6 months</span>
               </div>
            </div>
            <div className="bg-[#E8F7F0] p-4 rounded-xl">
              <p className="text-[#2D8A5B] text-sm font-semibold">
                +24% absolute increase in adherence (PDC) from baseline to 6 months
              </p>
            </div>
          </div>

          {/* MMAS-8 Chart Card */}
          <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm">
            <h4 className="font-bold mb-8">MMAS-8 Score</h4>
            <div className="h-[200px] relative border-b border-l border-gray-100 mb-6 flex items-center justify-center">
               {/* Simplified Line Chart Visual */}
               <svg className="w-full h-full p-4" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0,70 L50,60 L100,40" fill="none" stroke="#2E3A8C" strokeWidth="2" />
                 <path d="M0,75 L100,70" fill="none" stroke="#CBD5E1" strokeWidth="2" />
               </svg>
            </div>
            <div className="bg-[#E0E7FF] p-4 rounded-xl">
              <p className="text-[#2E3A8C] text-sm font-semibold">
                +47% improvement from baseline MMAS-8 score
              </p>
            </div>
          </div>
        </div>

        {/* 3. Dark "Key Points" Footer */}
        <div className="bg-[#111827] rounded-[32px] p-12 text-white mt-12">
          <h3 className="text-2xl font-bold mb-8">Key Points</h3>
          <ul className="space-y-6">
            {keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                {/* <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" strokeWidth={3} /> */}
                <p className="text-lg opacity-90">{point}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-12 border-t border-gray-800 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
               <span className="text-2xl">💊</span>
            </div>
            <div>
              <h4 className="text-xl font-bold">CareAide is not just a tracker, it is a Social Adherence Platform.</h4>
              <p className="opacity-60 text-sm mt-1">
                When adherence infrastructure is automated and socially reinforced, adherence becomes the default—not the exception.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceImprovements;
