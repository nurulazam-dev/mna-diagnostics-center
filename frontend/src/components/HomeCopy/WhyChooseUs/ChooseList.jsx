import { chooseData } from "../../../assets/data/chooseListData";

const ChooseList = () => {
  return (
    <div className="container mt-[15px] lg:mt-[35px]">
      <div className="grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-4 gap-[2px] lg:gap-[3px] lg:mx-2">
        {chooseData.map((data, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <img src={data?.img} alt="" className="h-[120px] w-[120px]" />
            </div>
            <div className="text-center pt-[5px] px-1 lg:px-2">
              <h2 className="text-[23px] leading-5 font-semibold text-black">
                {data?.title}
              </h2>
              <p className="text-[12px] leading-5 mt-3">{data?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseList;
