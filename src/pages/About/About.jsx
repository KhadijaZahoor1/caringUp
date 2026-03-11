import React from "react";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/layout/Footer";
import CTASection from "../../components/CTASection";
import heroImg from "../../assets/images/aboutBanner.png";
import philosophy1 from "../../assets/icons/philosophy1.png";
import philosophy2 from "../../assets/icons/philosophy2.png";
import philosophy3 from "../../assets/icons/philosophy3.png";
import AboutPhilosophy from "./AboutPhilosophy";
import WhatWeDo from "./WhatWeDo";
import Map from "./Map";

const experiences = [
  {
    title: "Work With Existing Systems",
    icon: philosophy1,
    description:
      "We adapt to local realities, clinical structures, and resource constraints.",
  },
  {
    title: "Democratize Chronic Care Management",
    icon: philosophy2,
    description:
      "Make high-quality NCD care accessible—not just to large hospitals, but to any organization that wants to serve patients better.",
  },
  {
    title: "Better Care at Sustainable Cost",
    icon: philosophy3,
    description:
      "Our approach helps hospitals, insurers, governments, and families achieve more with less.",
  },
];

const points = [
  {
    title: "Higher long-term treatment adherence",
  },
  {
    title: "Scalable care programs",
  },
  {
    title: "Trends and Insights",
  },
  {
    title: "Earlier detection of deterioration",
  },
  {
    title: "Improved patient satisfaction",
  },
  {
    title: "Lower total cost of care",
  },
  {
    title: "Stronger payer-provider relationships",
  },
];

const About = () => {
  return (
    <Container>
      <Header />
      <Hero
        title={`Closing the Gaps in NCD Care`}
        description="CaringUp enables organizations to run large-scale, cost-efficient disease management programs through everyday patient engagement, actionable insights, and secure, coordinated workflows"
        backgroundImage={heroImg}
        container
      />
      <div className="max-w-[936px] md:py-16 py-20 md:px-0 px-5 flex flex-col items-center justify-center text-center mx-auto">
        <h5 className="body-text font-medium text-primary">OUR MISSION</h5>
        <h3 className="heading-2 pt-6 italic">
          "Empower NCD patients—and the ecosystem around them—to achieve better
          outcomes at lower cost"
        </h3>
      </div>

      <WhatWeDo
        title={"Built for Scale. Designed for Impact."}
        points={points}
      />

      <AboutPhilosophy
        heading="We strengthen the existing ecosystem rather than disrupt it."
        subHeading="OUR PHILOSOPHY"
        experiences={experiences}
      />

      <div className="md:my-16 my-0 md:mx-3 md:py-[100px] md:px-0 px-5 py-20 bg-white rounded-[32px] md:rounded-[64px]  flex flex-col items-center justify-center">
        <div className="text-center md:max-w-[936px] w-full">
          <h5 className="body-text text-primary">OUR FOOTPRINT</h5>
          <h2 className="heading-2 my-6">Validated. Measured. Proven.</h2>
          <p className="body-text font-light">
            Our approach and platform is validated through one of Asia's largest
            multi-site randomized controlled trials, demonstrating significant
            improvements in adherence, outcomes, and medical cost reduction.
          </p>
        </div>
      </div>

      <Map />

      <CTASection
        title={`Partner With Us to Strengthen NCD Care Across Your Ecosystem`}
        primaryBtn={{
          label: "Talk to Our Team",
          onClick: () => (window.location.href = "/company/contact"),
        }}
      />
      <Footer />
    </Container>
  );
};

export default About;
