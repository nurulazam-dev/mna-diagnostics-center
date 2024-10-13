const AboutMD = () => {
  return (
    <section className="lg:flex justify-center items-center w-full">
      {/* MD Image */}
      <div className="text-center w-full lg:w-1/3">
        <img
          className="mx-auto rounded shadow-lg w-40 h-40 md:w-48 md:h-48 lg:h-60 lg:w-60"
          src="https://nurulazam-dev.web.app/path-to-md-image.jpg"
          alt="Managing Director"
        />
        <h1 className="text-[18px] lg:text-[22px] font-bold text-gray-800">
          Mohammad Nurul Azam
        </h1>
        <p className="text-[15px] lg:text-[18px] text-gray-600 mb-4">
          Managing Director,
          <br /> <strong>MNA Diagnostics Center</strong>
        </p>
      </div>
      <div className="w-full lg:w-2/3">
        {/* MD's Message */}
        <div className="text-left text-gray-700 text-[14px] lg:text-[17px]">
          <p className="mb-2 leading-8 text-justify">
            Dear valued customers, <br />
            At MNA Diagnostics Center, we are dedicated to providing you with
            top-quality medical diagnostics services, supported by cutting-edge
            technology and a dedicated team of professionals. Our mission is to
            ensure that each patient receives personalized care and accurate
            diagnostics, which are critical in the journey toward better health.{" "}
            <br />
            We are committed to maintaining the highest standards in everything
            we do and are continually evolving to meet the growing demands of
            healthcare. We are dedicated to providing accurate and timely
            medical diagnostic services, empowering both doctors and patients.
            <br /> Thank you for placing your trust in us.
          </p>
          <p className="text-lg font-semibold">- Mohammad Nurul Azam</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-2 flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMD;
