import TestimonialSlide from "./TestimonialSlide";

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Patients Review</h2>
        </div>

        {/* ===testimonialSlide component */}
        <TestimonialSlide />
      </div>
    </section>
  );
};

export default Testimonial;
