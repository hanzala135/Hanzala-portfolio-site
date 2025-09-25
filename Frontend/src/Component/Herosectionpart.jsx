import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Herosectionpart = () => {
  return (
    <section className="relative  flex flex-col  mb-25 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-5xl text-center md:text-left">
        {/* Availability Badge */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg font-medium tracking-wide border-b border-white/40 pb-2 mb-6 w-fit mx-auto md:mx-0 hover:text-amber-200 hover:border-amber-200 transition-colors hover:scale-105 duration-300"
        >
          Currently Available For{" "}
          <span className="hover:text-amber-200">Freelance</span>
          <br />
          <span className="flex items-center justify-center md:justify-start gap-2 hover:text-amber-200">
            Worldwide
            <GoArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </span>
        </motion.h2>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="leading-tight text-4xl sm:text-5xl lg:text-6xl font-extrabold hover:scale-105 transition-transform duration-300"
        >
          Creative Software <br />
          <span className="text-amber-200">Engineer</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 text-neutral-300 text-base md:text-lg max-w-2xl mx-auto md:mx-0 hover:scale-105 transition-transform duration-300"
        >
          I transform ideas into impactful digital experiences—crafting designs
          and solutions that are fast, intuitive, and built to inspire.
        </motion.p>

        {/* Wiggle Arrow */}
        <motion.div
          initial={{ opacity: 1, rotate: 0 }}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex mt-10 justify-center md:justify-start"
        >
          <img
            src="./curl arrow.png"
            alt="Decorative Arrow"
            className="w-10 md:w-16 opacity-80"
          />
        </motion.div>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-2 flex flex-wrap ml-15 justify-center md:justify-start gap-6 items-center"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            aria-label="View Projects"
            className="bg-amber-100 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-200 transition transform hover:scale-105"
          >
            View Projects
          </a>

          {/* Work Process Button */}
          <a
            href="#process"
            aria-label="View Work Process"
            className="group inline-flex items-center gap-3"
          >
            <span className="relative inline-grid place-items-center h-12 w-12 rounded-full border border-white/40 group-hover:scale-105 transition-transform">
              <span className="absolute inset-0 rounded-full group-hover:scale-110 transition-transform bg-white/5" />
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
            </span>
            <span className="text-left">
              <span className="block text-base text-neutral-400">Work</span>
              <span className="block -mt-1 text-base font-medium">Process</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosectionpart;
