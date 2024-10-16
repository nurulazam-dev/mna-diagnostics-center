import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand-logo/mna-diagnostics-center.png";

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/", display: "Blog" },
];

const quickLinks02 = [
  { path: "/find-a-doctor", display: "Find a Doctor" },
  { path: "/", display: "Request an Appointment" },
  { path: "/", display: "Find a location" },
  { path: "/", display: "Get a opinion" },
];

const quickLinks03 = [
  { path: "/", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];

export const socialLinks = [
  {
    id: "01",
    path: "https://www.youtube.com/mnaofficialbd",
    icon: <AiFillYoutube className="group-hover: text-black w-4 h-5" />,
  },
  {
    id: "02",
    path: "https://github.com/mnaofficialbd",
    icon: <AiFillGithub className="group-hover: text-black w-4 h-5" />,
  },
  {
    id: "03",
    path: "https://www.instagram.com/mnaofficialbd",
    icon: <AiOutlineInstagram className="group-hover: text-black w-4 h-5" />,
  },
  {
    id: "04",
    path: "https://www.linkedin.com/in/mnaofficialbd",
    icon: <RiLinkedinBoxFill className="group-hover: text-black w-4 h-5" />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-4 bg-green-600 text-white">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* ===1st column=== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] lg:mb-6 mb-3 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400]"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ===1st column end=== */}
          {/* ===2nd column=== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] lg:mb-6 mb-3 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400]"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ===2nd column end=== */}
          {/* ===3rd column=== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] lg:mb-6 mb-3 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400]"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ===3rd column end=== */}

          {/* ===last column=== */}
          <div className="lg:mb-0 mb-3">
            <div className="lg:block flex justify-center items-center">
              <img src={logo} alt="" className="lg:w-28 w-[82px]" />
            </div>
            <div className="">
              <div className="flex justify-center lg:justify-start items-center gap-3 lg:mt-4 mt-1">
                {socialLinks.map((link) => (
                  <Link
                    to={link.path}
                    key={link.id}
                    className="lg:w-9 w-7 h-7 lg:h-9 border border-solid border-black rounded-full flex items-center justify-center group hover:bg-white hover:border-none"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* ===last column end=== */}
        </div>
      </div>
      <div className="bg-slate-800 text-yellow-500 text-[10px] md:text-[12px] lg:text-[14px] font-[400] text-center py-3">
        Copyright © {year} developed by MNA all right reserved.
      </div>
    </footer>
  );
};

export default Footer;
