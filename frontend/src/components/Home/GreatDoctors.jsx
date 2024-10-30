import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Error from "../../components/Shared/Error";
import Loader from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import DoctorCard from "../../pages/Doctors/DoctorCard";

const GreatDoctors = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <section className="my-7">
      <h2 className="heading text-center">Our Experts Doctors</h2>
      <div className="container">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* {doctors.map((doctor) => (
              <DoctorDetails doctor={doctor} key={doctor?._id} />
            ))} */}
            {doctors.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor?._id} />
            ))}
          </div>
        )}
      </div>
      <Link to="/doctors" className="flex justify-center animate-bounce">
        <button className="customBtn bg-green-600 flex items-center text-white mt-8">
          All Expert Doctors{" "}
          <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
        </button>
      </Link>
    </section>
  );
};

export default GreatDoctors;
