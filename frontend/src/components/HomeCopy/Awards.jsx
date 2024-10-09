import { awards } from "../../assets/data/awards";

const Awards = () => {
  return (
    <section className="p-4 lg:p-12">
      <h1 className="heading text-center">Winning Awards</h1>
      {/* main div */}
      <div className="">
        {/* card */}
        {awards.map((award) => (
          <div key={award.id} className="">
            <h2 className="">{award.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
