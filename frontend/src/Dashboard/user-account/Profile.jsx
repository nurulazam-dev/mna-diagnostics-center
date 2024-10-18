/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import HashLoader from "react-spinners/HashLoader";
import PulseLoader from "react-spinners/PulseLoader";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config.js";
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";

const Profile = ({ user }) => {
  const [selectFile, setSelectFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodGroup: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodGroup: user.bloodGroup,
    });
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    // Use cloudinary to upload images
    const data = await uploadImageToCloudinary(file);

    setSelectFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  // submitHandler
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const inputClass = `w-full p-3 border border-[#0066ff61] focus:outline-none focus:border-violet-700 text-[18px] leading-6 text-headingColor placeholder:text-textColor`;
  return (
    <div className="mt-10">
      {/* =======================
             profile form
      ========================== */}
      <form onSubmit={submitHandler}>
        {/* ===name input=== */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={inputClass}
            required
          />
        </div>
        {/* ===email input=== */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={inputClass}
            aria-readonly
            readOnly
          />
        </div>
        {/* ===password input=== */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={inputClass}
          />
        </div>

        <div className="mb-5 flex justify-center items-center w-full">
          {/* ===Blood_Group=== */}
          <div className="lg:flex items-center justify-between lg:w-[30%] w-full border">
            {/* Blood group select part */}
            <label className="font-bold text-headingColor text-[16px] leading-7">
              Blood Group:
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                required
                className="font-semibold text-textColor text-[15px] leading-7 px-4 py-3 focus:outline-none "
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          {/* ===Gender=== */}
          <div className="lg:flex items-center justify-between lg:w-[30%] w-full border">
            {/* ===gender select part=== */}
            <label className="font-bold text-headingColor text-[16px] leading-7">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="font-semibold text-textColor text-[15px] leading-7 px-4 py-3 focus:outline-none "
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          {/* ===img input=== */}
          <div className="lg:flex items-center justify-center lg:w-[40%] w-full gap-5 border">
            {/* ===upload img part=== */}
            <div className="relative w-[130px] h-[50px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                onChange={handleFileInputChange}
                accept=".jpg, .png, .jpeg"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />

              <label
                htmlFor="customFile"
                className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              >
                {selectFile ? selectFile.name : "Upload Photo"}
              </label>
            </div>
            {/* display img part */}
            {formData.photo && (
              <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-violet-600 flex items-center justify-center">
                <img
                  src={formData.photo}
                  alt=""
                  className="w-full rounded-full"
                />
              </figure>
            )}
          </div>
        </div>

        {/* ==register btn part== */}
        <div className="mt-7">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full customBtn"
          >
            {loading ? (
              <PulseLoader size={25} className="text-black" />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>

        {/* ==== */}
      </form>
    </div>
  );
};

export default Profile;
