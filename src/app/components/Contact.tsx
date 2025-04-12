"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative bg-black py-24 px-6 md:px-12 text-center font-sora overflow-hidden" id="contact">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-40 animate-gradient z-0" />

      {/* Foreground content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-wide mb-6 text-white"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg max-w-xl mx-auto mb-8"
        >
          I am open to collaboration opportunities, freelance projects, or professional discussions
        </motion.p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/Pratiksha102"
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Security precaution
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white text-2xl hover:text-purple-600 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/pratiksha-/"
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Security precaution
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white text-2xl hover:text-purple-600 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:pratiksha.gupta15@gmail.com"
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Security precaution
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white text-2xl hover:text-purple-600 transition"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
