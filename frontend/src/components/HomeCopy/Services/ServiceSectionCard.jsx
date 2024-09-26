/* eslint-disable react/prop-types */

const ServiceSectionCard = ({ service }) => {
  const { name, desc, textColor, serviceImg } = service;

  return (
    <div className="border rounded">
      <img src={serviceImg} alt="" />
      <div className="pt-[5px] pb-[20px] px-3 lg:px-5 ">
        <h2
          className="text-[26px] leading-6 font-[700]"
          style={{ color: `${textColor}` }}
        >
          {name}
        </h2>
        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
