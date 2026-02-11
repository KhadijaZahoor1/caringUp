import React from "react";
import CustomButton from "./Button";

const Hero = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  backgroundImage,
  container = false,
}) => {
  return (
    <section className="lg:px-4">
      <div
        className="lg:h-[757px] h-[650px] max-w-[1416px] relative md:rounded-[64px] overflow-hidden bg-[#0D0F0D]" // Base color from Figma
      >
        {/* The Background Image Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* The Fixed Linear Gradient Overlay:
            Using the exact Figma hex values: #0D0F0D at 0% and #0B0C0B at 100%
        */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(180deg, rgba(13, 15, 13, 0) 0%, rgba(11, 12, 11, 1) 100%)"
          }} 
        />

        {/* Content Wrapper */}
        <div className={` ${container ? 'max-w-[720px]' : 'max-w-[936px]'} relative z-10 h-full m-auto flex flex-col items-center justify-center text-center px-6`}>
          <h1 className="text-white heading-1 tracking-tight mb-6">
            {title}
          </h1>
          
          <p className="text-white body-text mb-16">
            {description}
          </p>

          {/* Conditional Button Container */}
          {(primaryBtn || secondaryBtn) && (
            <div className="flex items-center md:flex-row flex-col gap-4">
              {primaryBtn && (
                <CustomButton 
                  variant="secondary" 
                  label={primaryBtn.label} 
                  onClick={primaryBtn.onClick} 
                />
              )}
              {secondaryBtn && (
                <CustomButton 
                  variant="tertiary" 
                  label={secondaryBtn.label} 
                  onClick={secondaryBtn.onClick} 
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
