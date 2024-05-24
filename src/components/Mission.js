import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="mission p-5 md:p-8">
      <div className=" mw-1200 m-0-auto">
        <h3 className="font-bold text-3xl md:text-4xl pb-3  color_1">
          Notre mission
        </h3>
        <hr className="title-hr" />
        <div className="ctn flex">
          {/* IMAGE */}
          <div className="hidden left md:flex md:w-1/2 items-center justify-center">
            <div className="img-ctn flex items-center justify-center">
              <img src="./images/mission.png" alt="" />
            </div>
          </div>
          {/* TEXT */}
          <div className="md:ml-4 flex flex-col justify-center w-full md:w-1/2">
            <p className="text-base leading-7 text-justify md:pb-10">
              Parce que l’utilisation des données de qualité se montre
              indispensable dans n’importe quel domaine, IAC s’est donnée pour
              mission de contribuer à l’amélioration du cadre de vie de la
              société à travers des études rigoureuses...
              {/* <hr className="title-hr" /> */}
            </p>
            <div className="w-full my-4">
              <Link
                to="/a-propos"
                className="px-5 py-2 bg-sky-600 color_4 font-semibold rounded-md text-sm md:text-sm hover:bg-white hover:text-sky-600 hover:font-semibold hover:border-2 hover:border-sky-600"
                rel="noopener noreferrer"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
