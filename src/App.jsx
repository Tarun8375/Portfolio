import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import ProgressBar from './components/ProgressBar';

export default function App() {
  return (
    <main
      className="min-h-screen w-full overflow-x-hidden
        bg-gradient-to-br
        from-[#fffbea] via-[#f0f0f0] to-[#cccccc]
        dark:from-[#0d1b2a] dark:via-[#1b263b] dark:to-[#000000]
        text-black dark:text-white transition-all duration-300"
    >
      <ProgressBar />
      <Navbar />
      <section id="home">
        <Hero />
        <Socials />
      </section>
    </main>
  );
}
