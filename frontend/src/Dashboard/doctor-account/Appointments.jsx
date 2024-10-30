import { formatDate } from "../../utils/formatDate";

/* eslint-disable react/prop-types */
const Appointments = ({ appointments }) => {
  return (
    <section className="">
      <h1 className="lg:text-[28px] text-[22px] font-serif bg-green-600 text-center text-white font-bold mb-2 py-2">
        Appointments
      </h1>
      <table className="w-full text-left text-sm text-green-500">
        <thead>
          <tr className="text-sm text-violet-600 text-center uppercase hidden md:table-row bg-gray-100">
            <th className="px-6 py-3">Patient</th>
            <th className="px-6 py-3">Gender</th>
            <th className="px-6 py-3">Payment</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Booked on</th>
          </tr>
        </thead>

        <tbody className="text-textColor">
          {appointments?.map((item) => (
            <tr
              key={item._id}
              className="md:table-row border-b lg:py-0 py-3 border-gray-200 hover:bg-gray-100 block mb-2 lg:mb-0"
            >
              <td className="flex items-center lg:justify-start justify-center lg:px-6 px-2 lg:py-4 text-gray-900 whitespace-nowrap mb-2 lg:mb-0">
                <img
                  src={item.user.photo}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    {item.user.name}{" "}
                  </div>
                  <div className="text-normal text-gray-500">
                    {item.user.email}{" "}
                  </div>
                </div>
              </td>

              <td className="lg:px-6 px-2 lg:py-4 md:table-cell block">
                <span className="font-bold md:hidden">Gender: </span>
                {item.user.gender}
              </td>

              <td className="lg:px-6 px-2 lg:py-4 md:table-cell flex  items-center">
                <span className="font-bold md:hidden mr-1">Payment: </span>
                {item.isPaid && (
                  <div className="flex justify-center items-center lg:bg-green-200 text-green-600 py-1 px-[9px] rounded-full text-[12px]">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                    Paid
                  </div>
                )}
                {!item.isPaid && (
                  <div className="flex justify-center items-center lg:bg-red-200 text-red-600 py-1 px-[9px] rounded-full text-[12px]">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                    Unpaid
                  </div>
                )}
              </td>
              <td className="lg:px-6 px-2 lg:py-4 md:table-cell block">
                <span className="font-bold md:hidden">Price: </span>
                {item.ticketPrice}
              </td>
              <td className="lg:px-6 px-2 lg:py-4 md:table-cell block">
                <span className="font-bold md:hidden">Booked On: </span>
                {formatDate(item.createdAt)}
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
    </section>
  );
};

export default Appointments;
