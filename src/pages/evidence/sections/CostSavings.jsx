import React, { useState } from "react";
import stack from "../../../assets/icons/stack.png";
import cost from "../../../assets/images/evidenceCost.png";
import avoidanceCost from "../../../assets/images/evidenceCost2.png";

const directSavingsData = [
  {
    disease: "Hypertension",
    ig: "220",
    cg: "250",
    delta: "-30",
    pdc: "98% vs. 85%",
  },
  {
    disease: "Diabetes",
    ig: "310",
    cg: "340",
    delta: "-30",
    pdc: "100% vs. 67%",
  },
  { disease: "Asthma", ig: "180", cg: "210", delta: "-30", pdc: "95% vs. 50%" },
  {
    disease: "Heart Failure",
    ig: "400",
    cg: "420",
    delta: "-20",
    pdc: "93% vs. 83%",
  },
];

const complicationData = [
  { disease: "Hypertension", driver: "Fewer add-on drugs", savings: "350" },
  {
    disease: "Diabetes",
    driver: "Delayed Insulin initiation",
    savings: "1,440",
  },
  { disease: "Asthma", driver: "Reduced SABA + ER visits", savings: "215" },
  {
    disease: "Heart Failure",
    driver: "Fewer adjustments + admissions",
    savings: "1,100 (+ RM 1,500 risk)",
  },
];

