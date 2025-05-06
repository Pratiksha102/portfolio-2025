"use client";

import { motion } from "framer-motion";
import { Sora } from "next/font/google";
import { Link } from "react-scroll";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const HeroSection = () => {
  return (
    <section className="relative bg-black py-28 px-6 text-white overflow-hidden">
      {/* Purple-Black Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/80 animate-pulse blur-xl z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        {/* Purple Gradient Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className={`${sora.className} text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent`}
        >
          Hi, I’m Pratiksha
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${sora.className} text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto`}
        >
          I craft intuitive interfaces, build scalable web apps, and shape digital products that solve real-world problems—merging design thinking with technical excellence.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-block bg-purple-600 hover:bg-purple-700 transition-all text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
