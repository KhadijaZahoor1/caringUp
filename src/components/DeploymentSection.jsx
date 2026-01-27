import React from "react";
import homePricing from "../assets/images/homePricing.png";
import checkline from '../assets/icons/check-line.png'

// const DeploymentSection = () => {
//   const enterpriseFeatures = [
//     "No complex integrations",
//     "No data setup",
//     "No IT headaches",
//   ];

//   const flexibleFeatures = [
//     { label: "Active Patient", desc: "Pay per active or monitored patient" },
//     { label: "Per-Member", desc: "Fixed cost; per employee or policyholder" },
//     {
//       label: "White-label CareAide",
//       desc: "for large-volume brand conscious customers",
//     },
//     { label: "Dedicated Instance", desc: "Your private platform, your way." },
//   ];

//   return (
//     <section className="max-w-[1176px] mx-auto py-[120px] flex flex-col items-center justify-center">
//       {/* Section Title */}
//       <h2 className="text-[48px] font-bold text-center tracking-tight">
//         Deployment & Pricing Structure
//       </h2>
//       {/* Main Container constrained to design width */}
//       <div className="pt-16">
//         <div className="bg-white rounded-[64px] border border-borderClr p-16">
//           <div className="w-3/5">
//             <div
//               className=""
//               style={{
//                 // Use your dark blue wave image asset here homePricing
//                 backgroundImage: `url(${homePricing})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="">
//                 <h3 className="text-[42px] font-bold mb-2 tracking-tight">
//                   Enterprise
//                 </h3>
//                 <p className="text-gray-200 text-[17px] mb-10 leading-relaxed font-medium">
//                   Onboard your first patient in minutes
//                 </p>

//                 <ul className="space-y-4">
//                   {enterpriseFeatures.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-3">
//                       <div className="flex-shrink-0">
//                         <svg
//                           className="w-5 h-5 text-green-400"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="3"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-[17px] font-semibold tracking-wide">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="w-3/5">
//             <div>
//               <h3 className="text-[32px] font-bold text-slate-900 mb-2">
//                 Flexible
//               </h3>
//               <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
//                 For most businesses that want to optimize web queries
//               </p>

//               <ul className="space-y-5">
//                 {flexibleFeatures.map((item, idx) => (
//                   <li key={idx} className="flex items-start gap-3">
//                     <div className="mt-1 flex-shrink-0">
//                       <svg
//                         className="w-5 h-5 text-green-500"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="3"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <p className="text-[15px] text-slate-700 leading-snug">
//                       <span className="font-bold">{item.label} — </span>
//                       <span className="text-gray-500">{item.desc}</span>
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DeploymentSection;

const DeploymentSection = () => {
  const enterpriseFeatures = [
    "No complex integrations",
    "No data setup",
    "No IT headaches",
  ];

  const flexibleFeatures = [
    { label: "Active Patient", desc: "Pay per active or monitored patient" },
    { label: "Per-Member", desc: "Fixed cost; per employee or policyholder" },
    {
      label: "White-label CareAide",
      desc: "for large-volume brand conscious customers",
    },
    { label: "Dedicated Instance", desc: "Your private platform, your way." },
  ];

  return (
    <section className="max-w-[1176px] mx-auto py-[120px] px-6 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-[56px] font-bold text-center tracking-tight text-[#0f172a]">
        Deployment & Pricing Structure
      </h2>

      {/* Main Container */}
      <div className="w-full bg-white rounded-[64px] border border-borderClr px-16 pb-8 mt-36">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Left Side: Enterprise Card */}
          <div
            className="w-full md:w-1/2 rounded-[64px] bottom-16 left-4 flex flex-col justify-center p-12 text-white relative"
            style={{
              backgroundImage: `url(${homePricing})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-bold tracking-tight">
                Enterprise-ready care management—deployable in hours
              </h3>
              <p className="text-gray-100 text-sm pt-7 pb-8 leading-relaxed opacity-90">
                No Complex Integrations. No Data Set Up. No IT Headaches
              </p>

              <ul className="space-y-2">
                {enterpriseFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <img src={checkline} />
                    </div>
                    <span className="text-[18px] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Flexible List */}
          <div className="w-full md:w-1/2 pt-12">
            <h3 className="text-[42px] font-bold text-[#0f172a] mb-1 tracking-tight">
              Flexible
            </h3>
            <p className="text-gray-500 text-[14px] mb-8 leading-relaxed max-w-[400px]">
              For most businesses that want to optimize healthcare delivery
            </p>

            <ul className="space-y-2">
              {flexibleFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img src={checkline} />
                  </div>
                  <div className="text-[14px] leading-snug">
                    <span className="font-bold text-[#1e293b]">
                      {item.label} —{" "}
                    </span>
                    <span className="text-gray-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
