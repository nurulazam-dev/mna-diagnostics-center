import { useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/icons/Star.png";
import DoctorAbout from "../../components/DoctorDetails/DoctorAbout";
import Feedback from "../../components/DoctorDetails/Feedback";
import SidePanel from "../../components/DoctorDetails/SidePanel";
import Error from "../../components/Shared/Error";
import Loading from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    bio,
    reviews,
    totalRating,
    specialization,
    ticketPrice,
    qualifications,
    experiences,
    timeSlots,
    about,
    averageRating,
    photo,
  } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto my-5">
        {loading && <Loading />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} alt="" className="w-full" />
                </figure>
                <div className="">
                  {/* ================ */}
                  <h3 className="font-bold text-[22px] text-headingColor">
                    {name}
                  </h3>
                  <p className="text-textColor font-semibold text-[12px] lg:text-[14px]">
                    {specialization}
                  </p>
                  {/* ================ */}

                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px]  leading-5 lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" /> {averageRating}
                    </span>
                    <span className="text-[14px] lg:text-[16px]  leading-5 lg:leading-7 font-[400] text-headingColor">
                      ({totalRating})
                    </span>
                  </div>
                  <p className="text_para text-[14px] md:text-[15px] leading-6 lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>

            <div>
              <SidePanel
                doctorId={doctor._id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
