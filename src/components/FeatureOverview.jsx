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
import checkboxcircle from '../assets/icons/checkbox-circle-fill.png'

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
      className={` ${bgColor} rounded-[32px] border border-borderClr flex items-center md:flex-row flex-col md:px-12 px-5 py-10 relative`}
    >
      {/* Left Content Column */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        {/* Logo Area */}
        <div className="max-w-[100px] ">
          <img src={logo} className="w-full" />
        </div>

        {/* Text Content */}
        <div className="py-6">
          <h3 className="heading-3">
            {title}
          </h3>
          <p className="pt-5 text-secondary body-text font-light">
            {description}
          </p>
        </div>
        {/* Feature List */}
        <ul className="space-y-4">
          {features?.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                {/* Green Tick Icon */}
               <img src={checkboxcircle} />
              </div>
              <p className="">
                <span className="body-text text-primary font-medium">{item.label} — </span>
                <span className="body-text text-primary font-normal">{item.desc}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image Column */}
      <div className="md:w-1/2 w-full flex justify-end self-start md:pt-3 pt-8 relative">
      <div className="md:max-w-[425px] w-full">
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
    <div className="md:pt-[120px] pt-20 pb-[60px]">
     
        <h3 className="heading-2 lg:text-[44px] text-[28px] lg:leading-[4rem] leading-[2rem] md:text-[36px] md:leading-[3.2rem] px-3 md:px-0 text-center max-w-[936px] mx-auto">
          The CaringUp Platform — Integrated Public Health & Care Management
        </h3>
     
      <div className="flex flex-col gap-8 py-16 max-w-[1176px] mx-auto">
        {data.map((item, idx) => (
          <FeatureOverview key={idx} {...item} />
        ))}
      </div>

      {/* Centered Explore Button as seen in your screenshot */}
      <div className="flex justify-center">
        <CustomButton variant="primary" label="Explore the Platform" />
      </div>
    </div>
  );
}
