import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const AdsBanner = () => {
  return (
    <section className="container bg-green-500 py-6 text-white mb-10">
      <div className="lg:flex block justify-around items-center">
        <div className="lg:mb-1 mb-2">
          <h2 className="lg:text-[44px] text-[35px] leading-[54px] font-[700]">
            How we can help...
          </h2>
          <p className="text-[13px] lg:text-[16px] lg:leading-3 leading-5 lg:mt-2 mt-0">
            We offer a wide range of procedures to help you get the perfect
            smile.
          </p>
        </div>
        <Link to="/doctors" className="animate-bounce">
          <button className="customBtn bg-white flex items-center justify-center">
            Book an Appointment{" "}
            <MdArrowOutward className="group-hover:text-green-700 w-6 h-6 ml-2" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AdsBanner;
