import ServiceSectionList from "./ServiceSectionList";

const OurServices = () => {
  return (
    <section className="my-5 pb-3">
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Services</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        {/* ===Service-Section-List component=== */}
        <ServiceSectionList />
      </div>
    </section>
  );
};

export default OurServices;
