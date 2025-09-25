import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/MainAbout";
import Skills from "./Component/Skill";
import Experience from "./Component/Experience";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Project from "./Component/Project";

const App = () => {
  return (
    <Router>
      <div className="  bg-[url('/we.png')] bg-cover align-middle bg-center  bg-no-repeat bg-fixed">
        {/* Global Navbar */}

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        {/* Global Footer */}
      </div>
    </Router>
  );
};

export default App;
