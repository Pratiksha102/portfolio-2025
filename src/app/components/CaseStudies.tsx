"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "User Retention Strategy for Fitness App",
    summary:
      "Led research and implemented habit-forming features that improved user retention by 30%.",
    link: "/case-studies/fitness-retention",
  },
  {
    title: "Checkout Funnel Optimization",
    summary:
      "Analyzed drop-offs and redesigned the payment flow, increasing successful checkouts by 22%.",
    link: "/case-studies/checkout-optimization",
  },
  {
    title: "Launching a New B2B SaaS Product",
    summary:
      "Managed MVP launch, collaborating across design, dev, and marketing to achieve 1K+ signups in 2 months.",
    link: "/case-studies/saas-launch",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-black text-yellow-400 py-20 px-6 md:px-12" id="case-studies">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-yellow-300 mb-12"
      >
        Case Studies
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-6 rounded-2xl shadow-md border border-yellow-600 hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-yellow-500 mb-4">{caseStudy.summary}</p>
            <a
              href={caseStudy.link}
              className="text-yellow-400 underline hover:text-yellow-200"
            >
              Read more →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
