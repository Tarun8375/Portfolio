// components/ProgressBar.jsx
import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className="h-full bg-[#00D1FF] transition-all duration-200"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
}
