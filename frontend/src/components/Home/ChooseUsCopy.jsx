import BGImg from "../../assets/images/bgImg.png";
import WCUImg from "../../assets/images/others/whyChooseUs.png";

const ChooseUsCopy = () => {
  const features = [
    {
      title: "Experienced Specialists",
      description:
        "Our team comprises highly qualified doctors and specialists to ensure the best care.",
      icon: "👩‍⚕️",
    },
    {
      title: "Advanced Equipment",
      description:
        "We use state-of-the-art medical equipment for accurate diagnostics.",
      icon: "🔬",
    },
    {
      title: "Affordable Pricing",
      description:
        "Quality healthcare that is accessible and affordable for everyone.",
      //   icon: "💲",
      icon: "💵",
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is available 24/7 for appointments and queries.",
      icon: "📞",
    },
    {
      title: "Convenient Location",
      description:
        "Located in the heart of Raozan, making it easy for everyone to reach us.",
      icon: "🗺️",
    },
    {
      title: "Comprehensive Diagnostics",
      description:
        "We offer a wide range of tests and services for comprehensive healthcare.",
      icon: "🧪",
    },
    {
      title: "Online Appointment",
      description:
        "Book your appointments easily through our user-friendly website.",
      icon: "🖥️",
    },
    {
      title: "Personalized Care",
      description:
        "Every patient receives personalized and attentive care tailored to their needs.",
      icon: "❤️",
    },
    {
      title: "Fast and Accurate Reports",
      description:
        "Get your test results quickly and accurately to minimize waiting times.",
      icon: "📄",
    },
  ];

  return (
    <section>
      <h2 className="heading text-center">Why Choose Us</h2>
      <div
        className="py-1"
        style={{
          backgroundImage: `url(${BGImg})`,
        }}
      >
        <div className="w-full lg:flex justify-center items-center container">
          <div className="lg:w-[35%] w-full">
            <img src={WCUImg} alt="" />
          </div>
          <div className="lg:w-[65%] w-full">
            {/* ==options=== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center border-t-4 border-slate-400 p-3 bg-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <div className="text-5xl mb-2">{feature.icon}</div>
                  <h3 className="lg:text-[18px] text-[16px] font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-justify leading-5 text-[15px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsCopy;
