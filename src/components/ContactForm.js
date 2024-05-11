import React, { useEffect, useRef, useState } from "react";
import NetWork from "./NetWork";
import { email, phone_number, address } from "../datas/alldatas";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const formMesRef = useRef(null);
  const form = useRef();
  useEffect(() => {
    formMesRef.current = document.querySelector(".formMessage");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const formMes = formMesRef.current;

    form &&
      emailjs
        .sendForm(
          "service_wfsh8e7",
          "template_mhq5bdo",
          form.current,
          process.env.REACT_APP_ID
        )
        .then(
          (result) => {
            form.current.reset();
            setMessage(
              <p className="w-full px-5 py-2 rounded-md text-gray-500 bg-white border-2 border-green-100 shadow-sm text-sm">
                Votre message a été transmis avec succès.
              </p>
            );

            setTimeout(() => {
              setMessage(null);
            }, 7000);
          },
          (error) => {
            setMessage(
              <p className="w-full px-5 py-2 rounded-md text-gray-500 bg-white border-2 border-red-100 shadow-sm text-sm">
                Oups, problème d'envoi. Veuillez réessayer.
              </p>
            );

            // setTimeout(() => {
            //   setMessage(null);
            // }, 5000);
          }
        );
  };

  return (
    <div className="contact-form w-full p-5 md:p-8" id="contactUs">
      <div className="w-full  ">
        <div className="pt-10 pb-10">
          <h2 className="font-bold text-3xl md:text-4xl pb-3 color_1">
            Contactez-nous !
          </h2>
          <hr className="title-hr" />
        </div>
        <div className="form-box w-11/12 h-[470px] container mx-auto flex bg-white md:shadow-lg p-4">
          <div className="gap-5 p-8 pt-20 address shadow-2xl bg-cyan-700 overflow-clip">
            <div>
              <p className="text-lg pt-3 flex gap-4">
                <img src="./icons/map-pin.svg" alt="" />
                <span className="text-sm font-semibold">{address}</span>
              </p>
              <p className="text-lg pt-3  flex wrap gap-4">
                <img src="./icons/mail.svg" alt="" />
                <span className="text-sm font-semibold">{email}</span>
              </p>
              <p className="text-lg pt-3 flex gap-4">
                <img src="./icons/phone.svg" alt="" />
                <span className="text-sm font-semibold">{phone_number}</span>
              </p>
            </div>
            <div className="flex justify-center">
              <NetWork />
            </div>
          </div>
          <div className="form-ctn p-5">
            <div className="flex items-center justify-end">
              <form ref={form} onSubmit={sendEmail} className="form grid">
                <input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="votre adresse email *"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Objet *"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Bonjour, écrivez-nous ici..."
                ></textarea>
                <div className="my-5">
                  <input
                    type="submit"
                    value="Soumettre"
                    className="px-5 py-2 bg-primary color_4 font-semibold rounded-md text-sm md:text-sm hover:bg-white hover:text-primary hover:font-semibold hover:border-2 hover:border-primary"
                  />
                </div>
                <div className=".formMessage">{message}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
