import React from "react";
import NetWork from "./NetWork";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer pt-10  mt-10 pg">
      <div className="f-ctn mw-1200 m-0-auto">
        <div className=".f-top ">
          <div className="f-top-left flex justify-between pt-7 pb-7">
            <Logo />
            <NetWork />
          </div>
          <hr />
        </div>
        <div className="f-center flex justify-center">
          <div className="position flex flex-col items-center">
            {/* <img src="./icons/map-pin.svg" alt="" width={24} height={24} /> */}
            <p className="uppercase text-sm font-bold tracking-wider p-2 text-gray-400">
              Adresse
            </p>
            <span className="text-white">Abidjan, Côte d'Ivoire</span>
          </div>
          <div className="phone flex flex-col items-center">
            <p className="uppercase text-sm font-bold tracking-wider p-2 text-gray-400">
              Telephone
            </p>
            <span className="text-white"> (+225) 07 00 00 00 00</span>
          </div>
          <div className="mail flex flex-col items-center">
            <p className="uppercase text-sm font-bold tracking-wider  p-2 text-gray-400">
              mail
            </p>
            <span className="text-white">exemple@improve.ci</span>
          </div>
        </div>
        <div>
          <hr/>
          <p className="text-center p-7 text-white">
            Copyright {new Date().getFullYear()} - Improve Africa Consulting |
            Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
