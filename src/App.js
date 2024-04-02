import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Activity1 from "./pages/activities/Activity1";
import Activity2 from "./pages/activities/Activity2";
import Activity3 from "./pages/activities/Activity3";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/etude-impact&environnemental" element={<Activity1 />} />
        <Route path="/etude-sociale&demographique" element={<Activity2 />} />
        <Route path="/etude-de-marche" element={<Activity3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
