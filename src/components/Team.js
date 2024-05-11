import { teamMembers } from "../datas/alldatas";
const Team = () => {
  const Card = ({ member }) => {
    return (
      <div
        className="t-card w-11/12 md:w-[520px] h-full md:h-[330px] rounded-2xl shadow-md p-5 m-1 flex flex-col "
        data-aos="zoom-in"
        data-aos-offset="0"
      >
        <div className="top flex gap-3 h-1-/3">
          <div className="img-ctn flex justify-center items-center">
            <img
              className="object-center"
              src={`./images/${member?.photo}`}
              alt=""
            />
          </div>
          <div className="name-title flex flex-col justify-center">
            <h3 className="font-bold text-lg color_1">{member?.name}</h3>
            <h4 className="font-semibold text-sm">{member?.job}</h4>
            <hr className="hr-red" />
            <h4 className="text-sm">
              <small>{member?.title}</small>
            </h4>
          </div>
        </div>
        <div className="h-full color_5 flex items-center text-sm leading-6 text-justify">
          <p>{member?.description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="team bg-white p-5 md:p-8">
      <div className="mw-1200 m-0-auto">
        <h3 className="font-bold text-3xl md:text-4xl pb-3 color_1">
          Notre équipe
        </h3>
        <hr className="title-hr" />
        <h4 className="text-sm md:text-lg font-semibold mb-8">
          Notre équipe est constituée de plusieurs experts dans divers domaines.
        </h4>
        <div className="flex justify-center items-center ">
          <div className="card-ctn flex flex-wrap justify-center mw-1200 gap-5">
            {teamMembers &&
              teamMembers.map((member, index) => (
                <Card member={member} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
