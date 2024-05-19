import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="font-Bricolage">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
