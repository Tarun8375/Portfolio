"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const skills = [
  { name: "HTML, CSS & JS", level: 95 },
  { name: "React", level: 85 },
  { name: "Photoshop", level: 80 },
  { name: "MongoDB", level: 70 },
  { name: "Express.js", level: 65 },
  { name: "Figma", level: 60 },
];

const experiences = [
  {
    title: "Frontend Developer - Local Clients",
    company: "Freelance",
    duration: "Feb 2021 – Jan 2022",
    description:
      "Built responsive websites for local businesses using HTML, CSS, JS, and WordPress.",
  },
  {
    title: "Graphic Designer",
    company: "In-House Studio",
    duration: "Feb 2022 – Oct 2022",
    description:
      "Designed marketing visuals, logos, and motion graphics using Photoshop and Illustrator.",
  },
  {
    title: "Full Stack Developer",
    company: "RT Digital World",
    duration: "Oct 2022 – Present",
    description:
      "Handled both backend and frontend tasks, including client websites and internal tools using React, Node.js, and MongoDB.",
  },
  {
    title: "Web & UI Designer",
    company: "E-Media Advert",
    duration: "Jan 2023 – Present",
    description:
      "Created UI/UX wireframes and responsive web interfaces for digital campaigns and product showcases.",
  },
];

const certificates = [
  {
    title: "Digital Marketing",
    url: "/certificates/Digital_Marketing.pdf",
  },
  {
    title: "Graphic Designing",
    url: "/certificates/Graphic_designing.pdf",
  },
  {
    title: "Web Development",
    url: "/certificates/Web_Designing.pdf",
  },
  {
    title: "Deloitte Job Simulation",
    url: "/certificates/Deloitte Certificate.pdf",
  },
];

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % experiences.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section
      id="about"
      className="py-16 px-4 bg-white dark:bg-[#0d1b2a] text-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A passionate Full Stack Developer & Creative Designer. I merge clean
          code with bold visuals to build impactful digital experiences. From
          startup websites to scalable backend systems, I focus on
          functionality, performance, and user-centric design.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-[#1e293b] p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2 text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-2 rounded-full bg-orange-500 dark:bg-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="text-left">
          <h3 className="text-3xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300">
            With 3+ years of hands-on experience, I’ve worked on everything
            from responsive websites for local clients to full-stack apps at a
            digital agency. My journey blends creative design and clean
            development to build user-focused digital solutions.
          </p>
        </div>

        <div className="relative bg-gray-100 dark:bg-[#1e293b] p-8 rounded-lg shadow-lg">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-orange-500 dark:bg-blue-500 text-white mr-4">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-orange-500 dark:text-blue-400">
                  {experiences[current].title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {experiences[current].company} • {experiences[current].duration}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              {experiences[current].description}
            </p>
          </motion.div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevSlide}
              className="px-5 py-2 text-sm sm:text-base bg-orange-500 dark:bg-blue-500 text-white rounded hover:opacity-90"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-5 py-2 text-sm sm:text-base bg-orange-500 dark:bg-blue-500 text-white rounded hover:opacity-90"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl font-semibold mb-6">Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 dark:bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-orange-500 dark:text-blue-400 mb-2">
                {cert.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Click to view the certificate (PDF)
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
