import CountdownBg from "../../assets/images/home/CountdownBg.png";

const Countdown = () => {
  return (
    <section
      className="bg-cover bg-center py-6 my-4 w-[90%] mx-auto rounded-md"
      style={{
        backgroundImage: `url(${CountdownBg})`,
      }}
    >
      <div className="container mx-auto text-center text-gray-900">
        <h1 className="text-xl lg:text-2xl font-bold mb-5 font-mono text-green-600">
          Why Choose MNA Diagnostics Center?
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {/* Year of Experiences */}
          <div className="">
            <h3 className="text-5xl font-bold">12+</h3>
            <p className="mt-2 text-lg">Years of Experiences</p>
          </div>

          {/* Patients Satisfaction */}
          <div className="">
            <h3 className="text-5xl font-bold">98%</h3>
            <p className="mt-2 text-lg">Patients Satisfaction</p>
          </div>
          {/* Patients Served */}
          <div className="">
            <h3 className="text-5xl font-bold">50,000+</h3>
            <p className="mt-2 text-lg">Patients Served Annually</p>
          </div>
          {/* Winning Awards */}
          <div className="">
            <h3 className="text-5xl font-bold">30+</h3>
            <p className="mt-2 text-lg">Winning Awards</p>
          </div>
          {/* Doctors & Staffs */}
          <div className="">
            <h3 className="text-5xl font-bold">125+</h3>
            <p className="mt-2 text-lg">Doctors & Staffs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
