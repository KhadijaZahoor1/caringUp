import FeatureOverview from "../components/FeatureOverview";

const featureData = [
    {
      logo: "/path-to-caringup-logo.png",
      title: "CaringUp Platform — Dynamic RPM Difference",
      description: "Traditional RPM collects data, CaringUp turns it into conversations, interventions, and clearer decisions.",
      features: [
        { label: "Treatment Compliance", desc: "Consistently high adherence across conditions proven" },
        { label: "2-Way Communication", desc: "Secure messaging between patients and care teams" },
        // ... add other features
      ],
      imageSrc: "/path-to-laptop-mockup.png"
    },
    {
      logo: "/path-to-careaide-logo.png",
      title: "CareAide - Patient Engagement",
      description: "Complexity, Simplified for Patients From Diverse Backgrounds",
      features: [
        { label: "Medication & Health Management", desc: "Keeping it simple is complex but we do it well." },
        { label: "Remote Family Care", desc: "Remote visibility, management & escalations for caregivers" },
      ],
      imageSrc: "/path-to-mobile-mockup.png"
    }
  ];
  
  // In your main page:
  return (
    <div className="py-10 bg-slate-50">
      {featureData.map((data, idx) => (
        <FeatureOverview key={idx} {...data} />
      ))}
    </div>
  );