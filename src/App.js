import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/Footer.js";
import Totop from "./components/ToTop.js";
import Service from "./pages/Service.js";
import About from "./pages/About.js";
import Expertise from "./pages/Expertise.js";
import Realisation from "./pages/Realisation.js";
import Contact from "./pages/Contact.js";
import Sociale from "./pages/Services/Sociale.js";
import Environemmental from "./pages/Services/Environemmental.js";
import Urbain from "./pages/Services/Urbain.js";
import Marche from "./pages/Services/Marche.js";
import Formation from "./pages/Services/Formation.js";
import ScrollNavigation from "./components/ScrollNavigation.js";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <ScrollNavigation />
      <Navbar />
      <Totop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route
          path="/services/etude-sociale-et-demographique"
          element={<Sociale />}
        />
        <Route
          path="/services/etude-impact-envrionnematal"
          element={<Environemmental />}
        />
        <Route path="/services/etude-urbaine" element={<Urbain />} />
        <Route path="/services/etude-de-marche" element={<Marche />} />
        <Route path="/services/formations" element={<Formation />} />

        <Route path="/expertise" element={<Expertise />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
