import { useState } from "react";
import aboutUsCover from "../assets/images/about/aboutUs-cover.png";
import AboutChairman from "../components/AboutUs/AboutChairman";
import AboutDC from "../components/AboutUs/AboutDC";
import AboutManagementTeam from "../components/AboutUs/AboutManagementTeam";
import AboutMD from "../components/AboutUs/AboutMD";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("aboutDC");

  const activeTabClass = `bg-green-600 text-white py-2 px-4 lg:mx-5 mx-2 rounded`;
  const inActiveTabClass = `bg-gray-200 py-2 px-4 lg:mx-5 mx-2 rounded`;

  // Define tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "aboutDC":
        return <AboutDC />;
      case "aboutChairman":
        return <AboutChairman />;
      case "aboutMD":
        return <AboutMD />;
      case "aboutManagementTeam":
        return <AboutManagementTeam />;
      default:
        return <AboutDC />;
    }
  };

  return (
    <section className="container">
      <div className="">
        <div className="my-2">
          <img src={aboutUsCover} alt="About Us" />
        </div>
        <h1 className="heading text-center">About Us</h1>
        <div className="w-full lg:w-[90%] my-5 mx-auto">
          {/* Tab Bar */}
          <div className="flex justify-center mb-4 bg-gray-100 py-2 rounded shadow-lg text-gray-800 font-bold text-[16px]">
            <button
              className={
                activeTab === "aboutDC" ? activeTabClass : inActiveTabClass
              }
              onClick={() => setActiveTab("aboutDC")}
            >
              D/C
            </button>

            <button
              className={
                activeTab === "aboutChairman"
                  ? activeTabClass
                  : inActiveTabClass
              }
              onClick={() => setActiveTab("aboutChairman")}
            >
              Chairman
            </button>
            <button
              className={
                activeTab === "aboutMD" ? activeTabClass : inActiveTabClass
              }
              onClick={() => setActiveTab("aboutMD")}
            >
              M/D
            </button>
            <button
              className={
                activeTab === "aboutManagementTeam"
                  ? activeTabClass
                  : inActiveTabClass
              }
              onClick={() => setActiveTab("aboutManagementTeam")}
            >
              M/T
            </button>
          </div>

          {/* Tab Content/Layout */}
          <section className="px-2">{renderTabContent()}</section>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
