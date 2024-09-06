import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import bookingRoute from "./Routes/booking.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import userRoute from "./Routes/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("MNA_Diagnostics_Center's Api is working");
});

// DB_Connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    /* await mongoose.connect(process.env.LOCAL_DATABASE, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    }); */
    await mongoose.connect(process.env.LOCAL_DATABASE);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log("MongoDB connection fail");
  }
};

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOption));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

app.listen(port, () => {
  connectDB();
  console.log(
    "MNA_Diagnostics_Center's Server is running on port" + " " + port
  );
});
