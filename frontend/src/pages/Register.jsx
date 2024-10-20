import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerImg from "../assets/images/others/register.gif";
import Loading from "../components/Shared/Loading.jsx";
import { BASE_URL } from "../config.js";
import uploadImageToCloudinary from "../utils/uploadCloudinary.js";

const Register = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectFile,
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    // Use cloudinary to upload images
    const data = await uploadImageToCloudinary(file);
    console.log(data);

    setPreviewURL(data.url);
    setSelectFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  // submitHandler
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0 my-8">
      <div className="max-w-[920px] shadow-md mx-auto rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-violet-700 rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={registerImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/* ===register card=== */}
          <div className="lg:px-10 lg:pb-4 py-6 px-3">
            <h3 className="lg:text-[32px] text-[25px] text-headingColor font-serif text-center font-bold mb-3">
              Create An Account
            </h3>

            {/* ===register form=== */}
            <form onSubmit={submitHandler}>
              {/* name input */}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-[#0066ff61] focus:outline-none focus:border-violet-700 text-[18px] leading-6 text-headingColor placeholder:text-textColor"
                  required
                />
              </div>
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
              <div className="mb-2">
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
              {/* ===selected part=== */}
              <div className="mb-2 flex items-center justify-between">
                {/* ===role select part=== */}
                <label className="font-bold text-headingColor lg:text-[16px] text-[14px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="font-semibold text-textColor lg:text-[16px] text-[14px] leading-6 px-0 lg:px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                {/* ===gender select part=== */}
                <label className="font-bold text-headingColor lg:text-[16px] text-[14px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="font-semibold text-textColor lg:text-[16px] text-[14px] leading-6 px-0 lg:px-4 py-3 focus:outline-none "
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              {/* ===img input=== */}
              <div className="mb-2 flex items-center">
                {/* ===upload img part=== */}
                <div className="relative w-[150px] h-[40px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png, .jpeg"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer "
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-[0.75rem] py-[3px] overflow-hidden bg-violet-700 hover:bg-green-700 text-white rounded truncate cursor-pointer font-serif"
                  >
                    <MdCloudUpload className="w-8 h-8 mr-[5px]" /> Upload Photo
                  </label>
                </div>
                {/* ===display img=== */}
                {selectFile && (
                  <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-violet-700 flex items-center justify-center ml-3">
                    <img
                      src={previewURL}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}
              </div>

              {/* ==register btn part== */}
              <div className="mt-6">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="customBtn w-full rounded-none"
                >
                  {loading ? <Loading /> : "Register"}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center lg:text-[15px] text-[13px]">
                Already have an account?{" "}
                <Link to="/login" className="text-violet-800 font-medium">
                  Please Login
                </Link>
              </p>
              {/* ==== */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
