import React from "react";

import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skill.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Footer from "./Footer.jsx";
import Services from "./Services.jsx";
import ProjectsSection from "./Project.jsx";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <ProjectsSection />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
