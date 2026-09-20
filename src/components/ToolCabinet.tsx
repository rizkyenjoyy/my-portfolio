"use client";

import { motion } from "framer-motion";
import { arsenalCategories } from "@/data/projects";
import { Cpu, Wrench, Shield, Zap, Terminal } from "lucide-react";

export default function ToolCabinet() {
  return (
    <section id="arsenal" className="py-20 bg-[#FAF7EE] relative border-t-3 border-[#121212] bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#22C55E] text-black border-2 border-[#121212] px-3.5 py-1 font-mono text-xs font-bold uppercase shadow-brutal-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>INVENTORY MATRIX // WEAPONRY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#121212] tracking-tight">
            DEVELOPMENT ARSENAL &amp; STACK
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#4B5563]">
            Languages, frameworks, and tools I use for Roblox scripting and web development.
          </p>
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {arsenalCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-3 border-[#121212] shadow-brutal-md flex flex-col justify-between"
            >
              {/* Category Header */}
              <div>
                <div
                  className={`${category.color} ${category.textColor} border-b-3 border-[#121212] px-4 py-3 flex items-center justify-between`}
                >
                  <h3 className="font-mono font-black text-xs sm:text-sm uppercase tracking-wide">
                    {category.name}
                  </h3>
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-black text-white">
                    SLOT {catIndex + 1}
                  </span>
                </div>

                {/* Items List */}
                <div className="p-4 space-y-3">
                  {category.tools.map((tool, idx) => (
                    <div
                      key={tool.name}
                      className="bg-[#FAF7EE] border-2 border-[#121212] p-2.5 shadow-brutal-xs hover:bg-[#FACC15]/20 transition-colors"
                    >
                      <div className="mb-1">
                        <span className="font-mono font-bold text-xs text-[#121212]">
                          {tool.name}
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-[#4B5563] leading-tight">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="border-t-2 border-[#121212] bg-[#F3ECE1] px-4 py-2 font-mono text-[10px] text-[#6B7280] flex justify-between uppercase">
                <span>CATEGORY</span>
                <span className="font-bold text-black">{category.tools.length} SKILLS</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arsenal Bottom Stat Banner */}
        <div className="mt-12 bg-[#121212] text-[#FAF7EE] border-3 border-[#121212] shadow-brutal p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#FACC15] text-[#121212] p-3 border-2 border-white">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-mono text-[#FACC15] uppercase">
                CODE QUALITY &amp; STRUCTURE
              </h4>
              <p className="font-mono text-xs sm:text-sm text-[#9CA3AF]">
                Writing clean, modular Luau scripts and maintainable web systems.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-brutal bg-[#FACC15] text-[#121212] border-2 border-white px-5 py-2.5 font-mono text-xs font-black shadow-brutal-sm uppercase shrink-0"
          >
            REQUEST TECH SPECIFICATION →
          </a>
        </div>

      </div>
    </section>
  );
}
