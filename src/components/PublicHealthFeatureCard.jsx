import React from 'react';

const PublicHealthFeatureCard = ({ title, description }) => {
  return (
    <div className="bg-[#f8fafc] border border-slate-100 rounded-[24px] p-8 flex flex-col items-start min-h-[280px]">
      {/* Status Icon */}
      <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center mb-6 shrink-0 shadow-sm">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-[#1a2b3c] mb-4 leading-tight">
        {title}
      </h3>
      
      <p className="text-slate-500 text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default PublicHealthFeatureCard;