import TestimonialSlide from "./TestimonialSlide";

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patient say</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>

        {/* ===testimonialSlide component */}
        <TestimonialSlide />
      </div>
    </section>
  );
};

export default Testimonial;
