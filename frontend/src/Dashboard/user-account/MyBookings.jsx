import DoctorCard from "../../components/Home/Doctors/DoctorCard";
import Error from "../../components/Shared/Error";
import Loading from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointment/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}

      {!loading && !error && appointments.length == 0 && (
        <h2 className="mt-5 text-center text-[18px] text-red-600 animate-pulse">
          You did not book any doctor appointment.
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
