import React from "react";
import CTABackground from "../assets/images/Hero.jpg";
import CustomButton from "./Button";

const CTASection = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  bgImage = CTABackground,
}) => {
  return (
    <div className="w-full flex justify-center py-20 px-3">
      <div
        className="relative rounded-[64px] overflow-hidden flex flex-col items-center justify-center text-center px-6 shadow-2xl bg-[#0B0C0B]"
        style={{
          width: "1416px",
          height: "560px",
        }}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Refined Linear Gradient Overlay:
            Based on Figma stops: 0% #0B0C0B (0% opacity) to 100% #0B0C0B (100% opacity)
        */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(180deg, rgba(11, 12, 11, 0) 0%, rgba(11, 12, 11, 1) 100%)"
          }} 
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {title && (
            <h2 className="text-white font-bold text-[32px] md:text-[48px] leading-[1.1] max-w-[850px] whitespace-pre-line tracking-tight">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-6 text-[16px] md:text-[18px] text-white/90 max-w-[620px] leading-relaxed">
              {description}
            </p>
          )}

          {(primaryBtn || secondaryBtn) && (
            <div className="flex items-center gap-4 pt-16">
              {primaryBtn && (
                <CustomButton 
                  variant="secondary" 
                  label={primaryBtn.label} 
                />
              )}
              {secondaryBtn && (
                <CustomButton 
                  variant="tertiary" 
                  label={secondaryBtn.label} 
                  showIcon={false} 
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CTASection;
