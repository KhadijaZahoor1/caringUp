import React from "react";
import checkLine from '../assets/icons/check-line.png'
import CustomButton from "./Button";

const SolutionCard = ({
  badgeText,
  title,
  description,
  features,
  buttonText,
  iconGradient,
  icon,
}) => {
  return (
    <div
      className="bg-white w-full flex flex-col relative overflow-hidden md:py-10 md:px-12 px-5 py-6 border shadow-[0_1px_4px_rgba(12,12,13,0.05)] rounded-[32px]"
    >
      {/* Top Icon Area */}
      <div className="mb-8">
        <div className={``}>
          <img src={icon} alt="solution icon" className="object-contain" />
        </div>
      </div>

      {/* Badge */}
      <div className="mb-5">
        <span className="bg-[#E8F7F0] text-[#2D8A5B] py-2 px-3 rounded-[10px] body-text font-medium">
          {badgeText}
        </span>
      </div>

      {/* Header Text */}
      <h1 className="heading-3 mb-3">
        {title}
      </h1>

      <p className="body-text mb-8">{description}</p>

      {/* Features List */}
      <div className="space-y-5 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
            {  <img src={checkLine} alt="checkline" className="object-contain" />}
            </div>
            <p className="body-text text-primary">
              <span className="font-medium body-text text-primary">{feature.title}</span>{" "}
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <CustomButton  variant="primary"
               label="Discover Provider Solutions" />
      </div>
    </div>
  );
};

export default SolutionCard;
