import React, { useState } from "react";
import design from "../../../assets/icons/design.png";
import scale from "../../../assets/icons/scale.png";
import participant from "../../../assets/icons/participant.png";
import solution from "../../../assets/icons/solutionIcon1.png";
import stack from "../../../assets/icons/stack.png";
import site1 from "../../../assets/images/site1.png";
import site2 from "../../../assets/images/site2.png";
import site3 from "../../../assets/images/site3.png";
import userLine from "../../../assets/icons/user-follow-line.png";
import m1 from "../../../assets/icons/m1.png";
import m2 from "../../../assets/icons/m2.png";
import m3 from "../../../assets/icons/m3.png";
import m4 from "../../../assets/icons/m4.png";
import circle from "../../../assets/icons/checkbox-circle-fill.png";
import payers from "../../../assets/icons/payers.png";

const aboutResearch = [
  {
    title:
      "Adherence is a complex behavioral issue. Can digital tools help improve adherence in Malaysia?",
  },
  {
    title:
      "What is the impact of improved adherence on Health Outcomes in Malaysia?",
  },
  {
    title:
      "How much healthcare cost savings and productivity impact does adherence deliver?",
  },
  {
    title:
      "Will Malaysia's diverse population adapt digital tools for adherence?",
  },
];

const teamSites = [
  {
    img: site1,
    title: "University Malaya Medical Center",
    members: [
      "Prof. Dr. Hasniza Binti Zaman Huri (Dean Faculty Pharmacy, UM)",
      "Assoc. Prof. Dr. Baharudin bin Ibrahim (Deputy Dean Faculty Pharmacy, UM)",
      "Dr. Izyan Binti A Wahab",
      "Dr. Kayatri Govindaraju",
      "Rajat Rana",
    ],
  },
  {
    img: site2,
    title: "Hospital Putrajaya",
    members: ["Mohd. Syamir Mohamad Shuker", "Dr. Navin Kumar"],
  },
  {
    img: site3,
    title: "Hospital Pulau Pinang",
    members: [
      "Dr. Irfhan Ali Hyder Ali (Head of Respiratory Department, Penang Hospital)",
      "Dr. Ong Siew Chin",
      "Dr Jaya Muneswarao",
      "Cow Kyn Ng",
      "Tooba Malik",
    ],
  },
];
const methodology = [
  {
    icon: m1,
    name: "Baseline Assessment",
    des: "Comprehensive health status, adherence measurement (MMAS-8, PDC), and quality of life assessment (EQ-5D-5L, AQoL-6D). Clinical parameters including HbA1c, blood pressure, lipid panels, and condition-specific measures were recorded.",
  },
  {
    icon: m2,
    name: "Randomization",
    des: "Participants randomly assigned to intervention (CareAide app + standard care) or control (standard care only) groups using computer-generated randomization sequences. Allocation concealment ensured to minimize selection bias.",
  },
  {
    icon: m3,
    name: "6-Month Follow-up",
    des: "Repeat measurements of all primary and secondary endpoints at 6 months. Primary outcomes included medication adherence (PDC ≥80%, MMAS-8 scores). Secondary outcomes included clinical parameters, quality of life, healthcare utilization, and productivity metrics.",
  },
  {
    icon: m4,
    name: "Statistical Analysis",
    des: "Intent-to-treat analysis with appropriate statistical methods for RCT data. Between-group differences analyzed using independent t-tests for continuous variables and chi-square tests for categorical variables. P-values <0.05 considered statistically significant.",
  },
];

const primaryPoints = [
  {
    title: "Primary Outcomes:",
    notes: [
      "Self-reported productivity scale (0=unproductive, 10=fully productive)",
      "Absenteeism uses RM 150/day based on the reported data",
      "Presenteeism is valued at 40% of wage (RM 60/day) to reflect partial productivity losses",
    ],
  },
];

const primary = [
  {
    title: "Primary Outcomes:",
    notes: [
      "Clinical parameters (HbA1c, BP, lipids)",
      "Quality of life (EQ-5D-5L, AQoL-6D)",
      "Healthcare costs and utilization",
      "Productivity and absenteeism",
    ],
  },
];

const studyType = [
  {
    point: [
      {
        one: "Multi-site Randomized Controlled Trial",
        two: "Prospective, parallel-group design",
      },
    ],
  },
  {
    point: [
      {
        one: "Ethics Approved",
        two: "MREC & institutional review board clearance",
      },
    ],
  },
  {
    point: [
      {
        one: "Pre-registered",
        two: "ClinicalTrials.gov & NMRR Malaysia",
      },
    ],
  },
];

const conditions = [
  {
    text: "Type 2 Diabetes",
  },
  {
    text: "Hypertension",
  },
  {
    text: "Type 2 Diabetes",
  },
  {
    text: "Asthma",
  },
  {
    text: "COPD",
  },
  {
    text: "Dyslipidemia",
  },
];

