import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import myImage from "../assets/new.jpg";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const codeSnippets = [
    "console.log('Tarun.dev 🚀')",
    "const server = express()",
    "npm run dev",
    "import React from 'react'",
    "useEffect(() => {}, [])",
    "res.status(200).json({ success: true })",
    "router.post('/api/send')",
    "app.listen(3000)",
    "Tarun - Web & Backend Wizard",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const lines = [];
    const getCurrentTheme = () =>
      document.documentElement.classList.contains("dark");

    let isDark = getCurrentTheme();

    const observer = new MutationObserver(() => {
      isDark = getCurrentTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    function createLine() {
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const x = Math.random() * (width - 200);
      const y = Math.random() * (height - 50);
      lines.push({
        text,
        x,
        y,
        charIndex: 0,
        opacity: 0.34,
        state: "typing",
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      lines.forEach((line, index) => {
        if (line.state === "typing") {
          line.charIndex += 1;
          if (line.charIndex >= line.text.length) {
            line.state = "fading";
          }
        } else if (line.state === "fading") {
          line.opacity -= 0.01;
          if (line.opacity <= 0) {
            lines.splice(index, 1);
            return;
          }
        }

        ctx.font = "16px monospace";
        const color = isDark
          ? `rgba(0,255,160,${line.opacity})`
          : `rgba(0,0,0,${line.opacity})`;
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = isDark ? 10 : 2;

        const partial = line.text.slice(0, line.charIndex);
        ctx.fillText(partial, line.x, line.y);
      });

      requestAnimationFrame(animate);
    }

    const spawnInterval = setInterval(createLine, 300);
    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      clearInterval(spawnInterval);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

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
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

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
          className="text-xl sm:text-2xl text-[#00D1FF] mt-2"
        >
          <Typewriter
            words={["Full Stack Developer", "Backend Engineer", "Creative Thinker"]}
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
      </motion.div>
    </section>
  );
}
