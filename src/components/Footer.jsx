import React from "react";
import { Github, Linkedin, MessageCircleMore } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={18} />,
      url: "https://github.com/Tarun8375",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/tarunverma8860/",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircleMore size={18} />,
      url: "https://wa.me/8375072990",
    },
  ];

  return (
    <footer className="w-full py-6 px-4 pb-20 bg-transparent text-center text-sm text-gray-600 dark:text-gray-400">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-3">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-blue-500"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Text */}
      <p className="text-xs">
        © {new Date().getFullYear()} Tarun Verma. Build with ❤️.
      </p>
    </footer>
  );
}
