/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/formatDate";

const DoctorAbout = ({ about, qualifications, experiences }) => {
  return (
    <section className="mb-10">
      <div className="">
        <p className="text_para text-[14px] lg:text-[16px]">
          {about ? (
            about
          ) : (
            <p className="text-red-600 animate-pulse">
              Bio/About profile isn&apos;t updated. Please update your bio/about
              profile.
            </p>
          )}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[18px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          {/* {qualifications?.length == 0 && (
            <h2 className="text-red-600 animate-pulse">
              Education profile isn&apos;t updated. Please update your Education
              profile.
            </h2>
          )} */}
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate)} -{" "}
                  {formatDate(item.endingDate)}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {item.degree}
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[18px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        {/* {experiences.length == 0 && (
          <h2 className="text-red-600 animate-pulse">
            Experience profile isn&apos;t updated. Please update your experience
            profile.
          </h2>
        )} */}
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {experiences?.map((item, index) => (
            <li key={index} className="p-4 rounded bg-[#fff9ea]">
              <span className="text-[15px] text-yellowColor leading-6 font-semibold">
                {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                {item.position}
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                {item.hospital}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DoctorAbout;
