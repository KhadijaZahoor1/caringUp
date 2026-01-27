import React from "react";
import Footer from "../../components/layout/Footer";
import Hero from "../../components/Hero";
import Header from "../../components/layout/Header";
import Container from "../../components/layout/Container";
import CTASection from "../../components/CTASection";
import Flywheel from "../../components/Flywheel";
import DiseaseManagementSection from "../../components/DiseaseManagementSection 1";
import PatientExperienceSection from "../../components/PatientExperienceSection 1";
import OutcomesSection from "../../components/OutcomesSection 1";
 
const Payers = () => {
  const outcomes = [
    {
      title: "Achieve Excellent Adherence",
      description:
        ">95% Sustained Medication Adherence (vs. 66% in the control group)",
    },
    {
      title: "Deliver Measurable Cost Containment",
      description:
        "37% Lower Total Medical Costs for diabetic patients within 6 months",
    },
    {
      title: "Improve Key Clinical Metrics",
      description:
        "Significant Improvements across HbA1c, BP, EF%, and COPD control.",
    },
    {
      title: "Detect Risks Earlier",
      description:
        "Earlier Detection of treatment gaps and physiological deterioration.",
    },
  ];
 
  const experiences = [
    {
      title: "Portfolio-Level Visibility",
      description:
        "Monitor rising-risk segments and employer-group trends in real time.",
    },
    {
      title: "Segmentation for Targeted Oversight",
      description:
        "Segment by plan, condition, or employer to detect early deterioration and manage high-utilization groups proactively.",
    },
    {
      title: "Patient-Level Risk Flags",
      description:
        "AI-assisted indicators surface non-adherence, treatment gaps, and hospitalization risk for timely action.",
    },
  ];
 
  const totalRisks = [
    {
      title: "Unified Visibility & Control",
      description:
        "Gain a single, actionable view of risk and performance across all member groups—from corporate clients to national schemes—enabling consistent, data-driven decisions.",
    },
    {
      title: "Frictionless Program Expansion",
      description:
        "Launch new chronic care programs in days, not months — no integrations, no IT friction.",
    },
    {
      title: "Predictable Financial Outcomes",
      description:
        "Consistent oversight produces stable adherence, reduced deterioration, and a more manageable loss ratio.",
    },
  ];
 
  const points = [
    {
      title: "AI-Prioritized Outreach",
      description:
        "Engage the right members at the right time based on risks identified from patient reported data and trends.",
    },
    {
      title: "Flexible Intervention Pathways",
      description:
        "Support education, administrative follow-up, or structured escalation to clinical partners.",
    },
    {
      title: "Optimize Treatment Pathways",
      description:
        "Detect inadequate therapeutic response earlier, avoiding prolonged ineffective care.",
    },
    {
      title: "Reduce High-Cost Utilization",
      description:
        "Stabilized chronic conditions lead to fewer acute episodes, ER visits, and unplanned admissions.",
    },
  ];
 
  const title = `Prevent
Avoidable
High-Cost
Events`;
 
  return (
    <div>
      <Container>
        <Header />
        <Hero
          title={`Active Disease and\nRisk Management. At\nScale`}
          description="Continuous management of chronic and complex conditions—powered by a dynamic remote monitoring platform designed for resource-constrained healthcare ecosystems."
          buttonText="Schedule a Demo"
        />
        <OutcomesSection
          tagLine="FOR PAYERS"
          heading="Clinically Proven, Data Driven Cost Containment"
          subHeading="Lower the Baseline and Flatten the Cost Curve of Chronic Care"
          outcomes={outcomes}
          primaryButtonText="View Clinical Trial Results"
          secondaryButtonText="Request a Demo"
          onPrimaryClick={() => console.log("Primary clicked")}
          onSecondaryClick={() => console.log("Secondary clicked")}
        />
        {/* <PatientExperienceSection /> */}
        <PatientExperienceSection
          heading="The Intelligence Layer for Proactive
                  Risk Management"
          subHeading="Give your team current portfolio insight to act where it matters most"
          experiences={experiences}
        />
 
        {/* <DiseaseManagementSection /> */}
        <DiseaseManagementSection
          title={title}
          description="Convert risk intelligence into timely, targeted interventions"
          points={points}
          onButtonClick={() => console.log("CTA clicked")}
        />
 
        {/* <PatientExperienceSection /> */}
        <PatientExperienceSection
          heading="Systematic Oversight for
                  Your Total Risk Pool"
          subHeading="Turn unpredictable chronic care costs into a managed, predictable line item"
          experiences={totalRisks}
        />
        <Flywheel />
        <CTASection
          title={`Ready to Improve Your Loss Ratio—\nSustainably?`}
          description="Partner with CaringUp to reduce preventable claims and create long-term cost stability"
          buttonText="Schedule a Strategy Session"
        />
        <Footer />
      </Container>
    </div>
  );
};
 
export default Payers;