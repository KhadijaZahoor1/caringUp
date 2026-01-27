import React from 'react';
// import { CheckCircle2 } from 'lucide-react';

const QualityOfLife = () => {
  const benefits = [
    "Better daily functioning",
    "Fewer health-related disruptions",
    "More energy and less worry",
    "Users of CareAide felt better after 6 months",
    "Health problems reduced",
    "Health-related QOL improved"
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-24 px-4 font-sans text-[#0F172A]">
      {/* 1. Header Section */}
      <h2 className="text-[40px] font-bold text-center mb-16 leading-tight">
        Patient Quality of Life – Did They Feel Better themselves?
      </h2>

      {/* 2. Qualitative Benefits Card */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-12 mb-8">
        <h3 className="text-xl font-bold mb-10">Patients Felt Healthier and More in Control</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {/* <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" /> */}
              <span className="text-[14px] text-gray-700 font-medium leading-tight">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Conclusion Pill */}
        <div className="bg-[#E0E7FF] bg-opacity-50 border border-indigo-100 rounded-2xl p-6 text-center">
          <p className="text-sm text-[#2E3A8C] font-medium leading-relaxed">
            The CareAide app meaningfully enhanced patients' <span className="font-bold">overall well-being and day-to-day functioning.</span>
          </p>
        </div>
      </div>

      {/* 3. Metrics Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AQoL-6D Chart Card */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10">
          <h4 className="text-lg font-bold mb-2">Changes in Quality of Life Over Time</h4>
          <p className="text-gray-400 text-xs font-bold uppercase mb-12 tracking-wider">(AQoL-6D Scores)</p>
          
          <div className="relative h-[240px] w-full border-b border-l border-gray-100 mb-8 px-4">
             {/* Simple Line Visualization Placeholder */}
             <svg className="w-full h-full overflow-visible">
               {/* Control Group Line */}
               <path d="M0,150 L500,150" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="4" />
               {/* Intervention Group Line */}
               <path d="M0,150 L500,80" stroke="#1E293B" strokeWidth="3" fill="none" />
               <circle cx="500" cy="80" r="4" fill="#1E293B" />
             </svg>
             <div className="flex justify-between mt-4 text-[10px] text-gray-400 font-bold uppercase">
               <span>Baseline</span><span>F1</span><span>F2</span>
             </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-[22px] font-bold text-indigo-600 mb-1">0.56 → 0.68</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Intervention Group Improvement</p>
          </div>
        </div>

        {/* EQ-5D Chart Card */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-10">
          <h4 className="text-lg font-bold mb-2">EQ-5D Mean Score Over Time</h4>
          <p className="text-gray-400 text-xs font-bold uppercase mb-12 tracking-wider">(Lower is better)</p>
          
          <div className="relative h-[240px] w-full border-b border-l border-gray-100 mb-8 px-4">
             <svg className="w-full h-full overflow-visible">
               {/* Control Group Line */}
               <path d="M0,80 L500,80" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="4" />
               {/* Intervention Group Line */}
               <path d="M0,80 L500,160" stroke="#1E293B" strokeWidth="3" fill="none" />
               <circle cx="500" cy="160" r="4" fill="#1E293B" />
             </svg>
             <div className="flex justify-between mt-4 text-[10px] text-gray-400 font-bold uppercase">
               <span>Baseline</span><span>F1</span><span>F2</span>
             </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-[22px] font-bold text-indigo-600 mb-1">2.22 → 2.08</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Intervention Group Improvement (lower is better)</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default QualityOfLife;