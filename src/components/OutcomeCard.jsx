import React from 'react';

const OutcomeCard = ({ title, description }) => (
  <div className="bg-white rounded-[32px] p-10 flex flex-col gap-4 shadow-sm border border-slate-50 transition-all hover:shadow-md">
    <div className="flex items-center gap-4">
      {/* Green Check Icon */}
      <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 className="text-[20px] font-bold text-slate-900 tracking-tight">
        {title}
      </h3>
    </div>
    <p className="text-[#64748b] text-[15px] leading-relaxed ml-10">
      {description}
    </p>
  </div>
);

export default OutcomeCard;