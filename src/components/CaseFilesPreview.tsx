"use client";

import { motion } from "framer-motion";
import { projects, ProjectCase, getAssetUrl } from "@/data/projects";
import {
  Gamepad2,
  Code2,
  GraduationCap,
  ExternalLink,
  ArrowRight,
  FolderGit2,
  Layers,
  Terminal,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CaseFilesPreviewProps {
  limit?: number;
  showViewAll?: boolean;
  showHeader?: boolean;
}

export default function CaseFilesPreview({
  limit,
  showViewAll = true,
  showHeader = true,
}: CaseFilesPreviewProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "roblox" | "web" | "mentorship"
  >("all");

  const robloxProjects = projects.filter((p) => p.category === "roblox");
  const webProjects = projects.filter((p) => p.category === "web");
  const mentorshipProjects = projects.filter((p) => p.category === "mentorship");

  const categories = [
    { id: "all", label: "ALL", fullLabel: "ALL PROJECTS", count: projects.length },
    {
      id: "roblox",
      label: "🕹️ ROBLOX",
      fullLabel: "🕹️ ROBLOX EXPERIENCES",
      count: robloxProjects.length,
    },
    {
      id: "web",
      label: "💻 WEB APPS",
      fullLabel: "💻 WEB APPS",
      count: webProjects.length,
    },
    {
      id: "mentorship",
      label: "🎓 MENTORSHIP",
      fullLabel: "🎓 MENTORSHIP",
      count: mentorshipProjects.length,
    },
  ];

  // Helper Card Renderers
  const renderRobloxCard = (project: ProjectCase, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      viewport={{ once: true }}
      className="w-full flex flex-col group"
    >
      <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-xs sm:shadow-brutal-xs card-brutal-hover flex flex-col h-full overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-[#121212] text-white px-2.5 py-1.5 flex items-center justify-between border-b-2 border-[#121212]">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 mr-0.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#EF4444] border border-black inline-block" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FACC15] border border-black inline-block" />
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#22C55E] border border-black inline-block" />
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#FACC15]">
              {project.year}
            </span>
          </div>

          <span className="font-mono text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 border border-black bg-[#FACC15] text-[#121212]">
            ROBLOX
          </span>
        </div>

        {/* Thumbnail: 1:1 Square (Native Roblox format) */}
        <div className="relative aspect-square bg-[#121212] border-b-2 border-[#121212] overflow-hidden flex items-center justify-center">
          <img
            src={getAssetUrl(project.thumbnail)}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content Body */}
        <div className="p-2.5 sm:p-3 flex flex-col flex-grow justify-between space-y-2.5">
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-black uppercase text-[#121212] tracking-tight group-hover:text-[#EA580C] transition-colors line-clamp-1">
              {project.title}
            </h4>

            <p className="font-mono text-[10px] sm:text-[11px] text-[#4B5563] leading-snug line-clamp-2">
              {project.summary}
            </p>

            {/* Core Tech Badges */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {project.technologies.slice(0, 2).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 bg-[#FAF7EE] text-[#121212] border border-[#121212]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-1 flex items-center gap-1.5 sm:gap-2 mt-auto">
            <Link
              to={`/case/${project.slug}`}
              className="btn-brutal flex-grow min-h-[34px] sm:min-h-[36px] flex items-center justify-between bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-extrabold shadow-brutal-xs uppercase group-hover:bg-[#121212] group-hover:text-[#FAF7EE] transition-colors"
            >
              <span>INSPECT</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal min-h-[34px] sm:min-h-[36px] px-2 sm:px-2.5 flex items-center justify-center bg-[#EA580C] text-white border-2 border-[#121212] shadow-brutal-xs hover:bg-[#C2410C] transition-colors shrink-0"
                title="Play on Roblox"
              >
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </a>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );

  const renderWebCard = (project: ProjectCase, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="w-full flex flex-col group"
    >
      <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-xs card-brutal-hover flex flex-col h-full overflow-hidden">
        
        {/* Card Top Header Bar (Browser Window Chrome) */}
        <div className="bg-[#121212] text-white px-3 py-2 flex items-center justify-between border-b-2 border-[#121212]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] border border-black inline-block" />
            </div>
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FACC15] ml-1">
              {project.year}
            </span>
          </div>

          <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 border border-black bg-[#06B6D4] text-[#121212]">
            WEB APP
          </span>
        </div>

        {/* Thumbnail: aspect-[2/1] ensures full 1024x512 widescreen dashboard screenshots fit with ZERO cropping */}
        <div className="relative aspect-[2/1] bg-[#121212] border-b-2 border-[#121212] overflow-hidden flex items-center justify-center">
          <img
            src={getAssetUrl(project.thumbnail)}
            alt={project.title}
            className="w-full h-full object-contain bg-[#121212] group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between space-y-3">
          <div className="space-y-1.5">
            <h4 className="text-sm sm:text-base font-black uppercase text-[#121212] tracking-tight group-hover:text-[#EA580C] transition-colors line-clamp-2">
              {project.title}
            </h4>

            <p className="font-mono text-[11px] sm:text-xs text-[#4B5563] leading-snug line-clamp-3">
              {project.summary}
            </p>

            {/* Tech Badges */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {project.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#FAF7EE] text-[#121212] border border-[#121212]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-2 mt-auto">
            <Link
              to={`/case/${project.slug}`}
              className="btn-brutal flex-grow min-h-[38px] flex items-center justify-between bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-3.5 py-1.5 font-mono text-[11px] font-extrabold shadow-brutal-xs uppercase group-hover:bg-[#121212] group-hover:text-[#FAF7EE] transition-colors"
            >
              <span>INSPECT SPEC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal min-h-[38px] px-3 flex items-center justify-center bg-[#EA580C] text-white border-2 border-[#121212] shadow-brutal-xs hover:bg-[#C2410C] transition-colors shrink-0"
                title="Launch Web Application"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );

  const renderMentorshipCard = (project: ProjectCase, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="w-full flex flex-col group"
    >
      <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-xs card-brutal-hover flex flex-col h-full overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-[#121212] text-white px-3 py-2 flex items-center justify-between border-b-2 border-[#121212]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] border border-black inline-block" />
            </div>
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FACC15] ml-1">
              {project.year}
            </span>
          </div>

          <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 border border-black bg-[#22C55E] text-[#121212]">
            MENTORSHIP
          </span>
        </div>

        {/* Thumbnail Banner */}
        <div className="relative aspect-[2/1] bg-[#121212] border-b-2 border-[#121212] overflow-hidden flex items-center justify-center">
          <img
            src={getAssetUrl(project.thumbnail)}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between space-y-3">
          <div className="space-y-1.5">
            <h4 className="text-sm sm:text-base font-black uppercase text-[#121212] tracking-tight group-hover:text-[#EA580C] transition-colors line-clamp-2">
              {project.title}
            </h4>

            <p className="font-mono text-[11px] sm:text-xs text-[#4B5563] leading-snug line-clamp-3">
              {project.summary}
            </p>

            {/* Tech Badges */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {project.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#FAF7EE] text-[#121212] border border-[#121212]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="pt-2 flex items-center gap-2 mt-auto">
            <Link
              to={`/case/${project.slug}`}
              className="btn-brutal flex-grow min-h-[38px] flex items-center justify-between bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-3.5 py-1.5 font-mono text-[11px] font-extrabold shadow-brutal-xs uppercase group-hover:bg-[#121212] group-hover:text-[#FAF7EE] transition-colors"
            >
              <span>INSPECT SPEC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-10 sm:py-16 bg-[#FAF7EE] relative bg-arcade-grid border-t-2 sm:border-t-3 border-[#121212]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EA580C] text-white border-2 border-[#121212] px-3 sm:px-3.5 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase shadow-brutal-xs">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROJECT REPOSITORY // ARCHIVE</span>
            </div>

            <h2 className="text-fluid-h2 font-extrabold uppercase text-[#121212] tracking-tight">
              FEATURED PROJECTS &amp; EXPERIENCES
            </h2>

            <p className="font-mono text-xs sm:text-sm md:text-base text-[#4B5563] px-2">
              Roblox games, full-stack web applications, and technical mentorship.
            </p>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`font-mono text-xs sm:text-sm font-bold uppercase px-3 sm:px-4 py-2.5 min-h-[44px] border-2 border-[#121212] transition-all flex items-center justify-between sm:justify-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#121212] text-[#FACC15] shadow-brutal-xs sm:shadow-brutal translate-x-0.5 translate-y-0.5"
                    : "bg-[#FFFFFF] text-[#121212] shadow-brutal-xs hover:bg-[#FACC15]"
                }`}
              >
                <span className="truncate sm:hidden">{cat.label}</span>
                <span className="hidden sm:inline whitespace-nowrap">{cat.fullLabel}</span>
                <span
                  className={`text-[10px] sm:text-[11px] px-1.5 py-0.5 border border-black font-mono font-bold shrink-0 ${
                    isActive ? "bg-[#FACC15] text-[#121212]" : "bg-[#F3ECE1] text-[#121212]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- DYNAMIC DISPLAY: SECTIONED SHOWCASE FOR "ALL", FOCUSED GRID FOR SPECIFIC CATEGORIES --- */}
        {selectedCategory === "all" ? (
          <div className="space-y-12 sm:space-y-16">
            
            {/* 1. Roblox Experiences Section */}
            <div className="space-y-4 sm:space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 sm:border-b-3 border-[#121212] gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#FACC15] border-2 border-[#121212] flex items-center justify-center shadow-brutal-xs">
                    <Gamepad2 className="w-4 h-4 text-[#121212]" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-black uppercase text-[#121212] tracking-tight">
                      ROBLOX EXPERIENCES &amp; GAMES
                    </h3>
                    <p className="font-mono text-[10px] sm:text-xs text-[#4B5563]">
                      Physics-driven obstacle courses, state-machine gameplay loops &amp; custom Luau mechanics
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[10px] sm:text-xs font-black uppercase bg-[#FFFFFF] border-2 border-[#121212] px-2.5 py-1 shadow-brutal-xs self-start sm:self-auto">
                  {robloxProjects.length} EXPERIENCES
                </span>
              </div>

              {/* Uniform Arcade Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {(limit ? robloxProjects.slice(0, 4) : robloxProjects).map(renderRobloxCard)}
              </div>
            </div>

            {/* 2. Full-Stack Web Applications Section */}
            <div className="space-y-4 sm:space-y-5 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 sm:border-b-3 border-[#121212] gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#06B6D4] border-2 border-[#121212] flex items-center justify-center shadow-brutal-xs">
                    <Code2 className="w-4 h-4 text-[#121212]" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm sm:text-base font-black uppercase text-[#121212] tracking-tight">
                      FULL-STACK WEB APPLICATIONS &amp; SYSTEMS
                    </h3>
                    <p className="font-mono text-[10px] sm:text-xs text-[#4B5563]">
                      Enterprise ERPs, multi-tenant tourism platforms, ATS platforms &amp; financial ledgers
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[10px] sm:text-xs font-black uppercase bg-[#FFFFFF] border-2 border-[#121212] px-2.5 py-1 shadow-brutal-xs self-start sm:self-auto">
                  {webProjects.length} APPLICATIONS
                </span>
              </div>

              {/* Showcase 3-Column Browser Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {(limit ? webProjects.slice(0, 2) : webProjects).map(renderWebCard)}
              </div>
            </div>

            {/* 3. Technical Mentorship Section (Only if not limited or if mentorship is included) */}
            {(!limit || limit >= 7) && mentorshipProjects.length > 0 && (
              <div className="space-y-4 sm:space-y-5 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 sm:border-b-3 border-[#121212] gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#22C55E] border-2 border-[#121212] flex items-center justify-center shadow-brutal-xs">
                      <GraduationCap className="w-4 h-4 text-[#121212]" />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm sm:text-base font-black uppercase text-[#121212] tracking-tight">
                        TECHNICAL LEADERSHIP &amp; MENTORSHIP
                      </h3>
                      <p className="font-mono text-[10px] sm:text-xs text-[#4B5563]">
                        Structured curriculum, code reviews, client-server security &amp; student engineering training
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] sm:text-xs font-black uppercase bg-[#FFFFFF] border-2 border-[#121212] px-2.5 py-1 shadow-brutal-xs self-start sm:self-auto">
                    {mentorshipProjects.length} PROGRAM
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {mentorshipProjects.map(renderMentorshipCard)}
                </div>
              </div>
            )}

          </div>
        ) : selectedCategory === "roblox" ? (
          /* Focused Roblox Grid */
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#121212]">
              <span className="font-mono text-xs font-bold uppercase text-[#4B5563]">
                SHOWING ALL ROBLOX EXPERIENCES ({robloxProjects.length})
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {(limit ? robloxProjects.slice(0, limit) : robloxProjects).map(renderRobloxCard)}
            </div>
          </div>
        ) : selectedCategory === "web" ? (
          /* Focused Web Apps Grid (3-Col Showcase with ZERO Photo Crop) */
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#121212]">
              <span className="font-mono text-xs font-bold uppercase text-[#4B5563]">
                SHOWING ALL FULL-STACK WEB APPLICATIONS ({webProjects.length})
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(limit ? webProjects.slice(0, limit) : webProjects).map(renderWebCard)}
            </div>
          </div>
        ) : (
          /* Focused Mentorship Grid */
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#121212]">
              <span className="font-mono text-xs font-bold uppercase text-[#4B5563]">
                SHOWING TECHNICAL MENTORSHIP PROGRAMS ({mentorshipProjects.length})
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {mentorshipProjects.map(renderMentorshipCard)}
            </div>
          </div>
        )}

        {/* View All Footer CTA */}
        {showViewAll && limit && limit < projects.length && (
          <div className="text-center mt-10 sm:mt-14">
            <Link
              to="/case-files"
              className="btn-brutal min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#121212] text-[#FAF7EE] border-2 sm:border-3 border-[#121212] px-6 sm:px-8 py-3 font-mono text-xs sm:text-sm md:text-base font-bold shadow-brutal uppercase w-full sm:w-auto"
            >
              <span>ACCESS FULL REPOSITORY ({projects.length} ITEMS)</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
