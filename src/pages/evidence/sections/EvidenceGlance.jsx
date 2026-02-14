import React, { useRef } from "react";
import heartLine from '../../../assets/icons/heartLine.png'
import circle from '../../../assets/icons/checkbox-circle-fill.png'

const EvidenceGlance = () => {
  const stats = [
    {
      label: "Study Populations",
      value: "1,160",
      text1: "Control Group:",
      text1value: '541',
      text2: "Intervention Group:",
      text2value: '565'
    },
    {
      label: "Medication Adherence (6 months)",
      value: "88,4%",
      text1value: '+24% absolute from baseline',
      text2value: 'vs. 66.7% control group'
    },
    {
      label: "Cost Savings",
      value: "-37%",
       text1value: 'IG vs. CG (excl. hospitalization)',
    },
  ];

  const outcomeCards = [
    {
      title: "Diabetes (HbA1c)",
      value: "-1.0%",
      desc: "absolute IG vs. +0.2% CG",
    },
    {
      title: "Asthma (ACQ-6 score)",
      value: "-0.63",
      desc: "IG vs. -0.27 in CG",
    },
    {
      title: "Heart Failure (EF%)",
      value: "+50%",
      desc: "relative from baseline",
    },
    {
      title: "Cholesterol (LDL mmol/L)",
      value: "-0.13",
      desc: "IG vs. +0.28 in CG",
    },
    { title: "Hypertension (SBP mmHg)", value: "-10", desc: "IG vs. +1.3 CG" },
    {
      title: "Quality of Life (AQoL-8D)",
      value: "0.56 → 0.68",
      desc: "major improvement",
    },
  ];

  return (
    <div className="max-w-[1176px] mx-auto md:py-[120px] py-20">
      {/* 2. Main Title */}
      <div className="">
        <h2 className="heading-2 text-center">At A Glance</h2>
      </div>

      {/* 3. Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:px-0 px-5">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border border-borderClr shadow-sm rounded-3xl p-8"
          >
            <p className="body-text-1">{stat.label}</p>
            <h3 className="heading-2 text-[#0F172A] py-2">{stat.value}</h3>
            <div className="flex flex-col gap-1">
              <p className="body-text-1 text-primary">
                {stat.text1} <span className="body-text-1">{stat.text1value}</span>
              </p>
              <p className="body-text-1 text-primary">
                {stat.text2} <span className="body-text-1">{stat.text2value}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Clinical Outcomes Section */}
      <div className="bg-white md:rounded-[40px] rounded-[32px] mt-6 md:p-8 p-5 border border-borderClr shadow-sm">
        <h4 className="heading-6">
          Clinical Outcomes (IG @ 6 months from baseline)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {outcomeCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-3xl p-6 flex items-start gap-6 border border-borderClr"
            >
              <img src={heartLine} alt="heartLine" />
              <div>
                <p className="body-text-1">{card.title}</p>  
                <p className="heading-3 py-2">{card.value}</p>
                <p className="body-text-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" bg-[#E0E7FF] border rounded-[24px] md:p-8 p-5 flex md:flex-row flex-col md:items-center items-start gap-6">
         
           <img src={circle} alt="circle" className="w-8 h-8" />
          
          <p className="body-text">
            The impact is clinically and statistically significant. HbA1c impact
            is one of the highest from any mHealth tool globally. Asthma
            patients on CareAide are{" "}
            <span className="body-text text-[#2563EB]">
              2x more likely
            </span>{" "}
            to control their condition compared to standard care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvidenceGlance;
