import React from "react";
import checklineCircle from "../../../assets/icons/checkbox-circle-fill.png";

const PayersOutcomeCard = ({ title, description }) => (
  <div className="bg-[#F8FAFC] rounded-[32px] md:p-8 p-5 flex flex-col gap-4 border">
    <div className="flex items-start flex-col md:flex-row gap-4">
      {/* Green Check Icon */}
        <img src={checklineCircle} className="w-8 h-8" />
      <div>
        <h3 className="heading-6 mb-3">{title}</h3>
        <p className="body-text-1">{description}</p>
      </div>
    </div>
  </div>
);

export default PayersOutcomeCard;
