import React from 'react';
import fillCircle from '../assets/icons/checkbox-circle-fill.png'

const PublicHealthFeatureCard = ({ title, description }) => {
  return (
    <div className="bg-[#f8fafc] rounded-3xl border border-borderClr p-8 flex flex-col items-start ">
      <div className="mb-6">
       <img src={fillCircle} className='w-8 h-8' />
      </div>

      <h3 className="heading-6 mb-2">
        {title}
      </h3>
      
      <p className="body-text">
        {description}
      </p>
    </div>
  );
};

export default PublicHealthFeatureCard;