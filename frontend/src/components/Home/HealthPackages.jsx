import { IoMdCheckmarkCircle } from "react-icons/io";

const HealthPackages = () => {
  const packages = [
    {
      name: "Basic Health Check",
      description:
        "Comprehensive screening covering essen-tial tests for overall health.",
      price: "$70",
      facilities: [
        "Blood pressure check",
        "Cholesterol and glucose tests",
        "BMI analysis",
        "Basic vision screening",
        "General physician consultation",
      ],
      image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
    },
    {
      name: "Senior Health Package",
      description:
        "Designed for individuals over 60, covering key health checks for aging.",
      price: "$120",
      facilities: [
        "Heart function test (ECG)",
        "Bone density scan",
        "Kidney function test",
        "Eye and hearing assessment",
        "General health consultation",
      ],
      image: "https://via.placeholder.com/300x200",
    },
    {
      name: "Full Body Checkup",
      description:
        "Complete examination covering all major systems for a thorough health.",
      price: "$150",
      facilities: [
        "Complete blood profile",
        "Liver and kidney function tests",
        "Heart health assessment (ECG)",
        "Comprehensive vision & hearing check",
        "Consultation with specialist doctors",
      ],
      image: "https://via.placeholder.com/300x200",
    },
  ];
  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        Our Health Packages
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white border border-indigo-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 pt-2 flex flex-col justify-between">
              <h3 className="text-[20px] lg:text-[24px] font-bold text-indigo-800 mb-1 text-center">
                {pkg.name}
              </h3>
              <p className="text-[16px] text-gray-600 mb-3 text-justify">
                {pkg.description}
              </p>
              <ul className="text-gray-500 pl-2 mb-4 space-y-1 text-[14px]">
                {pkg.facilities.map((facility, idx) => (
                  <li key={idx} className="flex items-center">
                    <IoMdCheckmarkCircle className="w-4 h-4 text-green-600 mr-1" />
                    {facility}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <p className="text-[24px] font-bold text-violet-700">
                  {pkg.price}
                </p>
                <button className="px-4 py-2 bg-violet-700 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPackages;
