import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { managementTeams } from "../../../assets/data/managementTeams";
import MemberCard from "./MemberCard";

const ManagementTeamSlide = () => {
  return (
    <section className="container mb-10">
      <h2 className="heading text-center">Management Team</h2>
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
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Keyboard, Navigation]}
        className="mySwiper pb-10"
      >
        {managementTeams.map((member) => (
          <SwiperSlide
            key={member.id}
            className="w-[320px] lg:w-[400px] lg:h-[375px] h-[320px]"
          >
            <MemberCard member={member} />
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
