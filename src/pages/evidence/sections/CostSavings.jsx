import React, { useState } from 'react';
// import { Info } from 'lucide-react';

const CostSavings = () => {
  const [activeTab, setActiveTab] = useState('direct'); // 'direct' or 'avoidance'

  const directSavingsData = [
    { disease: "Hypertension", ig: "220", cg: "250", delta: "-30", pdc: "98% vs. 85%" },
    { disease: "Diabetes", ig: "310", cg: "340", delta: "-30", pdc: "100% vs. 67%" },
    { disease: "Asthma", ig: "180", cg: "210", delta: "-30", pdc: "95% vs. 50%" },
    { disease: "Heart Failure", ig: "400", cg: "420", delta: "-20", pdc: "93% vs. 83%" },
  ];

  const complicationData = [
    { disease: "Hypertension", driver: "Fewer add-on drugs", savings: "350" },
    { disease: "Diabetes", driver: "Delayed Insulin initiation", savings: "1,440" },
    { disease: "Asthma", driver: "Reduced SABA + ER visits", savings: "215" },
    { disease: "Heart Failure", driver: "Fewer adjustments + admissions", savings: "1,100 (+ RM 1,500 risk)" },
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-24 px-4 font-sans text-[#0F172A]">
      {/* 1. Header & Summary Cards */}
      <h2 className="text-[44px] font-bold text-center mb-16 text-[#0F172A]">Healthcare Cost Savings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Direct Medication Saving</p>
          <h3 className="text-[44px] font-bold mb-2">RM 360K</h3>
          <p className="text-[#64748B] text-xs">Per 1,000 patients annually through optimized medication use and better adherence</p>
        </div>
        <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Medication Adherence (6-months)</p>
          <h3 className="text-[44px] font-bold mb-2">RM 3M+</h3>
          <p className="text-[#64748B] text-xs">Per 1,000 patients annually by preventing disease progression and complications</p>
        </div>
      </div>

      {/* 2. Main Tabbed Dashboard */}
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
        {/* Custom Tab Switcher */}
        <div className="flex border-b border-gray-100">
          <button 
            onClick={() => setActiveTab('direct')}
            className={`flex-1 py-8 px-4 text-center transition-all ${activeTab === 'direct' ? 'bg-white font-bold border-b-4 border-indigo-600' : 'bg-gray-50 text-gray-400 font-medium hover:bg-gray-100'}`}
          >
            Direct Medication Savings <br/> <span className="text-[10px] font-normal opacity-60">(Monthly consumption data)</span>
          </button>
          <button 
            onClick={() => setActiveTab('avoidance')}
            className={`flex-1 py-8 px-4 text-center transition-all ${activeTab === 'avoidance' ? 'bg-white font-bold border-b-4 border-indigo-600' : 'bg-gray-50 text-gray-400 font-medium hover:bg-gray-100'}`}
          >
            Complication Avoidance Savings <br/> <span className="text-[10px] font-normal opacity-60">(Annual cost avoided)</span>
          </button>
        </div>

        <div className="p-12">
          <h4 className="text-center font-bold text-gray-700 mb-10">
            {activeTab === 'direct' 
              ? "IG consume less medicine (avg. per month savings)" 
              : "Medicine cost savings per year by avoiding complications"}
          </h4>

          {/* Extrapolation Banner */}
          <div className="bg-[#F1F5F9] rounded-2xl p-6 text-center mb-10">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Extrapolate to 1K patients/year</p>
            <p className="text-xl font-bold">{activeTab === 'direct' ? "RM 360K/year" : "RM 1.3M/year (~3M/year)"}</p>
          </div>

          {/* Conditional Table Rendering */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-gray-400 uppercase border-b border-gray-50">
                  <th className="py-4">Disease</th>
                  <th className="py-4">{activeTab === 'direct' ? 'IG Cost (RM)' : 'Key Savings Driver'}</th>
                  <th className="py-4">{activeTab === 'direct' ? 'CG Cost (RM)' : 'Cost Avoided/Patient/Year (RM)'}</th>
                  {activeTab === 'direct' && <th className="py-4">Δ Cost (RM)</th>}
                  {activeTab === 'direct' && <th className="py-4">PDC Impact</th>}
                </tr>
              </thead>
              <tbody className="text-sm">
                {(activeTab === 'direct' ? directSavingsData : complicationData).map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/30">
                    <td className="py-4 font-bold">{row.disease}</td>
                    <td className="py-4 text-gray-600">{activeTab === 'direct' ? row.ig : row.driver}</td>
                    <td className="py-4 text-gray-600">{activeTab === 'direct' ? row.cg : row.savings}</td>
                    {activeTab === 'direct' && <td className="py-4 font-bold text-green-600">{row.delta}</td>}
                    {activeTab === 'direct' && <td className="py-4 text-[11px] text-gray-400">{row.pdc}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3. Important Note Footer */}
      <div className="mt-12 bg-[#E0E7FF] bg-opacity-60 border border-white rounded-[32px] p-8 flex items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-400 via-orange-400 to-emerald-400 flex-shrink-0 flex items-center justify-center shadow-lg">
           {/* <Info className="text-white w-6 h-6" /> */}
        </div>
        <div>
          <h4 className="text-lg font-bold mb-1">Important note on cost interpretation</h4>
          <p className="text-xs text-[#475569] leading-relaxed opacity-80">
            Cost savings reported in this study reflect the Malaysian public health system, where many services are heavily subsidised or free at the point of care. 
            Actual savings for your system may vary depending on funding model, tariffs, and patient mix.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CostSavings;