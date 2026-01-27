import React from "react";
import CustomButton from "./Button";

const ManagementCard = ({ title, description }) => (
  /* Exact dimensions: Right column width is 757px */
  <div className="bg-white rounded-[32px] p-10 flex flex-col gap-4 shadow-sm border border-[#F1F5F9] relative overflow-hidden w-full max-w-[757px]">

    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
      <div className="grid grid-cols-6 gap-2">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
        ))}
      </div>
    </div>

    <div className="flex items-center gap-4 relative z-10">
      <div className="w-[26px] h-[26px] rounded-full bg-[#10b981] flex items-center justify-center shrink-0">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 className="text-[22px] font-bold text-[#1A1A1A] tracking-tight">
        {title}
      </h3>
    </div>
    <p className="text-[#64748b] text-[16.5px] leading-[1.6] ml-11 relative z-10">
      {description}
    </p>
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
    <section className="w-full bg-[#f8fbff] flex justify-center items-center min-h-[1144px] py-[100px]">
      <div className="w-full max-w-[1416px] px-8 lg:px-[120px] flex flex-row justify-between items-start gap-[60px]">
        {/* LEFT COLUMN */}
        <div className="w-[315px] shrink-0 flex flex-col">
          {title && (
            <h2 className="text-[56px] font-bold text-[#1A1A1A] leading-[62px] tracking-[-0.03em] mb-10 whitespace-pre-line">
              {title}
            </h2>
          )}

          <div className="flex flex-col gap-10">
            {description && (
              <p className="text-[#64748b] text-[18px] leading-[28px]">
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
        <div className="w-[757px] flex flex-col gap-6">
          {points.map((p, i) => (
            <ManagementCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseManagementSection;
