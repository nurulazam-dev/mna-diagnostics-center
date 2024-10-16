import { Link } from "react-router-dom";
import { socialLinks } from "../Footer/Footer";

const AboutChairman = () => {
  return (
    <section>
      <h2 className="lg:text-[24px] text-[20px] text-violet-600 font-serif font-bold text-center mb-3">
        Our Chairman&apos;s Message
      </h2>
      <div className="lg:flex justify-center items-center w-full">
        {/* MD Image */}
        <div className="text-center w-full lg:w-1/3">
          <img
            className="mx-auto rounded shadow-lg w-40 md:w-48 lg:w-60 mb-[7px]"
            src="https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png"
            alt="MNA Ariyan-Chairman"
          />
          <div className="leading-6">
            <h1 className="text-[16px] lg:text-[18px] font-bold text-gray-800 font-serif">
              MNA Ariyan
            </h1>
            <p className="text-[15px] lg:text-[18px] text-gray-600 font-semibold">
              Chairman,
              <br /> <strong>MNA Diagnostics Center</strong>
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-1">
            {socialLinks.map((link) => (
              <Link
                to={link.path}
                target="_blank"
                key={link.id}
                className="lg:w-7 w-5 h-5 lg:h-7 border border-solid border-black rounded-full flex items-center justify-center group hover:bg-orange-400"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* ===Chairman's Message==== */}
        <div className="w-full lg:w-2/3">
          <div className="text-left text-gray-700 text-[14px] lg:text-[17px]">
            <p className="mb-2 leading-6 lg:leading-8 text-justify">
              As the Chairman of MNA Diagnostics Center, I am honored to serve
              in a capacity that impacts the health and well-being of our
              community. Our mission is to provide top-tier diagnostic services
              with a commitment to excellence, innovation, and compassion. Every
              decision we make is driven by our desire to offer the best
              healthcare services, ensuring every individual receives the care
              they deserve. <br />
              At MNA Diagnostics Center, we continuously invest in
              state-of-the-art technology, skilled professionals, and efficient
              processes to uphold our promise of quality and reliability. We
              believe in making healthcare accessible and affordable for
              everyone. Together with my dedicated team, I look forward to
              expanding our services and reaching new milestones.
            </p>
            <p className="text-lg font-semibold">- MNA Ariyan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChairman;
