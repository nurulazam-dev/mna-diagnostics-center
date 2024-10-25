import { Link } from "react-router-dom";
import brandLogo from "../assets/images/brand-logo/mna-diagnostics-center.png";

const CheckoutSuccess = () => {
  return (
    <section className="bg-white p-6 md:mx-auto">
      <div className="flex justify-center items-center">
        <img src={brandLogo} alt="" className="w-[100px] lg:w-[230px]" />
      </div>
      <div className="text-center">
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
          Payment Done
        </h3>
        <p className="text-gray-600 my-2">
          Thank you for completing your secure online payment!
        </p>
        <p>Have a great day!</p>
        <div className="my-6 animate-bounce">
          <Link to="/home" className="customBtn">
            Go Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
