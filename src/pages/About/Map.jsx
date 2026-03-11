import React from "react";
import map from "../../assets/images/Isolation_Mode.png";

const location = [
  {
    name: "Head Office: Singapore",
  },
  {
    name: "Operations & Research: Malaysia",
  },
  {
    name: "Head OffActive: SE Asia, Middle East, South Asia",
  },
  {
    name: "Expanding: Africa & LATAM",
  },
  {
    name: "Supporting patients globally",
  },
];

const Map = () => {
  return (
    <div className="md:py-16 md:px-0 py-20 flex flex-col items-center justify-center">
      <div className="text-center md:max-w-[936px] w-full md:px-0 px-5">
        <h5 className="body-text text-primary">OUR PHILOSOPHY</h5>
        <h2 className="heading-2 my-6">Rooted in Asia. Growing Globally.</h2>
      </div>
      {/*  */}
      <div className="my-16">
        <img src={map} alt="Map" />
      </div>
      {/*  */}

      <div className="flex flex-wrap items-center justify-center gap-3 max-w-[950px] mx-auto">
        {location.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-baseline gap-3 py-2 px-5 rounded-full bg-[#2563EB29]"
          >
            {/* Small blue dot from design */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div>

            {/* Location Text */}
            <p className="body-text-1 md:text-sm text-xs text-[#0F172A] whitespace-nowrap">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
