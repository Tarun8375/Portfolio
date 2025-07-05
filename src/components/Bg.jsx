// components/Bg.jsx
import React, { useEffect, useRef } from "react";

export default function Bg() {
  const canvasRef = useRef(null);

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

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
