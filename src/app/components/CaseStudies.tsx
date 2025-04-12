"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    <section className="bg-black py-20 px-6 md:px-12 relative overflow-hidden" id="case-studies">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-40 animate-gradient" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 tracking-wider text-white"
      >
        Case Studies
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group z-10"
          >
            <Card
              className="group relative backdrop-blur-md bg-white/10 border border-white/30 rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
              style={{
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-gray-200 transition">
                {caseStudy.title}
              </h3>
              <p className="text-white/80 mb-4">{caseStudy.summary}</p>
              <a
                href={caseStudy.link}
                className="text-sm font-medium text-white hover:underline"
                aria-label={`Read case study: ${caseStudy.title}`}
              >
                Read more →
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
