import React from "react";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Hero from "../../components/Hero";
import SolutionCard from "../../components/SolutionCard";
import CTASection from "../../components/CTASection";
import Footer from "../../components/layout/Footer";
import TitleSection from "../../components/TitleSection";
import icon1 from '../../assets/icons/solutionIcon1.png'
import icon2 from '../../assets/icons/solutionIcon2.png'
import icon3 from '../../assets/icons/solutionIcon3.png'


const cardData = [
  {
    badgeText: "For Healthcare Providers",
    title: "Improve Outcomes & Satisfaction. Scale Your Care Programs.",
    description:
      "A turnkey RPM solution that strengthens health outcomes and patient loyalty.",
    iconGradient: "bg-gradient-to-br from-blue-400 via-blue-500 to-pink-300",
      icon: icon1,
    buttonText: "Discover Provider Solutions",
    features: [
      {
        title: "Continuity of Care:",
        description: "Keep patients engaged across chronic care and post-discharge journeys within your health system.",
      },
       {
        title: "Intelligent Escalation:",
        description:
          "Structured workflows, triggered by patient-reported data, ensure clinicians act only when needed.",
      },
       {
        title: "Patient Satisfaction & Loyalty:",
        description:
          "Elevate the care experience to boost satisfaction scores and encourage return visits.",
      },
       {
        title: "Long-Term Retention Model:",
        description:
          "Proven digital engagement that keeps patients connected to your hospital over time.",
      },
    ],
  },
  {
    badgeText: "For Payers",
    title: "Lower Claims. Reduce High-Cost Events. Ensure Sustainability",
    description:
      "Members with chronic conditions drive a disproportionate share of risk and claims. CaringUp lowers the healthcare costs and risk significantly by enabling early risk detection and intervention.",
    iconGradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
      icon: icon2,
    buttonText: "Discover Provider Solutions",
    features: [
      {
        title: "Prevention of High-Cost Events:",
        description:
          "Ongoing patient engagement and data tracking flag deterioration early - helping avoid ER visits, admissions, and readmissions.",
      },
      {
        title: "Improvement of Disease Control:",
        description: "Higher medication adherence and better self-management reduce complications and cost escalations.",
      },
      {
        title: "Data-Driven Risk Management:",
        description: "Identify rising-risk members, understand drivers of utilization, and intervene before they become catastrophic cases.",
      },
      {
        title: "Sustainable Cost Containment:",
        description: "A scalable model that reduces claims while improving member experience and preventive care.",
      },
    ],
  },
   {
    badgeText: "For Government & Public Health",
    title: "Improve Outcomes & Satisfaction. Scale Your Care Programs.",
    description:
      "A turnkey RPM solution that strengthens health outcomes and patient loyalty—without expanding your clinical team.",
    iconGradient: "bg-gradient-to-br from-blue-400 via-blue-500 to-pink-300",
      icon: icon3,
    buttonText: "Discover Provider Solutions",
    features: [
      {
        title: "Continuity of Care:",
        description: "Keep patients engaged across chronic care and post-discharge journeys within your health system.",
      },
       {
        title: "Intelligent Escalation:",
        description:
          "Structured workflows, triggered by patient-reported data, ensure clinicians act only when needed.",
      },
       {
        title: "Patient Satisfaction & Loyalty:",
        description:
          "Elevate the care experience to boost satisfaction scores and encourage return visits.",
      },
       {
        title: "Long-Term Retention Model:",
        description:
          "Proven digital engagement that keeps patients connected to your hospital over time.",
      },
    ],
  },
];

const Solution = () => {
  return (
    <div>
      <Container>
        <Header />
        <Hero
          title={`Healthcare Challenges, Perfectly Matched`}
          description="Combat the rising burden of NCDs, HIV, and TB with integrated Health & Care Management solution — purpose-built for resource-constrained healthcare ecosystems and adaptable to any organization’s role in care."
           primaryBtn={{ label: "See Platform Capabilities" }}
           secondaryBtn={{ label: "Contact Sales" }}
        />
        <TitleSection
          heading={"Select Your Path to Better Outcomes"}
          subHeading={"SOLUTIONS"}
          text={
            "Discover how CaringUp delivers measurable improvements for your specific organization—whether you run a hospital network, insure millions, or manage national health programs."
          }
          textClassName="w-full"
        />
        <div className="max-w-[1176px] mx-auto flex flex-col items-center gap-6 md:pt-20 md:pb-[120px] pt-20 pb-0">
          {cardData.map((data, index) => (
            <SolutionCard key={index} {...data} />
          ))}
        </div>
         <CTASection
          title={`Ready to Scale Outcomes Without Scaling Your Team?`}
          description="Join leading healthcare organizations across Asia that are transforming patient care with CaringUp."
          primaryBtn={{ label: "Schedule a Demo" }}
          secondaryBtn={{ label: "Download CareAide" }}
        />
        <Footer />
      </Container>
    </div>
  );
};

export default Solution;
