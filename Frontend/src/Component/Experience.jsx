import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const animation = {
    initial: { opacity: 0, y: 60 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div
      id="experience"
      ref={ref}
      className="w-[95%] sm:w-[90%] flex flex-col md:flex-row justify-center items-center h-auto mx-auto p-4 sm:p-6 md:p-10 bg-gradient-to-br from-[#1c1b1a] to-[#111010] border rounded-2xl mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20"
    >
      {/* Left Image */}
      <motion.div
        {...animation}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-[75%] sm:w-[60%] md:w-[35%] h-auto flex justify-center mx-auto pt-4 sm:pt-5"
      >
        <img
          src="/boypic.png"
          alt="profile"
          className="rounded-2xl max-w-[180px] sm:max-w-[220px] md:max-w-full shadow-xl"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        {...animation}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full md:w-[65%] flex flex-col h-auto mx-auto p-3 sm:p-4 md:pl-20 text-gray-200"
      >
        {/* Heading and intro */}
        <motion.div
          {...animation}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="border-b border-gray-700 pb-4 sm:pb-5 mb-4 sm:mb-6"
        >
          <span className="text-2xl sm:text-3xl md:text-5xl font-bold border-b pb-1 sm:pb-2">
            Experience
          </span>
          <br />
          <br />
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 sm:mt-4 leading-relaxed">
            With hands-on experience in both MERN stack development and
            WordPress, I specialize in building scalable web applications and
            dynamic websites. My journey includes creating responsive user
            interfaces, managing databases, and delivering tailored solutions
            that balance functionality with creativity.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <motion.div
            {...animation}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="p-4 sm:p-5 md:p-6 w-full border border-gray-800 rounded-xl bg-[#1f1f1f] text-gray-300 hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:border-amber-200 hover:text-purple-200"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-700 pb-2 sm:pb-3 mb-2 sm:mb-3">
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                Web Development
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0">
                2024 - Present
              </p>
            </div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              Built and maintained several full-stack web applications using the
              MERN stack, focusing on responsive design and seamless user
              experiences.
            </p>
          </motion.div>

          <motion.div
            {...animation}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="p-4 sm:p-5 md:p-6 w-full border border-gray-800 rounded-xl bg-[#1f1f1f] text-gray-300 hover:cursor-pointer hover:scale-105 transition-transform duration-300 hover:border-amber-200 hover:text-purple-200"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-700 pb-2 sm:pb-3 mb-2 sm:mb-3">
              <h1 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                WordPress Development
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0">
                2022 - Present
              </p>
            </div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg">
              Developed and maintained multiple WordPress websites, ensuring
              optimal performance, responsive design, and great user experience.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
