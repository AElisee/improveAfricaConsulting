import React from "react";
import Team from "../components/Team.js";

const About = () => {
  return (
    <div className="h-full">
      {/* IMAGE */}
      <div className="w-full h-[300px] md:h-[400px] p-3 md:p-8 lg:pb-5  border about bg-cover bg-center  "></div>
      {/* NOTRE MISSION */}
      <div className=" p-3 lg:p-8">
        <h3 className="font-bold text-3xl md:text-4xl pb-3 color_1">
          Notre Mission
        </h3>
        <hr className="title-hr" />
        <p className="leading-8 text-sm md:text-base text-justify">
          Parce que l’utilisation des données de qualité se montre indispensable
          dans n’importe quel domaine, IAC s’est donnée pour mission de
          contribuer à l’amélioration du cadre de vie de la société à travers
          des études rigoureuses.
        </p>
      </div>
      {/*  NOS VALEURS */}
      <div className="p-3 lg:p-8 bg-gray-100">
        {/* NOS VALEUR TITRE */}
        <div className="">
          <h3 className="font-bold text-3xl md:text-4xl pb-3 color_1">
            Nos valeurs
          </h3>
          <hr className="title-hr" />
        </div>
        {/* IMAGE | NOS VALLEURS */}
        <div className="h-full w-10/12 mx-auto pb-10">
          <img
            src="./assets/valeur.webp"
            alt=""
            className="w-full h-full"
            data-aos="zoom-in-left"
            data-aos-offset="0"
          />
        </div>
      </div>
      {/* COMPOSANT TEAM */}
      <Team />
    </div>
  );
};

export default About;
