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

   <div className="md:py-16 py-20 max-w-[1176px] mx-auto text-center">
      {/* Header Section */}
      <div className="mx-auto px-5 md:px-0">
        <h2 className="heading-2 mb-6">
          From Patient Insights to Clinical Action—Seamlessly
        </h2>
        <p className="body-text">
          The real value emerges when patient engagement and clinical oversight work together in one fluid system.
        </p>
      </div>

      {/* Main Container with Background Image */}
      <div style={{ 
           backgroundImage: `url(${stackBg})`,
                   backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",
              
          }} className="clinicalAction relative rounded-[32px] md:h-[420px] h-[800px] mt-16 overflow-hidden flex items-center justify-center p-8">
        
        

        {/* Cards Container */}
        <div className="relative z-10 flex flex-col md:flex-row md:gap-16 gap-8 w-full h-full items-stretch">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex-1 backdrop-blur-md bg-white/20 border border-white/20 rounded-[32px] p-8 text-left flex flex-col justify-between md:min-h-[320px] relative"
            >
              <div>
                <span className="text-white heading-2 opacity-90 block mb-8">
                  {step.number}
                </span>
                <p className="text-white heading-6 leading-7">
                  {step.text}
                </p>
              </div>

              {/* Arrow connectors (only for first two cards) */}
              {index < 2 && (
                <div className="hidden absolute right-[-65px] bottom-36 z-20 md:flex items-center gap-1">
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
