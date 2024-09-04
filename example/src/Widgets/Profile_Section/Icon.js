import React from "react";
import questionMarkIcon from "./question_mark.png";
import sixGridIcon from "./six_grid.png";

function Icon() {
  return (
    <div className="flex flex-col items-center justify-between h-full py-4">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-700">
        <img
          src={questionMarkIcon}
          alt="Help"
          className="w-8 h-8"
        />
      </div>
      <div className="flex items-center justify-center w-12 h-12 mt-4 rounded-lg bg-gray-700">
        <img
          src={sixGridIcon}
          alt="Menu"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}

export default Icon;
