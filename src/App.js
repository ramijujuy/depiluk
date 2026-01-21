import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToAnchor from "./components/ScrollToAnchor";
import HomePage from "./HomePage";
import Precios from "./pages/Precios";
import AdminPanel from "./AdminPanel";
import Dermaplaning from "./pages/Dermaplaning";
import LiftingPestanas from "./pages/LiftingPestanas";
import LaminadoCejas from "./pages/LaminadoCejas";
import "./App.css";

const App = () => {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="flex flex-col min-h-screen bg-rose-50 font-sans">
        <Navbar />
        <main className="flex-grow pt-20" id="top">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/precios" element={<Precios />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/dermaplaning" element={<Dermaplaning />} />
            <Route path="/lifting-pestanas" element={<LiftingPestanas />} />
            <Route path="/laminado-cejas" element={<LaminadoCejas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

