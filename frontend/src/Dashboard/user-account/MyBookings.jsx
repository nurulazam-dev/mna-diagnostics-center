// import DoctorCard from "../../components/Home/Doctors/DoctorCard";
import Error from "../../components/Shared/Error";
import Loading from "../../components/Shared/Loading";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import { formatDate } from "../../utils/formatDate";

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointment/my-appointments`);

  return (
    <section className="mt-4">
      <h1 className="text-[28px] font-serif text-center text-black font-bold mb-2">
        My Bookings
      </h1>
      <div className="mt-10">{loading && !error && <Loading />}</div>

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-5"> */}
          {/* {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))} */}

          {/* ===Table start=== */}
          {appointments?.map((appointment) => (
            <table
              className="w-full text-left text-sm text-green-500"
              key={appointment?._id}
            >
              <thead className="text-sm text-violet-600 text-center uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-1">
                    Doctor
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Specialization
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Dr. Phone
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-1">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-1 text-[12px]">
                    Booked on
                  </th>
                </tr>
              </thead>

              <tbody className="text-textColor border-b">
                {appointments?.map((appointment) => (
                  <tr key={appointment._id}>
                    <th
                      scope="row"
                      className="flex items-center pr-6 py-2 text-gray-900 whitespace-nowrap"
                    >
                      <img
                        src={appointment?.photo}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-base font-semibold pl-3">
                        {appointment?.name}{" "}
                      </div>
                    </th>
                    <td className="text-center py-2">
                      {appointment?.specialization}
                    </td>
                    <td className="px-6 py-2">{appointment?.phone}</td>
                    <td className="px-6 py-2">
                      {appointment?.isPaid && (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                          Paid
                        </div>
                      )}
                      {!appointment?.isPaid && (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                          Unpaid
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-2">{appointment?.ticketPrice}</td>
                    <td className="px-6 py-2">
                      {formatDate(appointment?.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
              {appointments.length == 0 && (
                <h2 className="text-red-600 animate-pulse text-[16px] my-3">
                  Not booked any appointment.
                </h2>
              )}
            </table>
          ))}
          {/* ===Table end=== */}
        </div>
      )}

      {!loading && !error && appointments.length == 0 && (
        <h2 className="mt-5 text-center text-[18px] text-red-600 animate-pulse">
          You did not book any doctor appointment.
        </h2>
      )}
    </section>
  );
};

export default MyBookings;
