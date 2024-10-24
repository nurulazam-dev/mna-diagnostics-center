import { formatDate } from "../../utils/formatDate";

/* eslint-disable react/prop-types */
const Appointments = ({ appointments }) => {
  return (
    <table className="w-full text-left text-sm text-green-500">
      <thead className="text-sm text-violet-600 text-center uppercase bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Payment
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Booked on
          </th>
        </tr>
      </thead>

      <tbody className="text-textColor">
        {appointments?.map((item) => (
          <tr key={item._id} className="border-b">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <img
                src={item.user.photo}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{item.user.name} </div>
                <div className="text-normal text-gray-500">
                  {item.user.email}{" "}
                </div>
              </div>
            </th>
            <td className="px-6 py-4">{item.user.gender}</td>
            <td className="px-6 py-4">
              {item.isPaid && (
                <div className="flex justify-center items-center bg-green-200 text-green-600 py-1 px-[9px] rounded-full text-[12px]">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                  Paid
                </div>
              )}
              {!item.isPaid && (
                <div className="flex justify-center items-center bg-red-200 text-red-600 py-1 px-[9px] rounded-full text-[12px]">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                  Unpaid
                </div>
              )}
            </td>
            <td className="px-6 py-4">{item.ticketPrice}</td>
            <td className="px-6 py-4">{formatDate(item.createdAt)}</td>
          </tr>
        ))}
      </tbody>
      {appointments.length == 0 && (
        <h2 className="text-red-600 animate-pulse text-[16px] my-3">
          Not booked any appointment.
        </h2>
      )}
    </table>
  );
};

export default Appointments;
