"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "MOC Oncocare Center",
    description:
      "A comprehensive hospital management app built using React and Firebase. Includes appointment scheduling, patient records, and dashboards.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/yourusername/hospital-app",
  },
  {
    title: "BYG Brewsky (Bob's Bar, Jollygunj)",
    description:
      "My personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive with dark mode.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://yourportfolio.vercel.app",
  },
  {
    title: "Rule Zero",
    description:
      "An admin dashboard to manage products, users, and orders. Developed with Redux Toolkit and REST APIs.",
    tags: ["Next.js", "Redux", "REST API"],
    link: "https://github.com/yourusername/ecommerce-admin",
  },
  {
    title: "Fitness By Wafir",
    description:
      "An admin dashboard to manage products, users, and orders. Developed with Redux Toolkit and REST APIs.",
    tags: ["Next.js", "Redux", "REST API"],
    link: "https://github.com/yourusername/ecommerce-admin",
  },
];

const Projects = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-black opacity-40 animate-gradient" />

      <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-wider">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
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
                {project.title}
              </h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:underline"
                aria-label={`View project: ${project.title}`}
              >
                View Project →
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
