import { portfolioData } from "../data";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">Sertifikat & Lisensi</h1>
        <p className="text-lg text-slate-300">
          Validasi keahlian dan kursus yang telah saya selesaikan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {portfolioData.certificates.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full hover:border-blue-300 transition-colors">
            <h2 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
              {cert.name}
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Diterbitkan oleh <span className="font-semibold">{cert.issuer}</span>
            </p>
            
            <div className="mt-auto space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-500 bg-slate-50 p-2 rounded">
                <span>ID: {cert.credentialId}</span>
                <span>Tahun: {cert.year}</span>
              </div>
              
              {cert.link !== "#" && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  Lihat Kredensial
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}