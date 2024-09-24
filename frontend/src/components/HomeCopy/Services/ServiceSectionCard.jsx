/* eslint-disable react/prop-types */

const ServiceSectionCard = ({ service }) => {
  const { name, desc, textColor } = service;

  return (
    <div className="py-[30px] px-3 lg:px-5 border rounded">
      <h2
        className="text-[26px] leading-9 font-[700]"
        style={{ color: `${textColor}` }}
      >
        {name}
      </h2>
      <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
        {desc}
      </p>
    </div>
  );
};

export default ServiceSectionCard;
