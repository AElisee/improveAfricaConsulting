import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ link }) => {
  const location = useLocation();
  const isActive = location.pathname === link.url;
  return (
    <Link
      className={`ml-4 pb-1 font-bold ${
        isActive ? "text-red-500 border-b-2 border-primary" : ""
      }`}
      to={link.url}
    >
      {link.title.toUpperCase()}
    </Link>
  );
};

export default NavLinks;
