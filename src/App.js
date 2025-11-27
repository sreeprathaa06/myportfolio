import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Contact/Contact";
// at top
import Contact from "./components/Contact/Contact";
import Achievements from "./components/Achievements/Achievements";

import Galaxy from "./components/Galaxy";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Chatbot
import Chatbot from "./components/Chatbot";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />

      <div className="App" id={load ? "no-scroll" : "scroll"}>

        {/* 🌌 Galaxy background canvas */}
        <Galaxy />

        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* 🤖 Floating chatbot */}
        {Chatbot && <Chatbot />}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
