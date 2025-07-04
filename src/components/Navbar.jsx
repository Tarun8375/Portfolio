import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import { Home, User, Briefcase, Mail, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const menuItems = [
    { id: 'home', icon: <Home size={22} />, label: 'Home' },
    { id: 'about', icon: <User size={22} />, label: 'About' },
    { id: 'work', icon: <Briefcase size={22} />, label: 'Work' },
    { id: 'contact', icon: <Mail size={22} />, label: 'Contact' },
  ];

  return (
    <>
      {/*Top Navbar */}
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[80%] rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-lg shadow-md px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tarun</h1>

        {/* 🖥 Menu Items (Center) */}
        <div className="hidden md:flex flex-1 justify-center">
          <Scrollspy
            items={menuItems.map((item) => item.id)}
            currentClassName="text-orange-500 font-bold"
            componentTag="ul"
            className="flex space-x-10 text-gray-900 dark:text-white font-medium"
            offset={-100}
          >
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-orange-500 transition-all duration-200 px-2 py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </Scrollspy>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/30 dark:bg-black/40 text-gray-900 dark:text-white backdrop-blur-md hover:scale-110 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/*  Mobile Nav */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-md rounded-full bg-white dark:bg-zinc-900 shadow-xl border border-gray-200 dark:border-zinc-800 backdrop-blur-lg py-3 px-4">
        <Scrollspy
          items={menuItems.map((item) => item.id)}
          currentClassName="text-orange-500 scale-110"
          componentTag="div"
          className="flex justify-between"
          offset={-80}
        >
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className=" flex flex-col items-center w-full transition-all duration-300 text-gray-500 dark:text-gray-300 hover:text-orange-500"
            >
              <div>{item.icon}</div>
              {/* <span className="text-[11px] mt-1">{item.label}</span> */}
            </a>
          ))}
        </Scrollspy>
      </div>
    </>
  );
}
