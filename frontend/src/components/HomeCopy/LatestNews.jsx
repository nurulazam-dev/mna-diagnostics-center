import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { services } from "../../assets/data/servicesData";

const LatestNews = () => {
  return (
    <section className="container my-5 pb-3 px-10">
      <div className="">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Latest News</h2>
        </div>
        {/* ===Service-Section-List component=== */}
        <div className="mt-[10px] lg:mt-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[20px]">
            {services.slice(0, 3).map((service, index) => (
              <div className="border rounded" key={index}>
                <img src={service.serviceImg} alt="" />
                <div className="pt-[5px] pb-[20px] px-3 lg:px-5 ">
                  <h2 className="text-[22px] leading-6 font-[700]">
                    {service.name}
                  </h2>
                  <p className="text-[14px] leading-6 text-textColor font-[400] mt-3">
                    {service.desc}
                  </p>

                  <Link to="/about">
                    <button className="flex items-center text-green-700 hover:text-violet-700 mt-2">
                      Read more{" "}
                      <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
