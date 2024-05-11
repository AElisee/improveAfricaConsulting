import React from "react";
import NetWork from "./NetWork";
import { email, phone_number, address } from "../datas/alldatas";
import LogoFooter from "./LogoFooter.js";

const Footer = () => {
  return (
    <div className="footer p-5 md:p-8 ">
      <div className="f-ctn">
        <div className="f-top">
          <div className="f-top-left flex justify-between items-center pb-5">
            <LogoFooter />
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
            <span className="text-white md:text-lg">
              <small>{address}</small>
            </span>
          </div>
          <div className="phone flex flex-col items-center">
            <p className="uppercase text-sm font-bold tracking-wider p-2 text-gray-400">
              Telephone
            </p>
            <span className="text-white md:text-lg">
              <small>{phone_number}</small>
            </span>
          </div>
          <div className="mail flex flex-col items-center">
            <p className="uppercase text-sm font-bold tracking-wider  p-2 text-gray-400">
              mail
            </p>
            <span className="text-white md:text-lg">
              <small>{email}</small>
            </span>
          </div>
        </div>
        <div>
          <hr />
          <p className="text-center p-7 text-white md:text-lg">
            <small>
              Copyright {new Date().getFullYear()} - Improve Africa Consulting |
              Tous droits réservés.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
