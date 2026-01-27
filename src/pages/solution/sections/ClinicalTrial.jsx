import React from 'react'
import starIcon from '../../../assets/icons/star.png'
import heartLineIcon from '../../../assets/icons/heartLine.png'
import costIcon from '../../../assets/icons/costIcon.png'
import smallChecker from '../../../assets/images/smallChecker.png'
import CustomButton from '../../../components/Button'

const trialResults  = [
    {
      title: "40%+ Higher adherence than control group and Baseline",
      icon: starIcon,
    },
    {
      title: "Significant Cost Savings",
      icon: costIcon,
    },
    {
      title: "Significant Health improvement vs. baseline and control group",
      icon: heartLineIcon,
    }
  ];

const ClinicalTrial = () => {
  return (
    <div className="my-[120px] mx-3 py-[100px] rounded-[64px] bg-white">
      <div className='max-w-[1176px] mx-auto'>
      {/* Header Area */}
      <div className="text-center">
        <h2 className="text-[48px] font-bold text-[#0F172A] leading-tight">
          One of Asia's Largest Randomized<br />Control Trial
        </h2>
        <p className="text-[#64748B] text-lg py-6">
          Registered with the Malaysia National Medical Research Register (NMRR)
        </p>
        
        {/* Participants Badge */}
        <div className="inline-block bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm">
          <p className="text-sm font-medium text-[#475569]">
            <span className="font-bold">3 major national public hospitals involved.</span> 10+ researchers.
          </p>
        </div>
      </div>

      {/* Results Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
        {trialResults.map((card, index) => (
          <div 
            key={index} 
            className="items-center text-center relative bg-white rounded-3xl p-10 border border-borderClr shadow-[0_1px_4px_rgba(12,12,13,0.05)] flex flex-col gap-5 overflow-hidden group"
            style={{
              backgroundImage: `url(${smallChecker})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top right'
            }}
          >
            {/* Gradient Icon Container */}
            <div className="w-16 h-16 mb-8 relative z-10">
              <img 
                src={card.icon} 
                alt="Impact Icon" 
                className="w-full h-full object-contain" 
              />
            </div>

            {/* Title Text */}
            <h3 className="text-[#1e293b] text-lg font-bold leading-snug px-2 relative z-10">
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="bg-[#E0E7FF] bg-opacity-60 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between border border-white">
        <div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-1">Ethics approved and Peer reviewed</h3>
          <p className="text-[#475569] text-lg font-medium opacity-80">
            View full clinical trial results and methodology
          </p>
        </div>
        
         <CustomButton
        variant="primary"
        label="View Clinical Trial Results"
      />
      </div>
      </div>
    </div>
  )
}

export default ClinicalTrial
