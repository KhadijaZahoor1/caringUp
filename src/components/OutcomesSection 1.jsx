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
    <section className="w-full flex justify-center py-20 md:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-0 flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="text-center">
          {tagLine && (
            <span className="body-text font-medium text-primary">
              {tagLine}
            </span>
          )}

          {heading && (
            <h2 className="heading-2 py-6">
              {heading}
            </h2>
          )}

          {subHeading && (
            <p className="body-text">
              {subHeading}
            </p>
          )}
       
</div>
        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1176px] py-16">
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
          <div className="flex items-center md:flex-row flex-col gap-4">
            {primaryButtonText && (
             <CustomButton variant="primary" label={primaryButtonText} />
            )}

            {secondaryButtonText && (
               <CustomButton variant="fourth" label={secondaryButtonText} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OutcomesSection;


  // <button className=" px-4 py-3 rounded-full body-text text-primary border border-borderClr">
  //         Become a Care Partner
  //       </button>