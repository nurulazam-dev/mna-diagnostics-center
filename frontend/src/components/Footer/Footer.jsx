import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const quickLinks = [
  { path: "/", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/contact", display: "Contact" },
];

export const socialLinks = [
  {
    id: "01",
    path: "https://www.youtube.com/mnawebprogrammingbd",
    icon: <AiFillYoutube className="group-hover: text-red-600 w-8 h-8" />,
  },
  {
    id: "02",
    path: "https://github.com/mnaofficialbd",
    icon: <AiFillGithub className="group-hover: text-white w-7 h-7" />,
  },
  {
    id: "03",
    path: "https://www.instagram.com/mnaofficialbd",
    icon: <AiOutlineInstagram className="group-hover: text-pink-600 w-8 h-8" />,
  },
  {
    id: "04",
    path: "https://www.linkedin.com/in/mnaofficialbd",
    icon: <RiLinkedinBoxFill className="group-hover: text-blue-600 w-8 h-8" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-gray-900 text-white pt-8 pb-4">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-5">
          {/* About Us */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-3">MNA Diagnostics Center</h2>
            <p className="text-gray-200 leading-relaxed text-justify text-[15px]">
              A leading health diagnostics center in Raozan, Chattogram,
              providing comprehensive testing and care with the latest
              technology for a healthier future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.display}>
                  <Link
                    to={link.path}
                    className="text-[16px] leading-6 font-[400] hover:text-yellow-500 transition-colors duration-200"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-600">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Health St., Raozan, Chattogram</li>
              <li>
                Phone:{" "}
                <a href="tel:+8801234567890" className="hover:text-blue-400">
                  +8801234-567890
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@mnadiagnostics.com"
                  className="hover:text-blue-400"
                >
                  info@mnadiagnostics.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-600">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4 text-justify text-[15px]">
              Subscribe to our newsletter for the latest health tips and
              updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-[10px] w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-green-600 hover:bg-blue-700 text-white px-2 transition-colors duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-3" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-3">
            {socialLinks.map((socialLink) => (
              <Link
                key={socialLink.id}
                to={socialLink.path}
                className="text-[16px] leading-7 font-[400]"
              >
                {socialLink.icon}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MNA Diagnostics Center. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
