// import heroImg01 from "../../assets/images/others/feature-img.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import heroImg01 from "../../assets/images/home/hero/heroImg.png";

const HeroSection = () => {
  return (
    <section className="container pt-[15px] 2xl:h-[800px] lg:px-10">
      <div className="lg:flex justify-center items-center">
        <div>
          <div className="lg:w-[570px]">
            <div className="lg:text-[40px] md:text-[32px] text-[28px] font-[800] leading-[22px] lg:leading-[30px] md:leading-[70px]">
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
            <div className="lg:flex md:flex my-4 lg:mb-0">
              <Link to="/services" className="flex justify-center mr-5">
                <button className="customBtn bg-green-600 flex items-center text-white">
                  Request an Appointment{" "}
                  <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
                </button>
              </Link>

              <Link to="/about" className="flex justify-center ">
                <button className="customBtn flex items-center">
                  Read More...{" "}
                  <BsArrowRight className="group-hover:text-white w-6 h-6 ml-2" />
                </button>
              </Link>
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
