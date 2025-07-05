import React from "react";
import { Github, Linkedin, MessageCircleMore } from "lucide-react";

export default function Socials() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={16} />,
      url: "https://github.com/Tarun8375",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      url: "https://www.linkedin.com/in/tarunverma8860/",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircleMore size={16} />,
      url: "https://wa.me/8375072990",
    },
  ];

  return (
    <div className="hidden md:flex fixed left-3 md:left-14 bottom-1/2 translate-y-1/2 flex-col items-center space-y-5 z-50">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="p-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 transition-all duration-300
            group-hover:bg-orange-500 dark:group-hover:bg-blue-500 
            group-hover:text-white"
          >
            {item.icon}
          </div>
        </a>
      ))}
      <div className="w-[2px] h-24 bg-gray-400 dark:bg-gray-600 mt-2"></div>
    </div>
  );
}
