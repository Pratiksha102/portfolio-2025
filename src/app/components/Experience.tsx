"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card"; // Assuming Card component is available

const experiences = [
  {
    title: "Software Developer at XYZ Corp.",
    period: "Jan 2021 - Present",
    description:
      "Developed scalable web applications using React and Node.js, integrated REST APIs, and worked on performance optimization and user interface improvements.",
  },
  {
    title: "Frontend Developer at ABC Ltd.",
    period: "Jun 2019 - Dec 2020",
    description:
      "Led frontend development efforts for a SaaS product, using Angular and TypeScript to build dynamic, responsive, and user-friendly interfaces.",
  },
  {
    title: "Intern at Tech Innovations",
    period: "Jan 2019 - May 2019",
    description:
      "Assisted in the development of a mobile app with React Native, contributed to bug fixes and UI enhancements, and participated in code reviews.",
  },
];

const Experience = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-200 tracking-wider">
        Experience
      </h2>

      <div className="relative max-w-3xl mx-auto space-y-10">
        {/* Timeline Line with Glow */}
        <div
          className="absolute left-0 top-0 bottom-0 border-l-2 border-white/30 z-30"
          style={{
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
          }}
        />

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-12 group z-20"
          >
            {/* Timeline Dot with Glow */}
            <span
              className="absolute left-[-10px] w-6 h-6 bg-white rounded-full border-2 shadow-lg z-20"
              style={{
                top: `${100 * index}px`,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6)",
              }}
            />

            <Card
              className="group relative backdrop-blur-md bg-white/10 border border-white/30 rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 z-10"
              style={{
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-gray-200 transition">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1 italic">{experience.period}</p>
              <p className="mt-3 text-gray-300 leading-relaxed">{experience.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
