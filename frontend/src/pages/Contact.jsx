import bgImg from "../assets/images/bgImg.png";
import contactImg from "../assets/images/home/contactImg.svg";

const Contact = () => {
  return (
    <section
      className=" py-8 lg:px-12"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* <section className="bg-gray-100 py-8 lg:px-12"> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
          {/* Left Part: Image and Contact Info */}
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
            {/* Image with Animation */}
            <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out flex justify-center">
              <img
                src={contactImg}
                alt="Contact"
                className="lg:max-w-sm max-w-xs h-full object-cover"
              />
            </div>
            {/* Contact Information */}
            <div className="mt-[2px]">
              <h2 className="lg:text-2xl text-xl font-bold text-violet-500">
                Contact Information:
              </h2>
              <p className="mt-[3px] text-gray-600">
                <strong>Phone:</strong> +8801234-567890
                <br />
                <strong>Email:</strong> info@mnadiagnostics.com
                <br />
                <strong>Fax:</strong> +88 09876 543210
              </p>
            </div>
          </div>

          {/* Right Part: Contact Form */}
          <div className="w-full lg:w-3/5 lg:px-8 px-4">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Type your message"
                />
              </div>
              <div>
                <button type="submit" className="w-full customBtn rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
