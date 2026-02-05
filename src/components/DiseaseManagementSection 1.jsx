import React from "react";
import CustomButton from "./Button";
import checkLineCircle from '../assets/icons/checkbox-circle-fill.png'
import homeCardChecker from '../assets/images/card.png'

const ManagementCard = ({ title, description }) => (
  
  <div className="bg-white rounded-[32px] md:p-8 p-5 flex flex-col gap-4  border border-borderClr relative overflow-hidden w-full max-w-[757px]"
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
}) => {
  return (
    <section className="w-full flex justify-center items-center min-h-[1144px] py-20 md:py-[120px]">
      <div className="w-full max-w-[1416px] px-8 lg:px-[120px] flex md:flex-row flex-col justify-between items-start gap-24">
        {/* LEFT COLUMN */}
        <div className="md:w-[25%] w-full shrink-0 flex flex-col">
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
        <div className="md:w-[75%] w-full flex flex-col gap-6">
          {points.map((p, i) => (
            <ManagementCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseManagementSection;
