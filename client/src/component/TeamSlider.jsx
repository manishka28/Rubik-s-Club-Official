import React from "react";

const TeamSlider = ({ options, onSelect, selectedOption }) => {
  return (
    <div className="flex flex-wrap justify-center mb-5">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`mx-2 px-6 py-2 text-white rounded-full font-semibold bg-slate-800 border m-4
                ${
                  selectedOption === index
                    ? " border-4 border-white shadow-lg"
                    : ""
                }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TeamSlider;