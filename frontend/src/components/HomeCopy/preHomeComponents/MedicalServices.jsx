import ServiceList from "./Services/ServiceList";

function MedicalServices() {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our medical services</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        {/* ===service list component=== */}
        <ServiceList />
      </div>
    </section>
  );
}

export default MedicalServices;