const sites = [
  {
    icon: solution,
    heading: "Urban tertiary care hospitals",
    text: "High-volume specialist centers",
  },
  {
    icon: payers,
    heading: "Secondary care facilities",
    text: "District and community hospitals",
  },
];

const followup1 = [
  {
    list: "Lost to follow-up (n=30)",
  },
  {
    list: "Discontinued intervention/Withdrew (n=42)",
  },
  {
    list: "Decline to give information on study outcomes (n=23)",
  },
];

const followup2 = [
  {
    list: "Lost to follow-up (n=48)",
  },
  {
    list: "Withdrew (n=45)",
  },
  {
    list: "Decline to give information on study outcomes (n=26)",
  },
];

const excludedData = {
  title: "Excluded (n=181)",
  points: [
    "Not meeting inclusion criteria (n=73)",
    "Declined to participate (n=65)",
    "Did not complete informed consent (n=32)",
    "Other Reasons (Incomplete registrations) (n=11)",
  ],
};

const EvidenceResearch = () => {
  const [activeTab, setActiveTab] = useState("Study Overview");

  const tabs = [
    { name: "Study Overview" },
    { name: "Research Questions" },
    { name: "Research Team & Sites" },
    { name: "Study Design" },
    { name: "Methodology" },
    { name: "Study Protocol" },
  ];

  // icon: <Target className="w-4 h-4" />

  return (
    <section className="bg-white md:my-[220px] mt-20 md:rounded-[64px] rounded-[32px]">
      <div className="max-w-[1224px] mx-auto md:py-[100px] py-20">
        <div className="mb-16 flex flex-col text-center">
          {/* 1. Header Section */}
          <h2 className="heading-2 mb-6">About the Research (RCT Overview)</h2>

          {/* 2. Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={` px-4 py-2.5 rounded-full  body-text-1 whitespace-nowrap transition-all border ${
                  activeTab === tab.name
                    ? "bg-[#1B447D] text-white shadow-md"
                    : "bg-[#E2E8F0] text-primary hover:bg-gray-300"
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {/* 3. Tab Content - Study Overview (Active by Default) */}
        {activeTab === "Study Overview" && (
          <div className="rounded-[32px] border border-borderClr shadow-sm md:p-12 p-5">
            <h3 className="heading-6">
              Our Study at a Glance: Key Facts of the RCT CareAide®
            </h3>
            <div className="bg-[#e0e7ff] border border-[#1D4ED8] my-8 rounded-2xl p-6 text-justify">
              <p className="body-text">
                Pioneering study, one of the largest/deepest in the region,
                cultivating robust, homegrown evidence to illuminate pathways to
                a healthier, more vibrant Malaysia.
              </p>
            </div>

            {/* Fact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Design",
                  content:
                    "A 6-month, prospective Randomized Controlled Trial (RCT).",
                  icon: design,
                },
                {
                  title: "Scale",
                  content:
                    "1,106 patients across 3 major Malaysian hospitals (UMMC, H. Putrajaya, H. Pulau Pinang).",
                  icon: scale,
                },
                {
                  title: "Participants",
                  content:
                    "Adults with Hypertension, Diabetes, Asthma, or Heart Failure who had low baseline medication adherence (MMAS Score less than 6).",
                  icon: participant,
                },
                {
                  title: "Method",
                  content:
                    "IG: Received standard care + used the CareAide® App. CG: Received standard care only.",
                  icon: solution,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className=" border border-borderClr rounded-3xl md:p-8 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-6">
                    <img src={item.icon} alt="icons" />
                  </div>
                  <h4 className="heading-6 mb-2">{item.title}</h4>
                  <p className="body-text-1">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Counter Section */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
              {[
                { label: "Total Participants", value: "1,106" },
                { label: "Intervention Group", value: "565" },
                { label: "Control Group", value: "541" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center  py-5 border border-borderClr rounded-3xl"
                >
                  <p className="body-text-1 mb-1">{stat.label}</p>
                  <p className="heading-2">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Research Questions tabs */}
        {activeTab === "Research Questions" && (
          <div className="rounded-[32px] border border-borderClr shadow-sm md:p-12 p-5">
            <h2 className="heading-6">About the Research</h2>
            <div className="my-8 flex flex-col gap-6">
              {aboutResearch.map((item) => (
                <div className="border border-borderClr md:p-8 p-5 body-text-heading rounded-3xl font-normal">
                  {item.title}
                </div>
              ))}
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start gap-6 border border-borderClr rounded-3xl md:p-8 p-5 bg-[#e0e7ffdb]">
              <div className="md:w-24 w-12 rounded-2xl items-center justify-center">
                <img src={stack} alt="stack" className="w-full" />
              </div>
              <div>
                <h4 className="heading-6 mb-3">Our Findings</h4>
                <p className="body-text-1">
                  The CareAide RCT demonstrated that digital health tools can
                  significantly improve medication adherence, clinical outcomes,
                  cost savings, and quality of life across diverse Malaysian
                  populations with chronic conditions.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Research Team & Sites tabs */}
        {activeTab === "Research Team & Sites" && (
          <div className="rounded-[32px] border border-borderClr shadow-sm md:p-12 p-5">
            <h2 className="heading-6">Research Team & Sites</h2>
            <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-6">
              {teamSites.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-borderClr shadow-sm"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto pt-2 md:px-0 px-2"
                  />

                  {/* Content */}
                  <div className="md:p-8 p-5">
                    <h6 className="heading-6 mb-4">{item.title}</h6>

                    {/* Proper List */}
                    <ul className="flex flex-col gap-4">
                      {item.members.map((member, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <img src={userLine} alt="icon" className="" />
                          <p className="body-text-1">{member}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study Design tab */}
        {activeTab === "Study Design" && (
          <div className="rounded-[32px] border border-borderClr shadow-sm md:p-12 p-5">
            <h2 className="heading-6">Study Design</h2>
            <div className="flex flex-col gap-6 mt-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="rounded-3xl bg-[#F1F5F9] md:p-10 p-5">
                  <h6 className="heading-6 mb-8">Study Type</h6>
                  <div className="flex flex-col gap-6">
                    {studyType.map((item) => (
                      <div className="flex flex-row gap-4">
                        <div>
                          <img src={circle} className="w-full" />
                        </div>
                        {item.point.map((text) => (
                          <div>
                            <h6 className="body-text-heading mb-2 font-medium">
                              {text.one}
                            </h6>
                            <p className="body-text">{text.two}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {/*  */}
                <div className="rounded-3xl bg-[#F1F5F9] md:p-10 p-5">
                  <h6 className="heading-6 mb-8">Study Population</h6>
                  <div className="mt-8">
                    <div className="rounded-2xl p-6 bg-white">
                      <p className="body-text mb-1">Total Participants</p>
                      <p className="heading-6">1,106</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="rounded-2xl p-6 bg-white">
                      <p className="body-text mb-1">Intervention Group</p>
                      <p className="heading-6">565</p>
                    </div>
                    <div className="rounded-2xl p-6 bg-white">
                      <p className="body-text mb-1">Control Group</p>
                      <p className="heading-6">541</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="rounded-3xl bg-[#F1F5F9] md:p-10 p-5">
                <h6 className="heading-6">Conditions Studied</h6>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
                  {conditions.map((item) => (
                    <div className="py-4 bg-white body-text-heading font-body font-normal text-center rounded-2xl">
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}

              <div className="rounded-3xl bg-[#F1F5F9] md:p-10 p-5">
                <h6 className="heading-6 mb-4">Study Sites</h6>
                <p className="body-text">
                  The trial was conducted across multiple hospital sites in
                  Malaysia, ensuring diverse patient populations and real-world
                  clinical settings.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-8">
                  {sites.map((item) => (
                    <div className="p-4 bg-white rounded-2xl flex flex-row gap-4 items-start">
                      <img src={item.icon} alt="icons" />
                      <div>
                        <h6 className="body-text-heading mb-2">
                          {item.heading}
                        </h6>
                        <p className="body-text font-light">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Methodology */}
        {activeTab === "Methodology" && (
          <div className="rounded-[32px] border border-borderClr shadow-sm md:p-12 p-5">
            <h2 className="heading-6">Methodology</h2>
            <div className="rounded-3xl bg-[#F1F5F9] md:p-10 p-5 my-8 ">
              <div className="grid grid-cols-1 gap-6">
                {methodology.map((item) => (
                  <div className="flex md:flex-row flex-col gap-6 items-start">
                    <img src={item.icon} />
                    <div className="">
                      <h4 className="body-text-heading mb-2">{item.name}</h4>
                      <p className="body-text">{item.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#e0e7ffdb] bg-opacity-60 border rounded-3xl p-5 md:p-8">
              <h4 className="heading-6 mb-4">Key Measures</h4>
              <div className="flex md:flex-row flex-col gap-8">
                {primaryPoints.map((item, index) => (
                  <div key={index} className="md:w-[55%] w-full">
                    <h6 className="body-text text-primary mb-2">
                      {item.title}
                    </h6>

                    <ul className="list-disc pl-5 space-y-2 text-sm text-secondary">
                      {item.notes.map((note, i) => (
                        <li className="body-text" key={i}>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {primary.map((item, index) => (
                  <div key={index} className="md:w-[40%] w-full">
                    <h6 className="body-text text-primary mb-2">
                      {item.title}
                    </h6>

                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                      {item.notes.map((note, i) => (
                        <li className="body-text" key={i}>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/*  */}
        {activeTab === "Study Protocol" && (
          <div className="rounded-[32px] border border-borderClr shadow-sm md:p-12 p-5">
            <h2 className="heading-6 mb-4">Study Protocol</h2>
            <p className="body-text">
              CONSORT Diagram - Patient Flow Through the Study
            </p>
            <div className="my-10 flex flex-col gap-5">
              {/*  */}
              <div className="bg-[#e0e7ffdb] text-center bg-opacity-60 border border-[#1D4ED8] rounded-3xl p-5 md:py-5">
                <p className="body-text-1 text-primary font-medium">
                  Enrollment
                </p>
                <p className="body-text-heading font-medium">
                  Potentially eligible Participants (n= 1501)
                </p>
              </div>
              {/*  */}
              <div className="flex justify-end">
                <div className="md:w-[70%] w-full border border-dashed border-borderClr rounded-3xl p-6 max-w-md">
                  <h6 className="body-text-1 mb-2 text-primary">
                    {excludedData.title}
                  </h6>

                  <ul className="list-disc pl-6 space-y-2">
                    {excludedData.points.map((item, index) => (
                      <li key={index} className="body-text-1 text-primary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#5025eb29] text-center bg-opacity-60 border border-[#5025EB] rounded-3xl p-5 md:py-5">
                <p className="body-text-heading font-medium">
                  Included and Randomised (n=1320)
                </p>
              </div>
              {/*  */}
              <div className="bg-[#16a34a29] text-center bg-opacity-60 border border-[#16A34A] rounded-3xl p-5 md:py-5">
                <p className="body-text-heading font-medium">Allocation</p>
              </div>
              {/*  */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div className="text-center border border-borderClr rounded-3xl p-5 md:py-5">
                  <p className="body-text-heading font-medium">
                    Allocated to Intervention (n=660)
                  </p>
                </div>
                <div className="text-center border border-borderClr rounded-3xl p-5 md:py-5">
                  <p className="body-text-heading font-medium">
                    Allocated to Control (n=660)
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#ea580c29] text-center bg-opacity-60 border border-[#EA580C] rounded-3xl p-5 md:py-5">
                <p className="body-text-heading font-medium">Follow-Up</p>
              </div>
              {/*  */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {/* Column 1 */}
                <div className="border border-borderClr rounded-3xl p-6">
                  <ul className="list-disc pl-6 space-y-2">
                    {followup1.map((item, index) => (
                      <li key={index} className="body-text-1 text-primary">
                        {item.list}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="border border-borderClr rounded-3xl p-6">
                  <ul className="list-disc pl-6 space-y-2">
                    {followup2.map((item, index) => (
                      <li key={index} className="body-text-1 text-primary">
                        {item.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#E2E8F0] text-center bg-opacity-60 border border-[#E2E8F0] rounded-3xl p-5 md:py-5">
                <p className="body-text-heading font-medium">Analysis</p>
              </div>
              {/*  */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="bg-[#16A34A] text-center border rounded-3xl p-5 md:py-5">
                  <p className="body-text-1 text-white mb-2">
                    Intervention Group
                  </p>
                  <p className="body-text-heading font-medium text-white">
                    Analysed (n=565)
                  </p>
                </div>
                <div className="bg-[#EA580C] text-center border rounded-3xl p-5 md:py-5">
                  <p className="body-text-1 text-white mb-2">Control Group</p>
                  <p className="body-text-heading font-medium text-white">
                    Analysed (n=541)
                  </p>
                </div>
              </div>
            </div>
            {/* last section */}
            <div className="rounded-3xl md:p-8 p-5 bg-[#e0e7ffdb] bg-opacity-60 ">
              <h5 className="heading-3 mb-8 text-center">
                Study Retention Metrics
              </h5>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6 text-center">
                <div className="flex flex-col">
                  <h6 className="mb-2 heading-3 text-[#2563EB]">87.9%</h6>
                  <span className="body-text-1 text-primary">
                    Overall Retention Rate
                  </span>
                  <span className="body-text-1">(1106/1320 randomized)</span>
                </div>
                <div className="flex flex-col">
                  <h6 className="mb-2 heading-3 text-[#16A34A]">85.6%</h6>
                  <span className="body-text-1 text-primary">
                    Intervention Group Retention
                  </span>
                  <span className="body-text-1">(565/660 allocated)</span>
                </div>
                <div className="flex flex-col">
                  <h6 className="mb-2 heading-3 text-[#EA580C]">82.0%</h6>
                  <span className="body-text-1 text-primary">
                    Control Group Retention
                  </span>
                  <span className="body-text-1">(541/660 allocated)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EvidenceResearch;
