import { IoMdCheckmarkCircle } from "react-icons/io";
import { packages } from "../../assets/data/packagesData";

const HealthPackages = () => {
  return (
    <section className="container mb-10">
      <h2 className="heading text-center">Our Health Packages</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white border border-indigo-200 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden relative"
          >
            <div className="absolute -top-3 -right-3 bg-green-600 text-white pl-3 pb-1 pt-3 pr-5 rounded-2xl text-[24px] font-bold shadow-md">
              {pkg.price}
            </div>

            <img src={pkg.image} alt={pkg.name} className="w-full h-[190px]" />

            <div className="px-6 pb-2 flex flex-col justify-between">
              <h3 className="text-[20px] lg:text-[25px] font-bold text-indigo-800 mb-1 text-center">
                {pkg.name}
              </h3>
              <p className="text-[16px] text-gray-600 mb-3 text-justify">
                {pkg.description}
              </p>
              <ul className="text-gray-500 pl-1 mb-2 space-y-1 text-[14px]">
                {pkg.facilities.map((facility, idx) => (
                  <li key={idx} className="flex items-center">
                    <IoMdCheckmarkCircle className="w-4 h-4 text-green-600 mr-1" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-violet-700 text-white font-medium hover:bg-green-700 transition-colors text-center py-2 text-lg">
              Book Now
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthPackages;
