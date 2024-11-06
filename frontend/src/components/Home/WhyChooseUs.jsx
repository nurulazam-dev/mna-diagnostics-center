import { whyChooseUsData } from "../../assets/data/whyChooseUsData";
import BGImg from "../../assets/images/bgImg.png";
import WCUImg from "../../assets/images/others/whyChooseUs.png";

const WhyChooseUs = () => {
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
          <div className="lg:w-[35%] w-full lg:block hidden">
            <img src={WCUImg} alt="" />
          </div>
          <div className="lg:w-[65%] w-full">
            {/* ==options=== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3 lg:my-0">
              {whyChooseUsData.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center border-t-4 border-slate-400 p-3 bg-white shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <div className="text-5xl mb-2">{feature.icon}</div>
                  <h3 className="lg:text-[18px] text-[16px] font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-justify leading-5 text-[13px]">
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

export default WhyChooseUs;
