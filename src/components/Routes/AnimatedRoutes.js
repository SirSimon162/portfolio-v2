import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import TechStack from "../../pages/TechStack";
import Projects from "../../pages/Projects";
import Designs from "../../pages/Designs";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/techstack" element={<TechStack />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/designs" element={<Designs />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
