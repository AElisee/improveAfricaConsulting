import React from "react";

const Marche = () => {
  return (
    <div className="h-full">
      {/* IMAGE */}
      <div className="w-full h-[250px] md:h-[400px] p-3 lg:p-8 lg:pb-5 marche bg-cover bg-center relative">
        <h3 className="absolute left-0 bottom-0 p-3 md:p-8 text-4xl text-white font-bold drop-shadow-md">
          SERVICE
        </h3>
      </div>
      <div className="p-5 md:px-10">
        <h3 className="section-title font-bold text-4xl   pb-15 color_1">
          Etude de marché
        </h3>
        <hr className="title-hr" />
      </div>
      <div
        className="p-5 md:px-10
    "
      >
        {/* ABSOLUTE IMAGE */}
        <img
          src="/assets/calculator-723917_1280.webp"
          alt=""
          className="float-left mr-5 mb-1  shape-img object-cover object-center"
        />
        <div className="">
          <h3
            className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3
        "
          >
            Contexte
          </h3>
          <p className="leading-9 text-sm md:text-base text-justify">
            La compétitivité de toute entreprise est le gage de l’atteinte des
            objectifs qu’elle s’est fixée et des besoins auxquelles elle répond.
            Toutefois dans un contexte hautement concurrentiel, il est important
            de faire les bonnes analyses avant et pendant la mise en place de
            toute entreprise envisageant d’atteindre ses objectifs globaux.
          </p>
        </div>
      </div>
      <div className="p-5 md:p-8 relative">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Définition générale
        </h3>
        <p className="leading-9 text-sm md:text-base text-justify">
          Une étude de marché est nécessaire en aval et en amont de tout projet
          d’entreprise. Car elle permet de comprendre les enjeux liés au marché
          dans lequel l’entreprise va s’installer ou est installée.
        </p>
      </div>
      <div className="p-5 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Expertise du Cabinet
        </h3>
        <p className="leading-9 text-sm md:text-base text-justify">
          Improve Africa Consulting se propose de vous prêter main-forte dans un
          schéma global d’une étude de marché complète ou de vous assister sur
          des points clés adaptées à vos besoins afin de vous aider à atteindre
          vos objectifs. Nous vous proposons des services performants tels que
          l’analyse concurrentielle, le portrait de l’environnement du marché
          dans lequel l’entreprise veut évoluer, la répartition stratégique des
          parts du marché, l’identification des opportunités novatrices, la mise
          en relief des réseaux de distribution, les habitudes de consommation
          des cibles et bien d’autres. Pour le faire nous mettons à la
          disposition de nos clients, une vigie concurrentielle par la
          production de bases de données ad hoc, des méthodes d’analyse
          éprouvées et efficace dans divers secteurs d’activités, l’exposition
          des clients à travers des salons ou autres, des sondages et des outils
          de fidélisation de leur cible.
        </p>
      </div>
    </div>
  );
};

export default Marche;
