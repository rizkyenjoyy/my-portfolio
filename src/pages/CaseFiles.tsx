"use client";

import { motion } from "framer-motion";
import CaseFilesPreview from "@/components/CaseFilesPreview";

export default function CaseFilesPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-surface-secondary border-b border-border-subtle py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-block bg-accent-orange/10 px-3 py-2 rounded border border-accent-orange/30">
              <h2 className="text-sm font-mono text-accent-orange uppercase tracking-widest">
                SOFTWARE PROJECT CASE FILES
              </h2>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Documented Investigations
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Explore how I identify problems, analyze systems, design solutions,
                and deliver production-ready applications across various domains.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Case Files (All Items, No duplicate header, No View All button) */}
      <CaseFilesPreview showViewAll={false} showHeader={false} />
    </div>
  );
}
