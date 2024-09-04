import React from "react";
import Funtionalities from "./Functionalities";
import Icon from "./Icon";

function ProfileSection() {
  return (
    <div className="flex items-center justify-between h-full w-full p-2 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex-shrink-0 mr-4">
        <Icon />
      </div>
      <div className="flex-grow">
        <Funtionalities />
      </div>
    </div>
  );
}

export default ProfileSection;
