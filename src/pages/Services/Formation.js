import React from "react";

const Formation = () => {
  return (
    <div className="h-full">
      {/* IMAGE */}
      <div className="w-full h-[300px] md:h-[400px] p-3 lg:p-8 lg:pb-5 formation bg-cover bg-center relative">
        <h3 className="absolute left-0 bottom-0 p-3 md:p-8 text-4xl text-white font-bold drop-shadow-md">
          SERVICE
        </h3>
      </div>
      <div className="p-5 md:px-10">
        <h3 className="section-title font-bold text-4xl   pb-15 color_1">
          Formation
        </h3>
        <hr className="title-hr" />
      </div>
      <div
        className="p-5 md:px-10
      "
      >
        {/* ABSOLUTE IMAGE */}
        <img
          src="/assets/learn-1820039_1280.webp"
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
          <p className="leading-7 text-md">
            Dans le paysage concurrentiel d'aujourd'hui, les organisations axées
            sur les données ont un avantage significatif. En exploitant
            efficacement les données, les organisations peuvent rester à
            l'avant-garde de la courbe, identifier les nouvelles tendances et
            réagir rapidement aux changements du marché. Pour y parvenir, la
            formation est indéniable.
          </p>
        </div>
      </div>
      <div className="p-5 md:p-8 relative">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Définition générale
        </h3>
        <p className="leading-7 text-md">
          La formation est un processus dans lequel des individus ou des groupes
          acquièrent des compétences pratiques, des connaissances et des
          techniques pertinentes pour la gestion efficace d'une entreprise. Il
          comprend souvent des sujets tels que la finance, le marketing, les
          opérations, le leadership et la communication, visant à améliorer les
          performances, la productivité et le succès général dans le monde des
          affaires.
        </p>
        <p className="leading-7 text-md pt-3">
          <i>
            Parce que IAC, considère une entreprise comme un puissant canal de
            développement national voire international, nous faisons de la
            formations du personnel des entreprises notre priorité.{" "}
          </i>
        </p>
      </div>
      <div className="p-5 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Expertise du Cabinet
        </h3>
        <p className="leading-7 text-md">
          IAC partage son savoir-faire autour d'une diversité de compétence à
          acquérir :
        </p>
        <div className="flex flex-col gap-2 pt-2">
          <p>
            <span className="font-semibold">•</span> collecte, analyse,
            interprétation et gestion des données de données quantitative et
            qualitative) et ce à partir des outils informatiques dédiés;
          </p>
          <p>
            <span className="font-semibold">•</span> formation du personnel des
            entreprises et organismes sur les outils innovants de collecte et
            d’analyse de données;
          </p>
          <p>
            <span className="font-semibold">•</span> télédétection (Traitement
            d'images satellitaire) et SIG (réalisation de projet SIG)...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
