import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
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
      <body
        className={`${inter.className} bg-[#0a0a0a] text-white selection:bg-white selection:text-black`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
