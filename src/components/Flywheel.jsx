import React from "react";
import flywheel from '../assets/images/flywheel.png'

const Flywheel = () => {
  return (
    <div className="md:pt-[120px] md:pb-44 py-0 pt-20 flex items-center justify-center">
      <div className="max-w-[1176px] w-full flex flex-col items-center">

        {/* Header */}
        <div className="text-center max-w-[936px] mx-auto md:pb-28 pb-14 px-4">
          <h1 className="heading-2 mb-6">
            The Flywheel to Sustainable Cost Containment
          </h1>
          <p className="body-text">
            A proven cycle that reshapes chronic care economics
          </p>
        </div>

        {/* Flywheel Layout */}
       <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
  {/* Left Side */}
  <div className="flex flex-col gap-24 md:text-right text-center px-4 md:w-1/4">
    <div>
      <div className="inline-block bg-[#1D4477] text-white md:px-12 md:py-5 py-2 px-10 rounded-full heading-6 mb-6">
        Predict
      </div>
      <p className="body-text text-lg text-primary">
        Identify rising-risk members and treatment gaps through current portfolio intelligence.
      </p>
    </div>
    <div>
      <div className="inline-block bg-[#32A0D4] text-white md:px-12 md:py-5 py-2 px-10 rounded-full heading-6 mb-6">
        Sustain
      </div>
      <p className="body-text text-lg text-primary">
        Maintain a lower cost baseline with predictable utilization and a more stable loss ratio.
      </p>
    </div>
  </div>

  {/* Center Flywheel */}
  <div className="relative w-full md:w-1/2 flex justify-center my-12 md:my-0">
    <img src={flywheel} alt="flywheel" className="w-[260px] sm:w-[320px] md:w-[395px]" />
  </div>

  {/* Right Side */}
  <div className="flex flex-col gap-24 md:text-left text-center px-4 md:w-1/4">
    <div>
      <div className="inline-block bg-[#F4B942] text-white md:px-12 md:py-5 py-2 px-10 rounded-full heading-6 mb-6">
        Prevent
      </div>
      <p className="body-text text-lg text-primary">
        Deploy timely, targeted interventions before deterioration escalates into cost.
      </p>
    </div>
    <div>
      <div className="inline-block bg-[#76C052] text-white md:px-12 md:py-5 py-2 px-10 rounded-full heading-6 mb-6">
        Control
      </div>
      <p className="body-text text-lg text-primary">
        Achieve consistent adherence and stabilized outcomes at scale.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Flywheel;
