"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TaskWise",
    description: "AI-powered task manager for devs, students & businesses with smart suggestions.",
    tech: ["MERN", "Tailwind", "Framer Motion", "OpenAI"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Nameless Apparel",
    description: "Clothing brand website with smooth UI, product showcase & cart system.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio 3D",
    description: "Three.js-based portfolio with 3D interactions, motion, and scroll-based UI.",
    tech: ["React", "Three.js", "Framer Motion"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio 3D",
    description: "Three.js-based portfolio with 3D interactions, motion, and scroll-based UI.",
    tech: ["React", "Three.js", "Framer Motion"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio 3D",
    description: "Three.js-based portfolio with 3D interactions, motion, and scroll-based UI.",
    tech: ["React", "Three.js", "Framer Motion"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio 3D",
    description: "Three.js-based portfolio with 3D interactions, motion, and scroll-based UI.",
    tech: ["React", "Three.js", "Framer Motion"],
    liveLink: "#",
    codeLink: "#",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="py-20 px-4 md:px-16 bg-gradient-to-br from-[#fffbea] via-[#f0f0f0] to-[#cccccc] dark:from-[#0d1b2a] dark:via-[#1b263b] dark:to-[#000000] text-black dark:text-white transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Work</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm md:text-base">
          Projects I've crafted with care & code.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-black dark:text-white" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" /> Live
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-black dark:text-white" asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" /> Code
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
