import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header";
import Activities from "../../components/Activities";
import Mission from "../../components/Mission";
import ContactUs from "../../components/ContactUs";
import Team from "../../components/Team";
import Assets from "../../components/Assets";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import Totop from "../../components/ToTop";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Totop />
      <Header />
      <Activities />
      <Mission />
      <ContactUs />
      <Team />
      <Assets />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
