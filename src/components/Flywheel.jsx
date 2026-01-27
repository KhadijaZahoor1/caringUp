import React from "react";

const Flywheel = () => {
  return (
    <div className="w-full bg-[#F8FBFF] flex items-center justify-center p-8 font-sans">
      <div className="max-w-[1100px] w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[44px] font-bold text-[#161B2D] tracking-tight">
            The Flywheel to Sustainable Cost Containment
          </h1>
          <p className="text-[#64748B] text-xl mt-2">
            A proven cycle that reshapes chronic care economics
          </p>
        </div>

        <div className="relative w-full flex items-center justify-center">
          {/* Left Side Content */}
          <div className="absolute left-0 w-[300px] flex flex-col gap-[180px] text-right">
            <div>
              <div className="inline-block bg-[#1D4477] text-white px-10 py-3 rounded-full text-xl font-bold mb-4">
                Predict
              </div>
              <p className="text-[#475569] text-lg leading-snug">
                Identify rising-risk members and treatment gaps through current
                portfolio intelligence.
              </p>
            </div>
            <div>
              <div className="inline-block bg-[#32A0D4] text-white px-10 py-3 rounded-full text-xl font-bold mb-4">
                Sustain
              </div>
              <p className="text-[#475569] text-lg leading-snug">
                Maintain a lower cost baseline with predictable utilization and
                a more stable loss ratio.
              </p>
            </div>
          </div>

          {/* Center Flywheel */}
          <div className="relative w-[520px] h-[520px]">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <linearGradient id="fadeYellow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F4B942" />
                  <stop offset="100%" stopColor="#F4B942" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="fadeGreen" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#76C052" />
                  <stop offset="100%" stopColor="#76C052" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="fadeLightBlue" x1="1" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#32A0D4" />
                  <stop offset="100%" stopColor="#32A0D4" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Segment 1: Predict (Dark Blue) */}
              <path
                d="M 200,40 A 160,160 0 0 1 345,115 L 375,95 L 340,155 L 285,130 L 315,110 A 120,120 0 0 0 200,80 Z"
                fill="#1D4477"
              />
              <text
                x="328"
                y="125"
                fill="white"
                textAnchor="middle"
                className="text-3xl font-bold italic"
              >
                1
              </text>

              {/* Segment 2: Prevent (Yellow) */}
              <path
                d="M 360,200 A 160,160 0 0 1 285,345 L 305,375 L 245,340 L 270,285 L 290,315 A 120,120 0 0 0 320,200 Z"
                fill="url(#fadeYellow)"
              />
              <text
                x="275"
                y="335"
                fill="white"
                textAnchor="middle"
                className="text-3xl font-bold italic"
              >
                2
              </text>

              {/* Segment 3: Control (Green) */}
              <path
                d="M 200,360 A 160,160 0 0 1 55,285 L 25,305 L 60,245 L 115,270 L 85,290 A 120,120 0 0 0 200,320 Z"
                fill="url(#fadeGreen)"
              />
              <text
                x="75"
                y="278"
                fill="white"
                textAnchor="middle"
                className="text-3xl font-bold italic"
              >
                3
              </text>

              {/* Segment 4: Sustain (Light Blue) */}
              <path
                d="M 40,200 A 160,160 0 0 1 115,55 L 95,25 L 155,60 L 130,115 L 110,85 A 120,120 0 0 0 80,200 Z"
                fill="url(#fadeLightBlue)"
              />
              <text
                x="122"
                y="75"
                fill="white"
                textAnchor="middle"
                className="text-3xl font-bold italic"
              >
                4
              </text>

              {/* Center Labels */}
              <text
                x="200"
                y="195"
                textAnchor="middle"
                className="text-2xl font-bold fill-[#161B2D]"
              >
                Cost
              </text>
              <text
                x="200"
                y="230"
                textAnchor="middle"
                className="text-2xl font-bold fill-[#161B2D]"
              >
                Containment
              </text>
            </svg>
          </div>

          {/* Right Side Content */}
          <div className="absolute right-0 w-[300px] flex flex-col gap-[180px] text-left">
            <div>
              <div className="inline-block bg-[#F4B942] text-white px-10 py-3 rounded-full text-xl font-bold mb-4">
                Prevent
              </div>
              <p className="text-[#475569] text-lg leading-snug">
                Deploy timely, targeted interventions before deterioration
                escalates into cost.
              </p>
            </div>
            <div>
              <div className="inline-block bg-[#76C052] text-white px-10 py-3 rounded-full text-xl font-bold mb-4">
                Control
              </div>
              <p className="text-[#475569] text-lg leading-snug">
                Achieve consistent adherence and stabilized outcomes at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flywheel;
