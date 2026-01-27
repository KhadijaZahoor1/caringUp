import React from "react";
import smallChecker from '../assets/images/smallChecker.png'
import CurveArrowRight from "../assets/svg/CurveArrowRight";

const PlatformCard = ({ card }) => {
  return (
    <div
      className="relative bg-white rounded-3xl p-10 border border-borderClr shadow-[0_1px_4px_rgba(12,12,13,0.05)] flex flex-col gap-5 overflow-hidden group"
      style={{
        backgroundImage: `url(${smallChecker})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      {/* Icon Container */}
      <div className="w-14 h-14 relative z-10">
        <img
          src={card.icon}
          alt={card.title}
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-[22px] font-bold text-[#1e293b] leading-tight mb-3">
          {card.title}
        </h3>
        <p className="text-[#64748b] text-[16px] leading-relaxed mb-6 flex-grow">
          {card.desc}
        </p>

        {/* Action Button */}
        {card.linkText && (
          <button className="flex items-center gap-1 text-[#4f46e5] font-bold text-sm hover:gap-2 transition-all">
            {card.linkText}
           <CurveArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default PlatformCard;
