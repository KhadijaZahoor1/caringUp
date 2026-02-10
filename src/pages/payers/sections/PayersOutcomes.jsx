import React from "react";
import OutcomeCard from "../../../components/OutcomeCard";
import CustomButton from "../../../components/Button";
import PayersOutcomeCard from "./PayersOutcomeCard";

const PayersOutcomes = ({
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
    <section className="w-full flex justify-center py-20 md:py-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-0 flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="text-center">
          {tagLine && (
            <span className="body-text font-medium text-primary">
              {tagLine}
            </span>
          )}

          {heading && <h2 className="heading-2 py-6">{heading}</h2>}

          {subHeading && <p className="body-text">{subHeading}</p>}
        </div>
        {/* Outcomes Grid */}
        <div className="bg-white md:p-8 p-5 rounded-[32px] my-16">
          <p className="body-text max-w-[936px] mx-auto text-center">
            Backed by one of Asia's largest multi-site Randomized Controlled
            Trials, our platform delivers measurable reductions in high-cost
            utilization and improves clinical stability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1176px] pt-8">
            {outcomes.map((item, index) => (
              <PayersOutcomeCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
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

export default PayersOutcomes;

// <button className=" px-4 py-3 rounded-full body-text text-primary border border-borderClr">
//         Become a Care Partner
//       </button>
