import { portfolioData } from "../data";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">Publikasi & Jurnal</h1>
        <p className="text-lg text-slate-300">
          Daftar karya ilmiah, jurnal, dan publikasi akademik yang telah saya tulis.
        </p>
      </div>

      <div className="space-y-6">
        {portfolioData.publications.map((pub, index) => (
          <article key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-4 mb-3">
              <h2 className="text-xl font-bold text-slate-800 leading-tight">
                {pub.title}
              </h2>
              <span className="shrink-0 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                {pub.year}
              </span>
            </div>
            <p className="text-blue-600 font-medium text-sm mb-4">
              {pub.journal}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {pub.description}
            </p>
            
            {pub.link !== "#" && (
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors underline decoration-slate-300 underline-offset-4"
              >
                Baca Jurnal →
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}