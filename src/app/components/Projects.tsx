"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "MOC Oncocare Center",
    description:
      "A comprehensive hospital management app built using React, Redux, and MSAL for secure authentication. Features include appointment scheduling, patient records, and data dashboards.",
    tags: ["React", "Redux", "MSAL", "Tailwind"],
    link: "#",
  },
  {
    title: "BYG Brewsky (Bob's Bar, Jollygunj)",
    description:
      "Restaurant management interfaces developed with React, Redux Toolkit, and Tailwind. Focused on responsive, scalable UI with clean state management.",
    tags: ["React", "Redux Toolkit", "Tailwind"],
    link: "#",
  },
  {
    title: "Rule Zero",
    description:
      "A legal document management dashboard built using Next.js and shadcn/ui. Integrated with an LLM-powered backend to summarize contracts, detect clause differences, and assist legal teams with quick insights. Features user access control, version tracking, and seamless document uploads.",
    tags: ["Next.js", "shadcn/ui", "TypeScript"],
    link: "#",
  },
  {
    title: "Fitness By Wafir",
    description:
      "A fullstack fitness platform built with Next.js and Supabase, featuring Google Authentication and Razorpay integration for secure user logins and seamless plan purchases.",
    tags: ["Next.js", "Supabase", "Google Auth", "Razorpay", "Tailwind"],
    link: "https://fitness-forever.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-12 relative overflow-hidden">
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
                              {project.link === "#" ? "" : "View Project →"}

              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
