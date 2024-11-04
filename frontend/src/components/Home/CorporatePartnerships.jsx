import { FaBriefcaseMedical, FaHeartbeat, FaHospital } from "react-icons/fa";

const CorporatePartnerships = () => {
  return (
    <section className="px-6 lg:px-24">
      <h2 className="heading text-center">Corporate Partnerships</h2>
      <div className="text-center text-gray-500 pb-3">
        <p className="text-md mb-5">
          Join forces with MNA Diagnostics Center to enhance employee well-being
          and foster a healthier workplace. Our corporate health programs
          provide comprehensive checkups and personalized support tailored to
          your team&apos;s needs.
        </p>

        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <FaBriefcaseMedical className="text-5xl text-blue-500 mb-2" />
            <h3 className="text-xl font-bold mb-2">Employee Health Checkups</h3>
            <p className="text-gray-600">
              Regular checkups to ensure the well-being and productivity of your
              team.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <FaHeartbeat className="text-5xl text-blue-500 mb-2" />
            <h3 className="text-xl font-bold mb-2">Customized Health Plans</h3>
            <p className="text-gray-600">
              Choose from flexible health packages designed to suit various
              corporate needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <FaHospital className="text-5xl text-blue-500 mb-2" />
            <h3 className="text-xl font-bold mb-2">On-Site Health Camps</h3>
            <p className="text-gray-600">
              Convenient on-site health assessments to encourage a healthy work
              environment.
            </p>
          </div>
        </div>

        <div className="mt-3">
          <button
            href="/contact"
            className="inline-block customBtn transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CorporatePartnerships;
