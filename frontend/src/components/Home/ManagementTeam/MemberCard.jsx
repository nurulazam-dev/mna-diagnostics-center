/* eslint-disable react/prop-types */
const MemberCard = ({ member }) => {
  const { photo, name, position, email } = member;

  return (
    <div className="w-[320px] h-[320px] lg:w-[400px] lg:h-[375px] bg-accent rounded-md text-white shadow hover:shadow-xl hover:shadow-accent duration-75">
      <img src={photo} alt={name} className="" />
      <div className="py-2 text-center">
        <h2 className="text-[18px] lg:text-[24px] font-bold text-gray-800">
          {name}
        </h2>
        <h6 className="text-gray-600  text-[14px] lg:text-[16px]">
          {position}
        </h6>
        <p className="text-violet-600  text-[15px] lg:text-[17px]">{email}</p>
      </div>
    </div>
  );
};

export default MemberCard;
