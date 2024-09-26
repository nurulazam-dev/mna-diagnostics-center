import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { services } from "../../../assets/data/servicesData";
import ServiceSectionCard from "./ServiceSectionCard";

const ServiceSectionList = () => {
  return (
    <div className="container mt-[30px] lg:mt-[55px]">
      <div className="grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px]">
        {services.map((service, index) => (
          <ServiceSectionCard service={service} index={index} key={index} />
        ))}
      </div>
      <Link to="/services" className="flex justify-center">
        <button className="btn bg-green-600 rounded-none flex items-center hover:bg-slate-600">
          See All Services{" "}
          <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default ServiceSectionList;
