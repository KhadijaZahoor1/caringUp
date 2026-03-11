import React from "react";
import checkLineCircle from "../../assets/icons/checkbox-circle-fill.png";
import homeCardChecker from "../../assets/images/card.png";
import bulb from "../../assets/icons/stack1.png";

const WhatWeDo = ({
  title,
  description,
  buttonText,
  onButtonClick,
  points = [],
  showPayersSection = false,
}) => {
  return (
    <section className="md:my-16 my-0 bg-white rounded-[32px] md:rounded-[64px]">
      <div className="w-full md:py-[100px] py-20 max-w-[1416px] px-5 lg:px-[120px] flex md:flex-row flex-col justify-between items-start gap-20">
        {/* LEFT COLUMN */}
        <div className="md:w-[30%] w-full shrink-0 flex flex-col">
          <h5 className="body-text font-medium text-primary">WHAT WE DO</h5>
          {title && <h2 className="heading-2 mt-6">{title}</h2>}
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:w-[70%] w-full flex flex-col gap-10">
          <div>
            <p className="body-text">
              CaringUp delivers a unified Public Health & Care Management
              platform built for scale. We help health systems and payers
              achieve outcomes that matter to their business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((p, i) => {
              const isFullWidth = i === 0 || i === 3 || i === 6;

              return (
                <div
                  key={i}
                  className={`bg-white rounded-[32px] p-5 md:p-8 flex items-center border border-slate-100 relative overflow-hidden w-full ${
                    isFullWidth ? "md:col-span-2" : "md:col-span-1"
                  }`}
                  style={{
                    backgroundImage: `url(${homeCardChecker})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex flex-row items-center gap-4 relative z-10">
                    <img
                      src={checkLineCircle}
                      className="w-6 h-6 flex-shrink-0"
                      alt="check"
                    />
                    <h3 className="body-text-heading">{p.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-[24px] md:p-8 p-5 flex md:items-center items-start md:gap-6 gap-2 bg-[#E0E7FF]">
            <div className="">
              <img src={bulb} className="hidden md:block" />
            </div>

            <div>
              <h3 className="heading-6 md:mb-3 mb-1">
                And we make it accessible
              </h3>
              <p className="body-text">
                Launching a chronic care program no longer depends on devices,
                capital expenditure, or IT projects. Providers and partners can
                onboard their first patient in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
