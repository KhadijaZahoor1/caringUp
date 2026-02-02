import React from "react";
import checkLineFill from "../../../assets/icons/checkbox-circle-fill.png";
import lineConnector from "../../../assets/images/line.png";

const benefits = [
  {
    title: "No complex integrations",
    description:
      "Deploy instantly without IT dependencies or EHR integration delays",
  },
  {
    title: "No data setup",
    description:
      "Start monitoring patients immediately with zero configuration required",
  },
  {
    title: "No IT headaches",
    description: "Cloud-based platform with enterprise-grade security built-in",
  },
];

const Outcoms = () => {
  return (
      <div className="md:pt-[120px] pt-20 mb-32 md:px-28 px-5">
        <div className="max-w-[1176px] mx-auto text-center">
          {/* Header Content */}
          <div className="md:mb-16 mb-6">
            <h2 className="heading-2 mb-6">
              Achieve Outcomes Faster. No IT, No Delays.
            </h2>
            <p className="body-text">
              Onboard your first patient in minutes
            </p>
          </div>

          <div className="relative top-10">
            {/* Connector Line Image */}
            <div className="absolute -top-12 left-0 w-full hidden md:block pointer-events-none">
              <img
                src={lineConnector}
                alt="connector"
                className=" mx-auto object-contain"
              />
            </div>

            {/* Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img src={checkLineFill} />
                    <h3 className="body-text-heading">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="body-text">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Outcoms;
