/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdCloudUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userAvatar from "../../assets/images/icons/patient-avatar.png";
import Loading from "../../components/Shared/Loading.jsx";
import { BASE_URL, token } from "../../config.js";
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";

const Profile = ({ user }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    phone: "",
    bloodGroup: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
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

    // setSelectFile(data.url);
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
    <div className="mt-4">
      <h1 className="text-[28px] font-serif text-center text-black font-bold mb-2">
        Profile Information
      </h1>
      {/* =======================
             profile form
      ========================== */}
      <form onSubmit={submitHandler}>
        {/* ===1st line=== */}
        <div className="lg:flex w-full justify-center items-center lg:gap-4">
          {/* ===name input=== */}
          <div className="mb-5 w-full lg:w-[50%]">
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
          {/* ===phone input=== */}
          <div className="mb-5 w-full lg:w-[50%]">
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputClass}
              required
            />
          </div>
        </div>
        {/* ===2nd line=== */}
        <div className="lg:flex w-full justify-center items-center lg:gap-4">
          {/* ===email input=== */}
          <div className="mb-5 w-full lg:w-[50%]">
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
          <div className="mb-5 w-full lg:w-[50%]">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-5 lg:flex justify-center items-center w-full">
          <div className="flex justify-center items-center lg:w-[64%] w-full">
            {/* ===Blood_Group=== */}
            <div className="flex items-center justify-between lg:w-[54%] w-full">
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
            <div className="flex items-center justify-between lg:w-[46%] w-full">
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
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
          </div>

          {/* ===img input=== */}
          <div className="flex items-center justify-center lg:w-[36%] w-full gap-3">
            {/* ===upload img part=== */}
            <div className="relative w-[160px] h-[44px]">
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
                className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-[3px] overflow-hidden bg-violet-700 hover:bg-green-700 text-white rounded truncate cursor-pointer font-serif"
              >
                <MdCloudUpload className="w-9 h-9 pr-2" /> Upload Photo
              </label>
            </div>
            {/* display img part */}
            {formData.photo && (
              <figure className="w-[48px] h-[48px] rounded-full border-2 border-solid border-violet-600 flex items-center justify-center">
                <img
                  src={formData.photo ? formData.photo : userAvatar}
                  alt=""
                  className="w-full rounded-full"
                />
              </figure>
            )}
          </div>
        </div>

        {/* ==update btn part== */}
        <div className="mt-7 w-full mx-auto animate-bounce">
          <button
            disabled={loading && true}
            type="submit"
            className="w-full customBtn rounded-none"
          >
            {loading ? (
              <Loading />
            ) : (
              <div className="flex items-center font-bold justify-center">
                Update Profile
                <GrUpdate className="ml-2 w-4 h-4" />
              </div>
            )}
          </button>
        </div>

        {/* ==== */}
      </form>
    </div>
  );
};

export default Profile;
