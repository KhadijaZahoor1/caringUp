import React from 'react';
import circle from '../../../assets/icons/checkbox-circle-fill.png'
import AQgraph from '../../../assets/images/AQgraph.png'


  const benefits = [
    "Better daily functioning",
    "Fewer health-related disruptions",
    "More energy and less worry",
    "Users of CareAide felt better after 6 months",
    "Health problems reduced",
    "Health-related QOL improved",
    "No major change in the control group"
  ];

const QualityOfLife = () => {


  return (
    <div className="max-w-[1176px] mx-auto md:pt-16">
      {/* 1. Header Section */}
      <h2 className="heading-2 text-center md:px-0 px-5">
        Patient Quality of Life – Did They Feel Better themselves?
      </h2>

      {/* 2. Qualitative Benefits Card */}
      <div className='flex flex-col gap-6 my-16'>
      <div className="bg-white rounded-3xl border border-borderClr shadow-sm md:p-10 p-5">
        <h3 className="heading-6">Patients Felt Healthier and More in Control</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 my-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <img src={circle} alt='circle' />
              <span className="body-text-1">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Conclusion Pill */}
        <div className="bg-[#e0e7ff] border border-[#1D4ED8] rounded-2xl p-6 text-justify">
          <p className="body-text-1">
            The CareAide app meaningfully enhanced patients' <span className="body-text-1 font-medium text-[#0F172A]">overall well-being and day-to-day functioning.</span>
          </p>
        </div>
      </div>

      {/* 3. Metrics Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AQoL-6D Chart Card */}
        <div className="bg-white rounded-3xl border border-borderClr shadow-sm md:p-8 p-5">
          <h4 className="heading-6 md:max-w-[400px]">Changes in Quality of Life Over Time (AQoL-6D Scores)</h4>
         <div className='my-8'>
          <img alt='graph' src={AQgraph} />
         </div>
          <div className="text-center">
            <p className="body-text-heading text-[#2563EB]">0.56 → 0.68</p>
            <p className="body-text-1 text-primary">Intervention Group Improvement</p>
          </div>
        </div>

        {/* EQ-5D Chart Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm md:p-10 p-5">
           <h4 className="heading-6">EQ-5D Mean Score Over Time</h4>
          
           <div className='my-8'>
          <img alt='graph' src={AQgraph} />
         </div>

          <div className="text-center pt-4">
            <p className="body-text-heading text-[#2563EB]">2.22 → 2.08</p>
             <p className="body-text-1 text-primary">Intervention Group Improvement (lower is better)</p>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default QualityOfLife;