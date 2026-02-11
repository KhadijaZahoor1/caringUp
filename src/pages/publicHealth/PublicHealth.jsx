import React from "react";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/layout/Footer";
import PublicHealthDeployment from "../../components/PublicHealthDeployment";
import PublicHealthManagement from "../../components/PublicHealthManagement";
import ImproveCitizenHealth from "../../components/ImproveCitizenHealth";
import CTASection from "../../components/CTASection";
import DiseaseManagementSection from "../../components/DiseaseManagementSection 1";
import organization1 from '../../assets/images/organization1.png'
import organization2 from '../../assets/images/organization2.png'
import organization3 from '../../assets/images/organization3.png'
import publicHealthBanner from "../../assets/images/publicHealthBanner.png";
 

 const benefits = [
    {
      title: "Deliver Visible Improvements Quickly",
      description: "Deploy CaringUp as a low-friction mechanism to show measurable progress in public health within weeks—not years."
    },
    {
      title: "Extend Your System's Capacity",
      description: "Stabilize chronic patients and reduce avoidable deterioration, freeing up beds, clinics, and clinical manpower for higher-value care."
    },
    {
      title: "Lower the Burden on Families",
      description: "Reduce unplanned visits and complications, lowering the financial burden on citizens and strengthening public goodwill."
    },
    {
      title: "Strengthen Stakeholder Confidence",
      description: "Provide clear, evidence-based reporting that reinforces trust among leadership, partners, and the public."
    }
  ];



  const PartnerCard = ({ logo, name, detail }) => (
  <div className="bg-white rounded-[32px] p-8 flex flex-col items-center text-center border border-borderClr">
    <div className="h-14 mb-8 flex items-center justify-center">
      <img src={logo} alt={name} className="max-h-full object-contain" />
    </div>
    <h4 className="heading-6 mb-2">{name}</h4>
    <p className="body-text-1">{detail}</p>
  </div>
);


const PublicHealth = () => {
  return (
    <div>
      <Container>
        <Header />
        <Hero
          title={`  Operationalize Your Diseases\n Management Strategy`}
          description="Strengthen national NCD, TB, and HIV programs with insights and coordinated workflows—built to support SDG targets and operate fully on your terms."
          primaryBtn={{ label: "Explore the Platform" }}
          secondaryBtn={{ label: "Schedule a Strategy Alignment Session" }}
          backgroundImage={publicHealthBanner}
        />
        <PublicHealthDeployment />
        <PublicHealthManagement />
         <DiseaseManagementSection
          title={'Improve Citizen Health, Optimize Public Resources'}
          description="Convert risk intelligence into timely, targeted interventions"
          // buttonText="View Clinical Trial Results"
          points={benefits}
        />

         <div className="max-w-[1176px] mx-auto md:mb-[120px] md:mt-[-20px]">
          <h2 className="heading-6 text-center mb-12">
            Trusted by Leading Health Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-0">
            <PartnerCard 
              name="WHO DHA" 
              detail="World Health Organization Digital Health Atlas" 
              logo={organization1}
            />
            <PartnerCard 
              name="Clinical Trial GOV" 
              detail="Registered Clinical Evidence" 
              logo={organization2} 
            />
            <PartnerCard 
              name="Multi-Country" 
              detail="Deployed Across Asia-Pacific" 
              logo={organization3} 
            />
          </div>
        </div>
        <CTASection
          title={`Ready to See How Quickly You Can\nAchieve Your Outcomes?`}
          description="Let's discuss a rapid-start plan tailored to your public health priorities."
          primaryBtn={{ label: "Request a Discussion Session" }}
        />
 
        <Footer />
      </Container>
    </div>
  );
};
 
export default PublicHealth;