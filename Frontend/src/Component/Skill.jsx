import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaWordpress,
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

const Skills = () => {
  // ✅ Helper slider component
  const SkillSlider = ({ title, items }) => (
    <div className="flex flex-col items-center mb-4 sm:mb-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
        {title}
      </h3>
      <div className="overflow-hidden relative w-full p-1 sm:p-2">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 py-2"
          animate={{ x: ["20%", "-30%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] bg-[#1f1f1f] border border-gray-800 rounded-lg p-2 sm:p-3 md:p-4 text-gray-300 shadow-sm hover:scale-105 hover:border-amber-200 hover:text-purple-200 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl">{item.icon}</span>
              <span className="mt-1 text-[10px] sm:text-xs md:text-sm">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  // ✅ Animation hook
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px", once: false });

  const animation = {
    initial: { opacity: 0, y: 40 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div
      id="skills"
      ref={ref}
      className="w-[95%] sm:w-[90%] md:w-[85%] flex flex-col justify-center items-center mx-auto p-4 sm:p-6 md:p-10 bg-gradient-to-br from-[#1c1b1a] to-[#111010] border rounded-xl mt-10 sm:mt-12 mb-10 sm:mb-12"
    >
      {/* Heading + Intro */}
      <motion.div
        {...animation}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-[95%] sm:w-[85%] self-center flex flex-col text-gray-200"
      >
        <motion.div
          {...animation}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="border-b border-gray-700 pb-6 sm:pb-8 mb-6 sm:mb-8"
        >
          <span className="text-2xl sm:text-3xl md:text-5xl font-bold border-b pb-1 sm:pb-2">
            Skills
          </span>
          <br />
          <br />
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 sm:mt-4 leading-relaxed">
            I am confident in my ability to deliver end-to-end web solutions,
            combining strong frontend expertise, efficient backend development,
            and reliable database management. With additional skills in
            WordPress and UI/UX design, I create digital experiences that are
            both functional and visually engaging.
          </p>
        </motion.div>

        {/* ✅ Sliders */}
        <section className="bg-[#191818] mt-4 sm:mt-6 border border-gray-800 rounded-2xl text-white w-full sm:w-[90%] md:w-[80%] self-center py-4 sm:py-6 space-y-4 sm:space-y-6 shadow-md">
          <SkillSlider
            title="Frontend"
            items={[
              { name: "React", icon: <FaReact className="text-sky-400" /> },
              {
                name: "JavaScript",
                icon: <FaJs className="text-yellow-400" />,
              },
              { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
              { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
              {
                name: "TailwindCSS",
                icon: <SiTailwindcss className="text-cyan-400" />,
              },
            ]}
          />

          <SkillSlider
            title="Backend"
            items={[
              {
                name: "Node.js",
                icon: <FaNodeJs className="text-green-500" />,
              },
              {
                name: "Express.js",
                icon: <SiExpress className="text-gray-300" />,
              },
              { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            ]}
          />

          <SkillSlider
            title="Database"
            items={[
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-500" />,
              },
              { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
              { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
              {
                name: "Database",
                icon: <FaDatabase className="text-gray-400" />,
              },
            ]}
          />

          <SkillSlider
            title="UI & UX Design"
            items={[
              { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
              {
                name: "Photoshop",
                icon: <SiAdobephotoshop className="text-blue-400" />,
              },
              { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
            ]}
          />

          <SkillSlider
            title="WordPress"
            items={[
              {
                name: "WordPress",
                icon: <FaWordpress className="text-blue-600" />,
              },
              { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
            ]}
          />
        </section>
      </motion.div>
    </div>
  );
};

export default Skills;
