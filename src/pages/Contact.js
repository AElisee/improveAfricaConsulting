import React from "react";
import ContactForm from "../components/ContactForm.js";

const Contact = () => {
  return (
    <div className="min-h-full">
      {/* IMAGE */}
      <div className="w-full h-[250px] md:h-[400px] p-3 lg:p-8 lg:pb-5  border bg-contact bg-cover bg-center"></div>
      <ContactForm />
    </div>
  );
};

export default Contact;
