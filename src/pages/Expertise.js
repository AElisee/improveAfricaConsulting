import React, { Suspense } from "react";

const Expertise = () => {
  return (
    <div className="h-full">
      {/* IMAGE */}
      <Suspense>
        <div className="w-full h-[250px] md:h-[400px] p-3 lg:p-8 lg:pb-5  border expertise relative">
          <h3 className="absolute left-0 bottom-0 p-3 md:p-8 text-2xl md:text-4xl text-white font-bold drop-shadow-md">
            EXPERTISE
          </h3>
        </div>
      </Suspense>

      {/* TEXT */}
      <div className="p-3 lg:p-8 md:pt-5">
        <p className="leading-8 text-sm md:text-base text-justify">
          IAC est un cocktail de compétences sommant des experts complémentaires
          dans leurs savoir-faire. Il s’agit notamment de démographe,
          statisticien, sociologue, environnementalisme, de géomaticien, tous
          diplômés de prestigieuses universités et centre de recherche
          internationaux. Ces compétences aussi nombreuses que diverses étendent
          intrinsèquement le champ d’action de IAC.
        </p>
      </div>

      {/* IMAGE ET IMAGE */}
      <div className="h-full flex p-3 lg:p-8">
        <div className="hidden md:flex md:w-2/5 items-center justify-center  ">
          <div className="w-full px-3">
            <img
              src="/assets/digital-marketing-1433427_1280.webp"
              alt="alf"
              className="w-full"
              height={300}
            />
          </div>
        </div>
        <div className="p-1 w-full md:w-3/5 bg-gray-50">
          <p className="p-1 leading-8">
            Ainsi, IAC intervient dans tous les domaines touchants :
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A la Recherche sur les
            questions dynamiques familiales en Afrique subsaharienne ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A la Gestion de projet de
            population et développement ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> Au Suivi et Evaluation des
            projets et programmes de développement ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> Aux Etudes urbaines
            (logement, habitat social, habiter, urbanité, ville …) ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> Aux Inégalités sociales,
            justice sociale, équité ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> Aux Etudes post-coloniales,
            sociologie, question du genre ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A l’Environnement,
            l’écologie, l’impact-environnemental ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> Aux Etudes qualitatives et
            quantitatives, études de marché ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A l’Elaboration et mise en
            place d’un projet SIG ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> Au Traitement d’images
            satellitaires ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A la Gestion de base
            données spatiale ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A l’Analyse spatiale ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A la Cartographie numérique
            en général et à l’occupation du sol ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A la Formation des
            utilisateurs d’outils de collecte de données numériques et SIG ;
          </p>
          <p className="p-1 leading-8">
            <span className="font-semibold">•</span> A l’Analyste du discours
            avec QDA Mine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
