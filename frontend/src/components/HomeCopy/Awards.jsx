import { awards } from "../../assets/data/awards";

const Awards = () => {
  return (
    <section className="p-4 lg:p-12">
      <h1 className="heading mb-2">Winning Awards</h1>
      <div className="h-[6px] w-[20%] bg-gradient-to-r from-violet-300 to-green-300"></div>
      <div className="lg:flex justify-center mt-3">
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
