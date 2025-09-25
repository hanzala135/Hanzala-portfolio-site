import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xovnyrpq", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section className="bg-black max-w-[2000px] text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-8">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 px-4 sm:px-6 pb-5 border-b border-gray-800">
        {/* Home Icon */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")}
          className="bg-amber-200 text-black p-3 rounded-full cursor-pointer shadow-lg"
        >
          <IoHomeOutline size={22} />
        </motion.div>

        {/* Sign Up Button */}
        <div></div>
      </div>

      {/* Title */}
      <motion.div className="mb-4 mt-10 flex justify-center">
        <button className="text-3xl sm:text-5xl md:text-7xl font-bold hover:text-amber-200 cursor-pointer border border-gray-700 px-6 py-4 sm:px-10 sm:py-8 rounded-xl transition">
          GET IN TOUCH
        </button>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-white mb-10 max-w-2xl text-center text-base sm:text-lg px-2"
      >
        I’d love to hear from you! Whether you’re interested in working
        together, have a project in mind, or just want to say hi, feel free to
        reach out.
      </motion.p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-6xl">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#161514] backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg w-full space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Send me a message
          </h2>

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#fbbf24" }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-[#242321] text-white border border-gray-700 
              focus:border-amber-300 focus:ring focus:ring-amber-200/40 outline-none transition"
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#fbbf24" }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-[#242321] text-white border border-gray-700 
              focus:border-amber-300 focus:ring focus:ring-amber-200/40 outline-none transition"
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#fbbf24" }}
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full px-4 py-3 rounded-md bg-[#242321] text-white border border-gray-700 
              focus:border-amber-300 focus:ring focus:ring-amber-200/40 outline-none transition"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: "#fbbf24" }}
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-md bg-[#242321] text-white border border-gray-700 
              focus:border-amber-300 focus:ring focus:ring-amber-200/40 outline-none transition"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-amber-200 text-black font-semibold py-3 rounded-md 
              hover:bg-amber-300 hover:shadow-md transition"
          >
            Send Message →
          </motion.button>

          {/* Success / Error Messages */}
          {status === "SUCCESS" && (
            <p className="text-amber-200 mt-2">✅ Thanks for messaging!</p>
          )}
          {status === "ERROR" && (
            <p className="text-red-400 mt-2">
              ❌ Oops! Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div className="flex flex-col justify-center bg-[#161514] backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Contact Info
          </h2>

          <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4">
            <Mail className="text-amber-200" />
            <a
              href="mailto:hanzalarashid135@gmail.com"
              className="hover:text-amber-200 transition break-all"
            >
              hanzalarashid135@gmail.com
            </a>
          </motion.div>

          <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4">
            <Phone className="text-amber-200" />
            <a
              href="tel:+923294003441"
              className="hover:text-amber-200 transition"
            >
              +92 329 4003441
            </a>
          </motion.div>

          <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4">
            <Linkedin className="text-amber-200" />
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-200 transition"
            >
              LinkedIn
            </a>
          </motion.div>

          <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4">
            <Github className="text-amber-200" />
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-200 transition"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-gray-800 mt-12 pt-6 text-xs sm:text-sm text-gray-400 gap-4 sm:gap-8 px-4">
        <p className="text-center md:text-left">
          Copyright © 2025 <span className="text-amber-200">Hanzala.</span> All
          rights reserved.
        </p>

        <div className="flex gap-6">
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
          className="bg-amber-200 text-black p-2 sm:p-3 rounded-md hover:bg-amber-300 transition"
        >
          <FaArrowUp />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;
