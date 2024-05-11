import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NetWork from "../NetWork";
import { motion } from "framer-motion";
import Logo from "../Logo.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { url: "/", title: "Accueil" },
    { url: "/a-propos", title: "A propos" },
    { url: "/expertise", title: "Expertise" },
    { url: "/service", title: "services" },
    { url: "/realisation", title: "Realisations" },
    { url: "/contact", title: "Contact" },
  ];

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemsVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav className="h-full z-50 bg-white shadow-sm">
      <div className="">
        {/* BANDE EN HAUT */}
        <div className="w-full h-2 _bg-c1 "></div>
        {/* LOGO / MENU */}
        <div className="flex justify-between px-3 py-2 md:px-5 ">
          {/* LOGO */}
          <NavLink to={"/"} className="p-0">
            <Logo />
          </NavLink>
          {/* MENU */}
          <div className="hidden md:flex flex-col justify-center">
            <div className="self-end">
              {/* SOCIAL LINK */}
              <NetWork />
            </div>
            {/* MENU */}
            <div className="pt-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  className={`ml-4 pb-1 font-bold  focus:text-red-500 focus:border-b-2 focus:border-primary
                `}
                  to={link.url}
                >
                  {link.title.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          {/* MENU RESPONIVE*/}
          <div className="md:hidden md:p-6">
            <div className="w-full h-full flex items-center justify-center">
              <button
                className="cursor-pointer relative z-50"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <img
                    src="/icons/x.svg"
                    alt="icon-X"
                    width={36}
                    height={36}
                    className="fixed right-3 top-5"
                  />
                ) : (
                  <img
                    src="/icons/menu-deep.svg"
                    alt="icon-menu-deep"
                    width={36}
                    height={36}
                  />
                )}
              </button>
            </div>
            {isOpen && (
              <motion.div
                className="fixed top-0 left-0 min-h-screen w-screen bg-black flex flex-col items-center justify-center text-2xl gap-6 z-30"
                variants={listVariants}
                initial="closed"
                animate="opened"
              >
                {links.map((link, index) => (
                  <motion.div key={index} variants={listItemsVariants}>
                    <Link
                      className="px-2 text-white"
                      to={link.url}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title.toUpperCase()}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
