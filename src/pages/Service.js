import React from "react";

const Service = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center  ">
      {/* IMAGE */}
      <div className="w-full h-[300px] md:h-[400px] p-3 mg:p-8 mg:pb-5  border service"></div>
      {/* CONTAINER */}
      <div className="py-12">
        {/* ITEM 1*/}
        <div className="w-full md:flex  container mx-auto">
          {/* IMAGE */}
          <div className="hidden md:flex items-center justify-center w-[375px] h-[375px]  border-2 border-slate-500 ">
            <img
              src="/assets/environmental-protection-326923_1280.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          {/* TEXT */}
          <div className="w-full md:w-[375px] md:h-[375px] p-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Etude d'impact environnemental
            </h2>
            <p className="pt-2 leading-7 text-justify">
              La mise en place de projets structurants doit tenir compte des
              caractéristiques de l’environnement humain et surtout physique
              dans lequel, ce projet se réalise. C’est pourquoi il est
              nécessaire de connaitre et comprendre l’environnement d’un
              projet...
            </p>
            <div className="w-full p-1 flex justify-end mt-2">
              <a
                className="fit px-8 py-1 _bg-c1 color_4 rounded-md hover:bg-white hover:text-primary hover:font-semibold   hover:border-2 hover:border-primary "
                href="/service/etude-impact-envrionnematal"
                rel="noopener noreferrer"
              >
                Lire +
              </a>
            </div>
          </div>
        </div>
        {/* ---- */}

        {/* ITEM 2*/}
        <div className="w-full flex container mx-auto">
          {/* TEXT */}
          <div className="w-full md:w-[375px] md:h-[375px] p-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Etude sociale et démographique
            </h2>
            <p className="pt-2 leading-7 text-justify">
              Dans un contexte de mutations sociales et démographiques
              engendrant les besoins spécifiques des populations, savoir
              collecter, traiter et valoriser les données sont les défis des
              collectivités, des institutions, des entreprises et des
              associations...
            </p>
            <div className="w-full p-1 flex justify-end mt-2">
              <a
                className="fit px-8 py-1 _bg-c1 color_4 rounded-md hover:bg-white hover:text-primary hover:font-semibold hover:border-2 hover:border-primary"
                href="service/etude-sociale-et-demographique"
                rel="noopener noreferrer"
              >
                Lire +
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <div className="hidden md:flex items-center justify-center w-[375px] h-[375px]  border-2 border-slate-500 ">
            <img
              src="/assets/magnets-2487101_1280.webp"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        {/* ---- */}

        {/* ITEM 3*/}
        <div className="w-full flex container mx-auto ">
          {/* IMAGE */}
          <div className="hidden md:flex items-center justify-center w-[375px] h-[375px]  border-2 border-slate-500 ">
            <img
              src="/assets/drone_ville.webp"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          {/* TEXT */}
          <div className="w-full md:w-[375px] md:h-[375px] p-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Etude urbaine
            </h2>
            <p className="pt-2 leading-7 text-justify">
              De la collecte des données à la réalisation du diagnostic urbain
              en passant par l'état des lieux d'une localité, IAC dispose d'une
              expertise avérée. Sa méthode de travail rigoureuse basée sur
              l'utilisation d'outils innovants rassure tout partenaire soucieux
              d'acquérir des données de qualité...
            </p>
            <div className="w-full p-1 flex justify-end mt-2">
              <a
                className="fit px-8 py-1 _bg-c1 color_4 rounded-md hover:bg-white hover:text-primary hover:font-semibold hover:border-2 hover:border-primary"
                href="service/etude-urbaine"
                rel="noopener noreferrer"
              >
                Lire +
              </a>
            </div>
          </div>
        </div>
        {/* ---- */}

        {/* ITEM 4*/}
        <div className="w-full flex container mx-auto  ">
          {/* TEXT */}
          <div className="w-full md:w-[375px] md:h-[375px]  p-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Etude de marché
            </h2>
            <p className="pt-2 leading-7 text-justify">
              La compétitivité de toute entreprise est le gage de l’atteinte des
              objectifs qu’elle s’est fixée et des besoins auxquelles elle
              répond. Toutefois dans un contexte hautement concurrentiel, il est
              important de faire les bonnes analyses avant et pendant la mise en
              place de toute entreprise envisageant d’atteindre ses objectifs
              globaux....
            </p>
            <div className="w-full p-1 flex justify-end mt-2">
              <a
                className="fit px-8 py-1 _bg-c1 color_4 rounded-md hover:bg-white hover:text-primary hover:font-semibold hover:border-2 hover:border-primary"
                href="service/etude-de-marche"
                rel="noopener noreferrer"
              >
                Lire +
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <div className="hidden md:flex items-center justify-center w-[375px] h-[375px]  border-2 border-slate-500 ">
            <img
              src="/assets/calculator-723917_1280.webp"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        {/* ---- */}

        {/* ITEM 5*/}
        <div className="w-full flex container mx-auto">
          {/* IMAGE */}
          <div className="hidden md:flex items-center justify-center w-[375px] h-[375px]  border-2 border-slate-500 ">
            <img
              src="/assets/formation.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          {/* TEXT */}
          <div className="w-full md:w-[375px] md:h-[375px] p-4 ">
            <h2 className="text-2xl md:text-3xl font-semibold">Formations</h2>
            <div className="pt-2 leading-7">
              IAC partage son savoir-faire autour d'une diversité de compétence
              à acquérir :
              <p className="pt-2 leading-7 text-justify">
                <span className="font-semibold">•</span> Collecte, analyse,
                interprétation et gestion des données de données quantitative et
                qualitative) et ce à partir des outils informatiques dédiés;
              </p>
              <p className="pt-2 leading-7 text-justify">
                <span className="font-semibold">•</span> Formation du personnel
                des entreprises et organismes sur les outil...
              </p>
            </div>
            <div className="w-full p-1 flex justify-end mt-2">
              <a
                className="fit px-8 py-1 _bg-c1 color_4 rounded-md hover:bg-white hover:text-primary hover:font-semibold hover:border-2 hover:border-primary"
                href="service/formations"
                rel="noopener noreferrer"
              >
                Lire +
              </a>
            </div>
          </div>
        </div>
        {/* ---- */}
      </div>
    </div>
  );
};

export default Service;
