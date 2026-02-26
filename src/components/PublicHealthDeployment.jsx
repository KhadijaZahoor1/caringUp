import React from 'react';
import DeploymentFeatureCard from './DeploymentFeatureCard';
import DeploymentModelCard from './DeploymentModelCard';
import portfolio from '../assets/icons/portfolio.png'
import heart from '../assets/icons/segmentation.png'

const PublicHealthDeployment = () => {
  return (
    <section className="md:py-16 py-20 md:px-0 px-5">
      <div className="max-w-[1176px] mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <span className="body-text font-medium text-primary">
            For Payers
          </span>
          <h2 className="heading-2 py-6">
            Deployment Built for Your Public Health Reality
          </h2>
          <p className="body-text">
            Prove impact in weeks—without IT projects, new teams, or long timelines
          </p>
        </div>

        {/* Top Grid: Pilot and Scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16">
          <DeploymentFeatureCard 
            title="Start Fast with a Focused Pilot"
            description="Launch a targeted program for a single district or condition. Minimal setup, no capital expenditure, and measurable results within the first quarter."
            icon={portfolio}
          />
          <DeploymentFeatureCard 
            title="Scale with Confidence"
            description="Use clear evidence and operational data to guide expansion to new regions or disease programs."
            icon={heart} 
          />
        </div>

        {/* Bottom Section: Deployment Models */}
        <DeploymentModelCard />
      </div>
    </section>
  );
};

export default PublicHealthDeployment;