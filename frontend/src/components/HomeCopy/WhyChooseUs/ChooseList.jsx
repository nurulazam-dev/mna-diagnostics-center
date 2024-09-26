import { chooseData } from "../../../assets/data/chooseListData";

const ChooseList = () => {
  return (
    <div className="container mt-[15px] lg:mt-[35px] px-7">
      <div className="grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-4 gap-[2px] lg:gap-[5px] lg:mx-20">
        {chooseData.map((data, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <img
                src={data?.img}
                alt=""
                className="border rounded-full h-[100px] w-[100px]"
              />
            </div>
            <div className="text-center pt-[5px] px-1 lg:px-3">
              <h2 className="text-[23px] leading-5 font-[600]">
                {data?.title}
              </h2>
              <p className="text-[13px] leading-5 mt-4">{data?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseList;
