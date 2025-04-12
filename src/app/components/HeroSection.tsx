"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sora } from "next/font/google";
import { Link } from "react-scroll"; // Importing Link from react-scroll

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const HeroSection = () => {
  const fullText = "Hi, I’m Pratiksha";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="bg-black py-28 px-6 text-white relative overflow-hidden">
      {/* Gradient Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-40 animate-gradient z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className={`${sora.className} text-5xl md:text-6xl font-bold leading-tight text-white tracking-tight`}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${sora.className} text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl`}
        >
          Passionate about crafting intuitive user experiences, building scalable web applications, and shaping products that solve real problems—blending design thinking, development, and product strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Scroll to Projects section using react-scroll */}
          <Link
            to="projects" // 'projects' is the ID of the section you want to scroll to
            smooth={true} // Enables smooth scrolling
            duration={500} // Time for scroll animation
            className="bg-purple-600 text-white font-bold px-8 py-4 rounded-full hover:bg-purple-500 transition-all shadow-lg cursor-pointer"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
