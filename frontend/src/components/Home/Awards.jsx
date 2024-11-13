import { awards } from "../../assets/data/awards";

const Awards = () => {
  return (
    <section className="container mb-5 lg:mb-10">
      <h1 className="heading text-center">Winning Awards</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {awards.map((award) => (
          <div
            key={award.id}
            className="flex justify-between items-center border rounded px-3 mx-3 shadow-md mb-4 lg:mb-0"
          >
            <img
              src={award.photo}
              alt="Award"
              className="lg:max-w-32 max-w-24"
            />
            <div>
              <h2 className="lg:text-[22px] text-[16px] font-bold leading-6 mb-2 text-yellow-600">
                {award.name}
              </h2>
              <p className="text-violet-600 lg:text-[16px] text-[11px]">
                {award.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
