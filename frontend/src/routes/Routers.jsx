import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import MyAccount from "../Dashboard/user-account/MyAccount";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Contact from "../pages/Contact";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Doctors from "../pages/Doctors/Doctors";
import Home from "../pages/Home";
import HomeCopy from "../pages/HomeCopy";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Services from "../pages/Services";
import ProtectedRoutes from "./ProtectedRoutes";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<HomeCopy />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoutes>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
