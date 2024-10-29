import { useState } from "react";
import { CgDanger } from "react-icons/cg";
import starIcon from "../../assets/images/icons/Star.png";
import doctorAvatar from "../../assets/images/icons/avatar-icon.png";
import DoctorAbout from "../../components/DoctorDetails/DoctorAbout";
import Error from "../../components/Shared/Error";
import Loading from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import Appointments from "./Appointments";
import Profile from "./Profile";

import { BiSolidUserDetail } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");

  const activeTabClass = "bg-indigo-100 text-primaryColor";
  const inactiveTabClass = "bg-transparent text-headingColor";

  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  return (
    <section className="max-w-[1220px] px-5 mx-auto my-6">
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="flex w-full mx-auto">
          {/* =======================
                 left side/Tabs
          =========================== */}
          <div className="w-[13%] lg:w-[25%] lg:px-[20px] px-1 pb-3 rounded-md shadow-md bg-white h-max lg:mr-0 mr-[6px]">
            <button
              onClick={() => setTab("overview")}
              className={`${
                tab == "overview" ? activeTabClass : inactiveTabClass
              } w-full mt-0 rounded-md flex items-center justify-center lg:px-0 px-1`}
            >
              <BiSolidUserDetail className="w-7 h-7" />
              <p className="ml-3 hidden lg:block">Overview</p>
            </button>
            <button
              onClick={() => setTab("appointments")}
              className={`${
                tab == "appointments" ? activeTabClass : inactiveTabClass
              } w-full lg:mt-0 mt-2 rounded-md flex items-center justify-center lg:px-0 px-1`}
            >
              <RiPlayListAddFill className="w-7 h-7" />
              <p className="ml-3 hidden lg:block">Appointments</p>
            </button>
            <button
              onClick={() => setTab("settings")}
              className={`${
                tab == "settings" ? activeTabClass : inactiveTabClass
              } w-full lg:mt-0 mt-2 rounded-md flex items-center justify-center lg:px-0 px-1`}
            >
              <FaUserEdit className="w-7 h-7" />
              <p className="ml-3 hidden lg:block">Profile</p>
            </button>

            <div className="lg:block hidden mt-[100px] w-full">
              <button className="lg:text-[16px] text-[14px] rounded-md w-full bg-red-600 mt-4 text-white lg:p-3 p-1">
                Delete Account
              </button>
            </div>
          </div>

          {/* =======================
           right side/details layout
          =========================== */}
          <div className="w-[87%] lg:w-[75%] lg:ml-8 rounded-md lg:rounded-none shadow-md lg:shadow-none ">
            {data.isApproved == "pending" && (
              <div className="flex justify-center items-center py-3 my-4 text-white bg-red-400 rounded-lg animate-bounce">
                <CgDanger className="w-5 h-5" />

                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                  To get approval please complete your profile. We&apos;ll
                  review manually and approve within 3days.
                </div>
              </div>
            )}

            <div className="lg:px-0 px-[10px]">
              {tab == "overview" && (
                <div>
                  <div className="lg:flex items-center gap-4 lg:mb-3">
                    <figure className="lg:max-w-[200px] max-w-[150px] lg:max-h-[200px] max-h-[150px]">
                      <img
                        src={data?.photo ? data?.photo : doctorAvatar}
                        alt=""
                        className="w-full lg:rounded-none rounded-full"
                      />
                    </figure>

                    <div>
                      <h3 className="font-bold text-[22px] text-headingColor">
                        {data.name}
                      </h3>
                      <p className="text-textColor font-semibold text-[12px] lg:text-[14px]">
                        {data.specialization ? (
                          data.specialization
                        ) : (
                          <p className="text-red-600 animate-pulse">
                            Specialization profile isn&apos;t updated. Please
                            update your Specialization profile.
                          </p>
                        )}
                      </p>

                      <div className="flex items-center gap-[6px] mt-[6px]">
                        <span
                          className="flex items-center gap-[6px] text-headingColor font-semibold leading-5 text-[14px] lg:leading-6 lg:text-[16px] 
                          "
                        >
                          <img src={starIcon} alt="" /> {data.averageRating}
                        </span>
                        <span
                          className="text-textColor font-semibold leading-5 text-[14px] lg:leading-6 lg:text-[16px] 
                          "
                        >
                          ({data.totalRating})
                        </span>
                      </div>
                      <p className="text_para font-[15px] lg:max-w-[390px] text-justify leading-6">
                        {data?.bio}
                      </p>
                    </div>
                  </div>
                  <DoctorAbout
                    name={data?.name}
                    about={data?.about}
                    qualifications={data?.qualifications}
                    experiences={data?.experiences}
                  />
                </div>
              )}
              {tab == "appointments" && (
                <Appointments appointments={data.appointments} />
              )}
              {tab == "settings" && <Profile doctorData={data} />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
