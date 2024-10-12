const AboutDC = () => {
  return (
    <div>
      {/* Introduction */}
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Welcome to{" "}
        <span className="font-semibold text-gray-900">
          MNA Diagnostics Center
        </span>
        , a leading healthcare diagnostics facility located in Raozan,
        Chattogram. We are dedicated to providing accurate and timely medical
        diagnostic services, empowering both doctors and patients with the data
        they need to make informed healthcare decisions.
      </p>

      {/* Goals & Objectives */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Our Goals & Objectives
        </h2>
        <p className="text-lg text-gray-600">
          At MNA Diagnostics Center, our primary goal is to offer comprehensive
          diagnostic solutions with the highest standards of accuracy and
          precision. We strive to create a seamless experience for our patients
          and doctors by combining advanced technology with compassionate care.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
          <li>Deliver accurate test results in a timely manner.</li>
          <li>
            Ensure a smooth and easy doctor booking process for all patients.
          </li>
          <li>Maintain state-of-the-art equipment for reliable diagnostics.</li>
          <li>
            Continuously improve and innovate to meet global healthcare
            standards.
          </li>
        </ul>
      </section>

      {/* Our Vision */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Our Vision
        </h2>
        <p className="text-lg text-gray-600">
          Our vision is to become a trusted name in the healthcare industry by
          providing quality diagnostics services that help improve the health
          and well-being of our community. We aim to make the doctor booking
          process more accessible and convenient for patients, fostering a
          stronger connection between healthcare providers and patients.
        </p>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Patient-Centered Care
            </h3>
            <p className="text-gray-600">
              We put the needs and well-being of our patients first, ensuring
              they receive the best possible care and attention throughout their
              diagnostic journey.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Integrity & Accuracy
            </h3>
            <p className="text-gray-600">
              We adhere to strict ethical standards and guarantee the highest
              level of accuracy in our test results, ensuring patients can trust
              us with their health.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Innovation & Technology
            </h3>
            <p className="text-gray-600">
              We constantly evolve by incorporating the latest advancements in
              diagnostic technology to provide cutting-edge services to our
              community.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Compassion & Care
            </h3>
            <p className="text-gray-600">
              Our team is committed to providing compassionate care, ensuring
              that every patient feels respected and supported throughout their
              visit.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <p className="text-lg text-gray-600">
        Thank you for choosing{" "}
        <span className="font-semibold text-gray-900">
          MNA Diagnostics Center
        </span>
        . We look forward to serving you and being a part of your healthcare
        journey.
      </p>
    </div>
  );
};

export default AboutDC;
