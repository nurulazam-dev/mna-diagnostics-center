import { Link } from "react-router-dom";
import aboutCardImg from "../../assets/images/others/about-card.png";
import aboutImg from "../../assets/images/others/about.png";

function About() {
  return (
    <section>
      <div className="container">
        <div className="flex gap-[50px] lg:gap-[130px] xl:gap-0 justify-between flex-col lg:flex-row">
          {/* ===about img part=== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* ===about content=== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              For 30 years in a row, U.S. news & world report has recognized us
              as one of the best publics in the nation and #1 in texas. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Odit, quis.
            </p>
            <p className="text_para mt-[30px]">
              Our best is something we strive for each day, caring for our
              patients-not looking back at what we accomplished but towards what
              we can do tomorrow. Providing th ebest. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maiores, nostrum!
            </p>

            <Link to="/">
              <button className="btn hover:bg-slate-700 hover:border-none">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
