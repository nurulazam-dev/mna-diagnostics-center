import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { toast } from "react-toastify";
import bgImg from "../assets/images/bgImg.png";
import logo from "../assets/images/brand-logo/mna-diagnostics-center.png";
import { BASE_URL } from "../config.js";
import { authContext } from "../context/AuthContext.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit handler
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 my-8 lg:px-0">
      <div
        className="w-full max-w-[420px] mx-auto rounded-lg shadow-md lg:p-10 p-4"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-[120px]" />
        </div>
        <h3 className="mb-2 lg:text-[36px] text-[27px] text-indigo-900 font-bold font-serif text-center">
          Please Login
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          {/* email input */}
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-[#0066ff61] focus:outline-none focus:border-violet-700 text-[18px] leading-6 text-headingColor placeholder:text-textColor"
              required
            />
          </div>
          {/* password input */}
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-[#0066ff61] focus:outline-none focus:border-violet-700 text-[18px] leading-6 text-headingColor placeholder:text-textColor"
              required
            />
          </div>

          <div className="mt-7">
            <button type="submit" className="customBtn w-full rounded-none">
              {loading ? (
                <PulseLoader size={25} className="text-gray-950" />
              ) : (
                "Login"
              )}
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-[16px] leading-7 font-medium text-violet-800"
            >
              Please Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
