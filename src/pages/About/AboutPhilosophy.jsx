import React from "react";

const AboutPhilosophyCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-[32px] md:p-8  p-5 flex flex-col gap-6 border border-borderClr transition-all">
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center">
      <img
        src={icon}
        alt=""
        className="w-full h-full object-cover opacity-90"
      />
    </div>

    <div className="flex flex-col text-left">
      <h3 className="heading-6">{title}</h3>
      <p className="body-text pt-2">{description}</p>
    </div>
  </div>
);

const AboutPhilosophy = ({ heading, subHeading, experiences = [] }) => {
  return (
    <section className="md:py-16 py-20">
      <div className="flex flex-col gap-20 items-center justify-center text-center w-full max-w-[1224px] mx-auto px-5 md:px-0">
        <div>
          {subHeading && (
            <p className="body-text text-primary mb-6">{subHeading}</p>
          )}
          {heading && <h2 className="heading-2 md:max-w-[900px]">{heading}</h2>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {experiences.map((exp, index) => (
            <AboutPhilosophyCard
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

export default AboutPhilosophy;
