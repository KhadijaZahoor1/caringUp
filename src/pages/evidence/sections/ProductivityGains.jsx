import React from 'react';
import gains from '../../../assets/icons/gains.png'

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

const ProductivityGains = () => {
 

  return (
    <div className="max-w-[1176px] mx-auto bg-white border border-borderClr rounded-[32px] md:p-12 p-5">
      {/* 1. Header & Hero Metric */}
      <div className="flex items-center gap-6 mb-12">
        <div className="">
          <img src={gains} alt='gains' />
        </div>
        <div>
          <h2 className="heading-6">Productivity Gains (All Diseases)</h2>
          <p className="body-text pt-3">A turnkey RPM solution that strengthens health outcomes and patient loyalty—without expanding your clinical team.</p>
        </div>
      </div>

      <div className='flex flex-col gap-12'>

     
      <div className="p-8 border border-borderClr rounded-3xl shadow-sm text-center">
        <h3 className="heading-2">RM 5.24M</h3>
        <p className="body-text-1 pt-2">Total annual net productivity gain per 1K workforce</p>
      </div>

      {/* 2. Detailed Comparison Table */}
     
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse evidenceTable">
            <thead className='border-b-4 border-borderClr'>
              <tr className="">
                <th className="py-2 px-8">Component</th>
                <th className="py-2 px-8">IG Savings (per patient/year)</th>
                <th className="py-2 px-8">CG Losses (per patient/year)</th>
                <th className="py-2 px-8"  style={{ backgroundColor: "#F1F5F9" }}>Net Benefit (per patient/year)</th>
              </tr>
            </thead>
            <tbody className="">
              {tableData.map((row, idx) => (
                <tr key={idx} className={`border-b border-borderClr `}>
                  <td className="py-3 px-8">{row.component}</td>
                  <td className="py-3 px-8">{row.ig}</td>
                  <td className="py-3 px-8 ">{row.cg}</td>
                  <td className={`py-3 px-8`}  style={{ backgroundColor: "#F1F5F9" }}>
                    {row.net}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      

      {/* 3. Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Absenteeism Reduction */}
        <div className="bg-[#F1F5F9] rounded-3xl md:p-8 p-5 border border-borderClr">
          <h4 className="heading-6 mb-6">Absenteeism Reduction</h4>
          <div className="space-y-6">
            <div className="flex justify-between">
              <span className="body-text text-primary font-light">IG average sick days:</span>
              <span className="body-text text-primary">5.6 days/year</span>
            </div>
            <div className="flex justify-between">
              <span className="body-text text-primary font-light">CG average sick days:</span>
              <span className="body-text text-primary">14.1 days/year</span>
            </div>
            <div className="pt-6 border-t border-borderClr flex justify-between">
              <span className="body-text text-primary font-light">Days saved:</span>
              <span className="body-text text-primary">8.5 days</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="body-text text-primary font-light">Value @ RM 150/day:</span>
              <span className="body-text text-primary">RM 1,275</span>
            </div>
          </div>
        </div>

        {/* Presenteeism Improvement */}
        <div className="bg-[#F1F5F9] rounded-3xl md:p-8 p-5 border border-borderClr">
          <h4 className="heading-6 mb-6">Presenteeism Improvement</h4>
          <div className="space-y-6">
            <div className="flex justify-between">
               <span className="body-text text-primary font-light">IG productivity score:</span>
               <span className="body-text text-primary">6.1/10</span>
            </div>
            <div className="flex justify-between">
               <span className="body-text text-primary font-light">CG productivity score:</span>
               <span className="body-text text-primary">4.8/10</span>
            </div>
            <div className="pt-6 border-t border-borderClr flex justify-between">
               <span className="body-text text-primary font-light">Days saved:</span>
               <span className="body-text text-primary">27% higher</span>
            </div>
            <div className="flex justify-between">
               <span className="body-text text-primary font-light">Value @ RM 150/day:</span>
               <span className="body-text text-primary">RM 3,900</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Methodology Notes */}
      <div className="bg-[#e0e7ffdb] bg-opacity-60 border border-[#2563EB] rounded-3xl p-5 md:py-6 md:px-8">
        <h4 className="heading-6 mb-3">Methodology Notes:</h4>
        <ul className="">
          <li className='body-text'>Self-reported productivity scale (0=unproductive, 10=fully productive)</li>
          <li className='body-text'>Absenteeism uses RM 150/day based on the reported data</li>
          <li className='body-text'>Presenteeism is valued at 40% of wage (RM 60/day) to reflect partial productivity losses</li>
        </ul>
      </div>
    </div>
     </div>

  );
};

export default ProductivityGains;