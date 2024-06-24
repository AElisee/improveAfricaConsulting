import React, { Suspense } from "react";

const Environemmental = () => {
  return (
    <div className="h-full">
      {/* IMAGE */}
      <div className="w-full h-[250px] md:h-[400px] p-3 lg:p-8 lg:pb-5  border env bg-cover bg-center relative">
        <h3 className="absolute left-0 bottom-0 p-3 md:p-8 text-2xl md:text4xl text-white font-bold drop-shadow-md">
          SERVICE
        </h3>
      </div>
      <div className="p-5 md:px-10">
        <h3 className="section-title font-bold text-4xl  pb-3 color_1">
          Etude d'impact environnemental (EIE)
        </h3>
        <hr className="title-hr" />
      </div>
      <div
        className="p-5 md:px-10
      "
      >
        {/* ABSOLUTE IMAGE */}
        <Suspense>
          <img
            src="/assets/environmental-protection-326923_1280.jpg"
            alt=""
            className="float-left mr-5 mb-1  shape-img object-cover object-center"
          />
        </Suspense>
        <div className="">
          <h3
            className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3
          "
          >
            Contexte
          </h3>
          <p className="leading-8 text-sm md:text-base text-justify">
            La mise en place de projets structurants doit tenir compte des
            caractéristiques de l’environnement humain et surtout physique dans
            lequel, ce projet se réalise. C’est pourquoi il est nécessaire de
            connaitre et comprendre l’environnement d’un projet. Cette
            connaissance passe la mise en lumière les différents aspects
            positifs et négatifs d’un site afin de tirer le maximum de celui-ci
            ou s’y accommoder.
          </p>
        </div>
      </div>
      <div className="p-5 md:p-8 relative">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Définition générale
        </h3>
        <p className="leading-8 text-sm md:text-base text-justify">
          Une étude d’impact environnemental (EIE), est un processus qui, au
          tout début de la planification, évalue les risques d’incidences
          environnementales découlant d’un projet prévu. Ainsi, l’EIE établit
          les mesures qui peuvent être adoptées pour contrer les effets
          environnementaux négatifs ou pour les réduire à des niveaux
          acceptables au préalable. L’EIE représente donc une approche proactive
          et préventive en matière de gestion et de protection
          environnementales.
        </p>
      </div>
      <div className="p-5 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Expertise du Cabinet
        </h3>
        <p className="leading-8 text-sm md:text-base text-justify pb-2">
          L’un des objectifs de « Impact Africa Consulting » est de contribuer à
          la réalisation de projets solide en proposant à ces partenaires une
          étude d’impact environnementale (EIE). En partenariat avec le maître
          d’ouvrage, il s’agira d’exécuter le processus d’analyse des impacts
          dans chaque domaine identifié. Cela passe par des phases importantes
          telles que :
        </p>
        <p className="leading-8 text-sm md:text-base text-justify pb-2">
          <span className="font-semibold ml-1 p-1">•</span>
          La préparation de l’étude à effectuer (faire l’inventaire des
          exigences législatives et réglementaires).
        </p>
        <p className="leading-8 text-sm md:text-base text-justify pb-2">
          <span className="font-semibold ml-1 p-1">•</span>
          L’analyse préliminaire du processus (identifier des aspects
          environnementaux significatifs).
        </p>
        <p className="leading-8 text-sm md:text-base text-justify pb-2">
          <span className="font-semibold ml-1 p-1">•</span>
          Examiner les pratiques et les procédures existantes afin de prendre
          des décisions.
        </p>
        <p className="leading-8 text-sm md:text-base text-justify pb-2">
          <span className="font-semibold ml-1 p-1">•</span>
          Définir des mesures de contrôle en prenant en compte les analyses déjà
          effectuées.
        </p>
        <p className="leading-8 text-sm md:text-base text-justify pb-2">
          <span className="font-semibold ml-1 p-1">•</span>
          Intégrer les impacts dans la gestion du projet.
        </p>
        <p className="pt-3 text-sm md:text-base leading-8">
          Toute étude d’impact environnementale intègre ces 5 aspects. Avec
          l’expertise dont nous disposons, nous assurons mettre à disposition
          cahier des charges solides sur la globalité du projet et de ses
          impacts.
        </p>
      </div>
    </div>
  );
};

export default Environemmental;
