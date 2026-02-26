import React from "react";
import publicationBg from "../../../assets/images/publications.png";
import peerIcon1 from "../../../assets/icons/publicationIcon.png";
import CurveArrowRight from "../../../assets/svg/CurveArrowRight";

const publications = [
  {
    type: "Journal Article",
    typeColor: "bg-emerald-50 text-emerald-600",
    title: "Primary RCT Outcomes Publication",
    subtitle: "Published in peer-reviewed medical journal",
    description:
      "Comprehensive report of the multi-site randomized controlled trial demonstrating the efficacy of the CareAide platform in improving medication adherence and clinical outcomes across multiple chronic conditions.",
    linkText: "View Publication",
    icon: peerIcon1,
  },
  {
    type: "Journal Article",
    typeColor: "bg-emerald-50 text-emerald-600",
    title: "Scientific Posters & Presentations",
    subtitle: "Presented at international medical conferences",
    description:
      "Research findings presented at major international conferences including findings on cost-effectiveness, quality of life improvements, and condition-specific outcomes.",
    linkText: "View Publication",
    icon: peerIcon1,
  },
  {
    type: "Case Study",
    typeColor: "bg-indigo-50 text-indigo-600",
    title: "Cost-Effectiveness Study",
    subtitle: "Health-economic evaluation",
    description:
      "Detailed health economic analysis demonstrating the cost savings and return on investment from implementation of the CareAide platform in chronic disease management.",
    linkText: "View Study",
    icon: peerIcon1,
  },
  {
    type: "Case Study",
    typeColor: "bg-indigo-50 text-indigo-600",
    title: "Study Protocol & Design",
    subtitle: "Presented at international medical conferences",
    description:
      "Research findings presented at major international conferences including findings on cost-effectiveness, quality of life improvements, and condition-specific outcomes.",
    linkText: "View Study",
    icon: peerIcon1,
  },
];

const EvidencePublications = () => {
  return (
    <div className="max-w-[1176px] mx-auto py-16 md:px-0 px-5">
      {/* Header */}
      <h2 className="heading-2 text-center">Peer-Reviewed Publications</h2>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${publicationBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="group bg-white rounded-3xl md:p-8 p-5 border border-borderClr shadow-sm hover:shadow-md transition-all flex flex-col items-start relative"
          >
            {/* Header: Icon & Badge */}
            <div className="flex gap-6">
              <div className="">
                <img src={pub.icon} />
              </div>
              <div>
                <span
                  className={`px-4 py-1.5 rounded-full body-text-1 text-[#16A34A] ${pub.typeColor}`}
                >
                  {pub.type}
                </span>
                <h3 className="heading-6 my-2.5">
                  {pub.title}
                </h3>
                <p className="body-text-1">
                  {pub.subtitle}
                </p>
              </div>
            </div>

            {/* Content */}

            <p className="body-text-1 my-6">
              {pub.description}
            </p>

            {/* Action Link */}
            <button className="flex items-center gap-1.5 text-[#1B447D] body-text-1">
              {pub.linkText} <CurveArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidencePublications;
