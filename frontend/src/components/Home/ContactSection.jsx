import { BsSend } from "react-icons/bs";
// import contactImg from "../../assets/images/home/contactImg.svg";
import contactImg from "../../assets/images/home/contact.gif";

const ContactSection = () => {
  return (
    <section className="my-6 w-full md:w-[95%] lg:w-[90%] mx-auto">
      <div className="px-4 mx-auto">
        <h2 className="heading text-center">Contact Us</h2>
        <div className="lg:flex justify-between block w-full items-center">
          <div className="lg:flex hidden justify-center lg:w-5/12 lg:px-4">
            <img src={contactImg} alt="" />
          </div>
          <div className="lg:w-7/12">
            <form action="#" className="space-y-3">
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="form_input mt-1"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="form_input mt-1"
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  rows="3"
                  type="text"
                  id="message"
                  placeholder="Your Message"
                  className="form_input mt-1"
                />
              </div>
              <button
                type="submit"
                className="customBtn text-[18px] lg:w-2/5 w-full font-bold flex justify-center items-center"
              >
                Submit{" "}
                <BsSend className="group-hover:text-green-700 w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
