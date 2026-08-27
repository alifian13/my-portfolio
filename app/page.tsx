"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolioData } from "./data";

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const getCardStyle = (index: number) => {
    if (index === currentProject) {
      return "translate-x-0 scale-100 z-30 opacity-100 shadow-[0_0_40px_rgba(0,0,0,0.8)]";
    }

    if (portfolioData.projects.length === 2) {
      if (index !== currentProject) return "translate-x-[25%] md:translate-x-[45%] scale-[0.8] z-20 opacity-40 cursor-pointer hover:opacity-70";
    }

    if (index === currentProject - 1 || (currentProject === 0 && index === portfolioData.projects.length - 1)) {
      return "-translate-x-[30%] md:-translate-x-[50%] scale-[0.8] z-20 opacity-40 cursor-pointer hover:opacity-70";
    }
    if (index === currentProject + 1 || (currentProject === portfolioData.projects.length - 1 && index === 0)) {
      return "translate-x-[30%] md:translate-x-[50%] scale-[0.8] z-20 opacity-40 cursor-pointer hover:opacity-70";
    }

    return "translate-x-0 scale-50 z-10 opacity-0 pointer-events-none";
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black pb-20 font-sans overflow-hidden">
      
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-[#0a0a0a] z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-700/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

        <div className="absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden z-10 border-b-4 border-red-900/30 shadow-[0_20px_100px_rgba(220,38,38,0.1)]">
          <Image 
            src={portfolioData.profileImage} 
            alt={portfolioData.name} 
            fill
            className="object-cover"
            priority 
            quality={100} 
          />
        </div>

        <div className="relative z-20 max-w-[1400px] mx-auto w-full px-6 flex flex-col lg:flex-row justify-between items-center h-full gap-12 lg:gap-0 mt-32 lg:mt-0">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-sm font-bold tracking-[0.2em] text-red-500 uppercase mb-2">Halo, Saya</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {portfolioData.name}<span className="text-red-500">.</span>
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] tracking-tighter drop-shadow-xl">
              Web & App<br />Developer
            </h1>
          </div>

          <div className="lg:w-1/3 text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:pl-12 mt-48 lg:mt-0">
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-sm font-medium">
              Let's collaborate to build something great.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#work" className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-transform hover:scale-105 text-center">
                Lihat Proyek &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. WORK GALLERY
      ========================================= */}
      <section id="work" className="max-w-[1400px] mx-auto px-6 pt-32">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">Selected Work</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 flex items-center gap-2">
              Work Gallery <span className="animate-pulse font-light text-zinc-500">|</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">A collection of systems, digital projects, and technical work I've built.</p>
          </div>
          <a href="#" className="px-6 py-3 bg-white text-black rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 shrink-0">
            View More Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>

        <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center overflow-visible mb-12">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`absolute w-[80%] md:w-[50%] h-full transition-all duration-700 ease-out ${getCardStyle(index)}`}
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#111] border border-white/10">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto min-h-[160px] flex flex-col items-center justify-start transition-opacity duration-500">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {portfolioData.projects[currentProject].title}
          </h3>
          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            {portfolioData.projects[currentProject].description}
          </p>
          <a href="#" className="text-sm font-bold border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-colors">
            View Project &rarr;
          </a>
        </div>
      </section>

      {/* =========================================
          3. WHAT I CAN DO
      ========================================= */}
      <section id="what" className="max-w-[1400px] mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-12 gap-16 border-t border-white/10 pt-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">My Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">What I Can Do</h2>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              Saya menggabungkan keahlian teknis, pemecahan masalah, dan keterampilan digital untuk membangun sistem yang andal serta aplikasi modern berbasis mobile dan web.
            </p>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="w-auto h-12 px-5 bg-[#111] border border-white/10 rounded-xl flex items-center justify-center text-sm font-medium text-zinc-300 hover:bg-white/5 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5">
              <span className="text-4xl font-light text-zinc-600 mb-6 block">01</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-zinc-200">Mobile & Web<br/>Development</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Membangun dan menguji sistem digital dari database hingga aplikasi mobile menggunakan Flutter dan Express.js dengan fokus pada keandalan dan arsitektur yang bersih.
              </p>
            </div>
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5">
              <span className="text-4xl font-light text-zinc-600 mb-6 block">02</span>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide text-zinc-200">Research &<br/>Algorithms</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Menerapkan algoritma cerdas seperti Rule-Based dan Clustering untuk menciptakan solusi inovatif dan adaptif pada permasalahan dunia nyata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. ABOUT ME
      ========================================= */}
      <section id="about" className="max-w-[1400px] mx-auto px-6 pt-32">
        <div className="border-t border-white/10 pt-16">
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">About Me</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">Problem Solver.<br/>Outdoor Explorer.</h2>

          <div className="grid lg:grid-cols-12 gap-12 bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl">
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 pr-0 lg:pr-8">
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Projects</p>
                <p className="text-4xl font-light">{portfolioData.projects.length}+</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Certifications</p>
                <p className="text-4xl font-light">{portfolioData.certificates.length}+</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Mountains Hiked</p>
                <p className="text-4xl font-light">{portfolioData.mountains.length}</p>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image src={portfolioData.profileImage} alt={portfolioData.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg uppercase tracking-wide">{portfolioData.name}</h3>
                  <p className="text-xs text-zinc-500">{portfolioData.experiences[0].company}</p>
                </div>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                {portfolioData.about} {portfolioData.experiences[0].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. AWARDS AND ACHIEVEMENTS (DIROMBAK TOTAL)
      ========================================= */}
      <section id= "award" className="max-w-[1400px] mx-auto px-6 pt-32">
        <div className="border-t border-white/10 pt-16">
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Awards and Achievements</h2>
          <p className="text-zinc-400 mb-16 max-w-2xl text-sm md:text-base">
            A collection of academic and professional recognitions that reflect my dedication to excellence.
          </p>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* KIRI: Kolase Foto Asimetris (Murni Foto Tanpa Teks) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              
              {/* Kolom 1 (Atas sedikit) */}
              <div className="flex flex-col gap-3 md:gap-4 mt-0">
                <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden border border-white/5">
                  <Image src={portfolioData.recognitionPhotos[0]} alt="Dokumentasi" fill className="object-cover" />
                </div>
                <div className="relative w-full h-32 md:h-40 rounded-xl overflow-hidden border border-white/5">
                  <Image src={portfolioData.recognitionPhotos[3]} alt="Dokumentasi" fill className="object-cover" />
                </div>
              </div>

              {/* Kolom 2 (Turun ke bawah) */}
              <div className="flex flex-col gap-3 md:gap-4 mt-12 md:mt-20">
                <div className="relative w-full h-36 md:h-48 rounded-xl overflow-hidden border border-white/5">
                  <Image src={portfolioData.recognitionPhotos[1]} alt="Dokumentasi" fill className="object-cover" />
                </div>
                <div className="relative w-full h-44 md:h-56 rounded-xl overflow-hidden border border-white/5">
                  <Image src={portfolioData.recognitionPhotos[4]} alt="Dokumentasi" fill className="object-cover" />
                </div>
              </div>

              {/* Kolom 3 (Agak ke atas lagi) - Tersembunyi di layar sangat kecil */}
              <div className="hidden sm:flex flex-col gap-3 md:gap-4 mt-6 md:mt-10">
                <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden border border-white/5">
                  <Image src={portfolioData.recognitionPhotos[2]} alt="Dokumentasi" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* KANAN: Daftar Kartu Minimalis */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {portfolioData.achievements?.map((ach, index) => (
                <a 
                  key={index} 
                  href={ach.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#111] border border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:bg-[#1a1a1a] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xl md:text-2xl text-zinc-400 bg-white/5 w-10 h-10 flex items-center justify-center rounded-full">
                      {ach.icon}
                    </span>
                    <span className="font-semibold text-sm md:text-base text-zinc-200 group-hover:text-white transition-colors">
                      {ach.title}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          6. TRAININGS & CERTIFICATIONS
      ========================================= */}
      <section id= "certificates" className="max-w-[1400px] mx-auto px-6 pt-32">
        <div className="border-t border-white/10 pt-16">
          <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">Growth & Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Trainings & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.certificates.map((cert, index) => (
              <div key={index} className="bg-[#111] p-8 rounded-3xl border border-white/5 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-white pr-4">{cert.name}</h3>
                  <span className="text-xs text-zinc-500 whitespace-nowrap">{cert.year}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-8 flex-1">
                  Penyelenggara: {cert.issuer}<br/>
                  Credential ID: {cert.credentialId}
                </p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors border-t border-white/10 pt-4 flex items-center justify-between">
                  Certificate of Completion <span className="text-lg">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. JEJAK PENDAKIAN (PHOTO GALLERY STYLE)
      ========================================= */}
      <section className="max-w-[1400px] mx-auto px-6 pt-32">
        <div className="border-t border-white/10 pt-16">
           <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">Life Outside Code</p>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Mountain Logs <span className="text-zinc-600">|</span></h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {portfolioData.mountains.map((mountain, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden h-40 group bg-black border border-white/5">
                <Image src={mountain.image} alt={mountain.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-xs font-bold text-white drop-shadow-md">{mountain.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          8. LET'S WORK TOGETHER (CONTACT FOOTER)
      ========================================= */}
      <section id= "contact" className="max-w-[1400px] mx-auto px-6 pt-32">
        <div className="border-t border-white/10 pt-20 pb-12 flex flex-col lg:flex-row justify-between gap-16">
          
          <div className="lg:w-1/2">
            <p className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4">Get In Touch</p>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              Let's<br/>Work<br/>Together
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-md">
              Looking for the next problem worth solving.
            </p>
            <a href="Rizky Alifian Ilham_CV.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all">
              DOWNLOAD RESUME →
            </a>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center space-y-4">
            <a href="mailto:emailkamu@gmail.com" className="bg-[#111] border border-white/5 p-6 rounded-2xl flex justify-between items-center group hover:border-white/20 transition-colors">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-lg font-medium text-zinc-200">ilhamralifian@gmail.com</p>
              </div>
              <span className="text-zinc-600 group-hover:text-white transition-colors">↗</span>
            </a>
            
            <a href="https://github.com/Alifian13" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-white/5 p-6 rounded-2xl flex justify-between items-center group hover:border-white/20 transition-colors">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Github</p>
                <p className="text-lg font-medium text-zinc-200">GitHub</p>
              </div>
              <span className="text-zinc-600 group-hover:text-white transition-colors">↗</span>
            </a>

            <a href="https://linkedin.com/in/rizky-alifian-ilham-0a7a563a6" target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-white/5 p-6 rounded-2xl flex justify-between items-center group hover:border-white/20 transition-colors">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="text-lg font-medium text-zinc-200">LinkedIn</p>
              </div>
              <span className="text-zinc-600 group-hover:text-white transition-colors">↗</span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}