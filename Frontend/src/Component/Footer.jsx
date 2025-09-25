import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.4 });

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="bg-[#121212] max-w-[2000px] self-center text-white 
                 px-4 sm:px-8 md:px-16 lg:px-24 
                 pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 md:pb-14"
    >
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-10 sm:mb-14 md:mb-16 flex justify-center"
      >
        <button
          onClick={() => navigate("/contact")}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                     rounded-4xl cursor-pointer self-center border text-center 
                     px-6 sm:px-10 py-6 sm:py-8 mb-6 sm:mb-10 
                     hover:border-gray-800 hover:text-amber-200 transition"
        >
          GET IN TOUCH
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16 lg:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 space-y-4 sm:space-y-6"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Hello, I’m{" "}
            <span className="text-amber-200 font-semibold">Hanzala Rashid</span>
            , MERN Stack & WordPress Developer based in Pakistan.
          </p>
          <a
            href="mailto:hanzalarashid135@gmail.com"
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold 
                       underline hover:text-yellow-300 break-words"
          >
            Hanzalarashid135@gmail.com
          </a>
        </motion.div>

        {/* Right Links Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.6 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full md:w-1/2"
        >
          {[
            {
              name: "Linkedin",
              link: "www.linkedin.com/in/hanzala-rashid-76b9252a8",
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/hanzala_135/",
            },
            { name: "Github", link: "https://github.com/hanzala135" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-center 
                         px-3 sm:px-4 md:px-6 
                         py-2 sm:py-3 md:py-4 
                         border border-gray-700 
                         hover:border-gray-500 rounded-lg 
                         transition-transform hover:scale-105 duration-300"
            >
              <span className="text-sm sm:text-base md:text-lg">
                {item.name}
              </span>
              <span className="text-base sm:text-lg md:text-xl">→</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col md:flex-row justify-between items-center 
                   border-t border-gray-800 mt-10 sm:mt-14 md:mt-16 
                   pt-4 sm:pt-6 text-xs sm:text-sm md:text-base 
                   text-gray-400 gap-4 sm:gap-6"
      >
        <p className="text-center md:text-left">
          Copyright © 2025 <span className="text-amber-200">Hanzala.</span> All
          rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-white">
            Terms & Condition
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>

        {/* Scroll-to-top button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-amber-200 text-black p-2 sm:p-3 md:p-4 
                     rounded-md hover:bg-amber-300 transition"
        >
          <FaArrowUp />
        </motion.button>
      </motion.div>
    </motion.footer>
  );
}
