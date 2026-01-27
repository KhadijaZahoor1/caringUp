import React from "react";
import OutcomeCard from "./OutcomeCard";
import CustomButton from "./Button";

const OutcomesSection = ({
  tagLine,
  heading,
  subHeading,
  outcomes = [],
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="w-full bg-[#f8fbff] flex justify-center py-[100px]">
      <div className="w-full max-w-[1440px] px-[132px] flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16">
          {tagLine && (
            <span className="text-[12px] font-bold text-[#8e9aaf] uppercase tracking-[0.2em] block mb-4">
              {tagLine}
            </span>
          )}

          {heading && (
            <h2 className="text-[48px] font-bold text-slate-900 mb-6 tracking-tight">
              {heading}
            </h2>
          )}

          {subHeading && (
            <p className="text-[#64748b] text-[16px] font-medium italic">
              {subHeading}
            </p>
          )}
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1176px]">
          {outcomes.map((item, index) => (
            <OutcomeCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Action Buttons */}
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex items-center gap-4 mt-16">
            {primaryButtonText && (
             <CustomButton variant="primary" label={primaryButtonText} />
            )}

            {secondaryButtonText && (
               <CustomButton variant="tertiary" label={secondaryButtonText} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OutcomesSection;
