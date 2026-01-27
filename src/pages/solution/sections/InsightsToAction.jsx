import React from 'react'
import stackBg from '../../../assets/images/stackBg.png'
import dotArrow from '../../../assets/icons/mediumArrow.png'


const steps = [
    {
      number: "01.",
      text: "Patient data from CareAide app",
    },
    {
      number: "02.",
      text: "Insight in WeCare platform",
    },
    {
      number: "03.",
      text: "Engage → Escalate → Intervene → Improve",
    }
  ];


const InsightsToAction = () => {
  return (

   <div className="py-[120px] max-w-[1176px] mx-auto text-center">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[44px] font-bold text-[#0F172A] leading-tight mb-6">
          From Patient Insights to Clinical Action—Seamlessly
        </h2>
        <p className="text-[#64748B] text-lg">
          The real value emerges when patient engagement and clinical oversight work together in one fluid system.
        </p>
      </div>

      {/* Main Container with Background Image */}
      <div style={{ 
           backgroundImage: `url(${stackBg})`,
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
              
          }} className="relative rounded-[32px] h-[420px] mt-16 overflow-hidden flex items-center justify-center p-8">
        
        

        {/* Cards Container */}
        <div className="relative z-10 flex flex-col md:flex-row gap-16 w-full h-full items-stretch">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex-1 backdrop-blur-md bg-white/20 border border-white/20 rounded-[32px] p-10 text-left flex flex-col justify-between min-h-[320px] relative"
            >
              <div>
                <span className="text-white text-4xl font-bold opacity-90 block mb-8">
                  {step.number}
                </span>
                <p className="text-white text-2xl font-semibold leading-snug">
                  {step.text}
                </p>
              </div>

              {/* Arrow connectors (only for first two cards) */}
              {index < 2 && (
                <div className="absolute right-[-65px] bottom-36 z-20 flex items-center gap-1">
                   <img  src={dotArrow} />
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default InsightsToAction
