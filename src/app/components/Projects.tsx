"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management app built using React and Firebase. Includes appointment scheduling, patient records, and dashboards.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/yourusername/hospital-app",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Fully responsive with dark mode.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://yourportfolio.vercel.app",
  },
  {
    title: "E-commerce Admin Dashboard",
    description:
      "An admin dashboard to manage products, users, and orders. Developed with Redux Toolkit and REST APIs.",
    tags: ["Next.js", "Redux", "REST API"],
    link: "https://github.com/yourusername/ecommerce-admin",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-yellow-400 py-16 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center mb-16 text-yellow-300 tracking-wider">
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
            className="bg-yellow-900/10 border border-yellow-700 rounded-xl p-6 shadow-md hover:shadow-yellow-600/20 transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-yellow-200 mb-2">
              {project.title}
            </h3>
            <p className="text-yellow-100 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-yellow-700 text-black text-xs font-semibold px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-yellow-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
