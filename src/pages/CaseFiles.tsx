"use client";

import { motion } from "framer-motion";
import CaseFilesPreview from "@/components/CaseFilesPreview";
import { ArrowLeft, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseFilesPage() {
  return (
    <div className="bg-[#FAF7EE] pb-12 min-h-screen">
      {/* Top Banner */}
      <section className="border-b-2 sm:border-b-3 border-[#121212] bg-[#F4EFE6] py-8 sm:py-12 bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6">
            <Link
              to="/"
              className="btn-brutal min-h-[44px] inline-flex items-center gap-2 bg-[#FFFFFF] text-[#121212] border-2 border-[#121212] px-3.5 py-2 font-mono text-xs font-bold uppercase shadow-brutal-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </Link>

            <span className="font-mono text-[10px] sm:text-xs font-black uppercase bg-[#121212] text-[#FACC15] px-3 py-1.5 border border-black shadow-brutal-xs">
              TOTAL MODULES: 12 AVAILABLE
            </span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#EA580C] text-white border-2 border-[#121212] px-3 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase shadow-brutal-xs">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>MASTER REPOSITORY ARCHIVE</span>
            </div>

            <h1 className="text-fluid-h2 font-black uppercase text-[#121212] tracking-tight">
              ALL EXPERIENCES &amp; APPLICATIONS
            </h1>

            <p className="font-mono text-xs sm:text-sm md:text-base text-[#4B5563] max-w-2xl leading-relaxed">
              Archive of Roblox games, web apps, and technical mentorship projects.
            </p>
          </div>
        </div>
      </section>

      {/* Case Files (All Items) */}
      <CaseFilesPreview showViewAll={false} showHeader={false} />
    </div>
  );
}
