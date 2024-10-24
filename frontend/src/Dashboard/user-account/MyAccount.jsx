import { useState } from "react";
import userAvatar from "../../assets/images/icons/patient-avatar.png";
import Error from "../../components/Shared/Error";
import Loading from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import MyBookings from "./MyBookings";
import Profile from "./Profile";

const MyAccount = () => {
  const [tab, setTab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  return (
    <section className="max-w-[1220px] px-5 mx-auto my-6">
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        // <div className="grid md:grid-cols-3 gap-5">
        <div className="lg:flex w-full mx-auto">
          {/* ===left-side part=== */}
          {/* <div className="pb-[50px] px-[20px] rounded-md shadow-md border border-green-700"> */}
          <div className="w-full lg:w-[25%] px-[20px] pb-3 rounded-md shadow-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-violet-700">
                <img
                  src={userData?.photo ? userData?.photo : userAvatar}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </figure>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                {userData?.name}
              </h3>
              <p className="text-[15px] leading-6 text-textColor font-medium">
                {userData?.email}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-medium">
                {userData?.phone}
              </p>

              <p className="text-[15px] leading-6 text-textColor font-medium">
                Blood Group:{" "}
                <span className="text-red-700 font-bold ml-2">
                  {userData?.bloodGroup ? userData.bloodGroup : "Not updated"}
                </span>
              </p>
              <p className="text-[15px] leading-6 text-textColor font-medium">
                Gender: {userData?.gender}
              </p>
            </div>

            <div className="mt-[50px] md:mt-[100px]">
              <button className="text-[16px] leading-7 rounded-md w-full bg-red-600 mt-4 text-white p-3">
                Delete Account
              </button>
            </div>
          </div>

          {/* ===Right-side part=== */}
          {/* <div className="md:col-span-2 md:px-[10px] border border-red-700"> */}
          <div className="w-full lg:w-[75%] lg:px-[10px] px-3 lg:py-0 py-3 lg:ml-8 lg:mt-0 mt-5 rounded-md lg:rounded-none shadow-md lg:shadow-none">
            <div>
              <button
                onClick={() => setTab("bookings")}
                className={`${
                  tab == "bookings" && "bg-green-600 text-white"
                } mr-5 customBtn`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`${
                  tab == "settings" && "bg-green-600 text-white"
                } customBtn`}
              >
                Profile Settings
              </button>
            </div>

            {/* ===active tab show_details=== */}
            {tab == "bookings" && <MyBookings />}
            {tab == "settings" && <Profile user={userData} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default MyAccount;
