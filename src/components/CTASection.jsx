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
    <div className="py-20 md:px-3 px-0">
      <div
        className="h-[560px] max-w-[1416px] relative rounded-[40px] md:rounded-[64px] overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-[#0B0C0B]">
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
        <div className="relative z-10 flex flex-col items-center max-w-[992px] mx-auto px-4">
          {title && (
            <h2 className="text-white heading-2">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-6 body-text text-sm md:text-[18px] text-white">
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
