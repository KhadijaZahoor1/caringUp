import React from 'react';
// import { ArrowUpRight, FileText, BookOpen, BarChart3, Microscope } from 'lucide-react';

const EvidencePublications = () => {
  const publications = [
    {
      type: "Journal Article",
      typeColor: "bg-emerald-50 text-emerald-600",
      title: "Primary RCT Outcomes Publication",
      subtitle: "Published in peer-reviewed medical journal",
      description: "Comprehensive report of the multi-site randomized controlled trial demonstrating the efficacy of the CareAide platform in improving medication adherence and clinical outcomes across multiple chronic conditions.",
      linkText: "View Publication",
    //   icon: <BookOpen className="w-6 h-6 text-white" />
    },
    {
      type: "Journal Article",
      typeColor: "bg-emerald-50 text-emerald-600",
      title: "Scientific Posters & Presentations",
      subtitle: "Presented at international medical conferences",
      description: "Research findings presented at major international conferences including findings on cost-effectiveness, quality of life improvements, and condition-specific outcomes.",
      linkText: "View Publication",
    //   icon: <Microscope className="w-6 h-6 text-white" />
    },
    {
      type: "Case Study",
      typeColor: "bg-indigo-50 text-indigo-600",
      title: "Cost-Effectiveness Study",
      subtitle: "Health-economic evaluation",
      description: "Detailed health economic analysis demonstrating the cost savings and return on investment from implementation of the CareAide platform in chronic disease management.",
      linkText: "View Study",
    //   icon: <BarChart3 className="w-6 h-6 text-white" />
    },
    {
      type: "Case Study",
      typeColor: "bg-indigo-50 text-indigo-600",
      title: "Study Protocol & Design",
      subtitle: "Presented at international medical conferences",
      description: "Research findings presented at major international conferences including findings on cost-effectiveness, quality of life improvements, and condition-specific outcomes.",
      linkText: "View Study",
    //   icon: <FileText className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="max-w-[1176px] mx-auto py-24 px-4 font-sans text-[#0F172A]">
      {/* Header */}
      <h2 className="text-[44px] font-bold text-center mb-20">Peer-Reviewed Publications</h2>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map((pub, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start relative overflow-hidden"
          >
            {/* Soft background pattern/grid common in clinical designs */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-current rounded-full" />
                ))}
              </div>
            </div>

            {/* Header: Icon & Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg">
                {pub.icon}
              </div>
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${pub.typeColor}`}>
                {pub.type}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-1 leading-tight group-hover:text-indigo-700 transition-colors">
              {pub.title}
            </h3>
            <p className="text-xs font-medium text-gray-400 mb-6 uppercase tracking-wide">
              {pub.subtitle}
            </p>
            
            <p className="text-[#64748B] text-xs leading-relaxed mb-8 flex-grow">
              {pub.description}
            </p>

            {/* Action Link */}
            <button className="flex items-center gap-1.5 text-[#2E3A8C] font-bold text-xs hover:underline mt-auto">
              {/* {pub.linkText} <ArrowUpRight className="w-4 h-4" /> */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidencePublications;