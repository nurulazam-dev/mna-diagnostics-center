/* eslint-disable react/prop-types */
import { BiMenu } from "react-icons/bi";

const Tabs = ({ tab, setTab }) => {
  const activeTabClass = "bg-indigo-100 text-primaryColor";
  const inactiveTabClass = "bg-transparent text-headingColor";

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col bg-white shadow-panelShadow items-center h-max rounded-md p-[30px]">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab == "overview" ? activeTabClass : inactiveTabClass
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab == "appointments" ? activeTabClass : inactiveTabClass
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab == "settings" ? activeTabClass : inactiveTabClass
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button className="text-[16px] leading-7 rounded-md w-full bg-red-600 mt-4 text-white p-3">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
