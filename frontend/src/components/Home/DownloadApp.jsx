import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import mobileFrame from "../../assets/images/home/mobileApp.png";

const DownloadApp = () => {
  return (
    <section className="container mb-5">
      <h1 className="heading text-center">Our Mobile App</h1>
      <div className="lg:flex items-center justify-center w-full">
        {/* =====Mobile Phone Image===== */}
        <div className="lg:w-[40%] w-full flex justify-center lg:justify-end ">
          <img
            src={mobileFrame}
            alt="Mobile App"
            className="w-52 h-auto lg:w-72"
          />
        </div>

        {/* =====Details and App Links===== */}
        <div className="lg:w-[60%] w-full text-center md:text-left">
          <h2 className="lg:text-[22px] text-[20px] font-serif font-semibold text-gray-700 ">
            Download the MNA Diagnostics Center App
          </h2>
          <p className="text-gray-600 mb-3 lg:text-[16px] text-[14px] text-justify">
            Book appointments, view health packages, and access all our services
            right at your fingertips. Get the app to stay connected and manage
            your health on the go!
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center md:justify-start">
            {/* =====Google Play Button===== */}
            <div className="bg-violet-600 text-white lg:px-5 px-3 py-2 rounded-md flex items-center justify-center gap-2 transition transform hover:scale-105">
              <IoLogoGooglePlaystore className="w-12 h-12" />
              <div className="leading-6">
                <p>GET IT ON</p>
                <h3 className="font-bold text-[22px]">Google Play</h3>
              </div>
            </div>

            {/* =====App Store Button===== */}
            <div className="bg-slate-950 text-white lg:px-5 px-3 py-2 rounded-md flex items-center justify-center gap-2 transition transform hover:scale-105">
              <FaAppStoreIos className="w-12 h-12" />
              <div className="leading-6">
                <p>Download on the</p>
                <h3 className="font-bold text-[22px]">App Store</h3>
              </div>
            </div>
          </div>
          {/* =====App Features===== */}
          <ul className="text-gray-600 space-y-2 text-start">
            <li>✔️ Book Appointments Instantly</li>
            <li>✔️ Get Lab Results Online</li>
            <li>✔️ Easy doctor booking</li>
            <li>✔️ View and manage appointments</li>
            <li>✔️ Get health tips and reminders</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
