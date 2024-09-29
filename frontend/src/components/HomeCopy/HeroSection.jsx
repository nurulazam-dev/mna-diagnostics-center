import heroImg01 from "../../assets/images/others/feature-img.png";

const HeroSection = () => {
  return (
    <section className="pt-[30px] 2xl:h-[800px]">
      <div className="container">
        <div className="lg:flex justify-center items-center">
          <div>
            <div className="lg:w-[570px]">
              <p className="text_para lg:text-[24px] text-[18px] font-bold mb-4">
                Welcome to{" "}
                <strong className="text-violet-700">
                  MNA Diagnostics Center
                </strong>{" "}
              </p>
              <h1 className="lg:text-[40px] text-[28px] font-[800] leading-[22px] lg:leading-[30px] text-headingColor md:text-[60px] md:leading-[70px]">
                Your New Smile Start Here
              </h1>
              <p className="text_para">
                Your trusted partner in health. Book appointments with top
                doctors and access a wide range of diagnostic services, all in
                one place. Experience convenient, efficient, and personalized
                care tailored to your needs. Your health, our priority.
              </p>
              <p className="text_para">
                We are dedicated to providing personalized healthcare solutions
                designed to meet your unique needs. Trust us to be your health
                partner every step of the way, ensuring your well-being with
                precision and care.
              </p>
              <div className="flex my-4 lg:mb-0">
                <button className="customBtn bg-green-600 text-white mr-4">
                  Request an Appointment
                </button>
                <button className="customBtn">Read More...</button>
              </div>
            </div>
          </div>
          <div>
            <img src={heroImg01} alt="" className="lg:max-w-md max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
