import { chooseData } from "../../../assets/data/chooseListData";

const ChooseList = () => {
  return (
    <div className="container mt-[30px] lg:mt-[55px]">
      <div className="grid grid-cols-1 mg:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px]">
        {/* {services.map((service, index) => (
          <ServiceSectionCard service={service} index={index} key={index} />
        ))} */}
        {chooseData.map((data, index) => (
          <div key={index} className="border rounded">
            <img src={data?.img} alt="" />
            <div className="pt-[5px] pb-[20px] px-3 lg:px-5 ">
              <h2 className="text-[26px] leading-6 font-[700]">
                {data?.title}
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                {data?.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseList;
