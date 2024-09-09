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
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* ===first column=== */}
          <div className="">
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by MNA all right reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLink.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* ===first column end=== */}
          {/* ===2nd column=== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
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
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
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
          {/* ===4th column=== */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
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
          {/* ===4th column end=== */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
