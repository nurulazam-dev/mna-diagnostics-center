import Doctor from "../models/DoctorSchema.js";
import Review from "../models/ReviewSchema.js";

// get_all_reviews controller
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    res.status(200).json({
      success: true,
      message: "Successfully got all reviews",
      data: reviews,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Reviews not found" });
  }
};

// create_a_review controller
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: savedReview,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
