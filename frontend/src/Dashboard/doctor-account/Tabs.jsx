/* eslint-disable react/prop-types */
import { BiSolidUserDetail } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";

const Tabs = ({ tab, setTab }) => {
  const activeTabClass = "bg-indigo-100 text-primaryColor";
  const inactiveTabClass = "bg-transparent text-headingColor";

  return (
    <section className=" lg:flex flex-col bg-white shadow-panelShadow items-center h-max rounded-md p-[30px]">
      <button
        onClick={() => setTab("overview")}
        className={`${
          tab == "overview" ? activeTabClass : inactiveTabClass
        } w-full btn mt-0 rounded-md flex items-center`}
      >
        <BiSolidUserDetail className="w-7 h-7" />
        <p className="ml-3">Overview</p>
      </button>
      <button
        onClick={() => setTab("appointments")}
        className={`${
          tab == "appointments" ? activeTabClass : inactiveTabClass
        } w-full btn mt-0 rounded-md flex items-center`}
      >
        <RiPlayListAddFill className="w-7 h-7" />
        <p className="ml-3">Appointments</p>
      </button>
      <button
        onClick={() => setTab("settings")}
        className={`${
          tab == "settings" ? activeTabClass : inactiveTabClass
        } w-full btn mt-0 rounded-md flex items-center`}
      >
        <FaUserEdit className="w-7 h-7" />
        <p className="ml-3">Profile</p>
      </button>

      <div className="mt-[100px] w-full">
        <button className="text-[16px] leading-7 rounded-md w-full bg-red-600 mt-4 text-white p-3">
          Delete Account
        </button>
      </div>
    </section>
  );
};

export default Tabs;
