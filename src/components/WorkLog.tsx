"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/projects";
import { Briefcase, Calendar, MapPin, CheckCircle2, Trophy, Milestone } from "lucide-react";

export default function WorkLog() {
  return (
    <section id="journey" className="py-12 sm:py-20 bg-[#FAF7EE] relative border-t-2 sm:border-t-3 border-[#121212] bg-arcade-grid-dense">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FACC15] text-[#121212] border-2 border-[#121212] px-3 sm:px-3.5 py-1 font-mono text-[10px] sm:text-xs font-bold uppercase shadow-brutal-xs">
            <Milestone className="w-3.5 h-3.5" />
            <span>EXP LOG // CAREER QUESTS</span>
          </div>

          <h2 className="text-fluid-h2 font-extrabold uppercase text-[#121212] tracking-tight">
            WORK LOG &amp; MILESTONES
          </h2>

          <p className="font-mono text-xs sm:text-sm md:text-base text-[#4B5563] px-2">
            Verified experience across game developer mentorship, web engineering internships, and academic programs.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {timeline.map((entry, index) => (
            <motion.div
              key={entry.company + entry.period}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 sm:border-3 border-[#121212] shadow-brutal-sm sm:shadow-brutal-md p-4 xs:p-6 sm:p-8 relative"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b-2 border-[#121212] pb-4 mb-4 sm:mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-mono text-[9px] sm:text-[10px] font-black uppercase px-2 sm:px-2.5 py-0.5 border border-black ${
                        entry.type === "Mentorship"
                          ? "bg-[#FACC15] text-[#121212]"
                          : entry.type === "Internship"
                          ? "bg-[#06B6D4] text-[#121212]"
                          : "bg-[#22C55E] text-[#121212]"
                      }`}
                    >
                      {entry.type}
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-[#6B7280]">
                      CHECKPOINT 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-black uppercase text-[#121212] tracking-tight">
                    {entry.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs text-[#4B5563] mt-1">
                    <span className="font-bold text-[#121212]">{entry.company}</span>
                    {entry.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#EA580C]" />
                        <span>{entry.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Period Badge */}
                <div className="bg-[#121212] text-[#FACC15] font-mono text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 border-black shadow-brutal-xs flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{entry.period}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="font-mono text-xs sm:text-sm text-[#121212] mb-4 sm:mb-5 leading-relaxed font-medium">
                {entry.summary}
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-2 mb-5 sm:mb-6">
                {entry.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 sm:gap-2.5">
                    <span className="w-4 h-4 bg-[#FACC15] text-[#121212] border border-black flex items-center justify-center font-mono text-[9px] sm:text-[10px] font-black shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-[#4B5563] leading-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-[#E5E7EB]">
                {entry.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#FAF7EE] border border-[#121212] font-mono text-[10px] sm:text-[11px] font-bold px-2 py-0.5 text-[#121212]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Corner Stamp */}
              <div className="absolute top-2 right-2 opacity-5 pointer-events-none font-mono text-4xl sm:text-6xl font-black text-black select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
