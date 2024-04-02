import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [isclose, setIsclose] = useState(true);

  const handleClick = () => {
    setIsclose(!isclose);
  };
  return (
    <nav className="navbar w-full flex justify-center sticky h-[75px] shadow-sm pg">
      <div className="navbar-ctn flex w-full mw-1200">
        <div className="logo flex  justify-start items-center">logo</div>
        <ul
          className={`flex menu justify-end items-center cursor-pointer ${
            !isclose ? "open" : ""
          }`}
        >
          <li>
            <NavLink to="/" className="font-semibold">
              Accueil
            </NavLink>
          </li>
          <li className="dropdown">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Domaine d'activité</span>
              <span className="arrow-ctn flex justify-center items-center">
                <KeyboardArrowDownIcon className="arrow" />
              </span>
            </div>

            <ul className="dropdown-list shadow-md rounded-sm">
              <li>
                <NavLink
                  to={"/etude-impact&environnemental"}
                  className="text-sm"
                >
                  Etude d'impact & environnemental
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/etude-sociale&demographique"
                  className={"text-sm"}
                >
                  Etude sociale & démographique
                </NavLink>
              </li>
              <li>
                <NavLink to="/etude-de-marche" className={"text-sm"}>
                  Etude de marche
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="font-semibold">
            <NavLink to="/">Notre Mission</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/">Nos Attouts</NavLink>
          </li>
          <li className="font-semibold text-base">
            <NavLink to="/">A propos</NavLink>
          </li>
        </ul>
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
