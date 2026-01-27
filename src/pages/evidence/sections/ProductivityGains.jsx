import React from 'react';

const ProductivityGains = () => {
  const tableData = [
    {
      component: "Absenteeism (average days/patient/year)",
      ig: "RM 840 (5.6 days)",
      cg: "RM 2,115 (14.1 days)",
      net: "+RM 1,275 (8.5 days)",
      isBold: false
    },
    {
      component: "Productivity score: 6.1/10 (±1.2) → 27% higher vs. 4.8/10 (±1.5)",
      ig: "",
      cg: "",
      net: "27% of 240 working days/year = 65 regained productive days. 65 × RM60 = +RM 3,900",
      isBold: false
    },
    {
      component: "Total (Workforce Only)",
      ig: "",
      cg: "",
      net: "+RM 5,175",
      isBold: true
    }
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-24 px-4 font-sans text-[#0F172A]">
      {/* 1. Header & Hero Metric */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg">
          <span className="text-white text-xl">🛠️</span>
        </div>
        <div>
          <h2 className="text-xl font-bold">Productivity Gains (All Diseases)</h2>
          <p className="text-gray-400 text-xs">A turnkey RPM solution that strengthens health outcomes and patient loyalty—without expanding your clinical team.</p>
        </div>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 p-12 text-center mb-12 shadow-sm">
        <h3 className="text-[56px] font-bold text-[#0F172A] mb-2">RM 5.24M</h3>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Total annual net productivity gain per 1K workforce</p>
      </div>

      {/* 2. Detailed Comparison Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-6 px-8">Component</th>
                <th className="py-6 px-8">IG Savings (per patient/year)</th>
                <th className="py-6 px-8">CG Losses (per patient/year)</th>
                <th className="py-6 px-8 bg-indigo-50/30">Net Benefit (per patient/year)</th>
              </tr>
            </thead>
            <tbody className="text-[13px] leading-relaxed">
              {tableData.map((row, idx) => (
                <tr key={idx} className={`border-b border-gray-50 ${row.isBold ? 'bg-gray-50/30 font-bold' : ''}`}>
                  <td className="py-6 px-8 max-w-xs">{row.component}</td>
                  <td className="py-6 px-8 text-gray-600">{row.ig}</td>
                  <td className="py-6 px-8 text-gray-600">{row.cg}</td>
                  <td className={`py-6 px-8 bg-indigo-50/20 font-bold ${row.isBold ? 'text-indigo-700' : 'text-gray-900'}`}>
                    {row.net}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Absenteeism Reduction */}
        <div className="bg-[#F8FAFC] rounded-[32px] p-10 border border-gray-100">
          <h4 className="text-lg font-bold mb-8">Absenteeism Reduction</h4>
          <div className="space-y-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">IG average sick days:</span>
              <span className="font-bold">5.6 days/year</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">CG average sick days:</span>
              <span className="font-bold">14.1 days/year</span>
            </div>
            <div className="pt-6 border-t border-gray-200 flex justify-between text-sm">
              <span className="text-gray-500">Days saved:</span>
              <span className="font-bold text-indigo-600">8.5 days</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-bold">Value @ RM 150/day:</span>
              <span className="font-bold text-indigo-600">RM 1,275</span>
            </div>
          </div>
        </div>

        {/* Presenteeism Improvement */}
        <div className="bg-[#F8FAFC] rounded-[32px] p-10 border border-gray-100">
          <h4 className="text-lg font-bold mb-8">Presenteeism Improvement</h4>
          <div className="space-y-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">IG productivity score:</span>
              <span className="font-bold">6.1/10</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">CG productivity score:</span>
              <span className="font-bold">4.8/10</span>
            </div>
            <div className="pt-6 border-t border-gray-200 flex justify-between text-sm">
              <span className="text-gray-500">Days saved:</span>
              <span className="font-bold text-indigo-600">27% higher</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 font-bold">Value @ RM 150/day:</span>
              <span className="font-bold text-indigo-600">RM 3,900</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Methodology Notes */}
      <div className="bg-[#E0E7FF] bg-opacity-60 border border-white rounded-[32px] p-10">
        <h4 className="text-sm font-bold mb-4 text-[#2E3A8C]">Methodology Notes:</h4>
        <ul className="text-[12px] text-[#475569] space-y-2 list-disc ml-4 opacity-80">
          <li>Self-reported productivity scale (0=unproductive, 10=fully productive)</li>
          <li>Absenteeism uses RM 150/day based on the reported data</li>
          <li>Presenteeism is valued at 40% of wage (RM 60/day) to reflect partial productivity losses</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductivityGains;