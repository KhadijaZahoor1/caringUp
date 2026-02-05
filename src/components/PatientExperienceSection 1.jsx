import React from "react";


const ExperienceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-[32px] md:p-8  p-5 flex flex-col gap-6 border border-borderClr transition-all">
   
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center">
      <img
        src={icon}
        alt=""
        className="w-full h-full object-cover opacity-90"
      />
    </div>

    <div className="flex flex-col">
      <h3 className="heading-6">
        {title}
      </h3>
      <p className="body-text pt-2">
        {description}
      </p>
    </div>
  </div>
);

const PatientExperienceSection = ({
  heading,
  subHeading,
  experiences = [],
}) => {
  return (
    <section className="md:my-24 my-0 bg-white rounded-[32px] md:rounded-[64px]">
      <div className="flex flex-col items-center justify-center w-full max-w-[1224px] mx-auto px-5 md:px-0 py-20 md:py-[100px]">
        
          {heading && <h2 className="heading-2 mb-6">{heading}</h2>}

          {subHeading && <p className="body-text">{subHeading}</p>}
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1280px] mt-20">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              description={exp.description}
              icon={exp.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientExperienceSection;
