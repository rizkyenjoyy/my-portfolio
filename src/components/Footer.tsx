"use client";

import { ArrowUp, Gamepad2, Heart, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAssetUrl } from "@/data/projects";

export default function Footer() {
  const [discordCopied, setDiscordCopied] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText("kikyyy___");
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121212] text-[#FAF7EE] border-t-3 border-[#121212] relative overflow-hidden">
      
      {/* Ticker Bar */}
      <div className="bg-[#FACC15] text-[#121212] py-2 border-b-2 border-[#121212] px-4 font-mono text-xs font-black uppercase tracking-widest flex items-center justify-between">
        <span>● SYSTEM OPERATIONAL</span>
        <span className="hidden sm:inline">DEVELOPER PORTFOLIO</span>
        <span>STATUS: AVAILABLE FOR WORK ●</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#FACC15] text-[#121212] font-mono font-black text-sm px-2.5 py-1 border border-black">
                RIZKY.DEV
              </span>
              <span className="font-mono text-xs text-[#9CA3AF]">
                // DEVELOPER PORTFOLIO
              </span>
            </div>

            <p className="font-mono text-xs text-[#9CA3AF] max-w-sm leading-relaxed">
              Personal portfolio of Rizky Fauzi Rimansyah. Crafting engaging Roblox game experiences and robust full-stack web applications.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 bg-[#22C55E] border border-black inline-block animate-ping" />
              <span className="font-mono text-xs font-bold text-[#22C55E]">
                OPEN TO COLLABORATIONS &amp; NEW ROLES
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-black uppercase text-[#FACC15] tracking-wider">
              // DIRECT NAVIGATION
            </h4>
            <ul className="font-mono text-xs space-y-2 text-[#D1D5DB]">
              <li>
                <a href="/#projects" className="hover:text-[#FACC15] transition-colors">
                  → Experiences
                </a>
              </li>
              <li>
                <a href="/#arsenal" className="hover:text-[#FACC15] transition-colors">
                  → Arsenal &amp; Tech Stack
                </a>
              </li>
              <li>
                <a href="/#journey" className="hover:text-[#FACC15] transition-colors">
                  → Work Log &amp; Journey
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#FACC15] transition-colors">
                  → Player Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Connect */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-black uppercase text-[#FACC15] tracking-wider">
              // DIRECT COMMS
            </h4>
            <ul className="font-mono text-xs space-y-2 text-[#D1D5DB]">
              <li>
                <a href="mailto:rizkyfauziradit@gmail.com" className="hover:text-[#FACC15] transition-colors">
                  → rizkyfauziradit@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/rizkyenjoyy" target="_blank" rel="noreferrer" className="hover:text-[#FACC15] transition-colors">
                  → GitHub (@rizkyenjoyy)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rizkyfauzir/" target="_blank" rel="noreferrer" className="hover:text-[#FACC15] transition-colors">
                  → LinkedIn (Rizky Fauzi)
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/users/3744472194/profile" target="_blank" rel="noreferrer" className="hover:text-[#FACC15] transition-colors">
                  → Roblox Profile
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={copyDiscord}
                  className="hover:text-[#FACC15] transition-colors text-left flex items-center gap-1 cursor-pointer"
                >
                  {discordCopied ? (
                    <span className="text-[#86EFAC] font-bold">✓ Copied: kikyyy___</span>
                  ) : (
                    <span>→ Discord: <span className="text-[#FACC15]">kikyyy___</span> (Copy)</span>
                  )}
                </button>
              </li>
              <li>
                <a href={getAssetUrl("CVRizky.pdf")} download target="_blank" rel="noreferrer" className="text-[#EA580C] font-bold hover:underline">
                  ↓ Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9CA3AF]">
          <div>
            © {new Date().getFullYear()} Rizky Fauzi Rimansyah. Engineered with React, TypeScript &amp; Neubrutalism.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-brutal inline-flex items-center gap-1.5 bg-[#FACC15] text-[#121212] border-2 border-white px-3 py-1.5 font-bold uppercase shadow-brutal-xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
