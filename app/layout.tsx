import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { portfolioData } from "./data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${portfolioData.name} - Portfolio`,
  description: portfolioData.role,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* BACKGROUND GELAP UNTUK BODY */}
      <body className={`${inter.className} bg-slate-950 text-slate-300`}>
        
        {/* NAVBAR MODE GELAP */}
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-white tracking-tight">
              {portfolioData.name.split(" ")[0]}<span className="text-blue-500">.</span>
            </Link>
            <div className="flex gap-6 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/publications" className="hover:text-white transition-colors">Publikasi</Link>
              <Link href="/certificates" className="hover:text-white transition-colors">Sertifikat</Link>
            </div>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}