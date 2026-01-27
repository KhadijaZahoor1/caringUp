import React from 'react';
import DeploymentFeatureCard from './DeploymentFeatureCard';
import DeploymentModelCard from './DeploymentModelCard';

const PublicHealthDeployment = () => {
  return (
    <section className="bg-[#f0f7ff] py-20 px-4 font-sans">
      <div className="max-w-[1176px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase block mb-4">
            For Payers
          </span>
          <h2 className="text-4xl md:text-[42px] font-bold text-[#1a2b3c] leading-tight mb-6">
            Deployment Built for Your Public Health <br className="hidden md:block" /> Reality
          </h2>
          <p className="text-slate-500 text-lg">
            Prove impact in weeks—without IT projects, new teams, or long timelines
          </p>
        </div>

        {/* Top Grid: Pilot and Scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <DeploymentFeatureCard 
            title="Start Fast with a Focused Pilot"
            description="Launch a targeted program for a single district or condition. Minimal setup, no capital expenditure, and measurable results within the first quarter."
            icon="📄" // Replace with your specific SVG/Image
          />
          <DeploymentFeatureCard 
            title="Scale with Confidence"
            description="Use clear evidence and operational data to guide expansion to new regions or disease programs."
            icon="💎" // Replace with your specific SVG/Image
          />
        </div>

        {/* Bottom Section: Deployment Models */}
        <DeploymentModelCard />
      </div>
    </section>
  );
};

export default PublicHealthDeployment;