"use client";
import React from "react";
import { FileText } from "lucide-react";

export default function StickyResumeButton() {
  return (
    <div className="fixed right-2 bottom-24 z-50 flex flex-col items-center">
      <a
        href="/Tarun Verma CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 dark:bg-blue-500 text-white px-3 py-2 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex flex-col items-center gap-1"
      >
        <FileText size={20} />
        <span className="text-xs font-medium">Resume</span>
      </a>
    </div>
  );
}
