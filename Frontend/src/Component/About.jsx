bimport React, { useState, useRef } from "react";
import { FiUser } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import MainAbout from "./MainAbout";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skill";

const About = () => {
  const [clicked, setClicked] = useState(1);

  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false, amount: 0.4 });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <div id="about" className="self-center max-w-[2000px] m-0 p-0">
      <motion.div
        ref={aboutRef}
        variants={container}
        initial="show"
        animate={isInView ? "show" : {}}
        className="flex flex-col justify-center max-w-[2000px] items-center self-center bg-[#000000] text-white text-center px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16"
      >
        {/* Icon */}
        <motion.div
          variants={item}
          animate={{ rotate: [0, 360], scale: [0, 1, 1] }}
          transition={{
            repeat: Infinity, // ♾️ infinite loop
            repeatDelay: 2, // wait 2s before repeating
            duration: 2, // how long one full rotation takes
            ease: "linear", // smooth constant rotation
          }}
          className="p-4 sm:p-6"
        >
          <FiUser
            size={60}
            className="sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] text-amber-200"
          />
        </motion.div>

        {/* About Text */}
        <motion.div className="w-[90%] sm:w-[80%] mb-6 sm:mb-10">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-300">
            I’m{" "}
            <span className="text-amber-200 font-semibold">Hanzala Rashid</span>
            , a passionate <span className="font-semibold">MERN Stack</span> and
            <span className="font-semibold"> WordPress developer</span> focused
            on building scalable, user-friendly, and high-performing web
            solutions.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={item}
          className="flex justify-center items-center text-center flex-wrap gap-3 sm:gap-4"
        >
          {[
            { id: 1, label: "About Me" },
            { id: 2, label: "Education" },
            { id: 4, label: "Skills" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setClicked(tab.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`font-semibold px-6 sm:px-8 md:px-9 py-3 sm:py-4 md:py-5 rounded-2xl transition-transform duration-300 text-sm sm:text-base md:text-lg ${
                clicked === tab.id
                  ? "bg-amber-200 text-[#1D1D1D] border border-[#1D1D1D] scale-105"
                  : "bg-[#1D1D1D] text-white border border-amber-100 hover:bg-amber-200 hover:text-[#1D1D1D] hover:border-[#1D1D1D]"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Section Rendering */}
        <motion.div
          key={clicked} // animate when tab changes
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mt-6 sm:mt-8 md:mt-10"
        >
          {clicked === 1 && <MainAbout />}
          {clicked === 2 && <Education />}
          {clicked === 3 && <Experience />}
          {clicked === 4 && <Skills />}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
