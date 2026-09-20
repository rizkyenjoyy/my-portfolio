"use client";

import { motion } from "framer-motion";
import {
  Gamepad2,
  Code2,
  Terminal,
  Layers,
  ArrowRight,
  ExternalLink,
  Cpu,
  Boxes,
  Flame,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const scrollToProjects = (category?: string) => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#FAF7EE] relative overflow-hidden bg-blueprint-grid">
      {/* Top Retro Marquee Ticker */}
      <div className="w-full bg-[#121212] text-[#FACC15] py-2 border-y-2 sm:border-y-3 border-[#121212] overflow-hidden mb-8 sm:mb-12 shadow-brutal-xs sm:shadow-brutal-sm">
        <div className="flex whitespace-nowrap font-mono text-[11px] sm:text-sm font-bold tracking-widest uppercase">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-6 sm:gap-8 items-center shrink-0 pr-6 sm:pr-8"
          >
            <span>🕹️ ROBLOX SCRIPTER</span>
            <span className="text-white">///</span>
            <span>💻 FULL-STACK WEB DEV</span>
            <span className="text-white">///</span>
            <span>⚡ LUAU &amp; GAMEPLAY MECHANICS</span>
            <span className="text-white">///</span>
            <span>🎮 9+ ROBLOX GAMES</span>
            <span className="text-white">///</span>
            <span>🚀 LARAVEL &amp; REACT</span>
            <span className="text-white">///</span>
          </motion.div>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-6 sm:gap-8 items-center shrink-0 pr-6 sm:pr-8"
          >
            <span>🕹️ ROBLOX SCRIPTER</span>
            <span className="text-white">///</span>
            <span>💻 FULL-STACK WEB DEV</span>
            <span className="text-white">///</span>
            <span>⚡ LUAU &amp; GAMEPLAY MECHANICS</span>
            <span className="text-white">///</span>
            <span>🎮 9+ ROBLOX GAMES</span>
            <span className="text-white">///</span>
            <span>🚀 LARAVEL &amp; REACT</span>
            <span className="text-white">///</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Hero Header Block */}
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6 mb-12 sm:mb-16">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-3 sm:px-4 py-1.5 font-mono text-[10px] xs:text-xs sm:text-sm font-extrabold shadow-brutal-xs uppercase max-w-full text-left">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#22C55E] border border-black inline-block animate-pulse shrink-0" />
            <span className="truncate sm:whitespace-normal">AVAILABLE FOR GAME DEV &amp; WEB DEV MISSIONS</span>
          </div>

          {/* Main Headline with Fluid Scaling */}
          <h1 className="text-fluid-hero font-extrabold tracking-tight text-[#121212] uppercase px-1">
            SCRIPTING GAMES.
            <br />
            <span className="inline-block bg-[#121212] text-[#FAF7EE] px-3 sm:px-4 py-1 mt-1 sm:mt-2 border-2 sm:border-3 border-[#121212] shadow-brutal sm:shadow-brutal-md transform -rotate-1">
              CODING THE WEB.
            </span>
          </h1>

          {/* Subheader */}
          <p className="font-mono text-sm xs:text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed font-medium px-2">
            Roblox Scripter &amp; Web Developer based in Jakarta. Focusing on Luau gameplay scripting in <span className="text-[#121212] font-bold bg-[#FACC15]/40 px-1 border border-black inline-block my-0.5">Roblox Studio</span> and building web apps with <span className="text-[#121212] font-bold bg-[#06B6D4]/30 px-1 border border-black inline-block my-0.5">Laravel &amp; React</span>.
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => scrollToProjects()}
              className="btn-brutal min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#121212] text-[#FAF7EE] border-2 sm:border-3 border-[#121212] px-5 sm:px-6 py-3 font-mono text-xs sm:text-sm md:text-base font-bold shadow-brutal uppercase cursor-pointer"
            >
              <span>EXPLORE ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <a
              href="#contact"
              className="btn-brutal min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#121212] border-2 sm:border-3 border-[#121212] px-5 sm:px-6 py-3 font-mono text-xs sm:text-sm md:text-base font-bold shadow-brutal uppercase"
            >
              <span>GET IN TOUCH / CONTACT</span>
            </a>
          </div>
        </div>

        {/* Dual Identity Section (2 Prominent Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: ROBLOX DEV */}
          <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal sm:shadow-brutal-lg p-4 xs:p-6 sm:p-8 flex flex-col justify-between relative group hover:-translate-y-0.5 transition-transform">
            
            {/* Top Bar Header */}
            <div>
              <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b-2 sm:border-b-3 border-[#121212] pb-4 mb-5 sm:mb-6 gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="bg-[#FACC15] border-2 border-[#121212] p-2 shadow-brutal-xs shrink-0">
                    <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#121212]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                      TRACK 01 // INTERACTIVE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#121212] tracking-tight">
                      ROBLOX SCRIPTER
                    </h3>
                  </div>
                </div>
                <span className="bg-[#EA580C] text-white border-2 border-[#121212] font-mono text-[10px] sm:text-xs font-black px-2.5 py-1 shadow-brutal-xs uppercase self-start xs:self-auto">
                  GAMEPLAY SCRIPTER
                </span>
              </div>

              {/* Isometric / Asset Visual Box */}
              <div className="bg-[#F4EFE6] border-2 border-[#121212] p-3 sm:p-4 mb-5 sm:mb-6 shadow-brutal-xs relative">
                <div className="flex items-center justify-between text-xs font-mono font-bold border-b border-[#121212] pb-2 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Boxes className="w-4 h-4 text-[#EA580C]" />
                    <span className="text-[11px] sm:text-xs">ENGINE: ROBLOX STUDIO</span>
                  </span>
                  <span className="bg-[#FACC15] text-black px-1.5 py-0.5 border border-black text-[9px] sm:text-[10px] font-black">
                    LUAU / STUDIO
                  </span>
                </div>

                {/* Simulated Wireframe / Logic Block */}
                <div className="font-mono text-[11px] sm:text-xs space-y-1.5 text-[#121212]">
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between bg-white border border-[#121212] px-2.5 py-1.5 gap-0.5">
                    <span className="text-[#6B7280]">Architecture:</span>
                    <span className="font-bold text-left xs:text-right">Client-Server OOP &amp; RemoteEvents</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between bg-white border border-[#121212] px-2.5 py-1.5 gap-0.5">
                    <span className="text-[#6B7280]">Specialization:</span>
                    <span className="font-bold text-left xs:text-right">Game Mechanics &amp; State Logic</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between bg-white border border-[#121212] px-2.5 py-1.5 gap-0.5">
                    <span className="text-[#6B7280]">Persistence:</span>
                    <span className="font-bold text-left xs:text-right">ProfileService / DataStore Systems</span>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="space-y-2 mb-5 sm:mb-6">
                <p className="font-mono text-[11px] sm:text-xs font-bold uppercase text-[#6B7280]">
                  // CORE FOCUS AREAS:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Luau Scripting",
                    "Modular OOP",
                    "Custom Mechanics",
                    "Client-Server Sync",
                    "UI Scripting",
                    "Mentorship PKL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#FAF7EE] border-2 border-[#121212] font-mono text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 text-[#121212] shadow-brutal-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t-2 border-[#121212]">
              <a
                href="#projects"
                className="btn-brutal w-full min-h-[44px] flex items-center justify-center gap-2 bg-[#FACC15] text-[#121212] border-2 border-[#121212] py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-extrabold shadow-brutal uppercase"
              >
                <span>EXPLORE ROBLOX GAMES (9)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: WEB DEV */}
          <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal sm:shadow-brutal-lg p-4 xs:p-6 sm:p-8 flex flex-col justify-between relative group hover:-translate-y-0.5 transition-transform">
            
            {/* Top Bar Header */}
            <div>
              <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b-2 sm:border-b-3 border-[#121212] pb-4 mb-5 sm:mb-6 gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="bg-[#06B6D4] border-2 border-[#121212] p-2 shadow-brutal-xs shrink-0">
                    <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#121212]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                      TRACK 02 // SYSTEMS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#121212] tracking-tight">
                      WEB DEVELOPER
                    </h3>
                  </div>
                </div>
                <span className="bg-[#2563EB] text-white border-2 border-[#121212] font-mono text-[10px] sm:text-xs font-black px-2.5 py-1 shadow-brutal-xs uppercase self-start xs:self-auto">
                  FULL-STACK
                </span>
              </div>

              {/* Syntax Code Editor Mockup Box */}
              <div className="bg-[#121212] text-[#FAF7EE] border-2 border-[#121212] p-3 sm:p-4 mb-5 sm:mb-6 shadow-brutal-xs relative">
                <div className="flex items-center justify-between text-xs font-mono border-b border-[#333333] pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#EF4444] border border-black inline-block" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#FACC15] border border-black inline-block" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#22C55E] border border-black inline-block" />
                    <span className="text-[#9CA3AF] ml-1.5 sm:ml-2 text-[10px] sm:text-xs">AppEngine.tsx</span>
                  </div>
                  <span className="text-[#22C55E] text-[9px] sm:text-[10px] font-bold">
                    BUILD: PASSING
                  </span>
                </div>

                {/* Code Lines */}
                <div className="font-mono text-[11px] sm:text-xs space-y-1 text-[#E5E7EB] overflow-x-auto no-scrollbar">
                  <p>
                    <span className="text-[#F472B6]">const</span>{" "}
                    <span className="text-[#38BDF8]">stack</span> = &#123;
                  </p>
                  <p className="pl-3 sm:pl-4">
                    <span className="text-[#9CA3AF]">frontend:</span>{" "}
                    <span className="text-[#FACC15]">["React", "TS", "Tailwind"]</span>,
                  </p>
                  <p className="pl-3 sm:pl-4">
                    <span className="text-[#9CA3AF]">backend:</span>{" "}
                    <span className="text-[#4ADE80]">["Laravel", "PHP", "APIs"]</span>,
                  </p>
                  <p className="pl-3 sm:pl-4">
                    <span className="text-[#9CA3AF]">database:</span>{" "}
                    <span className="text-[#FB923C]">["MySQL", "Schema"]</span>,
                  </p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="space-y-2 mb-5 sm:mb-6">
                <p className="font-mono text-[11px] sm:text-xs font-bold uppercase text-[#6B7280]">
                  // CORE FOCUS AREAS:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Laravel & PHP",
                    "React & Vite",
                    "TypeScript",
                    "Tailwind CSS",
                    "MySQL Databases",
                    "REST Architecture",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#FAF7EE] border-2 border-[#121212] font-mono text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 text-[#121212] shadow-brutal-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t-2 border-[#121212]">
              <a
                href="#projects"
                className="btn-brutal w-full min-h-[44px] flex items-center justify-center gap-2 bg-[#06B6D4] text-[#121212] border-2 border-[#121212] py-2.5 sm:py-3 font-mono text-xs sm:text-sm font-extrabold shadow-brutal uppercase"
              >
                <span>EXPLORE WEB APPLICATIONS (3)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
