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
    <section className="w-full flex justify-center">
      {/* Fixed Dimension Container */}
      <div
        className="relative pb-[100px] pt-[140px] bg-white rounded-[64px]  flex flex-col items-center justify-center px-6"
        style={{ width: "1416px" }}
      >
        {/* Header Section */}
        <div className="text-center">
          <h2 className="heading-2">
            For Care Service Providers
          </h2>
          <p className="body-text font-light pt-5">
            Launch & Scale Your Monitoring Service—Without Infrastructure
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1224px] py-16">
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
        <button className=" px-4 py-3 rounded-full body-text text-primary border border-borderClr">
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
    <h3 className="body-text font-semibold text-lg text-primary">
      {title}
    </h3>
  </div>
);

export default ServiceProvidersSection;
