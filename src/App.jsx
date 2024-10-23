import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Partners from "./pages/Partners.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-[#460021]">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/our_partners" element={<Partners />} />
          <Route path="/our_team" element={<Team />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;
