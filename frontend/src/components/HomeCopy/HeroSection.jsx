import heroImg01 from "../../assets/images/others/feature-img.png";

const HeroSection = () => {
  return (
    <section className="pt-[30px] 2xl:h-[800px]">
      <div className="container">
        <div className="lg:flex justify-center items-center">
          {/* ======hero content====== */}
          <div>
            <div className="lg:w-[570px]">
              {/* <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]"> */}
              <h1 className="lg:text-[40px] text-[28px] font-[800] leading-[22px] lg:leading-[30px] text-headingColor md:text-[60px] md:leading-[70px]">
                Your New Smile Start Here
              </h1>
              <p className="text_para">Check out our services & facilities</p>
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
