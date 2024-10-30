/* eslint-disable react/prop-types */

const ServiceSectionCard = ({ service }) => {
  const { name, desc, textColor, serviceImg } = service;

  return (
    <div className="border rounded shadow-md transform transition hover:-translate-y-2 duration-300">
      <img src={serviceImg} alt="" />
      <div className="pt-[5px] pb-[15px] px-3 lg:px-5 ">
        <h2
          className="text-[26px] leading-6 font-[700]"
          style={{ color: `${textColor}` }}
        >
          {name}
        </h2>
        <p className="text-[14px] leading-5 text-textColor font-[400] mt-3 text-justify">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
