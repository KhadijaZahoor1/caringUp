import React from "react";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Hero from "../../components/Hero";
import CTASection from "../../components/CTASection";
import Footer from "../../components/layout/Footer";
import TitleSection from "../../components/TitleSection";
import SolutionAccordion from "../solution/sections/SolutionAccordion";
import IntegratedPlatform from "../solution/sections/IntegratedPlatform";
import Outcoms from "../solution/sections/Outcoms";
import ClinicalTrial from "../solution/sections/ClinicalTrial";
import InsightsToAction from "../solution/sections/InsightsToAction";
import ClinicalCentre from "../solution/sections/ClinicalCentre";

const Platform = () => {
  return (
    <div>
      <Container>
        <Header />
        <Hero
          title={"Outcomes at Scale, Without Scaling Your Clinical Team"}
          description="Deliver better health outcomes and lower costs across your ecosystem—deployable in hours, not months."
          primaryBtn={{ label: "Schedule a Demo" }}
        />
        <TitleSection
          heading={"One Platform, Two Ways to Deliver Value."}
          subHeading={"PRODUCTS"}
          text={`Start with broad health engagement, targeted clinical intervention, or both. Our flexible platform adapts to your immediate needs and grows with your programs.`}
        />
        <SolutionAccordion />
        <IntegratedPlatform />
        <ClinicalCentre />
        <InsightsToAction />
        <ClinicalTrial />
        <Outcoms />

        <CTASection
          title={`Ready to See How Quickly You Can\nAchieve Your Outcomes?`}
          description="Let's discuss a rapid-start plan tailored to your public health priorities."
          primaryBtn={{ label: "Schedule a Demo" }}
          secondaryBtn={{ label: "Download CareAide" }}
        />
        <Footer />
      </Container>
    </div>
  );
};

export default Platform;
