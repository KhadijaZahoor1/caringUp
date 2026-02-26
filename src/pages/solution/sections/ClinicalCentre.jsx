import React, { useState } from 'react'
import smallChecker from '../../../assets/images/smallChecker.png'
import corporate from '../../../assets/icons/corporate.png'
import payers from '../../../assets/icons/payers.png'
import service from '../../../assets/icons/service.png'
import solutionIcon1 from '../../../assets/icons/solutionIcon1.png'
import solutionIcon3 from '../../../assets/icons/solutionIcon3.png'
import PlatformCard from '../../../components/PlatformCard'
import UpArrow from '../../../assets/svg/UpArrow'
import DownArrow from '../../../assets/svg/DownArrow'
import CustomButton from '../../../components/Button'



const stakeholderCards = [
    {
      title: "Providers & Health Systems",
      desc: "Deliver continuous care across patient journeys and improve Patient Satisfaction.",
      icon: solutionIcon1,
      linkText: "Industry Solution",
    },
    {
      title: "Payers (Insurance, Corporates, TPAs, MCOs, HMOs)",
      desc: "Detect risk and intervene early. Lower hospitalization, ER visits and overall cost by up to 37%.",
      icon: payers,
      linkText: "Industry Solution",
    },
    {
      title: "Monitoring Service Providers",
      desc: "Expand and deepen your services - Deliver RPM services to multiple clients.",
      icon: service,
      linkText: "Contact Us",
    },
    {
      title: "Government & Public Health Agencies",
      desc: "Gain national visibility into disease burden, monitor public health programs, and optimize resource allocation for NCDs, HIV, and TB.",
      icon: solutionIcon3,
      linkText: null, // As per image, some might not have links or different ones
    },
    {
      title: "Corporate Wellness Teams",
      desc: "Support employees with chronic conditions. Lower Absenteeism.",
      icon: corporate,
      linkText: null,
    }
  ];

  const capabilities = [
    {
      title: "Portfolio & Teams Insights",
      detail: "High-level trends and insights across your entire patient cohorts, or drill down by teams, groups, or segments."
    },
    { title: "Timely patient insights", detail: "Real-time data processing to ensure clinicians see changes in patient status immediately." },
    { title: "Risk detection with AI Assist", detail: "Automated flagging of high-risk patients based on clinical data patterns." },
    { title: "Treatment Efficacy Monitoring", detail: "Track how patients are responding to specific protocols over time." },
    { title: "Patient engagement & internal case collaboration", detail: "Unified tools for care teams to discuss and manage complex patient cases." },
    { title: "Patient data privacy protection", detail: "End-to-end encryption and compliance with global healthcare data standards." }
  ];


const ClinicalCentre = () => {
    const [openCapability, setOpenCapability] = useState(0);
  return (
    <div className='md:py-16 py-20'>
    <div className=" md:py-[100px] py-20 rounded-[32px] md:rounded-[64px] bg-white">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-6">
          WeCare: The Clinical Command Centre
        </h2>
        <p className="body-text text-[18px] leading-8">
          Enterprise-grade Multi-stakeholder Monitoring for Every Care Model
        </p>
      </div>

      {/* Stakeholder Cards Grid */}
      <div className="max-w-[1176px] mx-auto ">
      {/* Top Row: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 md:px-0 px-5">
        {stakeholderCards.slice(0, 2).map((card, index) => (
          <PlatformCard key={index} card={card} />
        ))}
      </div>

      {/* Bottom Row: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-0 px-5">
        {stakeholderCards.slice(2, 5).map((card, index) => (
          <PlatformCard key={index} card={card} />
        ))}
      </div>
    </div>

      {/* Capabilities Section */}
      <div className="bg-white rounded-3xl border border-borderClr max-w-[1176px] mx-auto my-16 shadow-[0_1px_4px_rgba(12,12,13,0.05)] py-8 md:px-10 px-5">
        <h3 className="heading-6 mb-8">Key Capabilities</h3>
        <div className="divide-y divide-borderClr">
          {capabilities.map((cap, index) => (
            <div key={index} className="py-6">
              <button 
                onClick={() => setOpenCapability(openCapability === index ? -1 : index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className={`body-text font-semibold ${openCapability === index ? 'text-[#0F172A]' : 'text-[#475569]'}`}>
                  {cap.title}
                </span>
                 {openCapability === index ? <UpArrow /> : <DownArrow />}
              </button>
              {openCapability === index && (
                <div className="mt-4 body-text animate-fadeIn">
                  {cap.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="flex justify-center">
       <CustomButton  variant="primary"
        label="Request a Demo" />
      </div>


    </div>
    </div>
  )
}

export default ClinicalCentre
