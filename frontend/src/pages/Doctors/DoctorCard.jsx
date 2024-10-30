/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import starIcon from "../../assets/images/icons/Star.png";

const DoctorCard = ({ doctor }) => {
  const { name, specialization, avgRating, totalRating, photo, experiences } =
    doctor;

  return (
    <div className="pb-2 shadow-lg rounded">
      <div className="flex justify-end relative">
        <div className="flex items-center bg-slate-200 px-2 py-1 rounded-tr rounded-bl-lg absolute text-white">
          <div className="flex items-center text-[12px] lg:text-[14px] font-semibold text-headingColor">
            <img src={starIcon} alt="" className="w-4 h-4 mr-1" />
            <span>{avgRating}</span>
          </div>
          <span className="text-[12px] lg:text-[14px] font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <img src={photo} alt="" className="w-[50%] rounded-full" />
      </div>
      <div className="text-center mb-2">
        <h2 className="text-[18px] lg:text-[22px] text-violet-950 font-[800] mr-3">
          {name}
        </h2>

        {/* specialist */}
        <span className="text-textColor text-[12px] font-semibold lg:text-[16px] font-mono">
          {specialization}
        </span>
        {/* hospital */}
        <p className="text-[14px] font-[400] text-textColor">
          {experiences && experiences[0]?.hospital}
        </p>
      </div>
      {/* social icons */}
      <div className="flex justify-center items-center mb-3">
        <FaLinkedinIn className="p-1 mx-2 w-7 h-7 rounded bg-blue-600 hover:bg-orange-600 text-white" />
        <FaInstagram className="p-1 mx-2 w-7 h-7 rounded bg-blue-600 hover:bg-orange-600 text-white" />
        <FaFacebookF className="p-1 mx-2 w-7 h-7 rounded bg-blue-600 hover:bg-orange-600 text-white" />
        <FaTwitter className="p-1 mx-2 w-7 h-7 rounded bg-blue-600 hover:bg-orange-600 text-white" />
      </div>
      {/* link btn */}
      <div className="px-2">
        <Link to={`/doctors/${doctor._id}`} className="">
          <button className="customBtn bg-green-600 flex justify-center items-center text-white w-full">
            Details{" "}
            <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
