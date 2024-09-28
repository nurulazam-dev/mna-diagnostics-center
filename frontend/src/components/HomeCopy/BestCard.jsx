import call from "../../assets/images/home/card/call.png";
import clock from "../../assets/images/home/card/clock.png";
import location from "../../assets/images/home/card/location.png";

const BestCard = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      desc: "Every day, every time. 24/7",
      bgColor: "from-white to-green-500",
      icon: clock,
    },
    {
      id: 2,
      title: "Our Location ",
      desc: "Raozan, Chattogram, BD.",
      bgColor: "from-violet-200 to-green-200",
      icon: location,
    },
    {
      id: 3,
      title: "Contact Us Now",
      desc: "+88 01800-123456",
      bgColor: "from-green-500 to-white",
      icon: call,
    },
  ];
  return (
    <section className="container my-5 px-10 w-full md:w-[90%] lg:w-[85%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cardData.map((data, id) => (
          <div
            className={`flex justify-between px-4 items-center bg-gradient-to-r ${data.bgColor} rounded py-2`}
            key={id}
          >
            <img src={data.icon} alt="" />
            <div className="">
              <h3 className="text-[25px] font-bold">{data?.title}</h3>
              <p>{data?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestCard;
