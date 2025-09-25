import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services_content = ({ obj }) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { margin: "-100px", once: false });

  // Decide direction of animation dynamically (fallback = bottom)
  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    bottom: { x: 0, y: 50 },
  };

  const initialPos = directions[obj.direction] || directions.bottom;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, ...initialPos }}
      animate={cardInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-[#0A0A0A] to-[#1c1c1c] 
                 rounded-2xl shadow-lg p-8 text-center max-w-sm mx-auto 
                 border border-gray-800 hover:border-amber-300  w-[86%]
                 transition cursor-pointer"
    >
      {/* Icon */}
      <div className="flex justify-center mb-4 text-gray-300">
        <obj.symbol size={48} />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-white mb-4">{obj.title}</h2>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{obj.description}</p>
    </motion.div>
  );
};

export default Services_content;
