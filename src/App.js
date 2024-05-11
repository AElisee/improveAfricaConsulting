import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Activity1 from "./pages/activities/Activity1";
import Activity2 from "./pages/activities/Activity2";
import Activity3 from "./pages/activities/Activity3";
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

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Totop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="service/etude-sociale-et-demographique" element={<Sociale />} />
        <Route
          path="service/etude-impact-envrionnematal"
          element={<Environemmental />}
        />
        <Route path="service/etude-urbaine" element={<Urbain />} />
        <Route path="service/etude-de-marche" element={<Marche />} />
        <Route path="service/formations" element={<Formation />} />

        <Route path="/expertise" element={<Expertise />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/etude-impact&environnemental" element={<Activity1 />} />
        <Route path="/etude-sociale&demographique" element={<Activity2 />} />
        <Route path="/etude-de-marche" element={<Activity3 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
