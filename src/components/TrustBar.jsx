import React from "react";
import homeLogo1 from '../assets/images/homeLogo1.png';
import homeLogo2 from '../assets/images/homeLogo2.png';

const TrustBar = () => {
  const logos = [
    { name: "Logo 1", icon: homeLogo1 },
    { name: "Logo 2", icon: homeLogo2 },
    { name: "Logo 3", icon: homeLogo1 },
    { name: "Logo 4", icon: homeLogo2 },
    { name: "Logo 5", icon: homeLogo1 },
    { name: "Logo 6", icon: homeLogo2 },
  ];

  return (
    /* The negative margin pulls the bar under the Hero. 
       Ensure your Hero component has a higher z-index (e.g., z-10) 
       and a relative position to keep the Hero curve visible on top.
    */
    <section className="w-full flex justify-center bg-transparent -mt-[80px]">
      <div 
        className="w-full max-w-[1416px] bg-[#E2E8F0] rounded-b-[64px] pt-[120px] pb-16 px-10 flex flex-col items-center border-x border-b border-gray-100"
      >
        {/* Sub-header text */}
        <p className="text-center text-[#64748B] font-semibold text-sm">
          Trusted Across Healthcare Ecosystem
        </p>

        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center pt-10 gap-12 md:gap-20 lg:gap-28 w-full">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className=" cursor-pointer"
            >
              <img 
                src={logo.icon} 
                alt={logo.name} 
                className="w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;