const CostSavings = () => {
  const [activeTab, setActiveTab] = useState("direct"); // 'direct' or 'avoidance'

  return (
    <section className="md:rounded-[64px] rounded-[32px] bg-white my-[120px]">
      <div className="max-w-[1224px] mx-auto py-24">
        {/* 1. Header & Summary Cards */}
        <h2 className="heading-2 text-center mb-16">Healthcare Cost Savings</h2>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 border border-borderClr shadow-sm">
              <p className="body-text-1">Direct Medication Saving</p>
              <h3 className="heading-2 my-1">RM 360K</h3>
              <p className="body-text-1">
                Per 1,000 patients annually through optimized medication use and
                better adherence
              </p>
            </div>
            <div className="rounded-3xl p-8 border border-borderClr shadow-sm">
              <p className="body-text-1">Medication Adherence (6 months)</p>
              <h3 className="heading-2 my-1">RM 3M+</h3>
              <p className="body-text-1">
                Per 1,000 patients annually by preventing disease progression
                and complications
              </p>
            </div>
          </div>

          {/* 2. Main Tabbed Dashboard */}
          <div className="border border-borderClr shadow-sm md:p-12 p-5 rounded-[32px]">
            {/* Custom Tab Switcher */}
            <div className="flex">
              <button
                onClick={() => setActiveTab("direct")}
                className={`flex-1 py-4 text-center rounded-t-[24px] transition-all ${activeTab === "direct" ? " bg-[#1b447d14] border-b-4 border-b-[#1B447D]" : "border-borderClr border-b-4"}`}
              >
                <span
                  className={`body-text-heading ${activeTab === "direct" ? "text-[#1B447D]" : ""} `}
                >
                  {" "}
                  Direct Medication Savings{" "}
                </span>{" "}
                <br />
                <span className="body-text-1">(Monthly consumption data)</span>
              </button>
              <button
                onClick={() => setActiveTab("avoidance")}
                className={`flex-1 py-4 text-center rounded-t-[24px] transition-all ${activeTab === "avoidance" ? " bg-[#1b447d14] border-b-4 border-b-[#1B447D]" : "border-borderClr border-b-4"}`}
              >
                <span
                  className={`body-text-heading ${activeTab === "avoidance" ? "text-[#1B447D]" : ""} `}
                >
                  {" "}
                  Complication Avoidance Savings{" "}
                </span>{" "}
                <br />
                <span className="body-text-1">(Annual cost avoided)</span>
              </button>
            </div>

            <div className="pt-12">
              <h4 className="text-center heading-6">
                {activeTab === "direct"
                  ? "IG consume less medicine (avg. per month savings)"
                  : "Medicine cost savings per year by avoiding complications"}
              </h4>

              {/* Extrapolation Banner */}
              <div className="bg-[#F1F5F9] rounded-2xl py-6 text-center my-8">
                <p className="body-text-heading mb-6">
                  Extrapolate to 1K patients/year
                </p>
                {activeTab === "direct" ? (
                  <p className="body-text">RM 360K/year</p>
                ) : (
                  <div className="flex md:flex-row flex-col bg-gray-100 rounded-md overflow-hidden text-sm text-gray-700">
                    <div className="flex-1 text-center body-text text-primary">
                      RM 360K/year
                    </div>

                    <div className="hidden md:block w-px bg-[#94A3B8]" />

                    <div className="flex-1 text-center body-text text-primary">
                      RM 1.4M/year
                    </div>

                    <div className="hidden md:block w-px bg-[#94A3B8]" />

                    <div className="flex-1 text-center body-text text-primary">
                      RM 215K/year
                    </div>

                    <div className="hidden md:block w-px bg-[#94A3B8]" />

                    <div className="flex-1 text-center body-text text-primary">
                      RM 1.1M/year (~6M/year)
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#F1F5F9] rounded-2xl py-6 text-center mb-8">
                <>
                  <p className="body-text-heading mb-3">
                    {activeTab === "direct"
                      ? "Cost Savings Comparison (RM/month)"
                      : "Annual Cost Avoided per Patient (RM)"}
                  </p>

                  <div className="max-w-[1064px] mx-auto">
                    <img
                      src={activeTab === "direct" ? cost : avoidanceCost}
                      alt={
                        activeTab === "direct"
                          ? "Direct Cost"
                          : "Avoidance Cost"
                      }
                      className="w-full"
                    />
                    <span className="body-text-1 py-4">
                      {activeTab === "avoidance" ? "Cost Avoided (RM)" : ""}
                    </span>
                  </div>
                </>
              </div>

              {/* Conditional Table Rendering */}
              <div className="overflow-x-auto">
                <table className="w-full text-left evidenceTable">
                  <thead>
                    <tr className="border-b border-borderClr body-text-1">
                      <th className="py-4 px-3">Disease</th>

                      <th
                        className="py-4 px-3"
                        style={{ backgroundColor: "#E9EDF7" }}
                      >
                        {activeTab === "direct"
                          ? "IG Cost (RM)"
                          : "Key Savings Driver"}
                      </th>

                      <th
                        className="py-4 px-3"
                        style={{ backgroundColor: "#F1F3F7" }}
                      >
                        {activeTab === "direct"
                          ? "CG Cost (RM)"
                          : "Cost Avoided/Patient/Year (RM)"}
                      </th>

                      {activeTab === "direct" && (
                        <th className="py-4 px-3">Δ Cost (RM)</th>
                      )}

                      {activeTab === "direct" && (
                        <th className="py-4 px-3">PDC Impact</th>
                      )}
                    </tr>
                  </thead>

                  <tbody className="text-sm">
                    {(activeTab === "direct"
                      ? directSavingsData
                      : complicationData
                    ).map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-50 hover:bg-gray-50/30"
                      >
                        <td className="py-4 px-3 font-bold">{row.disease}</td>

                        <td
                          className="py-4 px-3"
                          style={{ backgroundColor: "#E9EDF7" }}
                        >
                          {activeTab === "direct" ? row.ig : row.driver}
                        </td>

                        <td
                          className="py-4 px-3"
                          style={{ backgroundColor: "#F1F3F7" }}
                        >
                          {activeTab === "direct" ? row.cg : row.savings}
                        </td>

                        {activeTab === "direct" && (
                          <td className="py-4 px-3 font-bold text-green-600">
                            {row.delta}
                          </td>
                        )}

                        {activeTab === "direct" && (
                          <td className="py-4 px-3 text-[11px] text-gray-400">
                            {row.pdc}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3. Important Note Footer */}
          <div className="flex items-center gap-6 border border-borderClr rounded-3xl md:p-8 p-5 bg-[#e0e7ffdb]">
            <div className="w-24 rounded-2xl items-center justify-center">
              <img src={stack} alt="stack" className="w-full" />
            </div>
            <div>
              <h4 className="heading-6 mb-3">
                Important note on cost interpretation
              </h4>
              <p className="body-text-1">
                Cost savings reported in this study reflect the Malaysian public
                health system, where many services are heavily subsidised or
                free at the point of care. Actual savings for your system may
                vary depending on funding model, tariffs, and patient mix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSavings;
