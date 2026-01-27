import React from "react";
import CustomButton from "./Button";

const PayerValueSection = () => {
  const values = [
    {
      title: "Measurable Outcome Improvements",
      description:
        "Demonstrate objective improvements in adherence, HbA1c, BP, EF%, COPD control, and post-discharge stabilization.",
    },
    {
      title: "Differentiated Service Lines",
      description:
        "Offer value-based chronic care packages that set your hospital apart in competitive markets.",
    },
    {
      title: "Ready for Capitation & Value-Based Models",
      description:
        "Continuous data and measurable outcomes enable hospitals to confidently participate in shared-savings or capitated contracts.",
    },
  ];

  return (
    /* Outer Container: 1440px Width x 842px Height (Hug) */
    <section className="w-full bg-[#F8FBFF] flex items-center justify-center min-h-[842px]  overflow-hidden">
      {/* Inner Content Wrapper: Center Aligned */}
      <div className="w-full max-w-[1416px] flex flex-col items-center px-8 lg:px-[120px]">
        {/* Header Block */}
        <div className="text-center mb-[64px] w-full">
          <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-[24px] tracking-tight leading-[1.1]">
            Demonstrate Superior Value to Payers
          </h2>
          {/* Updated: Removed max-width to ensure one-line display */}
          <p className="text-[#64748B] text-[18px] font-medium leading-relaxed whitespace-nowrap">
            Show measurable clinical improvements and lower utilization to
            secure stronger partnerships with insurers
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full mb-[64px]">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-[40px] flex flex-col gap-[20px] shadow-sm border border-[#F1F5F9] transition-all hover:shadow-md h-full"
            >
              <div className="w-[28px] h-[28px] rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
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

              <div className="flex flex-col gap-[12px]">
                <h3 className="text-[22px] font-bold text-[#1A1A1A] leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#64748B] text-[15.5px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}

        <CustomButton variant="primary" label={"View Clinical Trial Results"} />
      </div>
    </section>
  );
};

export default PayerValueSection;
