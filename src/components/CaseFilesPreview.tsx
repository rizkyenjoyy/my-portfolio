"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, FileText, Globe } from "lucide-react";
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
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-20 bg-surface-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 space-y-4"
          >
            <div className="inline-block bg-accent-orange/10 px-3 py-2 rounded border border-accent-orange/30">
              <h2 className="text-sm font-mono text-accent-orange uppercase tracking-widest">
                SOFTWARE PROJECT CASE FILES
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
              Documented investigations into operational problems and their
              digital solutions
            </h3>
          </motion.div>
        )}

        {/* Case Files Grid */}
        <div className="space-y-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/case/${project.slug}`}>
                <div className="bg-surface-primary border border-border-subtle rounded p-6 hover:border-accent-orange/50 transition cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
                    {/* Case Number & Title */}
                    <div className="lg:col-span-1 space-y-3">
                      <div className="font-mono text-sm text-accent-orange font-semibold tracking-wider">
                        {project.caseNumber}
                      </div>
                      <h4 className="text-lg font-bold text-text-primary group-hover:text-accent-orange transition">
                        {project.title}
                      </h4>
                    </div>

                    {/* Classification & Status */}
                    <div className="lg:col-span-1 space-y-2">
                      <div>
                        <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                          Classification
                        </div>
                        <div className="text-sm text-text-secondary">
                          {project.classification}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                          Status
                        </div>
                        <div className="inline-block px-2 py-1 bg-accent-green/10 text-accent-green text-xs font-semibold rounded">
                          {project.status}
                        </div>
                      </div>
                    </div>

                    {/* Year & Duration */}
                    <div className="lg:col-span-1 space-y-2">
                      <div>
                        <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                          Year
                        </div>
                        <div className="text-sm font-semibold text-text-primary">
                          {project.year}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-text-tertiary uppercase mb-1">
                          Duration
                        </div>
                        <div className="text-sm text-text-secondary">
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    {/* Technologies & Action */}
                    <div className="lg:col-span-1 space-y-3">
                      <div>
                        <div className="text-xs font-mono text-text-tertiary uppercase mb-2">
                          Stack
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="inline-block px-2 py-1 bg-surface-secondary text-text-secondary text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="inline-block px-2 py-1 bg-surface-secondary text-text-tertiary text-xs rounded">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-accent-orange text-sm font-semibold"
                      >
                        <FileText size={16} />
                        View Case File
                        <ExternalLink size={14} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Summary & Live Link */}
                  <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                      {project.summary}
                    </p>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-orange/10 border border-accent-orange/30 text-accent-orange text-xs font-semibold rounded hover:bg-accent-orange/20 transition whitespace-nowrap self-start sm:self-center"
                      >
                        <Globe size={13} />
                        {project.liveUrl.replace(/^https?:\/\//, '')}
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/case-files">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-accent-orange text-accent-orange font-semibold rounded hover:bg-accent-orange/10 transition"
              >
                View All Case Files
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
