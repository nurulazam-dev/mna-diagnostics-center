import { services } from "../assets/data/servicesData";
import ServiceCard from "../components/Home/Services/ServiceCard";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px]">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
