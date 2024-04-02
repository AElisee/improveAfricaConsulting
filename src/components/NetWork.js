import React from "react";

const NetWork = () => {
  return (
    <div className="network flex gap-3">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        {/* <img src="./icons/brand-linkedin.svg" alt="" /> */}
        <i className="fa-brands fa-linkedin-in text-lg"></i>
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        <i className="fa-brands fa-facebook-f text-lg"></i>
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        <i className="fa-brands fa-x-twitter text-lg"></i>
      </a>
    </div>
  );
};

export default NetWork;
