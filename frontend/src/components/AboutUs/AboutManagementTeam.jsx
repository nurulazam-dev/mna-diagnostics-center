import MTMemberImg from "../../assets/images/about/management-team/1.png";
import MTMember2Img from "../../assets/images/about/management-team/2.png";
import MTMember3Img from "../../assets/images/about/management-team/3.png";
import MTMember4Img from "../../assets/images/about/management-team/4.png";
import MTMember5Img from "../../assets/images/about/management-team/5.png";
import MTMember6Img from "../../assets/images/about/management-team/6.png";
import MTMember7Img from "../../assets/images/about/management-team/7.png";

const AboutManagementTeam = () => {
  const managementTeam = [
    {
      id: "001",
      name: "MNA Ariyan",
      position: "Chairman",
      photo: MTMember2Img,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMemberImg,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMember3Img,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMember4Img,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMember5Img,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMember6Img,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMember7Img,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMemberImg,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMemberImg,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMemberImg,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMemberImg,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMemberImg,
    },
    {
      id: "002",
      name: "Dr. Mohammad Nurul Azam",
      position: "Managing Director",
      photo: MTMemberImg,
    },
  ];

  return (
    <section className="pb-2">
      <h2 className="text-2xl font-bold text-center mb-2">
        Meet Our Management Team
      </h2>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {managementTeam.map((member) => (
          <div
            key={member.id}
            className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:-translate-y-2 duration-300"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-50 mx-auto h-48 object-cover"
            />
            <div className="pb-2 text-center">
              <h3 className="text-[16px] lg:text-[18px] font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutManagementTeam;
