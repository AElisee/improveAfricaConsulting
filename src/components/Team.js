import { teamMembers } from "../datas/alldatas";
const Team = () => {
  const Card = ({ member }) => {
    return (
      <div
        className="t-card rounded-2xl shadow-lg p-5"
        data-aos="zoom-in"
        data-aos-offset="0"
      >
        <div className="top flex gap-3">
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
            <h4 className="text-sm">{member?.title}</h4>
          </div>
        </div>
        <div className="bottom color_5 flex items-center text-sm">
          <p>{member?.description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="team bg-white">
      <div className="mw-1200 m-0-auto">
        <h3 className="section-title font-bold text-4xl pb-5 color_1">
          Notre équipe
        </h3>
        <hr className="title-hr" />
        <h4 className="text-lg font-semibold pb-15">
          Notre équipe est constituée de plusieurs experts dans divers domaines.
        </h4>
        <div className="flex justify-center items-center ">
          <div className="card-ctn flex justify-center mw-1200 gap-5">
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
