import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillSlider = ({ title, items }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px", once: false });

  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      variants={animation}
      className="flex flex-col mb-12 w-[80%] mx-auto "
    >
      {/* Title */}
      <h3 className="text-5xl md:text-6xl font-semibold mb-6 text-white ">
        {title}
      </h3>

      {/* Slider */}
      <div className="overflow-hidden relative w-full items-center p-2">
        <motion.div
          className="flex gap-12 py-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10, // ⏩ was 30, reduced for faster sliding
              ease: "linear",
            },
          }}
        >
          {items.concat(items).map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[150px] 
                         bg-[#1f1f1f] border border-gray-800 rounded-xl p-4 
                         text-gray-300 shadow-md hover:scale-110 
                         hover:border-amber-200 hover:text-amber-200 
                         transition-all duration-300"
            >
              <span className="text-5xl ">
                <item.icon className="text-5xl" style={{ color: item.color }} />
              </span>
              <span className="mt-2 text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillSlider;
