import { FaCalendarAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const CallToActionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-10 px-6 md:px-14 text-center text-white rounded-lg shadow-lg mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
        Your Health is Our Priority
      </h2>
      <p className="text-lg md:text-2xl mb-5">
        Schedule your appointment today and get personalized care from <br />{" "}
        <strong className="font-bold text-xl md:text-3xl">
          MNA Diagnostics Center
        </strong>
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="/doctors"
          className="flex items-center justify-center bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
        >
          <FaCalendarAlt className="mr-2" />
          Book Appointment
        </a>
        <a
          href="tel:+880123456789"
          className="flex items-center justify-center bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
        >
          <FaPhoneAlt className="mr-2" />
          Call Us: +8801234-567890
        </a>
        <a
          href="mailto:info@mnadiagnostics.com"
          className="flex items-center justify-center bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
        >
          <FaEnvelope className="mr-2" />
          Email Us
        </a>
      </div>
    </div>
  );
};

export default CallToActionBanner;
