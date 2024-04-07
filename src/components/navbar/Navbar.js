import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NetWork from "../NetWork";

const Navbar = () => {
  const [isclose, setIsclose] = useState(true);

  const handleClick = () => {
    setIsclose(!isclose);
  };
  return (
    <nav className="navbar w-full flex flex-col sticky shadow-sm ">
      <div className="bar"></div>
      <div className="navbar-ctn flex w-full mw-1200 m-0-auto   pb-5 pt-5">
        <div className="logo flex  justify-start items-center">logo</div>
        <div className="flex flex-col justify-around gap-2">
          <div className="network flex justify-end pb-3">
            <NetWork />
          </div>
          <ul
            className={`flex menu justify-end items-center cursor-pointer ${
              !isclose ? "open" : ""
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={`font-semibold ${(nav) => (nav.isActive ? "" : "")}`}
              >
                Accueil
              </NavLink>
            </li>

            <li className="font-semibold">
              <NavLink to="/a-propos">A propos</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/expertise">Expertise</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/service">Service</NavLink>
            </li>
            <li className="font-semibold text-base">
              <NavLink to="/realisation">Réalisation</NavLink>
            </li>
            <li className="font-semibold text-base">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="menuIcon  flex items-center">
          {isclose ? (
            <img src="/icons/menu-deep.svg" alt="" onClick={handleClick} />
          ) : (
            <img src="/icons/x.svg" alt="" onClick={handleClick} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
