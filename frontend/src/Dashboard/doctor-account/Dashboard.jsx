import { useState } from "react";
import Error from "../../components/Shared/Error";
import Loading from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");

  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  return (
    <section className="py-2">
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            {/* <Tabs
              className="w-full lg:w-[25%] px-[20px] pb-3 rounded-md shadow-md"
              tab={tab}
              setTab={setTab}
            />
            <div className="lg:w-[">
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

              <div className="mt-4">
                {tab == "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img
                          src={data?.photo ? data?.photo : doctorAvatar}
                          alt=""
                          className="w-full"
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
            </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
