"use client";

import { motion } from "framer-motion";
import { arsenalCategories } from "@/data/projects";
import { Cpu, Wrench, Shield, Zap, Terminal } from "lucide-react";

export default function ToolCabinet() {
  return (
    <section id="arsenal" className="py-12 sm:py-20 bg-[#FAF7EE] relative border-t-2 sm:border-t-3 border-[#121212] bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#22C55E] text-black border-2 border-[#121212] px-3 sm:px-3.5 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase shadow-brutal-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>INVENTORY MATRIX // WEAPONRY</span>
          </div>

          <h2 className="text-fluid-h2 font-extrabold uppercase text-[#121212] tracking-tight">
            DEVELOPMENT ARSENAL &amp; STACK
          </h2>

          <p className="font-mono text-xs sm:text-sm md:text-base text-[#4B5563] px-2">
            Languages, frameworks, and tools I use for Roblox scripting and web development.
          </p>
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {arsenalCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-xs sm:shadow-brutal-md flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div
                  className={`${category.color} ${category.textColor} border-b-2 sm:border-b-3 border-[#121212] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between`}
                >
                  <h3 className="font-mono font-black text-xs sm:text-sm uppercase tracking-wide">
                    {category.name}
                  </h3>
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 bg-black text-white">
                    SLOT {catIndex + 1}
                  </span>
                </div>

                {/* Items List */}
                <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="bg-[#FAF7EE] border-2 border-[#121212] p-2.5 shadow-brutal-xs hover:bg-[#FACC15]/20 transition-colors"
                    >
                      <div className="mb-0.5">
                        <span className="font-mono font-bold text-xs text-[#121212]">
                          {tool.name}
                        </span>
                      </div>
                      <p className="font-mono text-[10px] sm:text-[11px] text-[#4B5563] leading-tight">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="border-t-2 border-[#121212] bg-[#F3ECE1] px-3.5 sm:px-4 py-2 font-mono text-[10px] text-[#6B7280] flex justify-between uppercase">
                <span>CATEGORY</span>
                <span className="font-bold text-black">{category.tools.length} SKILLS</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arsenal Bottom Stat Banner */}
        <div className="mt-8 sm:mt-12 bg-[#121212] text-[#FAF7EE] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal p-4 sm:p-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="bg-[#FACC15] text-[#121212] p-2.5 sm:p-3 border-2 border-white shrink-0 shadow-brutal-xs">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-mono text-[#FACC15] uppercase">
                CODE QUALITY &amp; STRUCTURE
              </h4>
              <p className="font-mono text-[11px] sm:text-xs md:text-sm text-[#9CA3AF]">
                Writing clean, modular Luau scripts and maintainable web systems.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-brutal min-h-[44px] bg-[#FACC15] text-[#121212] border-2 border-white px-5 py-2.5 font-mono text-xs font-black shadow-brutal-xs sm:shadow-brutal-sm uppercase shrink-0 flex items-center justify-center"
          >
            <span>REQUEST TECH SPECIFICATION →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
