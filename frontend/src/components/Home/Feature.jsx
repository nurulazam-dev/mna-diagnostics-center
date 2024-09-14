import { Link } from "react-router-dom";
import avatarIcon from "../../assets/images/icons/avatar-icon.png";
import videoIcon from "../../assets/images/icons/video-icon.png";
import featureImg from "../../assets/images/others/feature-img.png";

const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row justify-between ">
          {/* ===feature content=== */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> anytime.
            </h2>

            <ul className="pl-4">
              <li className="text_para">
                1. Schedule the appointment directly.
              </li>
              <li className="text_para">
                2. Search for your physician here, and contact there office.
              </li>
              <li className="text_para">
                3. View our physicians who are accepting new patients, use the
                online Scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link to="/">
              <button className="btn hover:bg-slate-700 hover:border-none">
                Learn More
              </button>
            </Link>
          </div>

          {/* ===feature img part=== */}
          <div className="relative xl:w-[770px] flex justify-end mt-[50px] z-10 lg:mt-0">
            <img src={featureImg} alt="" className="w-3/4" />

            <div className="w-[150px] lg:w-[248px] bg-white absolute z-20 bottom-[50px] md:bottom-[100px] left-0 md:left-5 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] lg:text-[14px] leading-[10px] lg:leading-5 text-headingColor font-[600]">
                    Tue, 24
                  </p>
                  <p className="text-[10px] lg:text-[14px] leading-[10px] lg:leading-5 text-textColor font-[400]">
                    10:00AM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt="" />
                </span>
              </div>

              <div className=" w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor rounded-full font-[500] mt-2 lg:mt-4">
                Consultation
              </div>

              <div className="flex items-center gap-[6px] mt-2 lg:gap-[10px] lg:mt-[18px]">
                <img src={avatarIcon} alt="" className="" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] text-headingColor font-[700]">
                  Wayne Collins
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
