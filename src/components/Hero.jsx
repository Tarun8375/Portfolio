import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/new.jpg";
import { Typewriter } from 'react-simple-typewriter';
import Bg from "./Bg"; // 🔁 Your background component

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
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* <Bg /> */}

      <motion.div
        className="absolute z-10 w-full flex flex-col items-center text-center px-4"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
        }}
      >
        <motion.img
          src={myImage}
          alt="Tarun Logo"
          className="w-68 h-68 sm:w-72 sm:h-95 mb-6 rounded-full object-cover shadow-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-bold"
        >
          Tarun — Full Stack Developer
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-3xl font-bold text-orange-500 dark:text-blue-500 mt-2"
        >
          <Typewriter
            words={["Full Stack Developer", "Graphic Designer", "Creative Thinker"]}
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
          className="mt-4 max-w-xl text-base sm:text-lg text-gray-700 dark:text-gray-300"
        >
          Code. Logic. Madness. Designing dreams with logic & syntax.
        </motion.p>
        <motion.a
          href="#contact" // or change to your section/link
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 inline-block px-6 py-3 rounded-full font-semibold
    text-white dark:text-white
    bg-orange-500 dark:bg-blue-600
    hover:bg-orange-600 dark:hover:bg-blue-700
    shadow-md hover:shadow-xl transition duration-300"
        >
          Let's Talk
        </motion.a>

      </motion.div>
    </section>
  );
}
