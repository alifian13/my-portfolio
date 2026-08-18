import Image from "next/image";
import { portfolioData } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-28"> {/* Jarak antar section diperbesar sedikit */}
        
        {/* HERO SECTION DENGAN FOTO PROFIL */}
        <header className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 pt-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {portfolioData.name}
            </h1>
            <p className="text-xl text-blue-400 font-medium mb-6">
              {portfolioData.role}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="https://github.com/alifian13" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
                GitHub Profile
              </a>
              <a href="https://linkedin.com/in/rizky-alifian-ilham-0a7a563a6" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
                LinkedIn Profile
              </a>
              <a href="#contact" className="px-6 py-2.5 bg-transparent border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Hubungi Saya
              </a>
            </div>
          </div>
          
          <div className="shrink-0 relative w-40 h-40 md:w-48 md:h-48">
            <Image 
              src={portfolioData.profileImage} 
              alt={`Foto Profil ${portfolioData.name}`} 
              fill
              className="rounded-full object-cover border-4 border-slate-800 shadow-2xl"
              priority 
            />
          </div>
        </header>

        {/* ABOUT SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 border-b border-slate-800 pb-4 text-white">Tentang Saya</h2>
          <p className="text-slate-400 leading-relaxed text-lg text-justify">
            {portfolioData.about}
          </p>
        </section>

        {/* --- SECTION BARU: PENDIDIKAN --- */}
        <section>
          <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4 text-white">Pendidikan</h2>
          <div className="space-y-8">
            {portfolioData.educations.map((edu, index) => (
              // Menggunakan md:flex-row agar foto di KIRI
              <div key={index} className="flex flex-col md:flex-row bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 group">
                
                {/* Bagian Foto */}
                <div className="md:w-2/5 relative h-56 md:h-auto overflow-hidden bg-slate-800 shrink-0">
                  <Image 
                    src={edu.image} 
                    alt={edu.school} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                </div>
                
                {/* Bagian Teks */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-3 gap-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                    <span className="px-4 py-1.5 bg-blue-900/30 text-blue-400 border border-blue-800/50 rounded-full text-xs font-bold tracking-wide w-fit">
                      {edu.date}
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-300 font-medium mb-4 flex items-center gap-2">
                    🎓 {edu.school}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION BARU: PENGALAMAN --- */}
        <section>
          <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4 text-white">Pengalaman</h2>
          <div className="space-y-8">
            {portfolioData.experiences.map((exp, index) => (
              // Menggunakan md:flex-row-reverse agar foto di KANAN (tampil beda dan dinamis)
              <div key={index} className="flex flex-col md:flex-row-reverse bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 group">
                
                {/* Bagian Foto */}
                <div className="md:w-2/5 relative h-56 md:h-auto overflow-hidden bg-slate-800 shrink-0">
                  <Image 
                    src={exp.image} 
                    alt={exp.company} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                </div>
                
                {/* Bagian Teks */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-3 gap-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                    <span className="px-4 py-1.5 bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 rounded-full text-xs font-bold tracking-wide w-fit">
                      {exp.date}
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-300 font-medium mb-4 flex items-center gap-2">
                    💼 {exp.company}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 border-b border-slate-800 pb-4 text-white">Tech Stack & Keahlian</h2>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-slate-800 text-slate-300 border border-slate-700 rounded-lg text-sm font-medium shadow-sm hover:border-slate-500 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION (Desain Grid Lama) */}
        <section>
          <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4 text-white">Proyek Pilihan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-colors flex flex-col group">
                <div className="relative w-full h-56 bg-slate-800 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUTDOOR / MOUNTAINS SECTION (Desain Grid Gambar Penuh) */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b border-slate-800 pb-4 text-white">Jejak Pendakian</h2>
          <p className="text-slate-400 mb-8 text-lg">Beberapa gunung yang telah saya eksplorasi:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioData.mountains.map((mountain, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden h-40 md:h-48 group bg-slate-800">
                <Image 
                  src={mountain.image}
                  alt={mountain.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm md:text-sm drop-shadow-md tracking-wide">
                    📍 {mountain.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="border-t border-slate-800 pt-16 pb-8 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Mari Berdiskusi</h2>
          <p className="text-slate-400 mb-8 text-lg">Tertarik untuk kolaborasi proyek atau diskusi teknis?</p>
          <a href="mailto:emailkamu@gmail.com" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/50">
            Kirim Email
          </a>
          <p className="mt-20 text-sm text-slate-600">
            © {new Date().getFullYear()} {portfolioData.name}. Dibuat dengan Next.js & Tailwind CSS.
          </p>
        </footer>

      </div>
    </main>
  );
}