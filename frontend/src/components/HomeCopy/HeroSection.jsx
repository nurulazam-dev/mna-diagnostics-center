import heroImg01 from "../../assets/images/others/feature-img.png";

const HeroSection = () => {
  return (
    <section className="pt-[30px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex">
          {/* ======hero content====== */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                Your New Smile Start Here
              </h1>
              <p className="text_para">Check out our services & facilities</p>
              <div className="flex">
                <button className="btn hover:bg-slate-700 hover:border-none mr-4">
                  Request an Appointment
                </button>
                <button className="btn hover:bg-slate-700 hover:border-none">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src={heroImg01} alt="" className="max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
