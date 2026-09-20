"use client";

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, getAssetUrl } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  Gamepad2,
  Code2,
  GraduationCap,
  Layers,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  FolderGit2,
} from "lucide-react";

export default function CaseDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAF7EE] flex items-center justify-center p-4">
        <div className="bg-[#FFFFFF] border-3 border-[#121212] shadow-brutal-lg p-8 max-w-md text-center space-y-4">
          <div className="text-4xl">⚠️</div>
          <h1 className="text-2xl font-black uppercase text-[#121212]">
            MODULE NOT FOUND
          </h1>
          <p className="font-mono text-xs text-[#4B5563]">
            The requested project or case specification does not exist in the repository.
          </p>
          <Link
            to="/case-files"
            className="btn-brutal inline-block bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-4 py-2 font-mono text-xs font-bold uppercase shadow-brutal-xs"
          >
            ← Back to Repository
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="bg-[#FAF7EE] min-h-screen pb-12 sm:pb-16 bg-blueprint-grid">
      
      {/* Header Banner */}
      <section className="border-b-2 sm:border-b-3 border-[#121212] bg-[#FFFFFF] py-6 sm:py-10">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 mb-5 sm:mb-6">
            <Link
              to="/case-files"
              className="btn-brutal min-h-[44px] inline-flex items-center gap-1.5 bg-[#FAF7EE] text-[#121212] border-2 border-[#121212] px-3.5 py-2 font-mono text-xs font-bold uppercase shadow-brutal-xs self-start xs:self-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO REPOSITORY</span>
            </Link>

            <span
              className={`font-mono text-[10px] sm:text-xs font-black uppercase px-2.5 sm:px-3 py-1 border-2 border-[#121212] shadow-brutal-xs self-start xs:self-auto ${
                project.category === "roblox"
                  ? "bg-[#FACC15] text-[#121212]"
                  : project.category === "web"
                  ? "bg-[#06B6D4] text-[#121212]"
                  : "bg-[#22C55E] text-[#121212]"
              }`}
            >
              {project.category.toUpperCase()} MODULE
            </span>
          </div>

          {/* Title and Identification */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] sm:text-xs font-black bg-[#121212] text-[#FACC15] px-2 sm:px-2.5 py-0.5 border border-black">
                {project.caseNumber}
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#6B7280]">
                CLASSIFICATION: {project.classification}
              </span>
            </div>

            <h1 className="text-fluid-h2 font-black uppercase text-[#121212] tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t-2 border-[#121212]">
            <div className="bg-[#FAF7EE] border-2 border-[#121212] p-2.5 sm:p-3 shadow-brutal-xs">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-bold block mb-1">
                TIMELINE / YEAR
              </span>
              <span className="font-mono text-xs sm:text-base font-extrabold text-[#121212]">
                {project.year}
              </span>
            </div>

            <div className="bg-[#FAF7EE] border-2 border-[#121212] p-2.5 sm:p-3 shadow-brutal-xs">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-bold block mb-1">
                STATUS
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-black px-2 py-0.5 bg-[#22C55E] text-black border border-black inline-block uppercase">
                {project.status}
              </span>
            </div>

            <div className="bg-[#FAF7EE] border-2 border-[#121212] p-2.5 sm:p-3 shadow-brutal-xs">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-bold block mb-1">
                DURATION
              </span>
              <span className="font-mono text-xs sm:text-base font-extrabold text-[#121212] truncate block">
                {project.duration}
              </span>
            </div>

            <div className="bg-[#FAF7EE] border-2 border-[#121212] p-2.5 sm:p-3 shadow-brutal-xs">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-bold block mb-1">
                ENGINEER ROLE
              </span>
              <span className="font-mono text-[11px] sm:text-sm font-extrabold text-[#121212] truncate block">
                {project.role}
              </span>
            </div>
          </div>

          {/* Optional Live Deployment Link */}
          {project.liveUrl && (
            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#121212] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="font-mono text-[11px] sm:text-xs text-[#6B7280]">
                {project.category === "roblox"
                  ? "ROBLOX EXPERIENCE LINK:"
                  : "LIVE PRODUCTION URL:"}
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#EA580C] text-white border-2 border-[#121212] px-4 py-2 font-mono text-xs font-black uppercase shadow-brutal-xs hover:bg-[#C2410C] transition-colors"
              >
                {project.category === "roblox" ? (
                  <Gamepad2 className="w-4 h-4" />
                ) : (
                  <Globe className="w-4 h-4" />
                )}
                <span>
                  {project.category === "roblox"
                    ? "PLAY ON ROBLOX"
                    : "LAUNCH APPLICATION"}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>
      </section>

      {/* Main Spec Content */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-10">
        
        {/* Executive Summary / Game Concept */}
        <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-md p-4 xs:p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 border-b-2 border-[#121212] pb-3">
            <span className="w-3 h-3 bg-[#FACC15] border border-black inline-block" />
            <h2 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#121212]">
              {project.category === "roblox"
                ? "GAME CONCEPT & NARRATIVE OVERVIEW"
                : "PROJECT OVERVIEW & EXECUTIVE SUMMARY"}
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm md:text-base text-[#121212] leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Core Gameplay Loop / Tower Mechanics (if provided) */}
        {project.gameplayLoop && project.gameplayLoop.length > 0 && (
          <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-md p-4 xs:p-6 sm:p-8 space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between border-b-2 border-[#121212] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#EA580C] border border-black inline-block" />
                <h2 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-[#121212]">
                  CORE GAMEPLAY LOOP &amp; TOWER MECHANICS
                </h2>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] bg-[#121212] text-[#FACC15] px-2 py-0.5 font-bold uppercase hidden sm:inline-block">
                HOW TO PLAY &amp; SURVIVE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {project.gameplayLoop.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF7EE] border-2 border-[#121212] p-3.5 sm:p-4 shadow-brutal-xs flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] sm:text-[10px] font-black bg-[#121212] text-[#FAF7EE] px-1.5 py-0.5 border border-black">
                        {item.step}
                      </span>
                      {item.tag && (
                        <span className="font-mono text-[8px] sm:text-[9px] font-bold text-[#EA580C] uppercase">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-mono text-xs sm:text-sm font-black text-[#121212] uppercase pt-1">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[11px] sm:text-xs text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Problem vs Solution Split (Engineering & Web Modules) */}
        {project.category !== "roblox" && project.problem && project.solution && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            
            {/* Problem / Core Challenge */}
            <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-md p-4 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-[#121212] pb-3 text-[#EA580C]">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                <h3 className="font-mono text-xs font-black uppercase tracking-wider text-[#121212]">
                  CORE CHALLENGE / REQUIREMENT
                </h3>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution / Architecture */}
            <div className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-md p-4 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-[#121212] pb-3 text-[#22C55E]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <h3 className="font-mono text-xs font-black uppercase tracking-wider text-[#121212]">
                  ARCHITECTURAL SOLUTION
                </h3>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>
        )}

        {/* Previous & Next Navigation */}
        <div className="pt-6 sm:pt-8 border-t-2 sm:border-t-3 border-[#121212] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {previousProject ? (
            <Link
              to={`/case/${previousProject.slug}`}
              className="btn-brutal min-h-[44px] bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] p-3 sm:p-4 shadow-brutal-xs flex items-center gap-3 group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#121212] group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="text-left overflow-hidden">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#6B7280] uppercase font-bold block">
                  PREVIOUS MODULE
                </span>
                <span className="font-mono text-xs font-black uppercase text-[#121212] truncate block">
                  {previousProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/case/${nextProject.slug}`}
              className="btn-brutal min-h-[44px] bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] p-3 sm:p-4 shadow-brutal-xs flex items-center justify-between group text-right"
            >
              <div className="text-right flex-grow overflow-hidden">
                <span className="font-mono text-[9px] sm:text-[10px] text-[#6B7280] uppercase font-bold block">
                  NEXT MODULE
                </span>
                <span className="font-mono text-xs font-black uppercase text-[#121212] truncate block">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#121212] group-hover:translate-x-1 transition-transform ml-2 sm:ml-3 shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>

    </div>
  );
}
