"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/projects";

export default function ToolCabinet() {
  const categories = [
    { id: "backend", label: "Backend Tools", color: "accent-orange" },
    { id: "frontend", label: "Frontend Tools", color: "accent-cyan" },
    { id: "database", label: "Data Storage", color: "accent-green" },
    { id: "devtools", label: "Development Tools", color: "accent-orange" },
    { id: "other", label: "Deployment & Workflow", color: "text-secondary" },
    { id: "gamedev", label: "Game Development", color: "accent-cyan" },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <div className="inline-block bg-accent-cyan/10 px-3 py-2 rounded border border-accent-cyan/30">
            <h2 className="text-sm font-mono text-accent-cyan uppercase tracking-widest">
              TOOL CABINET
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            Technologies used to inspect, construct, test, and deploy digital
            systems
          </h3>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-border-subtle">
                <div
                  className={`w-3 h-3 rounded-full ${
                    category.color.includes("accent")
                      ? category.color === "accent-orange"
                        ? "bg-accent-orange"
                        : "bg-accent-cyan"
                      : "bg-accent-green"
                  }`}
                />
                <h4 className="font-semibold text-text-primary uppercase text-sm tracking-wider">
                  {category.label}
                </h4>
                <div className="flex-1 h-px bg-border-subtle" />
              </div>

              {/* Tools List */}
              <div className="space-y-2">
                {skills[category.id as keyof typeof skills].map(
                  (tool, toolIndex) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: (categoryIndex * 0.1 + toolIndex * 0.05),
                      }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 p-3 rounded bg-surface-secondary/50 hover:bg-surface-secondary border border-border-subtle hover:border-accent-orange/50 transition cursor-pointer"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent-orange/50 group-hover:bg-accent-orange transition" />
                        <span className="text-text-secondary group-hover:text-text-primary transition text-sm">
                          {tool}
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-border-subtle"
        >
          <div className="bg-surface-secondary/30 p-6 rounded border border-border-subtle">
            <div className="text-sm font-mono text-text-tertiary uppercase mb-4">
              ✓ Certification & Recognition
            </div>
            <div className="space-y-2">
              <p className="text-text-secondary">
                • Oracle Academy - Database & Programming Fundamentals
              </p>
              <p className="text-text-secondary">
                • Microsoft Excel - Advanced Spreadsheet Proficiency
              </p>
              <p className="text-text-secondary">
                • TOEIC - Test of English for International Communication
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
