import { services } from "../assets/data/servicesData";
// import ServiceCard from "../components/Home/Services/ServiceCard";
import ServiceCard from "../components/Home/Services/ServiceSectionCard";

const Services = () => {
  return (
    <section className="container my-3">
      <h1 className="heading text-center">Our Services</h1>
      <div className="grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] my-3">
        {services.map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
