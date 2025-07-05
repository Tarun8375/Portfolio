import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/new.jpg";
import { Typewriter } from "react-simple-typewriter";
import Bg from "./Bg";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12"
    >
      <Bg />

      <motion.div
        className="absolute z-10 flex flex-col items-center text-center max-w-3xl"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        <motion.img
          src={myImage}
          alt="Tarun"
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold"
        >
          Tarun — Full Stack Developer
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-2xl md:text-3xl font-bold text-orange-500 dark:text-blue-500 mt-2"
        >
          <Typewriter
            words={[
              "Full Stack Developer",
              "Graphic Designer",
              "Creative Thinker",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 px-4"
        >
          Code. Logic. Madness. Designing dreams with logic & syntax.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 inline-block px-6 py-3 rounded-full font-semibold
          text-white bg-orange-500 dark:bg-blue-600
          hover:bg-orange-600 dark:hover:bg-blue-700
          shadow-md hover:shadow-xl transition duration-300 text-sm sm:text-base"
        >
          Let's Talk
        </motion.a>
      </motion.div>
    </section>
  );
}
