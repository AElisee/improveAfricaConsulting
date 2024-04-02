import React from "react";
import { missions } from "../datas/alldatas";

const Mission = () => {
  const Card = ({ mission }) => {
    return (
      <div
        data-aos="flip-up"
        data-aos-delay={300}
        data-aos-offset="0"
        className="m-card bg-white rounded-lg shadow-lg p-10"
      >
        <p className="color_5">{mission.text}</p>
      </div>
    );
  };
  return (
    <div className="mission p-5">
      <div className="ctn mw-1200 m-0-auto">
        <h3 className="section-title font-bold text-4xl pb-15 color_1">
          Notre mission
        </h3>
        <hr className="title-hr" />
        <div className="flex justify-center items-center ">
          <div className="ctn flex justify-center mw-1200 gap-5">
            {missions &&
              missions.map((mission, index) => (
                <Card mission={mission} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
