import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand-logo/mna-diagnostics-center.png";

const socialLink = [
  {
    path: "https://www.youtube.com/mnaofficialbd",
    icon: <AiFillYoutube className="group-hover: text-black w-4 h-5" />,
  },
  {
    path: "https://github.com/mnaofficialbd",
    icon: <AiFillGithub className="group-hover: text-black w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/mnaofficialbd",
    icon: <AiOutlineInstagram className="group-hover: text-black w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/mnaofficialbd",
    icon: <RiLinkedinBoxFill className="group-hover: text-black w-4 h-5" />,
  },
];

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

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 bg-green-500">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* ===1st column=== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
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
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
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
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ===3rd column end=== */}

          {/* ===last column=== */}
          <div className="">
            <div className="lg:block flex justify-center items-center">
              <img src={logo} alt="" className="lg:w-28 w-[82px]" />
            </div>
            <div className="">
              <div className="flex justify-center lg:justify-start items-center gap-3 lg:mt-4 mt-1">
                {socialLink.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className="lg:w-9 w-7 h-7 lg:h-9 border border-solid border-black rounded-full flex items-center justify-center group hover:bg-white hover:border-none"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
              <p className="text-[10px] lg:text-[16px] font-[400] text-textColor lg:mt-4 lg:text-left text-center">
                Copyright © {year} developed by MNA all right reserved.
              </p>
            </div>
          </div>
          {/* ===last column end=== */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
