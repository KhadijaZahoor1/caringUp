import React from "react";
import stact2 from "../../../assets/icons/stack2.png";
import organization1 from "../../../assets/images/organization1.png";
import organization2 from "../../../assets/images/organization2.png";
import organization3 from "../../../assets/images/organization3.png";
import CurveArrowRight from "../../../assets/svg/CurveArrowRight";
import globalRegistry from "../../../assets/images/globalRegistr.png";

const GlobalRegistries = () => {
  const registries = [
    {
      logo: organization1,
      title: "WHO Digital Health",
      description:
        "Included in the World Health Organization's Digital Health Atlas (DHA), a global technology registry for digital health implementations.",
      linkText: "View Registry",
    },
    {
      logo: organization2,
      title: "Clinical Trial GOV",
      description:
        "Registered with the U.S. National Library of Medicine's clinical trial registry, the world's largest database of privately and publicly funded clinical studies.",
      linkText: "View Registry",
    },
    {
      logo: organization3,
      title: "NMRR Malaysia",
      description:
        "Registered with the National Medical Research Register, Malaysia's official repository for medical and health research conducted in the country.",
      linkText: "View Registry",
    },
  ];

  return (
    <section className="md:rounded-[64px] rounded-[32px] bg-white my-[120px]">
      <div className="max-w-[1224px] mx-auto py-[100px]">
        {/* Section Header */}

        <h2 className="heading-2 text-center">
          Regulatory & Global Registries
        </h2>

        {/* Registries Grid */}
        <div className="border border-borderClr mt-16 rounded-[32px] md:p-12 p-5">
          <p className="text-center heading-6">
            Our research is registered with international clinical trial
            registries and recognized by global health organizations, ensuring
            transparency, accountability, and adherence to the highest research
            standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {registries.map((registry, idx) => (
              <div
                key={idx}
                style={{
                  backgroundImage: `url(${globalRegistry})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="bg-white relative rounded-3xl md:p-8 p-5 border border-borderClr shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md"
              >
                {/* Logo Container */}
                <div className="h-14 mb-8 flex items-center justify-center">
                  <img
                    src={registry.logo}
                    alt="organizations"
                    className="max-h-full object-contain w-full"
                  />
                </div>

                <h4 className="heading-6 mb-2">{registry.title}</h4>
                <p className="body-text-1 mb-6">{registry.description}</p>

                <button className="flex items-center gap-1.5 text-[#1B447D] body-text-1 font-medium">
                  {registry.linkText} <CurveArrowRight />
                </button>
              </div>
            ))}
          </div>

          {/* Research Integrity Banner */}
          <div className="flex items-center gap-6 border border-borderClr rounded-3xl md:p-8 p-5 bg-[#e0e7ffdb]">
            <div className="w-24 rounded-2xl items-center justify-center">
              <img src={stact2} alt="stack" className="w-full" />
            </div>
            <div>
              <h4 className="heading-6 mb-3">
                Research Integrity & Transparency
              </h4>
              <p className="body-text-1">
                Registration with these international bodies demonstrates our
                commitment to research transparency, ethical conduct, and
                compliance with international standards for clinical research.
                All outcomes were pre-specified and the study followed Good
                Clinical Practice (GCP) guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalRegistries;
