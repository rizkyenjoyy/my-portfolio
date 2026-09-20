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

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const categories = [
    { id: "all", label: "ALL MODULES", fullLabel: "ALL MODULES", count: projects.length },
    {
      id: "roblox",
      label: "🕹️ ROBLOX",
      fullLabel: "🕹️ ROBLOX EXPERIENCES",
      count: projects.filter((p) => p.category === "roblox").length,
    },
    {
      id: "web",
      label: "💻 WEB APPS",
      fullLabel: "💻 WEB APPS",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mentorship",
      label: "🎓 MENTORSHIP",
      fullLabel: "🎓 MENTORSHIP",
      count: projects.filter((p) => p.category === "mentorship").length,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-[#FAF7EE] relative bg-arcade-grid border-t-2 sm:border-t-3 border-[#121212]">
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
              Roblox games and full-stack web development projects.
            </p>
          </div>
        )}

        {/* Category Filter Tabs: 2x2 Grid on Mobile (all 4 visible), Flex on Tablet/Desktop */}
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

        {/* Project Container: Horizontal Snap Slider on Mobile, Grid on Tablet/Desktop */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none no-scrollbar gap-3.5 sm:gap-4 pb-4 sm:pb-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 -mx-3 px-3 sm:mx-0 sm:px-0">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="w-[72vw] xs:w-[240px] max-w-[270px] shrink-0 snap-center sm:snap-align-none sm:w-auto sm:max-w-none sm:shrink group flex flex-col"
            >
              <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-xs card-brutal-hover flex flex-col h-full overflow-hidden">
                
                {/* Card Top Header Bar */}
                <div className="bg-[#121212] text-white px-2.5 py-1.5 flex items-center justify-between border-b-2 border-[#121212]">
                  <span className="font-mono text-[10px] font-bold text-[#FACC15]">
                    {project.caseNumber}
                  </span>

                  {/* Category Pill */}
                  <span
                    className={`font-mono text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 border border-black ${
                      project.category === "roblox"
                        ? "bg-[#FACC15] text-[#121212]"
                        : project.category === "web"
                        ? "bg-[#06B6D4] text-[#121212]"
                        : "bg-[#22C55E] text-[#121212]"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Thumbnail / Visual Window */}
                <div className="relative aspect-square bg-[#121212] border-b-2 border-[#121212] overflow-hidden flex items-center justify-center">
                  {project.thumbnail ? (
                    <img
                      src={getAssetUrl(project.thumbnail)}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#121212] text-white p-3 flex flex-col justify-between text-center">
                      <div className="flex items-center gap-1 text-[9px] font-mono text-[#FACC15]">
                        {project.category === "web" ? (
                          <Code2 className="w-3.5 h-3.5 text-[#06B6D4]" />
                        ) : (
                          <GraduationCap className="w-3.5 h-3.5 text-[#22C55E]" />
                        )}
                        <span className="font-bold">{project.category.toUpperCase()} MODULE</span>
                      </div>
                      <div className="text-center my-auto py-1">
                        <p className="font-bold text-xs sm:text-sm font-mono text-[#FAF7EE] line-clamp-2">
                          {project.title}
                        </p>
                      </div>
                      <div className="font-mono text-[8px] text-[#9CA3AF] text-left">
                        <span>{project.technologies.slice(0, 2).join(" • ")}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-3 sm:p-3 flex flex-col flex-grow justify-between space-y-2.5">
                  
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-black uppercase text-[#121212] tracking-tight group-hover:text-[#EA580C] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="font-mono text-[10px] sm:text-[11px] text-[#4B5563] line-clamp-2 leading-snug">
                      {project.summary}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-1">
                    <Link
                      to={`/case/${project.slug}`}
                      className="btn-brutal w-full min-h-[38px] flex items-center justify-between bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-3 py-1.5 font-mono text-[11px] font-extrabold shadow-brutal-xs uppercase group-hover:bg-[#121212] group-hover:text-[#FAF7EE] transition-colors"
                    >
                      <span>INSPECT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Footer CTA */}
        {showViewAll && limit && limit < projects.length && (
          <div className="text-center mt-6 sm:mt-12">
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
