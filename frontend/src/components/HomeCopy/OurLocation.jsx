import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const OurLocation = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center p-6 bg-gray-50">
      <div className="text-center lg:text-left lg:w-3/12 mb-4 lg:mb-0">
        <h2 className="heading mb-2">Our Location</h2>
        <div className="text-gray-700">
          <p className="font-semibold text-[18px] lg:text-[22px] ">
            MNA Diagnostics Center,
          </p>
          <p>Raozan, Chattogram.</p>
          <p className="my-4 text-justify">
            We are conveniently located to serve you better. Feel free to visit
            us for all your diagnostic needs.
          </p>
          <Link to="/contact" className="flex justify-center lg:block">
            <button className="customBtn flex items-center">
              For More Details{" "}
              <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-9/12 h-64 lg:h-80 lg:pl-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7351.157546348601!2d91.82465879244582!3d22.503226050073946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd812fc3d3583%3A0x2a3b0d6f6b9c1769!2sRaozan%20Chattogram!5e0!3m2!1sen!2sbd!4v1697046123456!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0 rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default OurLocation;
