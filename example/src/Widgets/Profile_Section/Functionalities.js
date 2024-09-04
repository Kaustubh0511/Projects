import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Recommended from "./Recommended";

function Funtionalities() {
  const [activeTab, setActiveTab] = useState("AboutMe");

  const renderContent = () => {
    switch (activeTab) {
      case "AboutMe":
        return <AboutMe />;
      case "Experiences":
        return <Experiences />;
      case "Recommended":
        return <Recommended />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="bg-gray-800 p-4 flex flex-col justify-center items-center">
      {/* Tabs Section - Fixed Navbar */}
      <div className="bg-gray-900 rounded-lg flex space-x-4 p-2 w-full max-w-md justify-between fixed top-0 z-10">
        <button
          className={`px-2 py-2 rounded-lg focus:outline-none ${
            activeTab === "AboutMe" ? "bg-gray-700 text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("AboutMe")}
        >
          About Me
        </button>
        <button
          className={`px-4 py-2 rounded-lg focus:outline-none ${
            activeTab === "Experiences"
              ? "bg-gray-700 text-white"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("Experiences")}
        >
          Experiences
        </button>
        <button
          className={`px-4 py-2 rounded-lg focus:outline-none ${
            activeTab === "Recommended"
              ? "bg-gray-700 text-white"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("Recommended")}
        >
          Recommended
        </button>
      </div>

      {/* Content Section - Scrollable with Custom Scrollbar */}
      <div className="bg-gray-700 rounded-lg shadow-lg p-6 mt-auto w-full max-w-md text-white overflow-y-auto h-80 custom-scrollbar">
        {renderContent()}
      </div>
    </div>
  );
};

export default Funtionalities;
