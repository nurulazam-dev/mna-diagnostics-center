import aboutUsCover from "../assets/images/about/aboutUs-cover.png";
import AboutDC from "../components/AboutUs/AboutDC";

const AboutUs = () => {
  return (
    <section className="container">
      <div className="">
        <div className="my-2">
          <img src={aboutUsCover} alt="About Us" />
        </div>
        <h1 className="heading text-center">About Us</h1>
        {/* ======tabs========= */}
        <li className="flex justify-center items-center gap-10 bg-gray-100 py-4 rounded shadow-lg text-gray-800 font-bold text-[16px]">
          <ul className="cursor-pointer hover:text-violet-600">
            About Diagnostics Center
          </ul>
          <ul className="cursor-pointer hover:text-violet-600">
            Message from Chairman
          </ul>
          <ul className="cursor-pointer hover:text-violet-600">
            Message From Managing Director
          </ul>
          <ul className="cursor-pointer hover:text-violet-600">
            Management Team
          </ul>
        </li>

        <section className="w-[90%] mx-auto my-5">
          {/* display tab */}
          <AboutDC />
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
