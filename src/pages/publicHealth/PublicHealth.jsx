import React from "react";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/layout/Footer";
import PublicHealthDeployment from "../../components/PublicHealthDeployment";
import PublicHealthManagement from "../../components/PublicHealthManagement";
import ImproveCitizenHealth from "../../components/ImproveCitizenHealth";
import CTASection from "../../components/CTASection";
 
const PublicHealth = () => {
  return (
    <div>
      <Container>
        <Header />
        <Hero
          title={`  Operationalize Your Diseases\n Management Strategy`}
          description="Strengthen national NCD, TB, and HIV programs with insights and coordinated workflows—built to support SDG targets and operate fully on your terms."
          buttonText="Explore the Platform "
        />
        <PublicHealthDeployment />
        <PublicHealthManagement />
        <ImproveCitizenHealth />
        <CTASection
          title={`Ready to See How Quickly You Can\nAchieve Your Outcomes?`}
          description="Let's discuss a rapid-start plan tailored to your public health priorities."
          buttonText="Request a Discussion Session"
        />
 
        <Footer />
      </Container>
    </div>
  );
};
 
export default PublicHealth;