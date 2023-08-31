import React, { useState } from "react";

type CityInfoProps = {
  city: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const CityInfo: React.FC<CityInfoProps> = ({ city, selected, setSelected }) => {
  // const [selected, setSelected] = useState("meetups");

  // Placeholder SVG icon
  const SvgIcon = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M12 5l7 7-7 7"
      ></path>
    </svg>
  );

  return (
    <div className="m-10  border border-black rounded-xl overflow-hidden p-10 lg:w-fit w-3/4 mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-4 gap-4 justify-between ">
        {[
          // "all",
          "meetups",
          "members",
          "questions",
          "proposals",
          "swaps",
          "media",
          "avatars",
        ].map((btn) => (
          <button
            key={btn}
            className={`px-3 py-2 flex items-center space-x-4 flex-col rounded-md border border-black ${
              selected === btn ? "bg-m-gold" : ""
            }`}
            onClick={() => setSelected(btn)}
          >
            {/* <SvgIcon /> */}
            <span className="capitalize w-20">{btn}</span>
          </button>
        ))}
      </div>

      {/* <p className="mt-4 text-lg text-center">{selected}</p> */}
    </div>
  );
};

export default CityInfo;
