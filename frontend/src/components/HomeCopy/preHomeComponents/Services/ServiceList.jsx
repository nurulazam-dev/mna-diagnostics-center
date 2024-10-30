import { services } from "../../../assets/data/servicesData";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {services?.map((service, index) => (
        <ServiceCard service={service} index={index} key={index} />
      ))}
    </div>
  );
};

export default ServiceList;
