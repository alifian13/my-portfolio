"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolioData } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-6 max-w-[1400px] mx-auto">
      <div className="bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        
        <Link href="/" className="font-bold text-lg md:text-xl text-white tracking-tight flex items-center">
          {portfolioData.name.split(" ")[0]}<span className="text-red-500 font-extrabold">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#what" className="hover:text-white transition-colors">What I Can Do</a>
          <a href="#about" className="hover:text-white transition-colors">About Me</a>
          <a href="#award" className="hover:text-white transition-colors">Achievement</a>
          <a href="#certificates" className="hover:text-white transition-colors">Certifications</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" 
            className="px-5 py-2 bg-white text-black text-xs md:text-sm font-bold rounded-full hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md"
          >
            Hire Me
            <span className="text-xs font-black">&rarr;</span>
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-zinc-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-center text-sm font-medium text-zinc-300 shadow-2xl">
          <a href="#" onClick={() => setIsOpen(false)} className="py-2 hover:text-white border-b border-white/5">Home</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="py-2 hover:text-white border-b border-white/5">Work</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="py-2 hover:text-white border-b border-white/5">About</a>
          <a href="#recognition" onClick={() => setIsOpen(false)} className="py-2 hover:text-white border-b border-white/5">Recognition</a>
          <a href="#certificates" onClick={() => setIsOpen(false)} className="py-2 hover:text-white border-b border-white/5">Certifications</a>
        </div>
      )}
    </header>
  );
}