import React from "react";
import { motion } from "framer-motion";

const mainProjects = [
  {
    title: "Tech Hierarchy",
    image: "/techhirarchy_project.png",
    demo: "https://techierarchy.org/",
  },
  {
    title: "System Approvals",
    image: "/System_Aproval.png",
    demo: "https://systemapprovals.com/",
  },
  {
    title: "Vancouver Bitcoin",
    image: "/bitcoin.png",
    demo: "https://vancouverbitcoin.com/",
  },
  {
    title: "Regio Broodjes",
    image: "/roj.png",
    demo: "https://www.regiobroodjes.nl/",
  },
  {
    title: "My Portfolio",
    image: "/myportfoliopic.png",
    demo: "https://hanzala-portfolio-site.vercel.app/",
  },
  {
    title: "Elo Shopping",
    image: "/elo.png",
    demo: "https://www.elo.shopping/",
  },
];

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

export default function ProjectsSection() {
  return (
    <section
      id="project"
      className="bg-[#0A0A0A] text-white max-w-[2000px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-16"
    >
      {/* Heading + Intro */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 animate every time
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          My <span className="text-amber-200">Projects</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 animate every time
          custom={1}
          className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-300"
        >
          A collection of{" "}
          <span className="text-amber-200 font-semibold">
            impactful projects
          </span>{" "}
          I’ve built and contributed to, blending{" "}
          <span className="font-semibold text-amber-200">
            creativity and functionality
          </span>{" "}
          with modern web development.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 self-center w-[85%] max-w-6xl mx-auto">
        {mainProjects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // 👈 animate every time
            custom={i + 2} // stagger each card
            className="bg-[#1A1A1A] border border-gray-800   rounded-xl overflow-hidden shadow-md hover:shadow-amber-200/30 transition-transform hover:scale-105 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full aspect-[3/2] overflow-hidden group">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-transparent" />
                <span className="absolute bottom-4 left-5 text-white text-base font-semibold z-10">
                  {project.title}
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
