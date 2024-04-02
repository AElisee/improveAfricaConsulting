import React from "react";
import NetWork from "./NetWork";

const ContactForm = () => {
  return (
    <div className="contact-form p-5" id="contactUs">
      <div className="ctn mw-1200 m-0-auto">
        <div className="pt-10 pb-10">
          <h2 className="section-title font-bold text-4xl  pb-5 color_1">
            Contacts
          </h2>
          <hr className="title-hr" />
        </div>
        <div className="form-box flex m-0-auto relative bg-white lg:shadow-xl md:shadow-xl">
          <div className="gap-5 p-10 pt-20 address shadow-2xl bg-cyan-700">
            <h4 className="text-xl font-bold text-center">Contactez-nous !</h4>
            <div>
              <p className="text-lg pt-3 flex gap-4">
                <img src="./icons/map-pin.svg" alt="" />
                Côte d'Ivoire, Abidjan
              </p>
              <p className="text-lg pt-3 flex gap-4">
                {" "}
                <img src="./icons/mail.svg" alt="" />
                exemple@improve.ci
              </p>
              <p className="text-lg pt-3 flex gap-4">
                <img src="./icons/phone.svg" alt="" />
                +225 07 00 000 000
              </p>
            </div>
            <div className="flex justify-center">
              <NetWork />
            </div>
          </div>
          <div className="form-ctn p-10">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="flex items-center justify-end">
              <div className="form grid">
                <input
                  type="text"
                  placeholder="votre adresse email *"
                  required
                />
                <input type="text" placeholder="Objet *" required />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Bonjour, écrivez-nous ici..."
                ></textarea>
                <input type="submit" value="Soumettre" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
