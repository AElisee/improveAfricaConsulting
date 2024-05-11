import React from "react";

const Sociale = () => {
  return (
    <div className="h-full">
      {/* IMAGE */}
      <div className="w-full h-[300px] md:h-[400px] p-3 lg:p-8 lg:pb-5  border sociale bg-cover bg-center relative">
        <h3 className="absolute left-0 bottom-0 p-3 md:p-8 text-4xl text-white font-bold drop-shadow-md">
          SERVICE
        </h3>
      </div>
      <div className="p-5 md:px-10">
        <h3 className="section-title font-bold text-4xl   pb-15 color_1">
          Etude sociale et démographique
        </h3>
        <hr className="title-hr" />
      </div>
      <div
        className="p-5 md:px-10
      "
      >
        {/* ABSOLUTE IMAGE */}
        <img
          src="/assets/magnets-2487101_1280.webp"
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
            Dans un contexte de mutations sociales et démographiques engendrant
            les besoins spécifiques des populations, savoir collecter, traiter
            et valoriser les données sont les défis des collectivités, des
            institutions, des entreprises et des associations. Improve Africa
            Impact (IAC), se met à votre disposition pour la recherche, la
            production et la mise en valeur des données pertinentes pour une
            prise de décision plus efficiente
          </p>
        </div>
      </div>
      <div className="p-5 md:p-8 relative">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Définition générale
        </h3>
        <p className="leading-9 text-sm md:text-base text-justify">
          Les études sociales et démographiques visent à comprendre et à
          analyser divers aspects de la société humaine, notamment sa structure,
          sa composition et sa dynamique. Ces études explorent les relations
          entre les individus, les groupes, les communautés et les sociétés,
          ainsi que les facteurs qui les façonnent.
        </p>
      </div>
      <div className="p-5 md:p-8">
        <h3 className="text-2xl md:text-3xl font-semibold color_3 opacity-75 pb-3">
          Expertise du Cabinet
        </h3>
        <p className="leading-9 text-sm md:text-base text-justify">
          Improve Africa Consulting se propose de mettre à votre disposition une
          expertise approfondie dans l’analyse des dynamiques sociales et
          démographiques pour l’atteinte de vos objectifs basé sur des prises
          décisions éclairées. Pour cela, le cabinet met à votre disposition des
          services tels que l’analyse situationnelle, étude baseline, les
          enquêtes CAP (Connaissance, Attitudes, Pratiques), les enquêtes TraC,
          Suivi & Évaluation; Évaluation d’Impact. A cet effet, IAC dispose de
          vivier d’une part, de consultants spécialistes dans plusieurs tels que
          domaines : genre, santé des enfants, transitions familiales, migration
          ; et d’autre part, des experts en enquêtes qualitatives, quantitatives
          et mixtes.
        </p>
      </div>
    </div>
  );
};

export default Sociale;
