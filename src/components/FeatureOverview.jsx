import React from "react";
import Checker from "../assets/images/checker.png";
import DynamicRPM from "../assets/images/DynamicRPM.png";
import CareCordination from "../assets/images/CareCordination.png";
import careAide from "../assets/images/careAide.png";
import Logo from "../assets/images/CaringUp.svg";
import CustomButton from "./Button";
import weCareLogo from "../assets/images/weCareLogo.png";
import CaringUpLogo from "../assets/images/CaringUp.svg";
import careaidelogo from "../assets/images/careaide-logo.png";

/**
 * FeatureOverview Component
 * @param {string} logo - URL/Path to the brand logo
 * @param {string} title - Main heading
 * @param {string} description - Subtext below the heading
 * @param {Array} features - Array of objects { label, desc }
 * @param {string} imageSrc - URL/Path to the mockup image
 * @param {string} bgColor - Tailwind background class (default: bg-white)
 */
const FeatureOverview = ({
  logo,
  title = "Untitled Feature",
  description = "",
  features = [],
  imageSrc,
  bgColor = "bg-white",
}) => {
  return (
    <section
      style={{
        // Fixed hard-coded background image
        backgroundImage: `url(${Checker})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className={` ${bgColor} rounded-[32px] border border-borderClr flex items-center px-12 py-10 relative`}
    >
      {/* Left Content Column */}
      <div className="w-1/2 flex flex-col justify-center">
        {/* Logo Area */}
        <div className="max-w-[100px] ">
          <img src={logo} className="w-full" />
        </div>

        {/* Text Content */}
        <div className="py-6">
          <h2 className="text-[32px] font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-gray-500 text-[15px]  leading-relaxed max-w-[90%]">
            {description}
          </p>
        </div>
        {/* Feature List */}
        <ul className="space-y-4">
          {features?.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                {/* Green Tick Icon */}
                <div className="bg-green-500 rounded-full p-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-[15px] text-slate-800 leading-tight">
                <span className="font-bold">{item.label} — </span>
                <span className="text-gray-600">{item.desc}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image Column */}
      <div className="w-1/2 flex justify-end self-start pt-3 relative">
      <div className="max-w-[425px]">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        )}
      </div>
      </div>
    </section>
  );
};

// --- EXAMPLE USAGE IN YOUR APP ---

export default function App() {
  const data = [
    {
      logo: CaringUpLogo, // Replace with your assets
      title:
        "Beyond Monitoring – Purpose-built for Engagement, Oversight, and Action",
      description:
        "Traditional monitoring captures data. CaringUp enables Your teams to act—through structured engagement, coordinated workflows, and decision-ready insight.",
      features: [
        {
          label: "Sustained Treatment Adherence —",
          desc: "Proven engagement-led adherence across conditions",
        },
        {
          label: "2-Way Communication —",
          desc: "Secure messaging between patients and care teams ",
        },
        {
          label: "Clinical Collaboration —",
          desc: "Notes, triage, and team coordination in one place",
        },
        {
          label: "Intelligent Alerts & Escalation —",
          desc: "From patient-reported data to timely action",
        },
      ],
      imageSrc: DynamicRPM,
    },
    {
      logo: careaidelogo,
      title: "CareAide - Patient Engagement",
      description:
        "Designed for everyday engagement—across literacy levels, cultures, and conditions",
      features: [
        {
          label: "Medication & Health Management —",
          desc: "Simple, guided check-ins that sustain adherence. Proven.",
        },
        {
          label: "Remote Family Care —",
          desc: "Remote visibility, management & escalations for caregivers ",
        },
        {
          label: "Motivation & Rewards —",
          desc: "Designed to sustain adherence Additional capabilities: vitals & symptoms tracking, AI-assisted trends, secure document storage, personalized lifestyle guidance",
        },
      ],
      imageSrc: careAide,
    },
    {
      logo: weCareLogo,
      title: "WeCare – Care Coordination Platform ",
      description: "One Unified Platform, Every Partner in Care ",
      features: [
        {
          label: "Providers & Health Systems —",
          desc: "Manage chronic diseases with structured follow-up and escalation",
        },
        {
          label: "Payers (Insurance, TPAs, HMOs) —",
          desc: "Identify rising-risk members and intervene earlier to manage cost and outcomes",
        },
        {
          label: "Care Service Providers —",
          desc: "Deliver care programs across multiple clients from one platform",
        },
        {
          label: "Government & Public Health Agencies —",
          desc: "National-scale disease surveillance and program oversight for NCDs, HIV, and TB",
        },
      ],
      imageSrc: CareCordination,
    },
  ];

  return (
    <div className="py-[120px]">
      <div>
        <h3 className="heading-3 text-center max-w-[936px] mx-auto">
          The CaringUp Platform — Integrated Public Health & Care Management
        </h3>
      </div>
      <div className="flex flex-col gap-8 py-16 max-w-[1176px] mx-auto">
        {data.map((item, idx) => (
          <FeatureOverview key={idx} {...item} />
        ))}
      </div>

      {/* Centered Explore Button as seen in your screenshot */}
      <div className="flex justify-center mt-8">
        <CustomButton variant="primary" label="Explore the Platform" />
      </div>
    </div>
  );
}
