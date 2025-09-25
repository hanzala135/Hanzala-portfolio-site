import React, { useRef } from "react";
import { CiMail } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import { Laptop, Cloud, Palette, Search } from "lucide-react";
import { FaWordpress } from "react-icons/fa";
import Services_content from "./Services_content";
import SkillSlider from "./SkillSlider";
import { Link } from "react-router-dom";

// Tech stack icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiAdobephotoshop,
  SiCanva,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

const Services = () => {
  const introRef = useRef(null);
  const introInView = useInView(introRef, { margin: "-100px", once: false });

  // Animation for service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <div
      id="services"
      className="text-white bg-[#0A0A0A] max-w-[2000px] 
                 px-3 sm:px-4 md:px-6 py-10 sm:py-14 md:py-16 
                 flex flex-col justify-center gap-14 sm:gap-16 md:gap-20"
    >
      {/* ================= Intro Section ================= */}
      <motion.div
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={introInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[80%] lg:w-[70%] mx-auto flex flex-col"
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-6xl font-bold 
                     pb-4 sm:pb-6 relative group cursor-pointer leading-snug"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          We provide cutting-edge digital solutions!
          <span
            className="absolute bottom-0 left-0 w-0 h-[3px] bg-amber-200 
                           transition-all duration-500 group-hover:w-full"
          ></span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-[20px] 
                     text-[#B2B2B2] w-full md:w-[80%] pt-4 sm:pt-6"
          initial={{ opacity: 0, x: -50 }}
          animate={introInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We're not just here to deliver projects—we're here to partner for the
          long term. By understanding your business challenges, we craft
          solutions designed to create a meaningful, long-term impact.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-[20px] 
                     text-[#B2B2B2] w-full md:w-[80%] pt-4 sm:pt-6"
          initial={{ opacity: 0, x: 50 }}
          animate={introInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Looking for the right tech partner? Let’s explore how we can help.
          Talk to our experts now!!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 pt-6 sm:pt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={introInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              className="bg-amber-200 text-black px-4 py-2 sm:px-6 sm:py-3 
                         rounded-md font-semibold text-center w-full 
                         hover:bg-amber-300 transition cursor-pointer 
                         text-sm sm:text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>

          <motion.button
            className="bg-amber-200 text-black px-4 py-2 sm:px-6 sm:py-3 
                       rounded-md font-semibold text-center w-full 
                       sm:w-[50%] md:w-[35%] lg:w-[25%] 
                       hover:bg-amber-300 transition cursor-pointer 
                       flex items-center justify-center 
                       text-sm sm:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <CiMail size={18} className="mr-2" /> Email Us Directly
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ================= Service Cards ================= */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-4 sm:gap-6 lg:gap-8 
                   w-full md:w-[85%] lg:w-[70%] mx-auto"
      >
        {[
          {
            symbol: Laptop,
            title: "Web Development",
            description:
              "Crafting high-performance, user-friendly, and scalable web applications tailored to meet diverse business requirements and engaging online experiences.",
          },
          {
            symbol: Cloud,
            title: "SaaS Solutions",
            description:
              "Delivering scalable SaaS platforms with robust cloud integration, security, and seamless user experiences to empower your business growth.",
          },
          {
            symbol: Palette,
            title: "UI/UX Design",
            description:
              "Designing intuitive, engaging, and visually stunning interfaces that prioritize user experience, accessibility, and customer satisfaction.",
          },
          {
            symbol: Search,
            title: "SEO Optimization",
            description:
              "Boosting your online visibility with data-driven SEO strategies, keyword optimization, and performance enhancements that drive measurable results.",
          },
          {
            symbol: FaWordpress,
            title: "WordPress Development",
            description:
              "Building custom WordPress websites, themes, and plugins to give businesses a powerful, flexible, and easy-to-manage online presence.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Services_content obj={service} />
          </motion.div>
        ))}
      </div>

      {/* ================= Technology Slider ================= */}
      <SkillSlider
        title="Our Technology"
        items={[
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
          { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
          { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
          { name: "Node.js", icon: FaNodeJs, color: "#339933" },
          { name: "PHP", icon: FaPhp, color: "#777BB4" },
          { name: "Figma", icon: FaFigma, color: "#F24E1E" },
          { name: "Database", icon: FaDatabase, color: "#4DB33D" },
          { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
          { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
          { name: "MySQL", icon: SiMysql, color: "#4479A1" },
          { name: "Oracle", icon: SiOracle, color: "#F80000" },
          { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
          { name: "Canva", icon: SiCanva, color: "#00C4CC" },
          { name: "Express.js", icon: SiExpress, color: "#444444" },
          { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        ]}
      />
    </div>
  );
};

export default Services;
