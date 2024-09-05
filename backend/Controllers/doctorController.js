import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

// update_single_Doctor controller
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated Doctor",
      data: updateDoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fail to update Doctor" });
  }
};

// delete_single_Doctor controller
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted Doctor",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Fail to delete Doctor" });
  }
};

// get_single_Doctor controller
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Successfully got a Doctor",
      data: doctor,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Doctor not found" });
  }
};

// get_all_Doctors controller
export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Successfully got all Doctors",
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Doctors not found" });
  }
};

// get_Doctor_Profile controller
export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
