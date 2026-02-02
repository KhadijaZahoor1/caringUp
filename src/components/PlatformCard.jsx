import React from "react";
import smallChecker from '../assets/images/smallChecker.png'
import CurveArrowRight from "../assets/svg/CurveArrowRight";

const PlatformCard = ({ card }) => {
  return (
    <div
      className="relative bg-white rounded-3xl md:p-8 p-5 border border-borderClr shadow-[0_1px_4px_rgba(12,12,13,0.05)] flex flex-col gap-6 overflow-hidden group"
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
        <h3 className="heading-6 mb-3">
          {card.title}
        </h3>
        <p className="body-text-1 mb-10 flex-grow">
          {card.desc}
        </p>

        {/* Action Button */}
        {card.linkText && (
          <button className="flex items-center gap-1 body-text-1 text-[#1B447D] font-medium">
            {card.linkText}
           <CurveArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default PlatformCard;
