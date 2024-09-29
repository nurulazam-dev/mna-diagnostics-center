// import heroImg01 from "../../assets/images/others/feature-img.png";
import heroImg01 from "../../assets/images/home/hero/heroImg.png";

const HeroSection = () => {
  return (
    <section className="container pt-[15px] 2xl:h-[800px] lg:px-10">
      <div className="lg:flex justify-center items-center">
        <div>
          <div className="lg:w-[570px]">
            <div className="lg:text-[40px] text-[28px] font-[800] leading-[22px] lg:leading-[30px]  md:text-[60px] md:leading-[70px]">
              <h1>Welcome to</h1>
              <h1 className="text-violet-700 font-mono mt-2">
                MNA Diagnostics Center
              </h1>
            </div>

            <p className="text_para">
              Your trusted partner in health. Book appointments with top doctors
              and access a wide range of diagnostic services, all in one place.
              Experience convenient, efficient, and personalized care tailored
              to your needs. Your health, our priority.
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
          <img src={heroImg01} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
