import React from "react";
import pdcGraph from "../../../assets/images/PDCgraph.png";
import mmasGraph from "../../../assets/images/MMASgraph.png";
import check from "../../../assets/icons/check-line.png";
import stack from "../../../assets/icons/stack.png";

const populationStats = [
  { label: "Patient Population", value: "1,160" },
  { label: "Control Group", value: "541" },
  { label: "Intervention Group", value: "565" },
];

const keyPoints = [
  "24 percent-point absolute increase in adherence (PDC)",
  "~2X more patients achieving adherent status",
  "Consistent improvement across income groups, including low-income B40 group",
  "World-class results achieved by reducing treatment burden, without increasing patient effort",
];

const EvidenceImprovements = () => {
  return (
    <section className="md:my-16 bg-white md:rounded-[64px] rounded-[32px] py-[100px]">
      <div className="max-w-[1224px] mx-auto">
        {/* 2. Main Dashboard Container */}
        <div className="text-center">
          <h2 className="heading-2">Adherence Improvements</h2>

          <div className="mt-16 border border-borderClr rounded-[32px] md:p-12 p-5 flex flex-col gap-8">
            {/* Population Stats Row */}
            <div className="flex justify-around items-center text-center md:flex-row flex-row md:gap-0 gap-5">
              {populationStats.map((stat, idx) => (
                <div key={idx}>
                  <p className="body-text-1 mb-2">{stat.label}</p>
                  <h3 className="heading-3">{stat.value}</h3>
                </div>
              ))}
            </div>

            {/* Measurement Methods Box */}
            <div className="bg-[#F8FAFC] rounded-3xl md:p-8 p-5 border border-borderClr">
              <h4 className="text-left heading-6">Measurement Methods</h4>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-12 pt-6 text-left">
                <div>
                  <p className="body-text-1 mb-1">
                    PDC (Proportion of Days Covered):
                  </p>
                  <p className="body-text-heading">
                    Record at hospital pharmacy
                  </p>
                </div>
                <div>
                  <p className="body-text-1 mb-1">MMAS-8:</p>
                  <p className="body-text-heading">Questionnaire at hospital</p>
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PDC Chart Card */}
              <div className="bg-[#F8FAFC] text-justify border border-borderClr rounded-[24px] md:p-8 p-5 shadow-sm">
                <h4 className="heading-6">PDC (Proportion of Days Covered)</h4>
                <div className="py-6">
                  <img src={pdcGraph} alt="pdc" />
                </div>

                <p className="p-5 rounded-2xl bg-[#16a34a29] border border-[#16A34A] body-text-1 text-justify">
                  <span className="body-text-1 text-[#16A34A]">
                    +24% absolute increase
                  </span>
                   in adherence (PDC) from baseline to 6 months
                </p>
              </div>

              {/* MMAS-8 Chart Card */}
              <div className="bg-[#F8FAFC] text-justify border border-borderClr rounded-[24px] md:p-8 p-5 shadow-sm">
                <h4 className="heading-6">MMAS-8 Score</h4>
                <div className="py-6">
                  <img src={mmasGraph} alt="mmas" />
                </div>

                <p className="bg-[#1d4ed821] p-5 rounded-2xl border border-[#1D4ED8] body-text-1 text-justify">
                  <span className="body-text-1 text-[#1D4ED8]">
                    +47% improvement
                  </span>
                   from baseline MMAS-8 score
                </p>
              </div>
            </div>

            {/* 3. Dark "Key Points" Footer */}
            <div className="bg-gradient-to-b from-[#253968] to-[#0F172A] rounded-[32px] md:p-12 p-5 text-justify text-white">
              <h3 className="heading-6 mb-8 text-white">Key Points</h3>
              <ul className="space-y-6">
                {keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <img src={check} alt="check" />
                    <p className="body-text-1 text-white">{point}</p>
                  </li>
                ))}
              </ul>

              <div className=" mt-8 pt-8 border-t border-[#111B34] flex md:flex-row flex-col md:items-center items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <img src={stack} alt="stack" />
                </div>
                <div>
                  <h4 className="heading-6 text-white mb-3">
                    CareAide is not just a tracker, it is a Social Adherence
                    Platform.
                  </h4>
                  <p className="body-text-1">
                    When adherence infrastructure is automated and socially
                    reinforced, adherence becomes the default—not the exception.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceImprovements;
