import React from 'react';
// import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const GlobalRegistries = () => {
  const registries = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png",
      title: "WHO Digital Health",
      description: "Included in the World Health Organization's Digital Health Atlas (DHA), a global technology registry for digital health implementations.",
      linkText: "View Registry"
    },
    {
      logo: "https://clinicaltrials.gov/ct2/html/ct-logo.png",
      title: "Clinical Trial GOV",
      description: "Registered with the U.S. National Library of Medicine's clinical trial registry, the world's largest database of privately and publicly funded clinical studies.",
      linkText: "View Registry"
    },
    {
      logo: "https://www.nmrr.gov.my/logo-nmrr.png", // Replace with your local NMRR asset
      title: "NMRR Malaysia",
      description: "Registered with the National Medical Research Register, Malaysia's official repository for medical and health research conducted in the country.",
      linkText: "View Registry"
    }
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-24 px-4 font-sans text-[#0F172A]">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-[44px] font-bold mb-6">Regulatory & Global Registries</h2>
        <p className="text-[#64748B] text-lg leading-relaxed">
          Our research is registered with international clinical trial registries and recognized by global health organizations, ensuring transparency, accountability, and adherence to the highest research standards.
        </p>
      </div>

      {/* Registries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {registries.map((registry, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md"
          >
            {/* Logo Container */}
            <div className="h-20 flex items-center justify-center mb-8">
              <img 
                src={registry.logo} 
                alt={registry.title} 
                className="max-h-full max-w-[180px] object-contain grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>

            <h3 className="text-xl font-bold mb-4">{registry.title}</h3>
            <p className="text-[#64748B] text-xs leading-relaxed flex-grow mb-6">
              {registry.description}
            </p>

            <button className="flex items-center gap-1.5 text-[#2E3A8C] font-bold text-xs hover:underline">
              {/* {registry.linkText} <ArrowUpRight className="w-3.5 h-3.5" /> */}
            </button>
          </div>
        ))}
      </div>

      {/* Research Integrity Banner */}
      <div className="bg-[#E0E7FF] bg-opacity-60 border border-white rounded-[32px] p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 via-orange-400 to-emerald-400 flex-shrink-0 flex items-center justify-center shadow-lg">
           {/* <ShieldCheck className="text-white w-8 h-8" /> */}
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">Research Integrity & Transparency</h4>
          <p className="text-xs text-[#475569] leading-relaxed">
            Registration with these international bodies demonstrates our commitment to research transparency, ethical conduct, and compliance with international standards for clinical research. All outcomes were pre-specified and the study followed <span className="font-bold text-[#2E3A8C]">Good Clinical Practice (GCP)</span> guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalRegistries;