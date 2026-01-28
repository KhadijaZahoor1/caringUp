import React from "react";
import CustomButton from "./Button";
import multiSiteIcon from "../assets/icons/multiSiteIcon.png";
import solutionIcon2 from "../assets/icons/solutionIcon2.png";
import costIcon from "../assets/icons/costIcon.png";
import dollarIcon from "../assets/icons/DollarIcon.png";
import homeCardChecker from "../assets/images/homeCardChecker.png";

// Sub-component for individual validation cards
const EvidenceCard = ({ icon, title, description }) => (
  /* Parent must be relative for the absolute child to fill it */
  <div className="relative bg-white border border-borderClr rounded-[32px] p-8 flex flex-col overflow-hidden">
    {/* Background Pattern Layer */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${homeCardChecker})`,
        backgroundSize: "contain", // Or "contain" depending on the pattern scale
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        opacity: 0.5, // Optional: Adjust if the pattern is too dark
      }}
    />

    {/* Content Layer - Ensure z-10 so it stays above the pattern */}
    <div className="relative z-10 flex flex-col">
      <div className="w-14 h-14 rounded-2xl overflow-hidden mb-6">
        <img src={icon} alt={title} className="w-full h-full object-cover" />
      </div>

      <div>
        <h3 className="text-[22px] font-body font-medium text-primary pb-3">
          {title}
        </h3>
        <p className="text-tertairy text-sm leading-[1.6] font-normal font-body">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const EvidenceSection = () => {
  // Hardcoded data based on your screenshot
  const evidenceData = [
    {
      title: "Multi-site RCT with 1100+ patients",
      description:
        "Conducted across multiple hospitals and care settings, the trial evaluated RPM effectiveness with a diverse patient population—ensuring high external validity and strong clinical confidence.",
      icon: multiSiteIcon,
    },
    {
      title: ">95% medication adherence (PDC) sustained over 6 months(vs. 66% in the control group)",
      description:
        "Patients supported by the RPM program achieved >95% PDC (Proportion of Days Covered), compared to just 66% in the control group—demonstrating long-term behavioral change and superior treatment compliance.",
      icon: solutionIcon2,
    },
    {
      title: "50% improvement in ejection fraction (EF%) among heart failure patients from baseline",
      description:
        "Participants with heart failure saw a significant increase in EF% from baseline, reflecting improved cardiac function and measurable clinical recovery driven by early intervention and continuous monitoring.",
      icon: costIcon,
    },
    {
      title: "37% lower total medical costs for diabetic patients compared to control group",
      description:
        "The RPM cohort showed dramatically lower spending compared to the control group, with fewer acute events, better self-management, and reduced reliance on emergency care.",
      icon: dollarIcon,
    },
  ];

  return (
    <section className="w-full flex justify-center py-[120px]">
      <div className="max-w-[1440px] w-full px-[132px] flex flex-col md:flex-row items-start">
        {/* Left Content Column */}
        <div className="w-full md:w-[40%] md:sticky md:top-24">
          <h3 className="text-[48px] heading-3 leading-[4.3rem] mb-6">
            Evidence and <br /> Validation
          </h3>
          <p className="body-text font-light max-w-[320px] pb-16">
            Backed by one of Asia’s largest, award-winning randomized controlled
            trials
          </p>

          <CustomButton variant="primary" label="See the Evidences" />
        </div>

        {/* Right Cards Column */}
        <div className="w-full md:w-[60%] flex flex-col gap-6">
          {evidenceData.map((item, index) => (
            <EvidenceCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
