import React from "react";
import CustomButton from "./Button";
import checkLineCircle from '../assets/icons/checkbox-circle-fill.png'
import homeCardChecker from '../assets/images/card.png'
import bulb from '../assets/icons/stack.png'

const ManagementCard = ({ title, description }) => (
  
  <div className="bg-white rounded-[32px] md:p-8 p-5 flex flex-col gap-4  border border-borderClr relative overflow-hidden w-full"
   style={{
        backgroundImage: `url(${homeCardChecker})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
  >

    <div className="flex items-start flex-col relative z-10">
     <img src={checkLineCircle} />
      <h3 className="heading-6 pt-6 pb-4">
        {title}
      </h3>
    <p className="body-text relative z-10">
      {description}
    </p>
    </div>
    
  </div>
);

const DiseaseManagementSection = ({
  title,
  description,
  buttonText,
  onButtonClick,
  points = [],
  showPayersSection = false,
}) => {
  return (
    <section className="py-20">
      <div className="w-full max-w-[1416px] px-5 lg:px-[120px] flex md:flex-row flex-col justify-between items-start gap-24">
        {/* LEFT COLUMN */}
        <div className="md:w-[30%] w-full shrink-0 flex flex-col">
          {title && (
            <h2 className="heading-2 mb-6">
              {title}
            </h2>
          )}

          <div className="flex flex-col gap-16">
            {description && (
              <p className="body-text">
                {description}
              </p>
            )}

            {buttonText && (
              <CustomButton  variant="primary" 
                  label={buttonText}  />
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:w-[70%] w-full flex flex-col gap-6">

         
        {showPayersSection && (
          <div className="rounded-[24px] md:p-8 p-5 flex md:items-center items-start md:gap-6 gap-2 bg-[#E0E7FF]">
          <div className="">
           <img src={bulb} className="hidden md:block" />
          </div>

          <div>
            <h3 className="heading-6 md:mb-3 mb-1">
             From Early Warning to Effective Management
            </h3>
            <p className="body-text">
             Our platform provides the tools—whether used by your team or your clinical and claims admin partners—to intercept deterioration early and manage it effectively.
            </p>
          </div>
        </div>
        )}
     
          {points.map((p, i) => (
            <ManagementCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseManagementSection;
