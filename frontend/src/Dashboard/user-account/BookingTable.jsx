const BookingTable = () => {
  const bookings = [
    {
      image: "https://via.placeholder.com/50",
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      phone: "+880123456789",
      paymentStatus: "Paid",
      price: "1500 BDT",
      bookedOn: "2024-10-18",
    },
    {
      image: "https://via.placeholder.com/50",
      name: "Dr. Jane Smith",
      specialization: "Dermatologist",
      phone: "+880987654321",
      paymentStatus: "Pending",
      price: "1200 BDT",
      bookedOn: "2024-10-17",
    },
    // Add more bookings here...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal hidden md:table-row">
            {/* 
            <th className="py-3 px-6 text-left">Image</th> */}
            <th className="py-3 px-6 text-left">Doctor</th>
            <th className="py-3 px-6 text-left">Specialization</th>
            <th className="py-3 px-6 text-left">Dr. Phone</th>
            <th className="py-3 px-6 text-left">Payment</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Booked On</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {bookings.map((booking, index) => (
            <tr
              key={index}
              className="md:table-row border-b border-gray-200 hover:bg-gray-100 block"
            >
              <td className="py-3 px-6 text-left lg:flex items-center md:table-cell block">
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="w-10 h-10 rounded-full"
                />
                {booking.name}
              </td>
              <td className="py-3 px-6 text-left md:table-cell block">
                <span className="font-bold md:hidden">Name: </span>
                {booking.name}
              </td>
              <td className="py-3 px-6 text-left md:table-cell block">
                <span className="font-bold md:hidden">Specialization: </span>
                {booking.specialization}
              </td>
              <td className="py-3 px-6 text-left md:table-cell block">
                <span className="font-bold md:hidden">Doctor Phone: </span>
                {booking.phone}
              </td>
              <td className="py-3 px-6 text-left md:table-cell block">
                <span className="font-bold md:hidden">Payment Status: </span>
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    booking.paymentStatus === "Paid"
                      ? "bg-green-200 text-green-600"
                      : "bg-red-200 text-red-600"
                  }`}
                >
                  {booking.paymentStatus}
                </span>
              </td>
              <td className="py-3 px-6 text-left md:table-cell block">
                <span className="font-bold md:hidden">Price: </span>
                {booking.price}
              </td>
              <td className="py-3 px-6 text-left md:table-cell block">
                <span className="font-bold md:hidden">Booked On: </span>
                {booking.bookedOn}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
