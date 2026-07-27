"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, MessageSquare } from "lucide-react";


export default function Hero() {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden pt-32 pb-20">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30, 144, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 144, 255, 0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Scanning Line Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent"
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-surface-secondary/50 px-3 py-2 rounded border border-border-subtle">
              <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                DIGITAL WORKSHOP — ONLINE
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary">
                Rizky Fauzi
                <br />
                Rimansyah
              </h1>
              <h2 className="text-lg md:text-xl text-text-secondary font-medium">
                Web Developer & Informatics Engineering Student
              </h2>
            </div>

            {/* Description */}
            <p className="text-text-secondary text-lg leading-relaxed max-w-md">
              I design and build web-based systems that transform manual
              processes into structured, efficient, and user-friendly digital
              workflows. Based in Bandung with hands-on experience in Laravel,
              React, and database systems.
            </p>

            {/* Status Panel */}
            <div className="grid grid-cols-2 gap-3 bg-surface-secondary/30 p-4 rounded border border-border-subtle">
              <div className="space-y-1">
                <div className="text-xs font-mono text-text-tertiary uppercase">
                  Workshop Status
                </div>
                <div className="text-sm font-semibold text-accent-green">
                  Operational
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-text-tertiary uppercase">
                  Availability
                </div>
                <div className="text-sm font-semibold text-accent-orange">
                  Open for Opportunities
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-text-tertiary uppercase">
                  Primary Focus
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Web Applications
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-text-tertiary uppercase">
                  Location
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  Bandung, Indonesia
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("case-files")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 bg-accent-orange text-surface-primary font-semibold rounded hover:bg-accent-orange/90 transition"
              >
                <ExternalLink size={18} />
                Inspect Case Files
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 border border-accent-orange text-accent-orange font-semibold rounded hover:bg-accent-orange/10 transition"
              >
                <MessageSquare size={18} />
                Start a Project
              </motion.button>
              <a
                href="/needs/CVRizky.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Rizky-Fauzi-Rimansyah.pdf"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border border-border-subtle text-text-secondary font-semibold rounded hover:border-text-secondary transition"
                >
                  <Download size={18} />
                  Download CV
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 hidden lg:flex items-center justify-center"
          >
            {/* Technical Blueprint Visual */}
            <div className="relative w-full h-full">
              {/* Outer Frame */}
              <div className="absolute inset-0 border-2 border-accent-orange/30 rounded" />
              <div className="absolute inset-4 border border-accent-orange/20 rounded" />

              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Central Circle with Rotating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent-orange/40 rounded-full"
              />

              {/* Inner Circle */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-accent-cyan/40 rounded-full"
              />

              {/* Nodes */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent-orange rounded-full"
                  style={{
                    top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                    left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Text Labels */}
              <div className="absolute bottom-8 left-8 text-xs font-mono text-text-tertiary space-y-1">
                <div>SYSTEM_V:1.0</div>
                <div>STATUS: OPERATIONAL</div>
                <div>RFR_WORKSHOP_2025</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
