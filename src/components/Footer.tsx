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
    <footer className="bg-[#121212] text-[#FAF7EE] border-t-2 sm:border-t-3 border-[#121212] relative overflow-hidden">
      
      {/* Ticker Bar */}
      <div className="bg-[#FACC15] text-[#121212] py-2 border-b-2 border-[#121212] px-3 sm:px-4 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest flex items-center justify-between">
        <span>● SYSTEM OPERATIONAL</span>
        <span className="hidden sm:inline">DEVELOPER PORTFOLIO</span>
        <span>STATUS: AVAILABLE ●</span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#FACC15] text-[#121212] font-mono font-black text-xs sm:text-sm px-2.5 py-1 border border-black">
                RIZKY.DEV
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#9CA3AF]">
                // DEVELOPER PORTFOLIO
              </span>
            </div>

            <p className="font-mono text-[11px] sm:text-xs text-[#9CA3AF] max-w-sm leading-relaxed">
              Personal portfolio of Rizky Fauzi Rimansyah. Crafting engaging Roblox game experiences and robust full-stack web applications.
            </p>

            <div className="flex items-center gap-2 pt-1 sm:pt-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#22C55E] border border-black inline-block animate-ping shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs font-bold text-[#22C55E]">
                OPEN TO COLLABORATIONS &amp; NEW ROLES
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="font-mono text-[11px] sm:text-xs font-black uppercase text-[#FACC15] tracking-wider">
              // DIRECT NAVIGATION
            </h4>
            <ul className="font-mono text-[11px] sm:text-xs space-y-2 text-[#D1D5DB]">
              <li>
                <a href="/#projects" className="hover:text-[#FACC15] transition-colors inline-block py-0.5">
                  → Experiences
                </a>
              </li>
              <li>
                <a href="/#arsenal" className="hover:text-[#FACC15] transition-colors inline-block py-0.5">
                  → Arsenal &amp; Tech Stack
                </a>
              </li>
              <li>
                <a href="/#journey" className="hover:text-[#FACC15] transition-colors inline-block py-0.5">
                  → Work Log &amp; Journey
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#FACC15] transition-colors inline-block py-0.5">
                  → Player Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Connect */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="font-mono text-[11px] sm:text-xs font-black uppercase text-[#FACC15] tracking-wider">
              // DIRECT COMMS
            </h4>
            <ul className="font-mono text-[11px] sm:text-xs space-y-2 text-[#D1D5DB]">
              <li>
                <a href="mailto:rizkyfauziradit@gmail.com" className="hover:text-[#FACC15] transition-colors break-all inline-block py-0.5">
                  → rizkyfauziradit@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/rizkyenjoyy" target="_blank" rel="noreferrer" className="hover:text-[#FACC15] transition-colors inline-block py-0.5">
                  → GitHub (@rizkyenjoyy)
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rizkyfauzir/" target="_blank" rel="noreferrer" className="hover:text-[#FACC15] transition-colors inline-block py-0.5">
                  → LinkedIn (Rizky Fauzi)
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/users/3744472194/profile" target="_blank" rel="noreferrer" className="hover:text-[#FACC15] transition-colors inline-block py-0.5">
                  → Roblox Profile
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={copyDiscord}
                  className="hover:text-[#FACC15] transition-colors text-left flex items-center gap-1 cursor-pointer py-0.5"
                >
                  {discordCopied ? (
                    <span className="text-[#86EFAC] font-bold">✓ Copied: kikyyy___</span>
                  ) : (
                    <span>→ Discord: <span className="text-[#FACC15]">kikyyy___</span> (Copy)</span>
                  )}
                </button>
              </li>
              <li>
                <a href={getAssetUrl("CVRizky.pdf")} download target="_blank" rel="noreferrer" className="text-[#EA580C] font-bold hover:underline inline-block py-0.5">
                  ↓ Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-xs text-[#9CA3AF] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Rizky Fauzi Rimansyah. Engineered with React, TypeScript &amp; Neubrutalism.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-brutal min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-[#FACC15] text-[#121212] border-2 border-white px-4 py-2 font-bold uppercase shadow-brutal-xs w-full sm:w-auto cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
