import { awards } from "../../assets/data/awards";

const Awards = () => {
  return (
    <section className="container mb-10">
      <h1 className="heading text-center">Winning Awards</h1>

      <div className="lg:flex justify-center">
        {awards.map((award) => (
          <div
            key={award.id}
            className="flex justify-between items-center border rounded px-3 mx-3 shadow-md"
          >
            <img
              src={award.photo}
              alt="Award"
              className="lg:max-w-40 max-w-32"
            />
            <div>
              <h2 className="lg:text-[22px] text-[16px] font-semibold">
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
