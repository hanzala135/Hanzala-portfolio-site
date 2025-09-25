import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MainAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const animation = {
    initial: { opacity: 0, y: 60 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div
      id="personalinfo"
      ref={ref}
      className="w-[95%] sm:w-[90%] md:w-[90%] flex flex-col md:flex-row justify-center items-center h-auto mx-auto p-4 sm:p-6 md:p-10 bg-gradient-to-br from-[#1c1b1a] to-[#111010] border rounded-2xl mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20"
    >
      {/* Left Image */}
      <motion.div
        {...animation}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-[70%] sm:w-[60%] md:w-[35%] h-auto flex justify-center mx-auto pt-4 sm:pt-5"
      >
        <img
          src="/boypic.png"
          alt="profile"
          className="rounded-2xl max-w-[180px] sm:max-w-[220px] md:max-w-full"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        {...animation}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full md:w-[65%] flex flex-col h-auto mx-auto p-2 sm:p-3 md:pl-10 text-white"
      >
        {/* Title & Description */}
        <motion.div
          {...animation}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <span className="text-2xl sm:text-3xl md:text-5xl font-bold border-b pb-1 sm:pb-2">
            Personal Info
          </span>
          <br />
          <br />
          <p className="text-sm sm:text-base md:text-lg pb-4 sm:pb-5">
            Enthusiastic web developer with expertise in WordPress, eager to
            deliver creative and impactful digital solutions.
          </p>
        </motion.div>

        {/* First Row */}
        <div className="flex flex-col md:flex-row">
          <motion.div
            {...animation}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="p-4 sm:p-5 w-full md:w-[50%] border rounded-2xl border-[#1D1D1D] bg-[#1D1D1D] hover:cursor-pointer hover:border-amber-100 m-2 sm:m-3 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-gray-500 text-base sm:text-lg pb-2 sm:pb-4">
              Name
            </h1>
            <p className="text-sm sm:text-base md:text-lg">Hanzala Rashid</p>
          </motion.div>

          <motion.div
            {...animation}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="p-4 sm:p-5 w-full md:w-[50%] border rounded-2xl border-[#1D1D1D] bg-[#1D1D1D] hover:cursor-pointer hover:border-amber-100 m-2 sm:m-3 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-gray-500 text-base sm:text-lg pb-2 sm:pb-4">
              Phone No
            </h1>
            <p className="text-sm sm:text-base md:text-lg">+92 329 4003441</p>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row">
          <motion.div
            {...animation}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            className="p-3 sm:p-4 md:p-5 w-full md:w-[50%] border rounded-2xl border-[#1D1D1D] bg-[#1D1D1D] hover:cursor-pointer hover:border-amber-100 m-2 sm:m-3 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-gray-500 text-base sm:text-lg pb-2 sm:pb-4">
              Email
            </h1>
            <p className="text-xs sm:text-sm md:text-base">
              hanzalarashid135@gmail.com
            </p>
          </motion.div>

          <motion.div
            {...animation}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
            className="p-4 sm:p-5 w-full md:w-[50%] border rounded-2xl border-[#1D1D1D] bg-[#1D1D1D] hover:cursor-pointer hover:border-amber-100 m-2 sm:m-3 hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-gray-500 text-base sm:text-lg pb-2 sm:pb-4">
              Address
            </h1>
            <p className="text-sm sm:text-base md:text-lg">Lahore, Pakistan</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainAbout;
