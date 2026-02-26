import React from "react";
import CustomButton from "./Button";
import circleCheck from "../assets/icons/checkbox-circle-fill.png";
import lineConnector from "../assets/images/line.png";

const PayerValueSection = () => {
  const values = [
    {
      title: "Measurable Outcome Improvements",
      description:
        "Demonstrate objective improvements in adherence, HbA1c, BP, EF%, COPD control, and post-discharge stabilization.",
    },
    {
      title: "Differentiated Service Lines",
      description:
        "Offer value-based chronic care packages that set your hospital apart in competitive markets.",
    },
    {
      title: "Ready for Capitation & Value-Based Models",
      description:
        "Continuous data and measurable outcomes enable hospitals to confidently participate in shared-savings or capitated contracts.",
    },
  ];

  return (
    <section className="">
      <div className="w-full max-w-[1176px] mx-auto flex flex-col items-center px-5 md:px-0 md:pt-16 md:pb-52 py-20">
        <div className="text-center w-full">
          <h2 className="heading-2 mb-6">
            Demonstrate Superior Value to Payers
          </h2>

          <p className="body-text">
            Show measurable clinical improvements and lower utilization to
            secure stronger partnerships with insurers
          </p>
        </div>

        <div className="relative top-28">
          <div className="absolute -top-12 left-0 w-full hidden md:block pointer-events-none">
            <img
              src={lineConnector}
              alt="connector"
              className=" mx-auto object-contain"
            />
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] md:p-8 p-5 border border-borderClr"
              >
                <img src={circleCheck} alt="connector" className="w-8 h-8" />

                <h3 className="body-text-heading pt-6 pb-3">{item.title}</h3>
                <p className="body-text">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-16 md:mb-0 mb-20">
              <CustomButton
                variant="primary"
                label={"View Clinical Trial Results"}
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PayerValueSection;
