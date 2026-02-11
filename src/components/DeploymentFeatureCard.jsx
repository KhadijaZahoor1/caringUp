import React from 'react';

const DeploymentFeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-[24px] p-8 border border-borderClr flex flex-col">
      <div className="mb-6">
        <img src={icon} />
      </div>
      <h3 className="heading-6 mb-2">{title}</h3>
      <p className="body-text">
        {description}
      </p>
    </div>
  );
};

export default DeploymentFeatureCard;