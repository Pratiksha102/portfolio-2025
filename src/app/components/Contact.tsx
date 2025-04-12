"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-black text-yellow-400 py-20 px-6 md:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-yellow-300 mb-4"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg mb-6"
      >
        I'm open to collaborations, freelance opportunities, or just a friendly chat.
      </motion.p>

      <motion.a
        href="mailto:you@example.com"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-colors"
      >
        you@example.com
      </motion.a>
    </section>
  );
};

export default Contact;
