import React from 'react';
import PublicHealthFeatureCard from './PublicHealthFeatureCard';

const PublicHealthManagement = () => {
  return (
    <section className="bg-white rounded-[64px] py-20 px-6 mx-3 font-sans">
      <div className="max-w-[1416px] mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl">
          <h2 className="text-[40px] md:text-[40px] font-bold text-[#1a2b3c] leading-[1.2] mb-6">
            Consolidate Data, Coordinate Care: Unified National Disease Management
          </h2>
          <p className="text-slate-500 text-lg">
            A Unified System for Surveillance, Management, and Coordination
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="w-full bg-white border border-slate-100 rounded-[32px] p-12 md:p-16 shadow-sm mb-10">
          <p className="text-center text-slate-400 text-sm mb-12 uppercase tracking-wide">
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
        <button className="group flex items-center gap-3 bg-[#1e4477] hover:bg-[#16355d] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg">
          <span className="font-semibold text-[15px]">Explore the Platform</span>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default PublicHealthManagement;