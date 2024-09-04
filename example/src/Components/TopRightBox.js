import React from "react";
import ProfileSection from "../Widgets/Profile_Section/profileSection";

function TopRightBox() {
  return (
    <div className="h-1/2 w-full bg-gray-800 p-4 flex items-center justify-center">
      {/* <div className="w-full h-full bg-gray-800 p-4 rounded-lg"> */}
        <ProfileSection />
      {/* </div> */}
    </div>
  );
}

export default TopRightBox;

