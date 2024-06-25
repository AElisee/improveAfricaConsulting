import React, { useEffect, useState } from "react";

const Totop = () => {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // scroll to top btn displaying
      let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;

      if (scrollValue < 0.59) {
        setvisible(false);
      } else {
        setvisible(true);
      }
    });
  }, []);
  return (
    <div className="go-totop flex items-center justify-center shadow-xl">
      <span
        className="p-1 md:p-4 w-[50px] h-[50px] md:w-[60px] md:h-[60px]  _bg-c1 flex items-center justify-center cursor-pointer rounded-full"
        id="toTopBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ visibility: `${visible ? "visible" : "hidden"}` }}
      >
        <i className="fa-solid fa-chevron-up font-bold text-xl text-white"></i>
      </span>
    </div>
  );
};

export default Totop;
