/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col bg-white shadow-panelShadow items-center h-max rounded-md p-[30px]">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab == "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab == "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab == "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="text-[16px] text-white leading-7 rounded-md w-full bg-[#181A1E] p-3"
          >
            Logout
          </button>
          <button className="text-[16px] leading-7 rounded-md w-full bg-red-600 mt-4 text-white p-3">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
