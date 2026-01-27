import React, { useState } from 'react';
// import { Users, Layout, ClipboardList, Microscope, FlaskConical, Target } from 'lucide-react';

const EvidenceResearch = () => {
  const [activeTab, setActiveTab] = useState('Study Overview');

  const tabs = [
    { name: 'Study Overview',  }, 
    { name: 'Research Questions',  },
    { name: 'Research Team & Sites',  },
    { name: 'Study Design',   },
    { name: 'Methodology', },
    { name: 'Study Protocol',  },
  ];

  // icon: <Target className="w-4 h-4" /> 

  return (
    <div className="max-w-[1176px] mx-auto py-20 px-4 font-sans text-[#0F172A]">
      {/* 1. Header Section */}
      <h2 className="text-[44px] font-bold text-center mb-10">About the Research (RCT Overview)</h2>

      {/* 2. Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[12px] font-bold transition-all border ${
              activeTab === tab.name
                ? 'bg-[#2E3A8C] text-white border-[#2E3A8C] shadow-md'
                : 'bg-[#F1F5F9] text-[#64748B] border-transparent hover:bg-gray-200'
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* 3. Tab Content - Study Overview (Active by Default) */}
      {activeTab === 'Study Overview' && (
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-12">
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6">Our Study at a Glance: Key Facts of the RCT CareAide®</h3>
            <div className="bg-[#E0E7FF] bg-opacity-50 border border-indigo-100 rounded-2xl p-8">
              <p className="text-[#475569] text-sm leading-relaxed italic">
                Pioneering study, one of the largest/deepest in the region, cultivating robust, homegrown evidence to illuminate pathways to a healthier, more vibrant Malaysia.
              </p>
            </div>
          </div>

          {/* Fact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Design", content: "A 6-month, prospective Randomized Controlled Trial (RCT).", icon: "💎" },
              { title: "Scale", content: "1,106 patients across 3 major Malaysian hospitals (UMMC, H. Putrajaya, H. Pulau Pinang).", icon: "🏥" },
              { title: "Participants", content: "Adults with Hypertension, Diabetes, Asthma, or Heart Failure who had low baseline medication adherence (MMAS Score less than 6).", icon: "👥" },
              { title: "Method", content: "IG: Received standard care + used the CareAide® App. CG: Received standard care only.", icon: "🔬" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-50 rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Counter Section */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            {[
              { label: "Total Participants", value: "1,106" },
              { label: "Intervention Group", value: "565" },
              { label: "Control Group", value: "541" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="text-[44px] font-bold text-[#0F172A]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== 'Study Overview' && (
        <div className="bg-white rounded-[40px] border border-dashed border-gray-200 p-32 text-center text-gray-400">
          Detailed {activeTab} content would be populated here.
        </div>
      )}
    </div>
  );
};

export default EvidenceResearch;