// components/Experience.tsx
"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "React Developer",
    company: "Thoughtclan Technologies",
    duration: "June 2022 – Present",
    description:
      "Built and maintained a hospital management web app with features like Practo. Focused on UI/UX, reusability, and Firebase integration.",
  },
  {
    role: "Frontend Intern",
    company: "CodeCrafters",
    duration: "Jan 2022 – May 2022",
    description:
      "Developed dashboards using React & Tailwind. Collaborated with backend team on REST APIs and improved UI performance.",
  },
  {
    role: "Freelance Web Developer",
    company: "Remote",
    duration: "2021 – Present",
    description:
      "Designed responsive websites for small businesses using Next.js and Tailwind CSS. Focused on SEO and cross-browser support.",
  },
];

const Experience = () => {
  return (
    <section className="bg-black text-yellow-400 py-16 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-16 text-yellow-300 tracking-wider">
        Experience
      </h2>

      <div className="relative border-l-2 border-yellow-600 max-w-3xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 group"
          >
            {/* Yellow Dot */}
            <span className="absolute left-[-11px] top-2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black shadow-lg group-hover:scale-125 transition-transform" />

            <h3 className="text-2xl font-semibold text-yellow-300 group-hover:text-yellow-200 transition">
              {exp.role}
            </h3>
            <p className="text-sm text-yellow-500 mt-1">
              {exp.company} | {exp.duration}
            </p>
            <p className="mt-3 text-yellow-200 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
