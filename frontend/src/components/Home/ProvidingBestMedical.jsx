import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import icon01 from "../../assets/images/icons/icon01.png";
import icon02 from "../../assets/images/icons/icon02.png";
import icon03 from "../../assets/images/icons/icon03.png";

const ProvidingBestMedical = () => {
  const providingData = [
    {
      id: "pD1",
      title: "Find a Doctor",
      link: "/doctors",
      icon: icon01,
      desc: "World-class care for everyone. Our health system offers unmatched, expert health care.",
    },
    {
      id: "pD2",
      title: "Find a Location",
      link: "/contact",
      icon: icon02,
      desc: "World-class care for everyone. Our health system offers unmatched, expert health care.",
    },
    {
      id: "pD3",
      title: "Book Appointment",
      link: "/doctors",
      icon: icon03,
      desc: "World-class care for everyone. Our health system offers unmatched, expert health care.",
    },
  ];

  return (
    <section>
      <div className="container">
        <h2 className="heading text-center">
          Providing the best medical services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {providingData.map((item) => (
            <div key={item.id} className="py-[15px] px-5">
              <div className="flex items-center justify-center">
                <img src={item.icon} alt="" />
              </div>

              <div className="mt-[10px]">
                <div className="flex justify-center items-center">
                  <p className="text-[26px] leading-9 text-headingColor font-[700] ">
                    {item.title}
                  </p>
                  <div className="">
                    <Link
                      to={item.link}
                      className="w-[30px] h-[30px] rounded-full border border-solid bottom-[#181A1E] ml-[10px] mx-auto flex items-center justify-center group hover:bg-violet-600 hover:border-none"
                    >
                      <BsArrowRight className="group-hover:text-white w-5 h-5 " />
                    </Link>
                  </div>
                </div>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-2 text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidingBestMedical;
