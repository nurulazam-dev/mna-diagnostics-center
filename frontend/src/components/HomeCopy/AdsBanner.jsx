import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const AdsBanner = () => {
  return (
    <section className="container bg-green-500 py-6 text-white">
      <div className="lg:flex block justify-around items-center">
        <div className="">
          <h2 className="text-[44px] leading-[54px] font-[700]">
            How we can help...
          </h2>
          <p className="text-[16px] leading-3 mt-2">
            We offer a wide range of procedures to help you get the perfect
            smile.
          </p>
        </div>
        <Link to="/doctors">
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
