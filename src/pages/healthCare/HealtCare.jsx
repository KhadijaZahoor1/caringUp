import React from "react";
import Container from "../../components/layout/Container";
import Header from "../../components/layout/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/layout/Footer";
import PayerValueSection from "../../components/PayerValueSection";
import OutcomesSection from "../../components/OutcomesSection 1";
import PatientExperienceSection from "../../components/PatientExperienceSection 1";
import DiseaseManagementSection from "../../components/DiseaseManagementSection 1";
 
const HealthCare = () => {
  const outcomes = [
    {
      title: "Human-AI Adherence Partnership",
      description:
        "CareAide's smart tracking and reminders are enhanced by your care team's ability to deliver personalized nudges, education, and motivational support when needed.",
    },
    {
      title: "Early Deterioration Detection",
      description:
        "WeCare analyzes patient-reported medication intake, symptom reports, and vital signs to identify subtle patterns of risk—often days before they escalate.",
    },
    {
      title: "Data-Driven Interventions",
      description:
        "Monitoring team receives contextual, meaningful alerts that support proactive reviews, personalized adjustments, and timely outreach based on real-world patient data.",
    },
    {
      title: "Dynamic Treatment Insight",
      description:
        "Regular patient reported data provides early signals of treatment efficacy or failure, enabling clinicians to adjust care plans just in time — optimizing outcomes faster.",
    },
  ];
 
  const experiences = [
    {
      title: "Proactive Care for Peace of Mind",
      description:
        "Conducted across multiple hospitals and care settings, the trial evaluated RPM effectiveness with a diverse patient population—ensuring high external validity and strong clinical confidence.",
    },
    {
      title: "Always-On Accessibility",
      description:
        "Patients supported by the RPM program achieved >95% PDC (Proportion of Days Covered), compared to just 68% in the control group—demonstrating long-term behavioral change.",
    },
    {
      title: "Contextual Engagement Builds Trust",
      description:
        "Participants with heart failure saw a significant increase in EF% from baseline, reflecting improved cardiac function and measurable clinical recovery driven by early intervention.",
    },
  ];
 
  const points = [
    {
      title: "Scalable, Team-Light Model",
      description:
        "Manage thousands of chronic patients without expanding clinical staff—AI triage and structured workflows handle the heavy lifting.",
    },
    {
      title: "Streamlined Clinical Workflows",
      description:
        "Automated reminders, structured check-ins, and AI-assisted triage reduce manual administrative tasks and follow-ups, allowing clinicians to focus on high-value interventions.",
    },
    {
      title: "Standardized, High-Quality Care Pathways",
      description:
        "Build and enforce consistent follow-up, coaching, and escalation protocols—reducing variation across teams and ensuring reliable quality across facilities.",
    },
    {
      title: "Stronger Care Reputation",
      description:
        "Deliver predictable, high-quality chronic care that enhances your hospital's brand, competitiveness, and long-term patient trust.",
    },
  ];
 
  const title = `Deliver Cost
Effective
Chronic
Disease
Management
Programs`;
 
  return (
    <div>
      <Container>
        <Header />
        <Hero
          title={`Healthcare\n Challenges, Perfectly\nMatched`}
          description="Combat the rising burden of NCDs, HIV, and TB with integrated Health & Care Management solution — purpose-built for resource-constrained healthcare ecosystems and adaptable to any organization’s role in care.."
           primaryBtn={{ label: "Discover the Platform" }}
            secondaryBtn={{ label: "Request a Demo" }}
        />
        {/* <OutcomesSection /> */}
        <OutcomesSection
          tagLine="For Healthcare Providers"
          heading="Proven Patient Outcomes"
          subHeading="> 95% Medication Adherence. Significantly improved HbA1c, EF%, FEV1 & BP"
          outcomes={outcomes}
          primaryButtonText="View Clinical Trial Results"
          secondaryButtonText="Request a Demo"
          onPrimaryClick={() => console.log("Primary clicked")}
          onSecondaryClick={() => console.log("Secondary clicked")}
        />
 
        {/* <PatientExperienceSection /> */}
        <PatientExperienceSection
          heading="Elevate Patient Satisfaction & Loyalty"
          subHeading="How Care Management transforms patient experience"
          experiences={experiences}
        />
        {/*  <DiseaseManagementSection /> */}
 
        <DiseaseManagementSection
          title={title}
          description="Run high-impact programs at scale — without increasing clinical workload"
          buttonText="View Clinical Trial Results"
          points={points}
          onButtonClick={() => console.log("CTA clicked")}
        />
        <PayerValueSection />
        <Footer />
      </Container>
    </div>
  );
};
 
export default HealthCare;