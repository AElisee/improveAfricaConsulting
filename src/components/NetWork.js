import React from "react";
import { fbLink, linkedinLink, xLink, ytLink } from "../datas/alldatas.js";

const NetWork = () => {
  return (
    <div className="network flex gap-3">
      {/* linkedIn */}
      <a
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        <i className="fa-brands fa-linkedin-in text-lg"></i>
      </a>

      {/* facebook */}
      <a
        href={fbLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        <i className="fa-brands fa-facebook-f text-lg"></i>
      </a>

      {/* Facebook */}
      <a
        href=""
        target={xLink}
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        <i className="fa-brands fa-x-twitter text-lg"></i>
      </a>

      {/* youtube */}
      <a
        href={ytLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        <i className="fa-brands fa-youtube text-lg"></i>
      </a>
    </div>
  );
};

export default NetWork;
