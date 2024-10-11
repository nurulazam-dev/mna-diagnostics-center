import { HiStar } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../../assets/data/testimonialData";

const TestimonialSlide = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* ==slides== */}
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-[70px] rounded-s-2xl"
                />
                <div>
                  <h4 className="text-[20px] leading-[30px] font-bold text-headingColor">
                    {testimonial.patient}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                {testimonial.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlide;
