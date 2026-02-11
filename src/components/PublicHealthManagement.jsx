import React from "react";
import PublicHealthFeatureCard from "./PublicHealthFeatureCard";
import CustomButton from "./Button";

const PublicHealthManagement = () => {
  return (
    <section className="bg-white md:rounded-[64px] md:my-[120px] py-[100px] ">
      <div className="max-w-[1224px] mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Consolidate Data, Coordinate Care: Unified National Disease
            Management
          </h2>
          <p className="body-text">
            A Unified System for Surveillance, Management, and Coordination
          </p>
        </div>

        {/* Content Wrapper */}
        <div className=" bg-white border border-borderClr rounded-[32px] my-16 md:p-8 p-5">
          <p className="body-text mb-8 text-center">
            Command your entire disease portfolio from one place.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PublicHealthFeatureCard
              title="Integrated Disease Surveillance Dashboards"
              description="Track disease burden and treatment gaps based on aggregated patient and clinic data."
            />
            <PublicHealthFeatureCard
              title="Condition-Specific Patient Tracking"
              description="Manage cohorts for NCDs, TB, HIV, and more with tailored indicators, follow-up schedules, and progress metrics relevant to each disease."
            />
            <PublicHealthFeatureCard
              title="Tools for Every Level of Your System"
              description="Equip national, regional, and frontline teams with the right dashboards, alerts, and task lists to coordinate care seamlessly."
            />
          </div>
        </div>

        {/* Primary Action Button */}
        <CustomButton variant="primary" label={'Explore the Platform'} />
      </div>
    </section>
  );
};

export default PublicHealthManagement;
