"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/projects";
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";

export default function WorkLog() {
  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center md:text-left"
        >
          <div className="inline-block bg-accent-green/10 px-3 py-2 rounded border border-accent-green/30">
            <h2 className="text-sm font-mono text-accent-green uppercase tracking-widest">
              PROFESSIONAL WORK & INTERNSHIP LOG
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            A chronological record of internships, web development engineering, and mentorships
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-subtle transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((entry, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={`${entry.company}-${entry.period}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Dot Wrapper */}
                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(245, 158, 11, 0.5)",
                          "0 0 0 5px rgba(245, 158, 11, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="w-5 h-5 rounded-full bg-surface-primary border-2 border-accent-orange flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent-orange" />
                    </motion.div>
                  </div>

                  {/* Horizontal Connector Line (Desktop) */}
                  <div
                    className={`hidden md:block absolute top-10 transform -translate-y-1/2 h-0.5 bg-border-subtle ${
                      isEven ? "right-1/2 w-10" : "left-1/2 w-10"
                    }`}
                  />

                  {/* Content Card Wrapper */}
                  <div
                    className={`w-full pl-12 md:pl-0 ${
                      isEven
                        ? "md:w-[calc(50%-2.5rem)] md:mr-auto"
                        : "md:w-[calc(50%-2.5rem)] md:ml-auto"
                    }`}
                  >
                    <div className="bg-surface-secondary border border-border-subtle rounded-lg p-6 hover:border-accent-orange/50 transition shadow-xl space-y-4">
                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-3">
                        <div className="flex items-center gap-2">
                          <Building2 size={18} className="text-accent-orange" />
                          <span className="font-bold text-text-primary text-base md:text-lg">
                            {entry.company}
                          </span>
                        </div>
                        <span className="inline-block px-2.5 py-1 bg-accent-orange/10 text-accent-orange text-xs font-mono font-semibold rounded border border-accent-orange/20">
                          {entry.type}
                        </span>
                      </div>

                      {/* Role & Period */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-accent-cyan font-semibold text-base">
                          <Briefcase size={16} />
                          <span>{entry.role}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-tertiary">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{entry.period}</span>
                          </div>
                          {entry.location && (
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{entry.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 text-text-secondary text-sm leading-relaxed pt-1">
                        {entry.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-accent-green shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="pt-2 flex flex-wrap gap-1.5 border-t border-border-subtle/50">
                        {entry.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-surface-primary border border-border-subtle text-text-tertiary text-xs rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
