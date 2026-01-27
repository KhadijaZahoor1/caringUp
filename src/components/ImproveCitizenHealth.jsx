import React from 'react';


const BenefitCard = ({ title, description }) => (
  <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm relative overflow-hidden w-[757px]">
    {/* Subtle Dot Pattern Overlay */}
    <div 
      className="absolute inset-0 opacity-[0.03] pointer-events-none" 
      style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
    ></div>

    <div className="relative z-10">
      <div className="bg-[#10B981] w-6 h-6 rounded-full flex items-center justify-center mb-6">
        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h3 className="text-[22px] font-bold text-slate-800 mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-slate-400 text-[16px] leading-relaxed max-w-[650px]">
        {description}
      </p>
    </div>
  </div>
);

/**
 * PartnerCard: Organization cards for the bottom section.
 */
const PartnerCard = ({ logo, name, detail }) => (
  <div className="bg-white rounded-[32px] p-12 flex flex-col items-center text-center border border-slate-50 shadow-sm">
    <div className="h-14 mb-8 flex items-center justify-center">
      <img src={logo} alt={name} className="max-h-full object-contain grayscale opacity-70" />
    </div>
    <h4 className="text-lg font-bold text-slate-800">{name}</h4>
    <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider">{detail}</p>
  </div>
);

const ImproveCitizenHealth = () => {
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

  return (
    <div className=" bg-[#F4F8FF] py-24 px-12 font-sans">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
          
          {/* Headline - Left side */}
          <div className="lg:sticky lg:top-24">
            <h1 className="text-[56px] font-bold text-slate-900 leading-[1.1] mb-8">
              Improve <br />
              Citizen Health, <br />
              Optimize <br />
              Public <br />
              Resources
            </h1>
            <p className="text-slate-500 text-lg max-w-[320px]">
              Convert risk intelligence into timely, targeted interventions
            </p>
          </div>

          {/* Cards - Right side (Width constrained to 757px) */}
          <div className="flex flex-col gap-6">
            {benefits.map((item, idx) => (
              <BenefitCard key={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-20">
          <h2 className="text-center text-xl font-bold text-slate-800 mb-12">
            Trusted by Leading Health Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PartnerCard 
              name="WHO DHA" 
              detail="World Health Organization Digital Health Atlas" 
              logo="https://upload.wikimedia.org/wikipedia/commons/c/c2/WHO_logo.svg" 
            />
            <PartnerCard 
              name="Clinical Trial GOV" 
              detail="Registered Clinical Evidence" 
              logo="https://clinicaltrials.gov/ct2/html/images/ctgov-logo.png" 
            />
            <PartnerCard 
              name="Multi-Country" 
              detail="Deployed Across Asia-Pacific" 
              logo="https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImproveCitizenHealth;