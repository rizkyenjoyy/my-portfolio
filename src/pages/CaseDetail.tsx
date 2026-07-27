"use client";

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CaseDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Project not found
          </h1>
          <Link
            to="/case-files"
            className="text-accent-orange hover:underline"
          >
            Back to Case Files
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
    <div className="bg-background min-h-screen pt-20">
      {/* Case Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-surface-secondary border-b border-border-subtle py-12"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Breadcrumb */}
            <Link
              to="/case-files"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-orange transition"
            >
              <ArrowLeft size={16} />
              Back to Case Files
            </Link>

            {/* Title Section */}
            <div className="space-y-4">
              <div className="font-mono text-accent-orange font-semibold text-lg tracking-wider">
                {project.caseNumber}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                {project.title}
              </h1>
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border-subtle">
              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-2">
                  Year
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  {project.year}
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-2">
                  Status
                </div>
                <div className="inline-block px-2 py-1 bg-accent-green/10 text-accent-green text-xs font-semibold rounded">
                  {project.status}
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-2">
                  Duration
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  {project.duration}
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-text-tertiary uppercase mb-2">
                  Role
                </div>
                <div className="text-lg font-semibold text-text-primary">
                  {project.role.split(" ")[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Executive Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Executive Summary
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            {project.summary}
          </p>
        </motion.section>

        {/* Problem Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Initial Problem
          </h2>
          <div className="bg-surface-secondary border border-border-subtle rounded p-6">
            <p className="text-text-secondary leading-relaxed">{project.problem}</p>
          </div>
        </motion.section>

        {/* Proposed Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Proposed Solution
          </h2>
          <div className="bg-surface-secondary border border-border-subtle rounded p-6">
            <p className="text-text-secondary leading-relaxed">{project.solution}</p>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-3 p-4 bg-surface-secondary border border-border-subtle rounded hover:border-accent-orange/50 transition"
              >
                <div className="w-2 h-2 rounded-full bg-accent-orange flex-shrink-0 mt-1.5" />
                <span className="text-text-secondary">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-accent-orange/10 border border-accent-orange/30 text-accent-orange rounded font-medium hover:bg-accent-orange/20 transition cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Challenges and Repairs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Challenges and Repairs
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface-secondary border border-border-subtle rounded p-6 space-y-4"
              >
                <div>
                  <div className="text-xs font-mono text-accent-orange uppercase mb-2">
                    Issue
                  </div>
                  <p className="text-text-secondary">{challenge.issue}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-accent-orange uppercase mb-2">
                    Diagnosis
                  </div>
                  <p className="text-text-secondary">{challenge.diagnosis}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-accent-orange uppercase mb-2">
                    Repair
                  </div>
                  <p className="text-text-secondary">{challenge.repair}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-accent-green uppercase mb-2">
                    Result
                  </div>
                  <p className="text-accent-green">{challenge.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Navigation Between Cases */}
      <div className="border-t border-border-subtle bg-surface-secondary mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousProject ? (
              <Link to={`/case/${previousProject.slug}`}>
                <motion.div
                  whileHover={{ x: -5 }}
                  className="p-4 border border-border-subtle rounded hover:border-accent-orange/50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-text-secondary mb-2">
                    <ArrowLeft size={16} />
                    Previous Case
                  </div>
                  <div className="text-lg font-bold text-text-primary">
                    {previousProject.title}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link to={`/case/${nextProject.slug}`}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="p-4 border border-border-subtle rounded hover:border-accent-orange/50 transition cursor-pointer text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-text-secondary mb-2">
                    Next Case
                    <ArrowRight size={16} />
                  </div>
                  <div className="text-lg font-bold text-text-primary">
                    {nextProject.title}
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
