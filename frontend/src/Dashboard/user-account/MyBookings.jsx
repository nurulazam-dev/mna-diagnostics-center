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
      {loading && !error && (
        <div className="mt-10">
          <Loading />
        </div>
      )}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="">
          {/* ====Table start==== */}

          <table className="w-full text-left text-sm text-green-500">
            <thead>
              <tr className="text-sm text-violet-600 text-center uppercase hidden md:table-row bg-gray-100">
                <th className="px-6 py-3">Doctor</th>
                <th className="px-6 py-3">Specialization</th>
                <th className="px-6 py-3">Dr. Phone</th>
                <th className="px-6 py-3">Payment</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3 text-[12px]">Booked on</th>
              </tr>
            </thead>

            <tbody className="text-textColor">
              {appointments?.map((appointment) => (
                <tr
                  key={appointment._id}
                  className="md:table-row border-b border-gray-200 hover:bg-gray-100 block mb-4 lg:mb-0"
                >
                  <td className="flex items-center  lg:px-6 px-2 lg:py-4 text-gray-900 whitespace-nowrap mb-2 lg:mb-0">
                    <img
                      src={appointment?.photo}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="pl-3">
                      <div className="text-base font-semibold">
                        {appointment?.name}{" "}
                      </div>
                      <div className="text-normal text-gray-500">
                        {appointment?.email}{" "}
                      </div>
                    </div>
                  </td>

                  <td className="lg:px-6 px-2 lg:py-4 md:table-cell block">
                    <span className="font-bold md:hidden">
                      Specialization:{" "}
                    </span>
                    {appointment?.specialization}
                  </td>

                  <td className="lg:px-6 px-2 lg:py-4 md:table-cell flex  items-center">
                    <span className="font-bold md:hidden mr-1">
                      Dr. Contact:{" "}
                    </span>
                    {appointment?.phone}
                  </td>
                  <td className="lg:px-6 px-2 lg:py-4 md:table-cell flex  items-center">
                    <span className="font-bold md:hidden mr-1">Payment: </span>
                    {appointment?.isPaid && (
                      <div className="flex justify-center items-center lg:bg-green-200 text-green-600 py-1 px-[9px] rounded-full text-[12px]">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        Paid
                      </div>
                    )}
                    {!appointment?.isPaid && (
                      <div className="flex justify-center items-center lg:bg-red-200 text-red-600 py-1 px-[9px] rounded-full text-[12px]">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                        Unpaid
                      </div>
                    )}
                  </td>

                  <td className="lg:px-6 px-2 lg:py-4 md:table-cell block">
                    <span className="font-bold md:hidden">Price: </span>
                    {appointment?.ticketPrice}
                  </td>
                  <td className="lg:px-6 px-2 lg:py-4 md:table-cell block">
                    <span className="font-bold md:hidden">Booked On: </span>
                    {formatDate(appointment?.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
