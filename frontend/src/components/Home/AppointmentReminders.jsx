const AppointmentReminders = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-12">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Appointment Reminders & Follow-ups
      </h2>
      <p className="text-gray-700 text-center mb-6">
        At MNA Diagnostics Center, we ensure that you stay updated and supported
        even after your appointments. Our automated reminder system and
        follow-up services are designed to keep you on track with your health.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {/* Reminder Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Automated Reminders
          </h3>
          <p className="text-gray-600">
            Get timely reminders for upcoming appointments via SMS, email, or
            app notifications. Never miss an appointment again.
          </p>
        </div>

        {/* Follow-up Options Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Follow-up Support
          </h3>
          <p className="text-gray-600">
            Receive follow-up notifications after your appointment for
            personalized health advice and recommendations.
          </p>
        </div>

        {/* Health Tracking Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Health Tracking
          </h3>
          <p className="text-gray-600">
            Track your health progress and receive updates through our app,
            keeping you engaged and informed.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AppointmentReminders;
