import React from "react";
import integratedPlatform from "../../../assets/images/integratedPlatform.png";
import careAideBg from "../../../assets/images/careAideBg.png";
import { MentalHealth } from "../../../assets/svg/MentalHealth";
import Microscope from "../../../assets/svg/Microscope";
import Heart from "../../../assets/svg/Heart";
import bulb from '../../../assets/icons/bulb.png'

const infoPoints = [
  {
    icon:  <MentalHealth />,
    label: "For",
    text: "Patients with Diabetes, Heart Failure, Hypertension, COPD/Asthma, HIV, TB and more.",
  },
  {
    icon:  <Microscope />,
    label: "Use case",
    text: "Care Management to lower ER visits, clinical intervention when needed, ~90% treatment compliance rates.",
  },
  {
    icon:   <Heart />,
    label: "Outcomes",
    text: "Better Health Outcomes, Patient Satisfaction, Cost containment.",
  },
];

const IntegratedPlatform = () => {
  return (
    <div className="mt-20 mb-[120px] max-w-[1176px] mx-auto rounded-[32px] border bg-white">
      <div
        style={{
          backgroundImage: `url(${careAideBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        className="relative flex rounded-[32px] px-10 pb-0 py-9 gap-5"
      >
          {/* Left Side: Laptop Mockup Area */}
          <div className="md:w-1/2 w-full">
              <img
                src={integratedPlatform}
                alt="CareAide App Interface"
                className="w-full max-w-[460px] object-contain"
              />
            </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 w-full mt-1">
            <h2 className="heading-3 mb-8">
              Integrated Platform – Clinical Intervention When Needed
            </h2>
            <p className="body-text mb-8">
              Care Management & Targeted Monitoring to improve treatment
              efficacy — deployable in minutes, not weeks.
            </p>

            <div className="space-y-8">
              {infoPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  {point.icon}
                  <div>
                    <h4 className="body-text-heading mb-2">
                      {point.label}
                    </h4>
                    <p className="body-text-1">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
     
      {/* Bottom Highlight: Seamless Upgrade Path */}
      <div className="m-3 mt-12">
        <div className="rounded-[24px] p-8 flex items-center gap-6 bg-[#E0E7FF]">
          <div className="">
           <img src={bulb} />
          </div>

          <div>
            <h3 className="heading-6 mb-3">
              The Seamless Upgrade Path
            </h3>
            <p className="body-text">
              Patients already using CareAide can be enrolled into clinical
              monitoring seamlessly — maximizing adoption and lowering
              acquisition cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedPlatform;
