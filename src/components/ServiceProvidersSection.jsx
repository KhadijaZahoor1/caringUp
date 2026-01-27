import React from "react";
import solutionIcon from '../assets/icons/solutionIcon1.png'
import clientIcon from '../assets/icons/clientIcon.png'
import scaleIcon from '../assets/icons/scaleIcon.png'


const ServiceProvidersSection = () => {
  // Data for the cards
  const services = [
    {
      title: "Go to market in days",
      icon: solutionIcon,
    },
    {
      title: "Multi-Client Control",
      icon: clientIcon,
    },
    {
      title: "Scale Effortlessly",
      icon: scaleIcon
    },
  ];

  return (
    <section className="w-full flex justify-center py-16">
      {/* Fixed Dimension Container */}
      <div
        className="relative max-w-[1416px] h-[757px] bg-white rounded-[64px]  flex flex-col items-center justify-center px-6"
        style={{ width: "1416px" }}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-slate-900 mb-4 tracking-tight">
            For Care Service Providers
          </h2>
          <p className="text-gray-400 text-[16px] font-medium uppercase tracking-wide">
            Launch & Scale Your Monitoring Service—Without Infrastructure
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px] mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Bottom Action Button */}
        <button className="border border-gray-200 text-slate-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-[14px]">
          Become a Care Partner
        </button>
      </div>
    </section>
  );
};

// Sub-component for the individual Feature Cards
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white border border-borderClr rounded-[32px] p-8 flex flex-col items-center text-center h-full">
    {/* Icon Container */}
    <div className="mb-6 w-12 h-12 rounded-xl overflow-hidden shadow-sm">
      <img src={icon} alt={title} className="w-full h-full object-cover" />
    </div>

    {/* Title */}
    <h3 className="text-[20px] font-bold text-slate-900 mb-3 leading-tight">
      {title}
    </h3>
  </div>
);

export default ServiceProvidersSection;
