import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../assets/data/testimonialData";

const Testimonial = () => {
  return (
    <section className="container py-5">
      <h2 className="heading text-center ">Patient Reviews</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
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
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white border-t-4 border-violet-600 rounded shadow-md py-3 px-6 text-center">
              <div className="flex justify-around">
                <div>
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.patient}'s photo`}
                    className="w-20 h-20 rounded-full border border-violet-700"
                  />
                  <h3 className="lg:text-[17px] text-[15px] font-semibold">
                    {testimonial.patient}
                  </h3>
                  <div className="flex justify-center my-[2px]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <AiFillStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <FaQuoteRight className="h-28 w-28 opacity-10" />
              </div>

              <p className="text-gray-500 mt-2 lg:text-[15px] text-[13px] text-justify">
                {testimonial.description.length < 140
                  ? testimonial.description
                  : testimonial.description.slice(0, 140) + "..."}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
