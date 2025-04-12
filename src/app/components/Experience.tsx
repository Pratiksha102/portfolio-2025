"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Frontend Developer, Thoughtclan Technologies – Bengaluru, India",
    period: "June 2022 – Present",
    description: `
      Built scalable React components in a micro-frontend architecture for clients like Byg Brewski and Mumbai Oncocare Center. Integrated MSAL for auth, SurveyJS for forms, and visualized healthcare data with Chart.js and Recharts. Improved performance with lazy loading and wrote unit tests with Jest.
    `,
  },
  {
    title: "Full Stack Developer, Infosys – Pune, India",
    period: "Nov 2020 – June 2022",
    description: `
      Delivered a healthcare web application for CVS Health Pharmacy using React, Node.js, and Oracle DB. Built REST APIs, responsive UIs, integrated Google Maps for store location, and set up CI/CD pipelines with Octopus Deploy.
    `,
  },
  {
    title: "Intern, Infosys – Mysore, India",
    period: "Feb 2020",
    description: `
      Completed hands-on training in full-stack development with a focus on frontend technologies.
      Built responsive Angular applications, optimized SQL queries for better performance, and
      enhanced UI/UX for mobile and desktop platforms.
    `,
  }
  
];

const Experience = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-40 animate-gradient" />

      <h2 className="text-4xl font-bold text-center mb-16 text-gray-200 tracking-wider">
        Experience
      </h2>

      <div className="relative max-w-3xl mx-auto space-y-10">
        <div
          className="absolute left-0 top-0 bottom-0 border-l-2 border-white/30 z-30"
          style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)" }}
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
              <p className="mt-3 text-gray-300 whitespace-pre-line leading-relaxed">{experience.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
