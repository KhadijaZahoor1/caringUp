import React from "react";
import info from "../../../assets/icons/information-fill.png";
import bars from "../../../assets/images/comparisonBars.png";

const tableData = [
  {
    condition: "Hypertension",
    measurement: "SBP (mmHg)",
    cgBase: "142.0",
    cg6m: "147.3",
    igBase: "146.3",
    ig6m: "136.2",
    change: "-10.1 vs +5.3",
    target: "120-129 High-normal",
  },
  {
    condition: "",
    measurement: "DBP (mmHg)",
    cgBase: "75.5",
    cg6m: "78.6",
    igBase: "77.1",
    ig6m: "71.6",
    change: "-5.5 vs +3.1",
    target: "< 80",
  },
  {
    condition: "Cholesterol",
    measurement: "LDL (mmol/L)",
    cgBase: "3.03",
    cg6m: "3.32",
    igBase: "2.65",
    ig6m: "2.52",
    change: "-0.13 vs +0.29",
    target: "< 2.6",
  },
  {
    condition: "Diabetes",
    measurement: "HbA1c (%)",
    cgBase: "8.4",
    cg6m: "8.2",
    igBase: "8.5",
    ig6m: "7.3",
    change: "-1.0 vs -0.2",
    target: "< 7.0%",
  },
  {
    condition: "Asthma",
    measurement: "ACQ-6 score",
    cgBase: "1.45",
    cg6m: "1.35",
    igBase: "1.47",
    ig6m: "1.03",
    change: "-0.44 vs -0.10",
    target: "< 0.75 = Well-controlled",
  },
  {
    condition: "Heart Failure",
    measurement: "NYHA Class",
    cgBase: "1.86",
    cg6m: "1.92",
    igBase: "1.97",
    ig6m: "1.63",
    change: "-0.34 vs +0.02",
    target: "Class I = No limitation",
  },
];

const EvidenceClinicalOutcomes = () => {
  return (
    <div className="max-w-[1176px] mx-auto md:py-[120px] py-20">
      {/* Section Header */}
      <h2 className="heading-2 text-center">Clinical Outcomes</h2>

      <div className="mt-16 flex flex-col gap-8">
        {/* 1. Detailed Table Card */}
        <div className="bg-white border border-borderClr shadow-sm p-8 rounded-3xl">
          <h3 className="heading-6">
            Detailed Clinical Measurements: Baseline vs 6 Months
          </h3>

          <div className="overflow-x-auto py-8">
            <table className="w-full border-collapse text-left evidenceTable">
              <thead className="">
                <tr className="border-b border-borderClr">
                  <th className="py-4 px-2">Condition / Biomarker</th>
                  <th className="py-4 px-2">Measurement</th>
                  <th className="py-4 px-2">CG Baseline</th>
                  <th className="py-4 px-2">CG 6 Months</th>
                  <th className="py-4 px-2">IG Baseline</th>
                  <th className="py-4 px-2">IG 6 Months</th>
                  <th className="py-4 px-2">
                    Change (IG vs CG)
                  </th>
                  <th className="py-4 px-2">Target Range*</th>
                </tr>
              </thead>
              <tbody className="body-text-1">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-borderClr transition-colors"
                  >
                    <td className="py-4 px-2">{row.condition}</td>
                    <td className="py-4 px-2">
                      {row.measurement}
                    </td>
                    <td className="py-4 px-2">{row.cgBase}</td>
                    <td className="py-4 px-2">{row.cg6m}</td>
                    <td className="py-4 px-2">{row.igBase}</td>
                    <td className="py-4 px-2">
                      {row.ig6m}
                    </td>
                    <td className="py-4 px-2">
                      {row.change}
                    </td>
                    <td className="py-4 px-2">
                      {row.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Citations / Info Box */}
          <div className="bg-[#F8FAFC] rounded-3xl p-8 flex items-start gap-6 border border-borderClr">
            <img src={info} alt="info" />
            <div className="">
              <p className="body-text text-primary mb-4">
                *ESC/ESH 2018; MOH Malaysia HTN CPG 2023; AHA/ACC 2018 Lipid
                Guideline; ADA 2024; WHO 2020 Diagnostic Criteria; GINA 2023;
                ACC/AHA 2022 HF Guideline.
              </p>
              <p className="body-text">
                <span className="text-primary body-text">Table Notes:</span> CG
                = Control Group, IG = Intervention Group. All measurements taken
                at baseline and 6-month follow-up. Lower scores indicate better
                outcomes for all metrics except NYHA class where lower is
                better.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Chart Section */}
        <div className="bg-white border border-borderClr shadow-sm p-8 rounded-3xl">
          <h3 className="heading-6">Change from Baseline Comparison</h3>

          {/* Placeholder for Diverging Bar Chart */}

          <div className="py-6">
            <img src={bars} alt="bars" />
          </div>

          {/* Summary Footer Pills */}
          <div className="flex md:flex-row flex-col gap-6">
            <div className="bg-[#16a34a26] border border-[#16A34A] rounded-2xl py-5 px-6">
              <h4 className="body-text-1 font-medium text-primary mb-2">
                Statistical Significance
              </h4>
              <p className="body-text-1 ">
                All primary endpoints achieved statistical significance (p &lt;
                0.05) with clinically meaningful effect sizes.
              </p>
            </div>

            <div className="bg-[#16a34a26] border border-[#16A34A] rounded-2xl py-5 px-6">
              <h4 className="body-text-1 font-medium text-primary mb-2">
                Global Benchmark
              </h4>
              <p className="body-text-1 ">
                The HbA1c reduction of -1.0% absolute is among the highest
                documented from any mHealth intervention globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceClinicalOutcomes;
