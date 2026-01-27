import React from "react";

const ExperienceCard = ({ icon, title, description }) => (
  /* Individual Card Styling based on blueprint */
  <div className="bg-white rounded-[32px] p-10 flex flex-col gap-6 border border-slate-50 shadow-sm transition-all hover:shadow-md h-full">
    {/* Icon with the specific gradient/image style from the screenshots */}
    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-inner">
      <img
        src={icon}
        alt=""
        className="w-full h-full object-cover opacity-90"
      />
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-[22px] font-bold text-slate-900 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-[#64748b] text-[15.5px] leading-relaxed">
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
    <section className="w-full bg-[#f8fbff] flex items-center justify-center min-h-[941px]">
      <div className="w-full max-w-[1416px] min-h-[701px] rounded-[64px] py-24 flex flex-col items-center px-4 bg-white">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[900px]">
          {heading && (
            <h2 className="text-[48px] font-bold text-slate-900 mb-6 tracking-tight">
              {heading}
            </h2>
          )}

          {subHeading && (
            <p className="text-[#64748b] text-[17px] font-medium opacity-80">
              {subHeading}
            </p>
          )}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1280px]">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              description={exp.description}
              icon={exp.icon || `/icons/exp-${index + 1}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientExperienceSection;

