import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom Styles
import "./ManagementTeamSlide.module.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { managementTeams } from "../../../assets/data/managementTeams";

const ManagementTeamSlide = () => {
  return (
    <section className="p-6 lg:w-[95%] w-full mx-auto">
      <h2 className="lg:text-[24px] text-[20px] text-violet-600 font-serif font-bold text-center mb-3">
        Meet Our Management Team
      </h2>
      {/* ====slide start==== */}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Keyboard, Navigation]}
        className="mySwiper"
      >
        {managementTeams.map((member) => (
          <SwiperSlide key={member.id}>
            <div
              key={member.id}
              className="w-[300px] lg:w-[360px] bg-white shadow-lg rounded-lg transform transition hover:-translate-y-2 duration-300"
            >
              <img src={member.photo} alt={member.name} />
              <div className="pb-2 text-center">
                <h3 className="text-[16px] lg:text-[18px] font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600  text-[12px] lg:text-[14px]">
                  {member.position}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ====slide end==== */}
      <Link to="/about" className="flex justify-center mt-4 lg:mt-0">
        <button className="customBtn flex items-center">
          More Details About Us{" "}
          <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
        </button>
      </Link>
    </section>
  );
};

export default ManagementTeamSlide;
