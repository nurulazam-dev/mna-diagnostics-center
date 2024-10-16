import { managementTeams } from "../../assets/data/managementTeams";

const AboutManagementTeam = () => {
  return (
    <section className="pb-2">
      <h2 className="text-2xl font-bold text-center mb-2">
        Meet Our Management Team
      </h2>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {managementTeams.map((member) => (
          <div
            key={member.id}
            className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:-translate-y-2 duration-300"
          >
            <img src={member.photo} alt={member.name} />
            <div className="pb-2 text-center">
              <h3 className="text-[16px] lg:text-[18px] font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600  text-[12px] lg:text-[14px]">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutManagementTeam;
