import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import VTImg from "../../assets/images/home/virtualTreatment.png";

const VirtualTreatment = () => {
  return (
    <section className="">
      <h2 className="heading text-center">Get Virtual Treatment</h2>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-6 w-full">
        {/* Text Section */}
        <div className="flex-1">
          <p className="text-[14px] lg:text-[18px] font-semibold text-gray-700 my-6 mt-0">
            At MNA Diagnostics Center, you can consult with our doctors online
            from the comfort of your home. Follow these easy steps:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Register on our platform with your personal details.</li>
            <li>Select a doctor based on your symptoms and availability.</li>
            <li>Book a virtual appointment.</li>
            <li>
              Join the consultation through a video call link sent to your
              email.
            </li>
            <li>Receive your diagnosis and treatment plan online.</li>
          </ol>

          <div className="lg:flex md:flex my-4 lg:mb-0">
            <Link to="/doctors" className="flex justify-center mr-5">
              <button className="customBtn bg-green-600 flex items-center text-white">
                Select Doctor{" "}
                <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
              </button>
            </Link>

            <Link to="/contact" className="flex justify-center mt-4 lg:mt-0">
              <button className="customBtn flex items-center">
                Request a Virtual Appointment{" "}
                <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={VTImg}
            alt="Virtual Treatment"
            className="max-h-screen max-w-[400px] lg:px-0 px-7 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualTreatment;
