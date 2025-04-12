"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const caseStudies = [
  {
    title: "User Retention Strategy for Fitness App",
    summary:
      "In this case study, I led a research initiative to identify pain points and opportunities for improving user retention in a fitness app. I implemented habit-forming features such as personalized workout reminders, progress tracking, and community-driven challenges. These features were designed to keep users engaged by reinforcing positive behaviors and encouraging consistency. The strategy led to a 30% improvement in user retention, showcasing the impact of tailored, user-centered design on long-term engagement.",
    link: "#", // assuming internal page
  }
,  
  {
    title: "Transport Simple",
    summary:
      "This case study focuses on improving user engagement by redesigning the payment flow and suggesting key features for the platform. Notable suggestions include a Smart Reminder Engine that notifies users of service due dates, insurance expiries, and permit renewals, as well as a Digital Vault to store and upload compliance documents like insurance and PUC. These features aim to enhance user convenience and streamline compliance management.",
    link: "/assets/TransportSimpleDeck.pdf", // Make sure this path is correct for your project
  }
];

const CaseStudies = () => {
  return (
    <section
      className="bg-black py-20 px-6 md:px-12 relative overflow-hidden"
      id="case-studies"
    >
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
                boxShadow:
                  "0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-gray-200 transition">
                {caseStudy.title}
              </h3>
              <p className="text-white/80 mb-4">{caseStudy.summary}</p>
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:underline"
                aria-label={`Read case study: ${caseStudy.title}`}
              >
                   {caseStudy.link === "#" ? "" : "Read More →"}
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
