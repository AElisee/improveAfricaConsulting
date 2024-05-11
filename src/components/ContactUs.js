import React from "react";
const ContactUs = () => {
  return (
    <div className="contact  flex justify-center items-center">
      <div className="ctn mw-1200 m-0-auto rounded-md flex flex-col justify-center">
        <h3 className="font-semibold text-xl leading-7 text-center color_4">
          Notre leitmotiv : répondre aux besoins de la société, emprunt de notre
          professionnalisme.
        </h3>
        <a
          href="#contactUs"
          className="flex justify-center items-center rounded-md text-lg font-semibold bg-white text-primary hover:bg-transparent hover:text-white"
        >
          Contactez-nous !
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
