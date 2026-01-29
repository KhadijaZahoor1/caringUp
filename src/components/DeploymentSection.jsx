import React from "react";
import homePricing from "../assets/images/homePricing.png";
import checkline from '../assets/icons/check-line.png'

const DeploymentSection = () => {
  const enterpriseFeatures = [
    "No complex integrations",
    "No data setup",
    "No IT headaches",
  ];

  const flexibleFeatures = [
    { label: "Active Patient", desc: "Pay per active or monitored patient" },
    { label: "Per-Member", desc: "Fixed cost; per employee or policyholder" },
    {
      label: "White-label CareAide",
      desc: "for large-volume brand conscious customers",
    },
    { label: "Dedicated Instance", desc: "Your private platform, your way." },
  ];

  return (
    <section className="max-w-[1176px] mx-auto md:py-[120px] py-20 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="heading-2 text-center px-3 md:px-0">
        Deployment & Pricing Structure
      </h2>

      {/* Main Container */}
      <div className="w-full bg-white rounded-[40px] md:rounded-[64px] border border-borderClr lg:px-16 md:px-5 px-5 md:pb-8 py-8 md:mt-36 mt-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Left Side: Enterprise Card */}
          <div
            className="w-full md:w-1/2 rounded-[40px] md:rounded-[64px] md:bottom-24 lg:left-4 flex flex-col justify-center md:p-12 p-7 text-white relative"
            style={{
              backgroundImage: `url(${homePricing})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h3 className="heading-3 text-white">
                Enterprise-ready care management—deployable in hours
              </h3>
              <p className="pt-8 pb-10 body-text text-white">
                No Complex Integrations. No Data Set Up. No IT Headaches
              </p>

              <ul className="space-y-2">
                {enterpriseFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <img src={checkline} />
                    </div>
                    <span className="body-text text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Flexible List */}
          <div className="w-full md:w-1/2 md:pt-12 pt-0">
            <h3 className="heading-3 mb-3">
              Flexible
            </h3>
            <p className="body-text mb-10">
             For most businesses that want to otpimize web queries
            </p>

            <ul className="space-y-2">
              {flexibleFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img src={checkline} />
                  </div>
                  <div className="">
                    <span className="body-text text-primary font-normal">
                      {item.label} —{" "}
                    </span>
                    <span className="body-text text-primary font-light">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
