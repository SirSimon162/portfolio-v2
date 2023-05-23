import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/marginals/navbar/NavBar";
import Container from "./components/shared/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Designs from "./pages/Designs"
import Footer from "./components/marginals/footer/Footer";
import MenuContext from "./components/marginals/navbar/MenuContext";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);

  return (
    <Router>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/techstack" element={<TechStack/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/designs" element={<Designs/>}></Route>
          </Routes>
        </Container>
        <Footer />
      </MenuContext.Provider>
    </Router>
  );
}

export default App;
