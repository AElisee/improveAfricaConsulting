import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const ContactUs = () => {
  return (
    <div className="contact  flex justify-center items-center">
      <div className="ctn mw-1200 m-0-auto rounded-md flex flex-col justify-center">
        <h3 className="font-semibold text-2xl text-center color_4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi id
          praesentium quas sunt sit dicta voluptas ea omnis est suscipit.
        </h3>
        <a
          href="#contactUs"
          className="flex justify-center items-center rounded-md text-xl font-semibold bg-white"
        >
          Contactez-nous !
          <ArrowRightAltIcon className="arrow-right font-bold " />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
