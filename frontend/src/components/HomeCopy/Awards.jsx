import { awards } from "../../assets/data/awards";

const Awards = () => {
  return (
    <section className="p-4 lg:p-12">
      <h1 className="heading text-center">Winning Awards</h1>
      {/* main div */}
      <div className="flex justify-center mt-3">
        {/* card */}
        {awards.map((award) => (
          <div
            key={award.id}
            className="flex justify-between items-center border rounded px-3 mx-3"
          >
            <img src={award.photo} alt="" className="max-w-40" />
            <div>
              <h2 className="text-2xl font-semibold">{award.name}</h2>
              <p className="">description</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
