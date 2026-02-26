import React, { useState } from "react";
import { MentalHealth } from "../../../assets/svg/MentalHealth";
import Microscope from "../../../assets/svg/Microscope";
import Heart from "../../../assets/svg/Heart";
import heart2 from "../../../assets/images/heart2.png";
import careAideBg from "../../../assets/images/careAideBg.png";
import CareAideImg from "../../../assets/images/careAide.png";
import UpArrow from "../../../assets/svg/UpArrow";
import DownArrow from "../../../assets/svg/DownArrow";
import careaideLogo from "../../../assets/images/careaide-logo.png";
import appstore from "../../../assets/images/appstore.png";

const SolutionAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const capabilities = [
    {
      title: "Holistic Health Management",
      content:
        "Everything patients need to stay adherent—medication reminders, vitals tracking, symptom logs, and education—unified in one interface.",
    },
    {
      title: "For Family and Caregivers",
      content:
        "Enable seamless communication and oversight for family members and professional caregivers.",
    },
    {
      title: "Gamification & Rewards",
      content:
        "Boost engagement through health challenges, milestones, and integrated reward systems.",
    },
    {
      title: "Data Privacy & Security",
      content:
        "Enterprise-grade security ensuring all patient health information remains encrypted and protected.",
    },
  ];

  return (
    <div className="mt-20 md:mt-16 max-w-[1176px] mx-auto rounded-[32px] border bg-white">
      <div
        className="flex md:flex-row flex-col relative md:px-6 px-5 py-9 pb-0 rounded-[32px]"
        style={{
          backgroundImage: `url(${careAideBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="md:w-3/5 w-full">
          <h2 className="heading-3 mb-6">
            CareAide – Health Engagement for Everyone
          </h2>
          <p className="body-text mb-8">
            Provide health management tools and incentives for your entire
            population—a strategic perk that delivers multiple returns.
          </p>

          {/* Quick Info Points */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MentalHealth />
              <div>
                <h4 className=" body-text-heading mb-2">For</h4>
                <p className="body-text-1">
                  Large population with diverse needs and backgrounds.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Microscope />
              <div>
               <h4 className="body-text-heading mb-2">Use case</h4>
                <p className="body-text-1">
                  Health engagement, symptom reporting, family oversight, early
                  risk detection.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Heart />
              <div>
               <h4 className="body-text-heading mb-2">Outcomes</h4>
                <p className="body-text-1">
                  Chronic disease management, treatment compliance,
                  productivity, quality of life and cost containment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mockup Area (Placeholder for images) */}
        <div className="md:w-2/5 w-full">
          <img
            src={CareAideImg}
            alt="CareAide App Interface"
            className="w-full max-w-[550px] object-contain md:py-0 py-6"
          />
        </div>
      </div>

      {/* Bottom Section: Accordion & App Links */}
      <div className="bg-bgclr rounded-[32px] md:py-8 md:px-10 p-5 border m-3 mt-0">
        <h3 className="heading-6 mb-5">
          Key Capabilities
        </h3>

        <div className="divide-y divide-borderClr">
          {capabilities.map((item, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === index ? -1 : index)
                }
                className="w-full flex justify-between items-center text-left group"
              >
                <span
                  className={`body-text font-semibold transition-colors ${openAccordion === index ? "text-[#0F172A]" : "text-[#475569]"}`}
                >
                  {item.title}
                </span>
                {openAccordion === index ? <UpArrow /> : <DownArrow />}
              </button>

              {openAccordion === index && (
                <div className="mt-3 body-text max-w-4xl animate-fadeIn">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-6 border-t border-gray-100">
          <p className="flex flex-row items-center font-medium body-text text-primary tracking-widest uppercase mb-6">
            Download{" "}
            <span className="">
              <img src={careaideLogo} className="pr-1" />
            </span>{" "}
            App for Free
          </p>
          <div className="flex gap-4">
            <div className="">
              <img src={appstore} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionAccordion;
