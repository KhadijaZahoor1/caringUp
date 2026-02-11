import React from 'react';
import portfolio from '../assets/icons/portfolio.png'
import fillCircle from '../assets/icons/checkbox-circle-fill.png'

const ModelOption = ({ title, subtitle }) => (
  <div className="bg-[#F8FAFC] border border-borderClr rounded-3xl p-8 flex flex-col items-start w-full">
    <div className="flex items-center gap-2 mb-4">
     <img src={fillCircle} alt='circle' />
      <span className="body-text-heading">{title}</span>
    </div>
    <span className="body-text">{subtitle}</span>
  </div>
);

const DeploymentModelCard = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-borderClr mt-6">
      <div className="mb-8">
        <div className="mb-6">
         <img src={portfolio} />
        </div>
        <h3 className="heading-6 mb-2">Flexible Deployment Models</h3>
        <p className="body-text">
          Choose from a shared multi-tenant platform for low-cost and fastest deployment, a dedicated national instance (single-tenant), or a Client-owned Fully Managed Instance—aligned with your budget, control, and scalability needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ModelOption title="Shared Platform" subtitle="Low-cost, fastest deployment" />
        <ModelOption title="Dedicated Instance" subtitle="Single tenant, enhanced control" />
        <ModelOption title="Fully Managed" subtitle="Client-owned infrastructure" />
      </div>
    </div>
  );
};

export default DeploymentModelCard;