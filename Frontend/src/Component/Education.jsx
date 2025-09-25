import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const animation = {
    initial: { opacity: 0, y: 60 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div
      id="education"
      ref={ref}
      className="w-[95%] sm:w-[90%] flex flex-col md:flex-row justify-center items-center h-auto mx-auto bg-gradient-to-br from-[#1c1b1a] to-[#111010] border rounded-2xl mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 p-4 sm:p-6 md:p-10"
    >
      {/* Left Image Section */}
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        className="w-[80%] sm:w-[60%] md:w-[35%] h-auto flex justify-center mx-auto pt-4 sm:pt-5 pb-6 sm:pb-8 md:pb-10"
      >
        <img
          src="/boypic.png"
          alt="profile"
          className="rounded-2xl max-w-[180px] sm:max-w-[220px] md:max-w-full"
        />
      </motion.div>

      {/* Right Content Section */}
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full md:w-[65%] flex flex-col h-auto mx-auto p-3 sm:p-4 md:pl-20 md:pr-10 text-white"
      >
        {/* Heading & Intro */}
        <motion.div
          initial={animation.initial}
          animate={animation.animate}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="pb-4 sm:pb-6"
        >
          <span className="text-2xl sm:text-3xl md:text-5xl font-bold border-b pb-1 sm:pb-2">
            Education
          </span>
          <br />
          <br />
          <p className="text-sm sm:text-base md:text-xl pb-4 sm:pb-5 leading-relaxed">
            My education has been the cornerstone of my growth, shaping both my
            technical expertise and problem-solving mindset. From early
            academics to my ongoing journey in Software Engineering, I continue
            to explore, learn, and evolve to stay ahead in the digital world.
          </p>
        </motion.div>

        {/* First Row */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="p-5 sm:p-6 md:p-7 w-full border rounded-2xl border-[#1D1D1D] 
                       bg-[#1D1D1D] hover:cursor-pointer hover:border-amber-100 
                       m-2 sm:m-3 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-gray-500 text-base sm:text-lg md:text-xl pb-2 sm:pb-3 md:pb-4">
              Matric
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              Allied School (2021)
            </p>
          </motion.div>

          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="p-5 sm:p-6 md:p-7 w-full border rounded-2xl border-[#1D1D1D] 
                       bg-[#1D1D1D] hover:cursor-pointer hover:border-amber-100 
                       m-2 sm:m-3 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-gray-500 text-base sm:text-lg md:text-xl pb-2 sm:pb-3 md:pb-4">
              Intermediate
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              Punjab College (2023)
            </p>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col mt-3 sm:mt-4">
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            className="p-5 sm:p-6 md:p-7 border rounded-2xl border-[#1D1D1D] 
                       bg-[#1D1D1D] hover:cursor-pointer hover:border-amber-100 
                       m-2 sm:m-3 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-gray-500 text-base sm:text-lg md:text-xl pb-2 sm:pb-3 md:pb-4">
              Bachelor&apos;s
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              University Of Punjab (Ongoing)
            </p>
            <p className="pt-1 sm:pt-2 text-sm sm:text-base md:text-lg">
              Bachelor of Science in Software Engineering
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
