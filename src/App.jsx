import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Socials from './components/Socials';
import ProgressBar from './components/ProgressBar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyResumeButton from './components/StickyResumeButton';

export default function App() {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 600,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      updateURL: false,
    });

    return () => scroll.destroy();
  }, []);

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
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
        <StickyResumeButton />
    </main>
  );
}
