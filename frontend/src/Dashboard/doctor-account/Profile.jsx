/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import avatarImg from "../../assets/images/icons/avatar-icon.png";
import Loading from "../../components/Shared/Loading";
import { BASE_URL, token } from "../../config";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";

const Profile = ({ doctorData }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    });
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.message);
      }

      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  //reusable function for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  //reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //reusable function for delete item
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  /*================================
    logic for qualification=start
  ================================*/
  const addQualification = (e) => {
    e.preventDefault();

    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualification", index, event);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();

    deleteItem("qualifications", index);
  };
  /*================================
    logic for qualification=end
  ================================*/

  /*================================
    logic for Experience=start
  ================================*/
  const addExperience = (e) => {
    e.preventDefault();

    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();

    deleteItem("experiences", index);
  };
  /*================================
    logic for Experience=end
  ================================*/

  /*================================
    logic for Time_slots=start
  ================================*/
  const addTimeSlot = (e) => {
    e.preventDefault();

    addItem("timeSlots", {
      day: "",
      startingTime: "",
      endingTime: "",
    });
  };

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();

    deleteItem("timeSlots", index);
  };
  /*================================
    logic for Time_slots=end
  ================================*/

  return (
    <section className="mb-10">
      <h1 className="text-[28px] font-serif bg-green-600 text-center text-white font-bold mb-2">
        Profile Information
      </h1>

      <form>
        {/* first line */}
        <div className="lg:flex justify-center items-center lg:mb-5 w-full">
          {/* name part */}
          <div className="lg:mb-0 mb-5 lg:mr-5 lg:w-1/2">
            <p className="form_label">Name*</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="form_input"
            />
          </div>
          {/* phone part */}
          <div className="lg:mb-0 mb-5 lg:w-1/2">
            <p className="form_label">Phone*</p>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
              className="form_input"
            />
          </div>
        </div>
        {/* 2nd line */}
        <div className="lg:flex justify-center items-center lg:mb-5 w-full">
          {/* email part */}
          <div className="lg:mb-0 mb-5 lg:mr-5 lg:w-1/2">
            <p className="form_label">Email*</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="form_input"
              readOnly
              aria-readonly
              disabled="true"
            />
          </div>

          {/* bio part */}
          <div className="lg:mb-0 mb-5 lg:w-1/2">
            <p className="form_label">Bio*</p>
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Bio"
              className="form_input"
              maxLength={100}
            />
          </div>
        </div>

        {/* ===================================
        gender,Specialization,Ticket_Price grid
        ==================================== */}
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            {/* ===gender input part=== */}
            <div>
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* ===Specialization input part=== */}
            <div>
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            {/* ===Ticket_Price input part=== */}
            <div>
              <p className="form_label">Ticket Price*</p>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                placeholder="100"
                className="form_input"
              />
            </div>
          </div>
        </div>

        {/* ===================================
                 Qualification details
        ==================================== */}
        <div className="mb-5">
          <p className="form_label">Qualification*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                {/* ===Starting & ending Date part=== */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                {/* ===Degree & University part=== */}
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      placeholder="Degree Name"
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      placeholder="University Name"
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="text-[18px] bg-red-600 p-2 rounded-full text-white mt-2 cursor-pointer mb-[30px]"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="customBtn h-fit cursor-pointer bg-green-600 text-black"
          >
            Add Qualification
          </button>
        </div>

        {/* ===================================
                 Experiences details
        ==================================== */}
        <div className="mb-5">
          <p className="form_label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                {/* ===Starting & ending Date part=== */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                {/* ===Position & Hospital part=== */}
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      placeholder="Position Name"
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      placeholder="Hospital Name"
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="text-[18px] bg-red-600 p-2 rounded-full text-white mt-2 cursor-pointer mb-[30px]"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="customBtn h-fit cursor-pointer bg-green-600 text-black"
          >
            Add Experience
          </button>
        </div>

        {/* ===================================
                 Time_Slots details
        ==================================== */}
        <div className="mb-5">
          <p className="form_label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                {/* ===day, starting_time, part=== */}
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  {/* ===Selected Day part=== */}
                  <div>
                    <p className="form_label">Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form_input py-3.5"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>

                  <div>
                    <p className="form_label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form_label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className="text-[18px] bg-red-600 p-2 rounded-full text-white mt-6 cursor-pointer mb-[30px]"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlot}
            className="customBtn bg-green-600 text-black h-fit cursor-pointer"
          >
            Add TimeSlot
          </button>
        </div>

        {/* ===================================
                 About input part
        ==================================== */}
        <div className="mb-5">
          <p className="form_label">About*</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="Write about you"
            onChange={handleInputChange}
            className="form_input"
          ></textarea>
        </div>

        {/* ===================================
                 img/file upload part
        ==================================== */}
        <div className="mb-2 flex items-center gap-3">
          {/* ===upload img part=== */}
          <div className="relative w-[150px] h-[40px]">
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
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[3px] text-[15px] overflow-hidden bg-violet-700 hover:bg-green-700 text-white rounded font-serif truncate cursor-pointer"
            >
              {" "}
              <MdCloudUpload className="w-8 h-8 mr-[5px]" />
              Upload Photo
            </label>
          </div>
          {/* ===display avatar=== */}
          {formData.photo && (
            <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-violet-700 flex items-center justify-center ml-3">
              <img
                src={formData.photo ? formData.photo : avatarImg}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading && true}
            onClick={updateProfileHandler}
            className="customBtn w-full rounded-none"
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
      </form>
    </section>
  );
};

export default Profile;
