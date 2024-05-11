import React from "react";

const Urbain = () => {
  return (
    <div className="h-full">
      {/* IMAGE */}
      <div className="w-full h-[300px] md:h-[400px] p-3 lg:p-8 lg:pb-5 urbain bg-cover bg-center relative">
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
          src="/assets/drone_ville.webp"
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
            De la collecte des données à la réalisation du diagnostic urbain en
            passant par l'état des lieux d'une localité, IAC dispose d'une
            expertise avérée. Sa méthode de travail rigoureuse basée sur
            l'utilisation d'outils innovants rassure tout partenaire soucieux
            d'acquérir des données de qualité.
          </p>
        </div>
      </div>
      <div className="p-5 md:p-8 relative">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Définition générale
        </h3>
        <p className="leading-7 text-md">
          Une étude urbaine est un examen systématique de divers aspects des
          villes et des zones urbaines pour comprendre leurs caractéristiques,
          leur dynamique et leurs défis. Il s'agit d'analyser des facteurs tels
          que les tendances démographiques, les modes d'utilisation des terres,
          les infrastructures, les activités économiques, la dynamique sociale,
          les conditions environnementales et les structures de gouvernance.
          L'objectif d'une étude urbaine est de générer des informations qui
          éclairent la prise de décisions et les efforts de planification visant
          à améliorer la qualité de la vie, à promouvoir le développement
          durable et à répondre aux besoins des citadins
        </p>
      </div>
      <div className="p-5 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Expertise du Cabinet
        </h3>
        <p className="leading-7 text-md pb-10">
          La méthodologie pour réaliser une étude urbaine peut varier en
          fonction des questions de recherche spécifiques, des objectifs et des
          données disponibles. Toutefois, certaines étapes et certains outils
          communs sont fréquemment utilisés dans les études urbaines :
        </p>

        {/*  */}
        <div className="flex flex-col gap-3 md:pl-10 pl-3">
          <p className="leading-7 text-md ">
            <span className="font-semibold">
              • Définir les questions et objectifs de la recherche
            </span>
            : la première étape consiste à définir clairement les questions et
            les objectifs de la recherche de l'étude. Cela permet de concentrer
            la recherche et de guider la sélection des méthodologies et des
            outils appropriés.
          </p>
          <p className="leading-7 text-md font-semibold ">
            • Revue de la littérature
          </p>
          <p className="leading-7 text-md ">
            <span className="font-semibold">•</span> Collecte de données
            (approches à la fois quantitatives et qualitatives).
          </p>
          <p className="leading-7 text-md ">
            <span className="font-semibold">• Analyse des données</span> : Une
            fois les données collectées, elles doivent être analysées pour
            extraire des informations significatives. Les techniques d'analyse
            des données peuvent inclure l'analyse statistique, l'analyse
            spatiale (SIG), le codage qualitatif et les techniques de
            modélisation telles que l'analyse de régression ou la modélisation
            basée sur les agents.
          </p>
          <p className="leading-7 text-md ">
            <span className="font-semibold">• Analyse spatiale </span>: Les
            systèmes d'information géographique (SIG) sont des outils couramment
            utilisés dans les études urbaines pour l'analyse spatiale. Les SIG
            permettent aux chercheurs d'analyser et de visualiser des données
            spatiales telles que l'utilisation des sols, les réseaux de
            transport et les modèles démographiques. Il peut être utilisé pour
            identifier les modèles spatiaux, évaluer les relations spatiales et
            prendre des décisions éclairées en matière d'urbanisme et de
            développement.
          </p>
          <p className="leading-7 text-md ">
            <span className="font-semibold">• Analyse statistique</span> :
            L'analyse statistique est utilisée pour analyser les données
            quantitatives et les hypothèses de test. IAC utilise couramment une
            diversité de logiciels pour l'analyse statistique dans les études
            urbaines.
          </p>
          <p className="leading-7 text-md ">
            <span className="font-semibold">• Analyse qualitative</span> : Les
            données qualitatives collectées par des méthodes telles que des
            entretiens ou des groupes de discussion peuvent être analysées à
            l'aide de techniques d'analyse qualitative telles que l'analyse
            thématique, l'analyse de contenu ou la théorie fondée.
          </p>
          <p className="leading-7 text-md font-semibold ">
            • Interprétation et rapport
          </p>
        </div>

        <p className="leading-7 text-md pt-10">
          Dans l'ensemble, le choix de la méthodologie et des outils dépend du
          contexte de recherche spécifique et des objectifs de l'étude urbaine.
          Une combinaison d'approches quantitatives et qualitatives, ainsi que
          de techniques d'analyse de données appropriées, est souvent utilisée
          pour obtenir des résultats de qualité dans les études urbaines.
        </p>
      </div>
    </div>
  );
};

export default Urbain;
