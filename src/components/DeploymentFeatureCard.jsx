import React from 'react';

const DeploymentFeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-[24px] p-10 shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
        {/* You can replace this with an <img> tag for the specific icons in your screenshot */}
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1a2b3c] mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default DeploymentFeatureCard;