import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config.js";
import { authContext } from "../context/AuthContext.jsx";
// import HashLoader from "react-spinners/HashLoader";
import PulseLoader from "react-spinners/PulseLoader";

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
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-[32px] text-headingColor text-center leading-9 font-bold mb-10">
          Hello! <span className=" text-primaryColor">Welcome</span> Back.
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
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
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
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-slate-700 hover:border-none"
            >
              {loading ? (
                // <HashLoader size={25} color="#ffffff" />
                <PulseLoader size={25} color="#ffffff" />
              ) : (
                "Login"
              )}
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-[16px] leading-7 font-medium text-primaryColor"
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