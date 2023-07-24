import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/marginals/navbar/NavBar";
import Container from "./components/shared/Container";
import Footer from "./components/marginals/footer/Footer";
import MenuContext from "./components/marginals/navbar/MenuContext";
import AnimatedRoutes from "./components/Routes/AnimatedRoutes";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () =>
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  return (
    <Router>
      <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
        <NavBar />
        <Container>
          <AnimatedRoutes />
        </Container>
        <Footer />
      </MenuContext.Provider>
    </Router>
  );
}

export default App;
