import { FaBell, FaHeartbeat, FaUserCheck } from "react-icons/fa";

const AppointmentReminders = () => {
  return (
    <section className="px-6">
      <h2 className="heading text-center">
        Appointment Reminders & Follow-ups
      </h2>
      <p className="text-center text-gray-600 text-[16px] mb-3 max-w-2xl mx-auto">
        MNA Diagnostics Center is dedicated to helping you manage your health
        with ease and consistency. Explore our automated reminders, personalized
        follow-ups, and health tracking tools.
      </p>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-violet-600"></div>

        {/* Timeline Item 1: Automated Reminders */}
        <div className="mb-3 flex items-center w-full">
          <div className="w-1/2 pr-8 flex justify-end">
            <div className="bg-white rounded-lg shadow-lg lg:p-6 p-2 max-w-md transform hover:-translate-y-2 transition duration-300 relative">
              <div className="absolute -right-14 top-2 flex items-center justify-center bg-violet-600 text-white rounded-full w-10 h-10">
                <FaBell className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-violet-600 mb-2">
                Automated Reminders
              </h3>
              <p className="text-gray-600 text-[14px]">
                Receive timely reminders for upcoming appointments via SMS,
                email, or mobile notifications to stay on track.
              </p>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>

        {/* Timeline Item 2: Personalized Follow-ups */}
        <div className="mb-3 flex items-center w-full">
          <div className="w-1/2"></div>
          <div className="w-1/2 pl-8 flex justify-start">
            <div className="bg-white rounded-lg shadow-lg lg:p-6 p-2 max-w-md transform hover:-translate-y-2 transition duration-300 relative">
              <div className="absolute -left-14 top-2 flex items-center justify-center bg-violet-600 text-white rounded-full w-10 h-10">
                <FaUserCheck className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-violet-600 mb-2">
                Personalized Follow-ups
              </h3>
              <p className="text-gray-600 text-[14px]">
                Post-appointment follow-ups tailored to your health needs, with
                guidance from our health experts.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Item 3: Health Tracking */}
        <div className="flex items-center w-full">
          <div className="w-1/2 pr-8 flex justify-end">
            <div className="bg-white rounded-lg shadow-lg lg:p-6 p-2 max-w-md transform hover:-translate-y-2 transition duration-300 relative">
              <div className="absolute -right-14 top-2 flex items-center justify-center bg-violet-600 text-white rounded-full w-10 h-10">
                <FaHeartbeat className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-violet-600 mb-2">
                Health Tracking
              </h3>
              <p className="text-gray-600 text-[14px]">
                Track your health progress and receive insights to help you stay
                engaged and informed.
              </p>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentReminders;
