import React from "react";
import { missions } from "../datas/alldatas";
import { Link } from "react-router-dom";

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
      <div className=" mw-1200 m-0-auto">
        <h3 className="section-title font-bold text-4xl pb-15 color_1">
          Notre mission
        </h3>
        <hr className="title-hr" />
        <div className="ctn flex">
          <div className="left flex items-center justify-center">
            <div className="img-ctn flex items-center justify-center">
              <img src="./images/mission.png" alt="" />
            </div>
          </div>
          <div className="right flex flex-col justify-between pl-10">
            <p className="text-xl">
              Parce que l’utilisation des données de qualité se montre
              indispensable dans n’importe quel domaine, IAC s’est donnée pour
              mission de contribuer à l’amélioration du cadre de vie de la
              société à travers des études rigoureuses ...
              {/* <hr className="title-hr" /> */}
            </p>
            <Link to="" className="font-semibold rounded-md">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
