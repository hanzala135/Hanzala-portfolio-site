import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollPage() {
  // reusable section component inside the same function
  const Section = ({ title, image, bgColor }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px", once: false });

    return (
      <section ref={ref} className={`py-20 px-4 text-center ${bgColor}`}>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-8"
        >
          {title}
        </motion.h2>

        <motion.img
          src={image}
          alt={title}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
      </section>
    );
  };

  return (
    <div>
      <Section
        title="Welcome to My Animated Page"
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        bgColor="bg-cyan-100"
      />
      <Section
        title="Smooth Scroll Animations"
        image="https://images.unsplash.com/photo-1581291518835-ec3c8e4f3f6d?auto=format&fit=crop&w=1200&q=80"
        bgColor="bg-white"
      />
      <Section
        title="Reusable Section Component"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        bgColor="bg-yellow-100"
      />
    </div>
  );
}
