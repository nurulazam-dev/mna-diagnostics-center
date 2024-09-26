import contactImg from "../../assets/images/home/contactImg.svg";

const ContactSection = () => {
  return (
    <section className="pt-2">
      <div className="px-4 mx-auto">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-10 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <div className="lg:flex justify-between block w-full items-center">
          <div className="lg:flex hidden justify-center lg:w-5/12 lg:px-4">
            <img src={contactImg} alt="" className="" />
          </div>
          <div className="lg:w-7/12">
            <form action="#" className="space-y-8">
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
                  rows="6"
                  type="text"
                  id="message"
                  placeholder="Leave a comment..."
                  className="form_input mt-1"
                />
              </div>
              <button
                type="submit"
                className=" bg-primaryColor text-white text-[18px] rounded-lg px-6 py-2 hover:bg-slate-700 hover:border-none"
              >
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
