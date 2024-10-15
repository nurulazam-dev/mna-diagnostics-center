const AboutChairman = () => {
  return (
    <section className="py-6">
      {/* Chairman's Image */}
      <div className="flex justify-center">
        <img
          src="https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png"
          alt="MNA Ariyan"
          className="rounded-full w-40 h-40 object-cover mb-4"
        />
      </div>

      {/* Chairman's Name */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Message from MNA Ariyan
      </h1>
      <h2 className="text-xl text-center text-gray-600 mb-6">
        Chairman of MNA Diagnostics Center
      </h2>

      {/* Chairman's Message */}
      <p className="text-gray-700 text-justify leading-relaxed mb-6">
        As the Chairman of MNA Diagnostics Center, I am honored to serve in a
        capacity that impacts the health and well-being of our community. Our
        mission is to provide top-tier diagnostic services with a commitment to
        excellence, innovation, and compassion. Every decision we make is driven
        by our desire to offer the best healthcare services, ensuring every
        individual receives the care they deserve.
      </p>

      <p className="text-gray-700 text-justify leading-relaxed mb-6">
        At MNA Diagnostics Center, we continuously invest in state-of-the-art
        technology, skilled professionals, and efficient processes to uphold our
        promise of quality and reliability. We believe in making healthcare
        accessible and affordable for everyone. Together with my dedicated team,
        I look forward to expanding our services and reaching new milestones.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-6">
        <a
          href="https://facebook.com/mnaariyan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a
          href="https://twitter.com/mnaariyan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com/in/mnaariyan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default AboutChairman;
