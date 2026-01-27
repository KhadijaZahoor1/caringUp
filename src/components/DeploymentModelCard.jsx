import React from 'react';

const ModelOption = ({ title, subtitle }) => (
  <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6 flex flex-col items-start w-full">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="font-bold text-[#1a2b3c] text-[15px]">{title}</span>
    </div>
    <span className="text-slate-500 text-sm">{subtitle}</span>
  </div>
);

const DeploymentModelCard = () => {
  return (
    <div className="bg-white rounded-[24px] p-10 shadow-sm border border-slate-100">
      <div className="mb-8">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
          📄
        </div>
        <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">Flexible Deployment Models</h3>
        <p className="text-slate-500 text-sm max-w-4xl leading-relaxed">
          Choose from a shared multi-tenant platform for low-cost and fastest deployment, a dedicated national instance (single-tenant), or a Client-owned Fully Managed Instance—aligned with your budget, control, and scalability needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ModelOption title="Shared Platform" subtitle="Low-cost, fastest deployment" />
        <ModelOption title="Dedicated Instance" subtitle="Single tenant, enhanced control" />
        <ModelOption title="Fully Managed" subtitle="Client-owned infrastructure" />
      </div>
    </div>
  );
};

export default DeploymentModelCard;