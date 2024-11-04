import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import mobileFrame from "../../assets/images/home/mobileApp.png";

const DownloadApp = () => {
  return (
    <section>
      <h1 className="heading text-center">Our Mobile App</h1>
      <div className="lg:flex items-center justify-center px-8 w-full">
        {/* =====Mobile Phone Image===== */}
        <div className="lg:w-[40%] w-full flex justify-end mb-6 md:mb-0">
          <img
            src={mobileFrame}
            alt="Mobile App"
            className="w-48 h-auto md:w-72"
          />
        </div>

        {/* =====Details and App Links===== */}
        <div className="lg:w-[60%] w-full text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Download the MNA Diagnostics Center App
          </h2>
          <p className="text-gray-600 mb-6">
            Book appointments, view health packages, and access all our services
            right at your fingertips. Get the app to stay connected and manage
            your health on the go!
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center md:justify-start">
            {/* =====Google Play Button===== */}
            <div className="bg-blue-600 text-white lg:px-5 px-3 py-2 rounded-md flex items-center justify-center gap-2 transition transform hover:scale-105">
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
          <ul className="text-gray-600 space-y-2">
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
