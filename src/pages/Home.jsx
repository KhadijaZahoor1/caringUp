import React from "react";
import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import FeatureOverview from "../components/FeatureOverview";
import ServiceProvidersSection from "../components/ServiceProvidersSection";
import EvidenceSection from "../components/EvidenceSection";
import DeploymentSection from "../components/DeploymentSection";
import CTASection from "../components/CTASection";
import Footer from "../components/layout/Footer";
import TrustBar from "../components/TrustBar";
import heroImg from '../assets/images/Hero.png'

const Home = () => {
  return (
    <div>
      <Container>
        <Header />
        <Hero
          title={`Active Disease and\nRisk Management. At\nScale`}
          description="Continuous management of chronic and complex conditions—powered by a dynamic remote monitoring platform designed for resource-constrained healthcare ecosystems."
           primaryBtn={{ label: "Schedule a Demo" }}
           backgroundImage={heroImg}
           container
        />
        <TrustBar />
        <FeatureOverview />
        <ServiceProvidersSection />
        <EvidenceSection />
        <DeploymentSection />
       <CTASection
          title={`Ready to Move from Passive Care to Active Management?`}
          description="Shift from high-volume monitoring to streamlined, strategic control."
          primaryBtn={{ label: "Request Your Personalized Demo" }}
        />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
