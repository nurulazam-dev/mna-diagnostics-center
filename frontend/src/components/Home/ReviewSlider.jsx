import { AiFillStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img01 from "../../assets/images/icons/avatar-icon.png";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    photo: img01,
    email: "johndoe@example.com",
    rating: 4,
    description: "Excellent service and friendly staff!",
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: img01,
    email: "janesmith@example.com",
    rating: 5,
    description: "Quick and reliable diagnostics. Highly recommend!",
  },
  {
    id: 3,
    name: "Alice Brown",
    photo: img01,
    email: "alicebrown@example.com",
    rating: 5,
    description: "Professional and thorough service. Will visit again.",
  },
  {
    id: 4,
    name: "Alice Brown",
    photo: img01,
    email: "alicebrown@example.com",
    rating: 2,
    description: "Professional and thorough service. Will visit again.",
  },
  {
    id: 5,
    name: "Alice Brown",
    photo: img01,
    email: "alicebrown@example.com",
    rating: 4,
    description: "Professional and thorough service. Will visit again.",
  },
  {
    id: 6,
    name: "Alice Brown",
    photo: img01,
    email: "alicebrown@example.com",
    rating: 3,
    description: "Professional and thorough service. Will visit again.",
  },
  // Add more reviews as needed
];

const ReviewSlider = () => {
  return (
    <section className="container py-5">
      <h2 className="heading text-center mb-6">Patient Reviews</h2>

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
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white border-t-4 border-violet-600 rounded shadow-md p-3 text-center">
              <div className="flex justify-around">
                <div>
                  <img
                    src={review.photo}
                    alt={`${review.name}'s photo`}
                    className="w-20 h-20 rounded-full border border-violet-700"
                  />
                  <h3 className="lg:text-[17px] text-[15px] font-semibold">
                    {review.name}
                  </h3>
                  <div className="flex justify-center my-[2px]">
                    {[...Array(review.rating)].map((_, i) => (
                      <AiFillStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
                <FaQuoteRight className="h-28 w-28 opacity-10" />
              </div>

              <p className="text-gray-500 mb-2 lg:text-[15px] text-[13px]">
                {review.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSlider;
