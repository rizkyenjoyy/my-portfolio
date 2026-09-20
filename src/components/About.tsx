"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Award, Heart, Terminal, BookOpen, Gamepad2, Layers } from "lucide-react";
import { getAssetUrl } from "@/data/projects";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FAF7EE] relative border-t-3 border-[#121212] bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#06B6D4] text-[#121212] border-2 border-[#121212] px-3.5 py-1 font-mono text-xs font-bold uppercase shadow-brutal-xs">
            <User className="w-3.5 h-3.5" />
            <span>PLAYER DOSSIER // PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#121212] tracking-tight">
            ABOUT RIZKY FAUZI RIMANSYAH
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#4B5563]">
            Roblox Developer &amp; Informatics Engineering student with a passion for interactive gameplay systems, Luau scripting, and clean web applications.
          </p>
        </div>

        {/* Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Player ID Card */}
          <div className="lg:col-span-4 bg-[#FFFFFF] border-3 border-[#121212] shadow-brutal-md p-6 space-y-6">
            
            {/* ID Card Top */}
            <div className="bg-[#121212] text-[#FAF7EE] p-3 text-center border-2 border-[#121212]">
              <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#FACC15]">
                PLAYER IDENTIFICATION CARD
              </p>
              <h3 className="font-mono text-base font-extrabold uppercase">
                RIZKY FAUZI R.
              </h3>
            </div>

            {/* Avatar / Photo Frame */}
            <div className="border-3 border-[#121212] bg-[#F4EFE6] relative overflow-hidden shadow-brutal-xs group">
              <div className="aspect-square w-full relative overflow-hidden border-b-3 border-[#121212] bg-[#E5E7EB]">
                <img
                  src={getAssetUrl("Thumbnail/profilepicture.png")}
                  alt="Rizky Fauzi Rimansyah"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: "50% 28%" }}
                />
                <div className="absolute top-2 left-2 bg-[#FACC15] border-2 border-black font-mono text-[9px] font-black uppercase px-1.5 py-0.5 shadow-brutal-xs">
                  PROFILE PHOTO
                </div>
              </div>
              <div className="p-3 bg-[#FFFFFF] flex flex-col items-center justify-center text-center">
                <span className="font-mono text-xs font-black uppercase bg-[#121212] text-[#FACC15] px-2.5 py-0.5 border border-black">
                  ROBLOX &amp; WEB DEVELOPER
                </span>
                <span className="font-mono text-[10px] text-[#6B7280] mt-1 font-bold">
                  LOCATION: BANDUNG / JAKARTA, ID
                </span>
              </div>
            </div>

            {/* Stat Table */}
            <div className="font-mono text-xs space-y-2 border-t-2 border-[#121212] pt-4">
              <div className="flex justify-between border-b border-[#E5E7EB] pb-1.5">
                <span className="text-[#6B7280]">Primary Role:</span>
                <span className="font-bold">Roblox &amp; Web Dev</span>
              </div>
              <div className="flex justify-between border-b border-[#E5E7EB] pb-1.5">
                <span className="text-[#6B7280]">Main Dialect:</span>
                <span className="font-bold">Luau / TypeScript / PHP</span>
              </div>
              <div className="flex justify-between border-b border-[#E5E7EB] pb-1.5">
                <span className="text-[#6B7280]">Education:</span>
                <span className="font-bold">LPKIA (2022–2026)</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[#6B7280]">Availability:</span>
                <span className="font-bold text-[#16A34A]">Open for Missions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Card */}
            <div className="bg-[#FFFFFF] border-3 border-[#121212] shadow-brutal-md p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-[#121212] pb-3">
                <span className="w-3 h-3 bg-[#EA580C] border border-black inline-block" />
                <h3 className="font-mono text-base font-black uppercase text-[#121212]">
                  MISSION STATEMENT &amp; BACKGROUND
                </h3>
              </div>

              <div className="font-mono text-sm text-[#121212] space-y-4 leading-relaxed">
                <p>
                  I am a <strong className="bg-[#FACC15]/40 px-1 border border-black">Roblox Scripter</strong> and <strong className="bg-[#06B6D4]/30 px-1 border border-black">Full-Stack Web Developer</strong> based in Jakarta, Indonesia.
                </p>
                <p>
                  I focus on writing Luau code for Roblox games—handling gameplay mechanics, user interface scripting, and client-server networking. On the web development side, I build applications using Laravel, React, TypeScript, and MySQL.
                </p>
                <p>
                  I also served as a <strong>Roblox Development Mentor (PKL)</strong> at LPKIA, guiding student interns through Luau scripting, client-server communication, and clean code practices.
                </p>
              </div>
            </div>

            {/* Core Values 3-Block Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-[#FAF7EE] border-2 border-[#121212] p-4 shadow-brutal-xs space-y-2">
                <div className="bg-[#FACC15] text-[#121212] p-2 border border-black w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-mono font-bold text-sm uppercase text-[#121212]">
                  CLEAN CODE
                </h4>
                <p className="font-mono text-xs text-[#4B5563] leading-relaxed">
                  Strict modular patterns, OOP principles, and self-documenting architectures.
                </p>
              </div>

              <div className="bg-[#FAF7EE] border-2 border-[#121212] p-4 shadow-brutal-xs space-y-2">
                <div className="bg-[#06B6D4] text-[#121212] p-2 border border-black w-fit">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-mono font-bold text-sm uppercase text-[#121212]">
                  ENGAGING UX
                </h4>
                <p className="font-mono text-xs text-[#4B5563] leading-relaxed">
                  Whether in 3D gaming or web interfaces, tactile feedback and clarity come first.
                </p>
              </div>

              <div className="bg-[#FAF7EE] border-2 border-[#121212] p-4 shadow-brutal-xs space-y-2">
                <div className="bg-[#22C55E] text-[#121212] p-2 border border-black w-fit">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-mono font-bold text-sm uppercase text-[#121212]">
                  PROBLEM SOLVER
                </h4>
                <p className="font-mono text-xs text-[#4B5563] leading-relaxed">
                  Diagnosing root causes and engineering robust, scalable solutions.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
