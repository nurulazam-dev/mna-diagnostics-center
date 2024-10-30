import ServiceSectionList from "./ServiceSectionList";

const OurServices = () => {
  return (
    <section className="my-5 pb-3">
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading">Our Services</h2>
          <div className="h-[6px] w-[20%] bg-gradient-to-r from-violet-300 to-green-300"></div>
        </div>
        {/* ===Service-Section-List component=== */}
        <ServiceSectionList />
      </div>
    </section>
  );
};

export default OurServices;
