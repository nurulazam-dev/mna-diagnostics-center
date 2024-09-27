import contactImg from "../../assets/images/home/contactImg.svg";

const ContactSection = () => {
  return (
    <section className="my-6">
      <div className="px-4 mx-auto">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-4 lg:mb-7 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <div className="lg:flex justify-between block w-full items-center">
          <div className="lg:flex hidden justify-center lg:w-5/12 lg:px-4">
            <img src={contactImg} alt="" />
          </div>
          <div className="lg:w-7/12">
            <form action="#" className="space-y-3">
              <div>
                <label htmlFor="email" className="form_label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="form_input mt-1"
                />
              </div>
              <div>
                <label htmlFor="subject" className="form_label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Let us know how we can help you"
                  className="form_input mt-1"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="form_label">
                  Your Message
                </label>
                <textarea
                  rows="3"
                  type="text"
                  id="message"
                  placeholder="Leave a comment..."
                  className="form_input mt-1"
                />
              </div>
              <button type="submit" className=" customBtn w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
