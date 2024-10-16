import { Link } from "react-router-dom";
import mdImg from "../../assets/images/about/MDimg.jpg";
import { socialLinks } from "../Footer/Footer";

const AboutMD = () => {
  return (
    <section>
      <h2 className="lg:text-[24px] text-[20px] text-violet-600 font-serif font-bold text-center mb-3">
        Our Managing Director (MD)&apos;s Message
      </h2>
      <div className="lg:flex justify-center items-center w-full">
        {/* MD Image */}
        <div className="text-center w-full lg:w-1/3">
          <img
            className="mx-auto rounded shadow-lg w-36 h-40 md:w-44 md:h-48 lg:h-60 lg:w-50 mb-[7px]"
            src={mdImg}
            alt="Mohammad Nurul Azam - M/D"
          />
          <div className="leading-6">
            <h1 className="text-[16px] lg:text-[18px] font-bold text-gray-800 font-serif">
              Mohammad Nurul Azam
            </h1>
            <p className="text-[15px] lg:text-[18px] text-gray-600 font-semibold">
              Managing Director,
              <br /> <strong>MNA Diagnostics Center</strong>
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-1">
            {socialLinks.map((link) => (
              <Link
                to={link.path}
                key={link.id}
                className="lg:w-7 w-5 h-5 lg:h-7 border border-solid border-black rounded-full flex items-center justify-center group hover:bg-orange-400"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* MD's Message */}
        <div className="w-full lg:w-2/3">
          <div className="text-left text-gray-700 text-[14px] lg:text-[17px]">
            <p className="mb-2 leading-6 lg:leading-8 text-justify">
              Dear valued customers, <br />
              At MNA Diagnostics Center, we are dedicated to providing you with
              top-quality medical diagnostics services, supported by
              cutting-edge technology and a dedicated team of professionals. Our
              mission is to ensure that each patient receives personalized care
              and accurate diagnostics, which are critical in the journey toward
              better health. <br />
              We are committed to maintaining the highest standards in
              everything we do and are continually evolving to meet the growing
              demands of healthcare. We are dedicated to providing accurate and
              timely medical diagnostic services, empowering both doctors and
              patients. Thank you for placing your trust in us.
            </p>
            <p className="text-lg font-semibold">- Mohammad Nurul Azam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMD;
