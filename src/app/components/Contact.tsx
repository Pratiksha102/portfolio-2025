"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black py-28 px-6 text-white overflow-hidden"
    >
      {/* Background Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-pink-600/10 animate-pulse blur-xl z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        {/* Title */}
       <motion.h2
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: false }}
                 className={`${sora.className} text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent`}
               >
                 Let's connect
               </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${sora.className} text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto`}
        >
          I’m open to freelance projects, collaborations, or just chatting about tech, design, or ideas.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/Pratiksha102"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pratiksha-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pratiksha.gupta15@gmail.com"
            className="text-white text-3xl hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
